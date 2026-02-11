import type { Config } from 'tailwindcss'
import typography from '@tailwindcss/typography'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './content/**/*.{md,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: '#0a0a0a',
        surface: '#171717',
        border: '#262626',
        'text-primary': '#fafafa',
        'text-secondary': '#a3a3a3',
        accent: {
          DEFAULT: '#f59e0b',
          hover: '#fbbf24',
          muted: '#d97706',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            color: '#fafafa',
            maxWidth: 'none',
            h1: {
              color: '#fafafa',
              fontWeight: '700',
            },
            h2: {
              color: '#fafafa',
              fontWeight: '600',
            },
            h3: {
              color: '#fafafa',
              fontWeight: '600',
            },
            h4: {
              color: '#fafafa',
              fontWeight: '600',
            },
            p: {
              color: '#a3a3a3',
            },
            li: {
              color: '#a3a3a3',
            },
            strong: {
              color: '#fafafa',
            },
            a: {
              color: '#f59e0b',
              '&:hover': {
                color: '#fbbf24',
              },
            },
            code: {
              color: '#f59e0b',
            },
          },
        },
        invert: {
          css: {
            '--tw-prose-body': '#a3a3a3',
            '--tw-prose-headings': '#fafafa',
            '--tw-prose-links': '#f59e0b',
            '--tw-prose-bold': '#fafafa',
            '--tw-prose-counters': '#a3a3a3',
            '--tw-prose-bullets': '#a3a3a3',
            '--tw-prose-hr': '#262626',
            '--tw-prose-quotes': '#a3a3a3',
            '--tw-prose-quote-borders': '#f59e0b',
            '--tw-prose-captions': '#a3a3a3',
            '--tw-prose-code': '#f59e0b',
            '--tw-prose-pre-code': '#fafafa',
            '--tw-prose-pre-bg': '#171717',
            '--tw-prose-th-borders': '#262626',
            '--tw-prose-td-borders': '#262626',
          },
        },
      },
    },
  },
  plugins: [typography],
}

export default config
