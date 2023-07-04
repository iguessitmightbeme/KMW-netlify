/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./pages/**/*.tsx', './pages/*.tsx', './components/**/*.tsx', './components/*.tsx'], 
  theme: {
      extend: {
          backgroundColor: {
              primary: 'rgb(var(--color-bg-primary) / <alpha-value>)', 
              secondary: 'rgb(var(--color-bg-secondary) / <alpha-value>)', 
              secondarylight: 'rgb(var(--color-bg-secondarylight) / <alpha-value>)', 
              tertiary: 'rgb(var(--color-bg-tertiary) / <alpha-value>)',
              accent: 'rgb(var(--color-bg-accent) / <alpha-value>)', 
          }, 
          textColor: {
              primary: 'rgb(var(--color-text-primary) / <alpha-value>)', 
              secondary: 'rgb(var(--color-text-secondary) / <alpha-value>)', 
              accent: 'rgb(var(--color-text-accent) / <alpha-value>)', 
              contrast: 'rgb(var(--color-text-contrast) / <alpha-value>)', 
              primaryblue: 'rgb(var(--color-text-primaryblue) / <alpha-value>)', 
              contrastsecondary: 'rgb(var(--color-text-contrastsecondary) / <alpha-value>)',
              accentcontrast: 'rgb(var(--color-text-accentcontrast) / <alpha-value>)', 
              accentcontrasthover: 'rgb(var(--color-text-accentcontrasthover) / <alpha-value>)'
          }, 
          borderColor: {
              accent: 'rgb(var(--color-border-accent) / <alpha-value>)'
          }, 
          ringColor: {
              accent: 'rgb(var(--color-ring-accent) / <alpha-value>)'
          },
          keyframes: {
              wiggle: {
                  '0%, 100%': { transform: 'rotate(-3deg)' }, 
                  '50%': { transform: 'rotate(3deg)' }
              }
          }, 
          animation: {
              wiggle: 'wiggle 1s ease-in-out infinite'
          }, 
      }
  }, 
  plugins: [
      require('@tailwindcss/line-clamp'), 
      require('@tailwindcss/typography'), 
      require('@tailwindcss/aspect-ratio'), 
  ]
}