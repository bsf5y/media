/**
 * Build script: Processes markdown content and generates content.json
 * This runs before Vite build to prepare content for the HTML template.
 */

import { readFileSync, writeFileSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import MarkdownIt from 'markdown-it'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

const md = new MarkdownIt({
  html: true,
  typographer: true
})

// Read markdown content
const markdownPath = join(rootDir, 'src/content/copy.md')
const markdown = readFileSync(markdownPath, 'utf-8')

// Parse markdown into structured content
function parseContent(markdown) {
  const content = {
    hero: {},
    positioning: {},
    methodology: {
      phases: []
    },
    services: [],
    cta: {},
    footer: {}
  }

  const lines = markdown.split('\n')
  let currentSection = null
  let currentSubsection = null
  let buffer = []

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]

    // H2 = new section
    if (line.startsWith('## ')) {
      flushBuffer()
      currentSection = line.slice(3).trim().toLowerCase()
      currentSubsection = null
      buffer = []
    }
    // H3 = subsection
    else if (line.startsWith('### ')) {
      flushBuffer()
      currentSubsection = line.slice(4).trim()
      buffer = []
    }
    // Horizontal rule = section break
    else if (line.trim() === '---') {
      flushBuffer()
      currentSubsection = null
      buffer = []
    }
    // Content lines
    else {
      buffer.push(line)
    }
  }

  // Flush any remaining content
  flushBuffer()

  function flushBuffer() {
    const text = buffer.join('\n').trim()
    if (!text || !currentSection) return

    const html = md.render(text)
    const plainText = text.replace(/\*\*/g, '').replace(/\*/g, '').replace(/\n/g, ' ').trim()

    switch (currentSection) {
      case 'hero':
        if (currentSubsection) {
          const key = currentSubsection.toLowerCase()
          // For subtext, render as HTML (multiple paragraphs)
          if (key === 'subtext') {
            content.hero[key] = html
          } else {
            content.hero[key] = plainText
          }
        }
        break

      case 'positioning':
        content.positioning._content = html
        break

      case 'methodology':
        if (currentSubsection) {
          const subsectionLower = currentSubsection.toLowerCase()
          if (subsectionLower === 'headline' || subsectionLower === 'intro') {
            content.methodology[subsectionLower] = plainText
          } else if (currentSubsection.startsWith('Phase')) {
            // Parse phase: "Phase N: Name"
            const match = currentSubsection.match(/Phase (\d+): (.+)/)
            if (match) {
              const phaseNum = match[1]
              const phaseName = match[2]
              // Parse content: first bold line is question, rest is description
              const contentLines = text.split('\n')
              let question = ''
              let description = ''

              for (const contentLine of contentLines) {
                if (contentLine.startsWith('**') && contentLine.endsWith('**')) {
                  question = contentLine.slice(2, -2)
                } else if (contentLine.trim()) {
                  description += (description ? ' ' : '') + contentLine.trim()
                }
              }

              content.methodology.phases.push({
                number: phaseNum.padStart(2, '0'),
                name: phaseName,
                question,
                description
              })
            }
          }
        }
        break

      case 'services':
        if (currentSubsection && currentSubsection.startsWith('Service')) {
          // Parse service content
          const contentLines = text.split('\n')
          let title = ''
          let type = ''
          let description = ''

          for (const contentLine of contentLines) {
            if (contentLine.startsWith('#### ')) {
              title = contentLine.slice(5).trim()
            } else if (contentLine.trim() && !type) {
              type = contentLine.trim()
            } else if (contentLine.trim()) {
              description += (description ? ' ' : '') + contentLine.trim()
            }
          }

          content.services.push({ type, title, description })
        }
        break

      case 'cta':
        if (currentSubsection) {
          content.cta[currentSubsection.toLowerCase()] = plainText
        }
        break

      case 'footer':
        if (currentSubsection) {
          content.footer[currentSubsection.toLowerCase()] = plainText
        }
        break
    }
  }

  return content
}

const content = parseContent(markdown)

// Write to JSON
const outputPath = join(rootDir, 'src/content/content.json')
writeFileSync(outputPath, JSON.stringify(content, null, 2))

console.log('Content built successfully.')
