const colors = {
  dark: '#2B2B2B',
  darker: '#262626',
  light: '#BDC3C7',
  lighter: '#EBF0F1',
  flatRed: '#E74C3C',
  flatRedDark: '#C0392B',
};

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
