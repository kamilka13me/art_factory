/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  future: {
    hoverOnlyWhenSupported: true,
  },
  theme: {
    extend: {
      screens: {
        custom: { min: '1024px', max: '1297px' },
        laptop: '1024px',
      },
      fontFamily: {
        'ibm-plex-serif': ['IBM Plex Serif', 'serif'],
        'ibm-plex-sans': ['IBM Plex Sans', 'sans-serif'],

        outfit: ['Outfit', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'custom-base': '0px 2px 11.300000190734863px 0px rgba(118, 110, 110, 0.25)',
        'custom-hover': '4px 4px 36px 0px #766E6E40',
      },
      dropShadow: {
        'custom-primary': '0px 2px 16px rgba(255, 255, 255, 0.25)',
        'custom-user-info': '0px 2px 6px rgba(50, 196, 47, 0.25)',
        'custom-dark-modal': '4px 4px 8px rgba(118, 110, 110, 0.25)',
      },
      fontSize: {
        xxs: ['10px', '12.6px'],
        xs: ['12px', '16.8px'],
        sm: ['14px', '17.6px'],
        md: ['16px', '22.4px'],
        lg: ['18px', 'auto'],
        xl: ['20px', 'auto'],
        '2xl': ['24px', '24px'],
        '3xl': ['32px', '24px'],
        '4xl': ['32px', '40px'],
        '5xl': ['36px', 'auto'],
        '6xl': ['48px', 'auto'],
      },
      colors: {
        'white-transparent-70': 'rgba(255, 255, 255, 0.7)',
        'main-dark': '#151515',
        'main-white': '#FFFFFF',
        'secondary-dark': '#B6B6B6',
        'selected-dark': '#1D1D1D',
        'gray-light': '#E8E8E8',
      },
    },
  },
  plugins: [],
};
