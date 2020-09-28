module.exports = {
  important: true,
  theme: {
    fontFamily: {
      sans: ['Work Sans', 'sans-serif']
    },
    colors: {
      bdGray: '#141C26',
      gray: {
        100: '#F7F7F7',
        200: '#E1E1E1',
        300: '#C7CFD9',
        400: '#929CA6',
        500: '#6E7371',
        600: '#343A40',
        700: '#08090D',
        800: '#1A1E26',
        split: '#929CA660',
        modal: '#0f0f0f90'
      },
      green: {
        100: '#CAE3DB',
        200: '#224229',
        300: '#074f3550',
        400: '#061C14',
        btn: '#306a29'
      }
    },
    screens: {
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px' }
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
      sb: '4px 0px 4px 0 rgba(0, 0, 0, 0.4)',
      btn: '0px 4px 4px 2px rgba(10, 10, 10, 0.3)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      none: 'none'
    }
  }
}
