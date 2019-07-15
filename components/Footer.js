import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import { withTranslation } from '../i18n';

import {
  colors,
  getBackgroundColorForMode,
  getTextColorForMode,
} from '../ui/Theme/colors';

const Footer = ({ mode = 'transparent', fixed = false, t }) => {
  return (
    <>
      <footer>
        <span>
          {t('madeWith')}{' '}
          <FontAwesomeIcon color={colors.flatRed} icon={faHeart} /> {t('by')}{' '}
          kevinrodriguez.io
        </span>
      </footer>
      <style jsx>{`
        footer {
          background-color: ${getBackgroundColorForMode(mode)};
          font-size: 0.8em;
          color: ${getTextColorForMode(mode)};
          text-align: center;
          position: ${fixed ? 'fixed' : 'absolute'};
          z-index: 1;
          bottom: 0;
          width: 100%;
          padding-top: 0.8em;
          padding-bottom: 0.8em;
        }
      `}</style>
    </>
  );
};

export default withTranslation('footer')(Footer);
