module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{html,js,ts,jsx,tsx}'],
  theme: {
    screens: {
      sm: '360px', // pantalla 360
      md: '744px', // { min: '744px', max: '1007px' }, // pantalla 768
      lg: '1008px', // { min: '1008px', max: '1239px' }, // pantalla 1024
      xl: '1240px', // { min: '1240px', max: '1487px' }, // pantalla 1360
      '2xl': '1488px', // { min: '1488px', max: '1735px' }, // pantalla 1600
      '3xl': '1736px', // { min: '1736px', max: '1983px' }, // pantalla 1920
      // '4xl': '1984px', // { min: '1984px' }, // pantalla 2500
    },
    extend: {
      gridTemplateColumns: {
        13: 'repeat(13, minmax(0, 1fr))',
        14: 'repeat(14, minmax(0, 1fr))',
        15: 'repeat(15, minmax(0, 1fr))',
        16: 'repeat(16, minmax(0, 1fr))',
      },
      gridColumn: {
        'span-13': 'span 13 / span 13',
        'span-14': 'span 14 / span 14',
        'span-15': 'span 15 / span 15',
        'span-16': 'span 16 / span 16',
      },
      gridColumnStart: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      gridColumnEnd: {
        13: '13',
        14: '14',
        15: '15',
        16: '16',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      padding: {
        4.5: '1.125rem',
      },
    },
    container: () => ({
      // To center containers by default
      center: true,
    }),
    colors: {
      black: '#000',
      white: '#fff',
      transparent: 'transparent',
      primary: {
        red: {
          700: '#CC133C',
          600: '#EB2146',
          500: '#FF1C44',
          400: '#FF6166',
          300: '#FF858D',
          200: '#FFA8B1',
        },
        neutral: {
          700: '#141938',
          600: '#7981B2',
          500: '#A9AFD9',
          400: '#D7DBF5',
          300: '#E3E6FA',
          200: '#EDEFFC',
          100: '#FAFBFF',
          0: '#FFFFFF',
        },
      },
      secondary: {
        'blue-berry': {
          700: '#432EFF',
          600: '#4F4FFF',
          500: '#6464FA',
          400: '#7D7DFA',
          300: '#A0A0FA',
          200: '#C8C8FA',
          100: '#D9D9FF',
        },
        'green-aqua': {
          800: '#0AA38F',
          700: '#23C292',
          600: '#21D192',
          500: '#30DB9D',
          400: '#7DF0BA',
          300: '#9EF7D6',
        },
        'yellow-sun': {
          700: '#FAAF37',
          600: '#FFBE4D',
          500: '#FFCA61',
          400: '#FFE379',
          300: '#FFEBBD',
        },
        'sky-blue': {
          700: '#42A7FA',
          600: '#52B1FF',
          500: '#6CBDFF',
          400: '#92CEFF',
          300: '#B2DFFF',
        },
      },
      feedback: {
        success: {
          green: {
            300: '#389E0D',
            200: '#A7EB92',
            100: '#E8FAE6',
          },
        },
        warning: {
          orange: {
            300: '#FC9700',
            200: '#FCDA6A',
            100: '#FCF4CA',
          },
        },
        critical: {
          red: {
            300: '#FA0A32',
            200: '#FFC2C6',
            100: '#FFE5E7',
          },
        },
      },
      overlay: 'rgba(35, 40, 82, 0.7)',
    },
    fontFamily: {
      sans: ['Lato', 'Helvetica', 'Arial', 'sans-serif'],
    },
    fontSize: {
      'headline-01': [
        // se usa en estilos de pantallas de 1600+
        '5.75rem',
        {
          lineHeight: '6.25rem',
          letterSpacing: '-0.4px',
        },
      ],
      'headline-02': [
        '4.75rem',
        {
          lineHeight: '5.25rem',
          letterSpacing: '-0.4px',
        },
      ],
      'headline-03': [
        // se usa en estilos de pantallas de 1360-
        '4rem',
        {
          lineHeight: '4.5rem',
          letterSpacing: '-0.4px',
        },
      ],
      'headline-04': [
        '3.5rem',
        {
          lineHeight: '4rem',
          letterSpacing: '-0.4px',
        },
      ],
      'headline-05': [
        '3rem',
        {
          lineHeight: '3.5rem',
          letterSpacing: '-0.4px',
        },
      ],
      'headline-06': [
        '2.5rem',
        {
          lineHeight: '3.25rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-07': [
        '2.25rem',
        {
          lineHeight: '2.75rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-08': [
        '2rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-09': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-10': [
        '1.75rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '1.4px',
        },
      ],
      'headline-11': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-12': [
        '1.5rem',
        {
          lineHeight: '2rem',
          letterSpacing: '1.4px',
        },
      ],
      'headline-13': [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '-0.2px',
        },
      ],
      'headline-14': [
        '1.25rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '1px',
        },
      ],
      'headline-15': [
        '1.125rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '0px',
        },
      ],
      'headline-16': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.2px',
        },
      ],
      'headline-17': [
        '1rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '1px',
        },
      ],
      'headline-18': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.2px',
        },
      ],
      'headline-19': [
        '0.875rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '1px',
        },
      ],
      'headline-20': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.4px',
        },
      ],
      'headline-21': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.6px',
        },
      ],
      'headline-22': [
        '0.75rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.8px',
        },
      ],

      'paragraph-01': [
        '1.75rem',
        {
          lineHeight: '3rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-02': [
        '1.5rem',
        {
          lineHeight: '2.5rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-03': [
        '1.25rem',
        {
          lineHeight: '2.25rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-04': [
        '1.125rem',
        {
          lineHeight: '2rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-05': [
        '1rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-06': [
        '0.875rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.1px',
        },
      ],
      'paragraph-07': [
        '0.75rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.1px',
        },
      ],
      'button-01': [
        '1.5rem',
        {
          lineHeight: '1.75rem',
          letterSpacing: '0.4px',
        },
      ],
      'button-02': [
        '1.25rem',
        {
          lineHeight: '1.5rem',
          letterSpacing: '0.4px',
        },
      ],
      'button-03': [
        '1.125rem',
        {
          lineHeight: '1.25rem',
          letterSpacing: '0.4px',
        },
      ],
      'button-04': [
        '0.875rem',
        {
          lineHeight: '1rem',
          letterSpacing: '0.4px',
        },
      ],
    },
    boxShadow: {
      'trans-01':
        '0px 1px 4px rgba(163, 171, 204, 0.06), 0px 8px 30px rgba(20, 43, 127, 0.1)', // shadow-trans-01
      'trans-02':
        '0px 0px 4px rgba(77, 103, 205, 0.1), 0px 2px 12px rgba(63, 76, 130, 0.1)', // shadow-trans-02
      'trans-03': '0px 0px 10px rgba(163, 171, 204, 0.06)', // shadow-trans-03
      'trans-04':
        '0px 2px 6px rgba(106, 117, 160, 0.16), 0px 0px 20px rgba(36, 52, 113, 0.22)', // shadow-trans-04
      'trans-05': '0px 4px 10px rgba(239, 51, 64, 0.24)', // shadow-trans-05
      'trans-06': '0px 6px 8px rgba(208, 39, 47, 0.5)', // shadow-trans-06
    },
    fill: (theme) => ({
      ...theme('colors'),
    }),
  },

  variants: {
    extend: {},
  },
  plugins: [],
};
