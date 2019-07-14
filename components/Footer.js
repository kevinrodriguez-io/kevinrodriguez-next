import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import {
  colors,
  getBackgroundColorForMode,
  getTextColorForMode,
} from '../ui/Theme/colors';

const Footer = ({ mode = 'transparent', fixed = false }) => {
  return (
    <>
      <footer>
        <span>
          Made with <FontAwesomeIcon color={colors.flatRed} icon={faHeart} /> by
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
          width: 100vw;
          padding-top: 0.8em;
          padding-bottom: 0.8em;
        }
      `}</style>
    </>
  );
};

export default Footer;
