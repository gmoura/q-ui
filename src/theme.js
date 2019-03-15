// descbribe your themes here

const themes = {
  default: {
    typo: {
      directory: '/assets/fonts/',
      base: 16,
      lineHeight: 1.5,
      scale: [
        0.8,
        1,
        1.25,
        1.563,
        1.953,
        2.441,
        3.052,
      ],
    },
    rythm: {
      base: 9,
      scale: [
        9,
        27,
        81,
      ],
    },
    grid: {
      container: 960,
    },
    palette: {
      blue: '#4664D3',
      lightBlue: '#4a90e2',
      darkBlue: '#044077',
      sandBlue: '#f4f5fb',
      purple: '#733FE0',
      red: '#ff2f48',
      green: '#0fbc9d',
      lightGreen: '#b8e986',
      darkGreen: '#1fa990',
      black: '#000',
      darkGrey: '#545454',
      regularGrey: '#a8a8a8',
      lightGrey: '#e0e0e0',
      sandGrey: '#fcfcfc',
      white: '#fff',
    },
    iconDirectory: '/assets/icons/',
    imageDirectory: '/assets/images/',
  },
  isNative: false,
}

// describe your current theme name here
const current = 'default';
export default themes[current];
