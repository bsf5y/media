import type { ShikiSetupReturn } from '@slidev/types'
import { defineShikiSetup } from '@slidev/types'

/**
 * Match Shiki themes to the bsf5y palette:
 * - dark: vitesse-dark — warm orange/copper highlights, low-contrast bg
 * - light: github-light — clean ink on near-white, complements bsf5y light surfaces
 */
export default defineShikiSetup((): ShikiSetupReturn => {
  return {
    themes: {
      dark: 'vitesse-dark',
      light: 'github-light',
    },
  }
})
