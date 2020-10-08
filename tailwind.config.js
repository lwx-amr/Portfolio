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
      },
      transparent: 'transparent'
    },
    screens: {
      sm: { min: '576px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px' },
      maxXl: { max: '1279px' },
      maxLg: { max: '1023px' },
      maxMd: { max: '767px' },
      maxSm: { max: '575px' }
    },
    boxShadow: {
      xs: '0 0 0 1px rgba(0, 0, 0, 0.05)',
      sm: '0 1px 2px 0 rgba(0, 0, 0, 0.25)',
      sb: 'var(--shadow-sidebar)',
      btn: 'var(--shadow-btn)',
      img: 'var(--shadow-image)',
      default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
      none: 'none'
    },
    extend: {
      backgroundColor: {
        primary: 'var(--color-bg-primary)',
        secondary: 'var(--color-bg-secondary)',
        socialHover: 'var(--color-bg-socialHover)',
        tags: {
          html: '#E44D26',
          css: '#2757EA',
          js: '#D4B830',
          react: '#51C2E0',
          node: '#88BC5B',
          mongo: '#4FAA41',
          npm: '#CB3837',
          docker: '#2496ED',
          sass: '#E98DB8',
          jqeury: '#193556',
          git: '#1B1F23',
          ajax: '#0784CC',
          rest: '#FFFFFF',
          json: '#73C366'
        }
      },
      textColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)',
        lightg: 'var(--color-text-lightg)',
        restColor: '#009CD5',
        socialHover: 'var(--color-text-socialHover)'
      },
      borderColor: {
        primary: 'var(--color-text-primary)',
        secondary: 'var(--color-text-secondary)'
      }
    }
  }
}
