const theme = {
  colors: {
    white: '#fff',
    black: '#000',
    brown: '#3d1a03', // rgb 61 26 3
    ligthBrown: '#542405', // rgb 84 36 5
    primary: '',
    secondary: '',
    tertiary: '',
    quaternary: '',
    font: '',
    background: '',
    transparent: 'transparent'
  },
  breakpoints: {
    min: 320,
    xxxxSmall: 375,
    xxxSmall: 410,
    xxSmall: 480,
    xSmall: 576,
    small: 640,
    medium: 768,
    large: 960,
    xLarge: 1024,
    xxLarge: 1200,
    xxxLarge: 1440,
    xxxxLarge: 1680,
    max: 1920
  },
  font: {
    lineHeights: {
      small: 1.3,
      medium: 1.5,
      large: 1.7
    },
    sizes: {
      small: 14,
      medium: 15,
      large: 16
    },
    weights: {
      normal: 400,
      semibold: 500,
      bold: 700
    }
  }
}

theme.colors.primary = theme.colors.brown
theme.colors.secondary = theme.colors.ligthBrown
theme.colors.tertiary = theme.colors.white
theme.colors.quaternary = theme.colors.white
theme.colors.background = theme.colors.white
theme.colors.font = theme.colors.primary

type ThemeType = typeof theme

export { ThemeType }

export default theme
