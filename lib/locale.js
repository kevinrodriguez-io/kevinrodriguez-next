export const getCurrentLanguage = (req, i18n) => {
  if (req && req.language) {
    return req.language;
  }
  if (i18n) {
    return i18n.language;
  }
  return 'en';
};

export const getLocaleFromCurrentLanguage = currentLanguage => {
  switch (currentLanguage) {
    case 'es':
      return 'es-CR';
    case 'en':
    default:
      return 'en-US';
  }
};
