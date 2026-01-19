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

// Parse markdown into sections
function parseContent(markdown) {
  const sections = {}
  let currentSection = null
  let currentSubsection = null
  let buffer = []

  const lines = markdown.split('\n')

  for (const line of lines) {
    // H2 = new section
    if (line.startsWith('## ')) {
      if (currentSection && buffer.length) {
        saveBuffer(sections, currentSection, currentSubsection, buffer)
      }
      currentSection = line.slice(3).trim().toLowerCase().replace(/\s+/g, '_')
      currentSubsection = null
      buffer = []
      sections[currentSection] = {}
    }
    // H3 = subsection
    else if (line.startsWith('### ')) {
      if (currentSection && buffer.length) {
        saveBuffer(sections, currentSection, currentSubsection, buffer)
      }
      currentSubsection = line.slice(4).trim().toLowerCase().replace(/\s+/g, '_')
      buffer = []
    }
    // H4 = nested content (services)
    else if (line.startsWith('#### ')) {
      buffer.push(line)
    }
    // Horizontal rule = section break (ignore)
    else if (line.trim() === '---') {
      if (currentSection && buffer.length) {
        saveBuffer(sections, currentSection, currentSubsection, buffer)
      }
      currentSubsection = null
      buffer = []
    }
    // Content
    else {
      buffer.push(line)
    }
  }

  // Save final buffer
  if (currentSection && buffer.length) {
    saveBuffer(sections, currentSection, currentSubsection, buffer)
  }

  return sections
}

function saveBuffer(sections, section, subsection, buffer) {
  const content = buffer.join('\n').trim()
  if (!content) return

  if (subsection) {
    sections[section][subsection] = md.render(content)
  } else {
    sections[section]._content = md.render(content)
  }
}

const content = parseContent(markdown)

// Write to JSON for optional JS consumption
const outputPath = join(rootDir, 'src/content/content.json')
writeFileSync(outputPath, JSON.stringify(content, null, 2))

console.log('Content built successfully.')
