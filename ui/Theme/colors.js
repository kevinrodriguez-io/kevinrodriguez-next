const colors = {
  dark: '#2B2B2B',
  darker: '#262626',
  light: '#BDC3C7',
  lighter: '#EBF0F1',
  flatRed: '#E74C3C',
  flatRedDark: '#C0392B',
  flatSkyBlue: '#3398DB',
  flatSkyBlueDark: '#2980B9',
  flatPurple: '#745EC5',
  flatPurpleDark: '#5B48A2',
  flatGreen: '#2ECC71',
  flatGreenDark: '#27AD60',
  flatMint: '#19BC9C',
  flatMintDark: '#169F85',
  flatBlue: '#4F65A0',
  flatBlueDark: '#394C80',
};
colors.primary = colors.flatRed;

const getBackgroundColorForMode = mode => {
  switch (mode) {
    case 'light':
      return colors.lighter;
    case 'dark':
      return colors.darker;
    case 'transparent':
    default:
      return 'transparent';
  }
};
const getTextColorForMode = mode => {
  switch (mode) {
    case 'light':
      return colors.dark;
    case 'dark':
      return colors.lighter;
    case 'transparent':
    default:
      return colors.lighter;
  }
};

export { colors, getBackgroundColorForMode, getTextColorForMode };
