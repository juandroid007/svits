const defaultTheme = require('tailwindcss/defaultTheme')
const tailwindUI = require('@tailwindcss/ui')

const sizing = {
  '1/10': '10%',
  '2/10': '20%',
  '3/10': '30%',
  '4/10': '40%',
  '5/10': '50%',
  '6/10': '60%',
  '7/10': '70%',
  '8/10': '80%',
  '9/10': '90%',
}

module.exports = {
  purge: {
    content: [
      './index.html',
      './src/**/*.html',
      './src/**/*.js',
      './src/**/*.jsx',
      './src/**/*.svelte',
      './src/**/*.ts',
      './src/**/*.tsx',
      './src/**/*.vue',
    ],
  },
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  experimental: {
    darkModeVariant: true,
    applyComplexClasses: true,
    uniformColorPalette: true,
    extendedSpacingScale: true,
    defaultLineHeights: true,
    extendedFontSizeScale: true,
  },
  theme: {
    extend: {
      fontFamily: {
        sans: [
          'Inconsolata',
          ...defaultTheme.fontFamily.mono,
        ],
        mono: [
          'Inconsolata',
          ...defaultTheme.fontFamily.mono,
        ],
      },
      scale: {
        'invert': '-1',
      },
      spacing: {
        ...sizing,
      },
      borderRadius: {
        'xl': '1rem',
        'full': '10010px',
      },

      inset: {
        '-15': '-3.75rem',
        '2': '0.5rem',
        '1/2': '50%',
        '1/4': '20%',
        '2/5': '40%',
        ...sizing,
        'full': '100%',
      },
      zIndex: {
        '-10': '-10',
      },
    },
  },
  variants: {
    cursor: ['responsive', 'disabled'],
    backgroundColor: ['dark', 'hover', 'disabled'],
    borderColor: ['dark', 'active', 'focus', 'disabled'],
    textColor: ['dark', 'hover', 'active', 'disabled'],
    opacity: ['dark', 'hover', 'active', 'focus', 'disabled'],
  },
  dark: 'class',
  plugins: [
    tailwindUI({}),
    function({ addVariant, e }) {
      const variants = [
        {
          name: 'focus-not-active',
          rule: 'focus:not(:active)',
        },
        {
          name: 'not-first',
          css: 'not(:first-child)',
        },
        {
          name: 'not-last',
          css: 'not(:last-child)',
        },
      ]

      variants.forEach((variant) => {
        addVariant(variant.name, ({ modifySelectors, separator }) => {
          modifySelectors(({ className }) => {
            return `${variant.parent ? `${variant.parent} ` : ''}.${e(`${variant.name}${separator}${className}`)}${variant.rule ? `:${variant.rule}` : ''}`
          })
        })
      })
    },
  ]
}
