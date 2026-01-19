/**
 * Build script: Processes markdown content and generates content.json
 * This runs before Vite build to prepare content for the HTML template.
 */

import { readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import { fileURLToPath } from 'url'
import { dirname, join } from 'path'
import MarkdownIt from 'markdown-it'

const __dirname = dirname(fileURLToPath(import.meta.url))
const rootDir = join(__dirname, '..')

// Content schema for validation
const REQUIRED_FIELDS = {
  hero: ['tagline', 'lead', 'reframe', 'subtext'],
  positioning: ['_content'],
  methodology: ['headline', 'intro', 'phases'],
  services: [], // Array, validated separately
  cta: ['headline', 'subtext', 'button'],
  footer: ['location', 'tagline', 'copyright']
}

const md = new MarkdownIt({
  html: true,
  typographer: true
})

/**
 * Validate the parsed content against the schema
 * @param {object} content - Parsed content object
 * @returns {string[]} - Array of validation error messages
 */
function validateContent(content) {
  const errors = []

  for (const [section, fields] of Object.entries(REQUIRED_FIELDS)) {
    if (!content[section]) {
      errors.push(`Missing required section: ${section}`)
      continue
    }

    for (const field of fields) {
      if (field === 'phases') {
        if (!Array.isArray(content[section].phases) || content[section].phases.length === 0) {
          errors.push(`Section "${section}" must have at least one phase`)
        }
      } else if (!content[section][field]) {
        errors.push(`Missing required field: ${section}.${field}`)
      }
    }
  }

  // Validate services array
  if (!Array.isArray(content.services) || content.services.length === 0) {
    errors.push('Services section must have at least one service')
  } else {
    content.services.forEach((service, index) => {
      if (!service.title) errors.push(`Service ${index + 1} missing title`)
      if (!service.type) errors.push(`Service ${index + 1} missing type`)
      if (!service.description) errors.push(`Service ${index + 1} missing description`)
    })
  }

  // Validate methodology phases
  if (content.methodology?.phases) {
    content.methodology.phases.forEach((phase, index) => {
      if (!phase.number) errors.push(`Phase ${index + 1} missing number`)
      if (!phase.name) errors.push(`Phase ${index + 1} missing name`)
      if (!phase.question) errors.push(`Phase ${index + 1} missing question`)
      if (!phase.description) errors.push(`Phase ${index + 1} missing description`)
    })
  }

  return errors
}

/**
 * Parse markdown into structured content
 * @param {string} markdown - Raw markdown content
 * @returns {object} - Structured content object
 */
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
            } else {
              console.warn(`Warning: Could not parse phase header: "${currentSubsection}"`)
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

      default:
        console.warn(`Warning: Unknown section "${currentSection}" ignored`)
    }
  }

  return content
}

// Main execution
function main() {
  const markdownPath = join(rootDir, 'src/content/copy.md')
  const outputDir = join(rootDir, 'src/content')
  const outputPath = join(outputDir, 'content.json')

  // Check if markdown file exists
  if (!existsSync(markdownPath)) {
    console.error(`Error: Markdown file not found at ${markdownPath}`)
    console.error('Please ensure src/content/copy.md exists.')
    process.exit(1)
  }

  // Ensure output directory exists
  if (!existsSync(outputDir)) {
    mkdirSync(outputDir, { recursive: true })
    console.log(`Created directory: ${outputDir}`)
  }

  try {
    // Read markdown content
    const markdown = readFileSync(markdownPath, 'utf-8')

    if (!markdown.trim()) {
      console.error('Error: Markdown file is empty')
      process.exit(1)
    }

    // Parse content
    const content = parseContent(markdown)

    // Validate content
    const validationErrors = validateContent(content)
    if (validationErrors.length > 0) {
      console.error('Content validation failed:')
      validationErrors.forEach(error => console.error(`  - ${error}`))
      process.exit(1)
    }

    // Write to JSON
    writeFileSync(outputPath, JSON.stringify(content, null, 2))
    console.log('Content built successfully.')
    console.log(`  - Parsed ${content.methodology.phases.length} methodology phases`)
    console.log(`  - Parsed ${content.services.length} services`)

  } catch (error) {
    if (error.code === 'ENOENT') {
      console.error(`Error: File not found - ${error.path}`)
    } else if (error.code === 'EACCES') {
      console.error(`Error: Permission denied - ${error.path}`)
    } else if (error instanceof SyntaxError) {
      console.error(`Error: Invalid markdown syntax - ${error.message}`)
    } else {
      console.error(`Error: ${error.message}`)
    }
    process.exit(1)
  }
}

main()
