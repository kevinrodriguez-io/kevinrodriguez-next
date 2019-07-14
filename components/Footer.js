import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

import colors from '../ui/Theme/colors';

const Footer = () => {
  return (
    <>
      <footer>
        Made with <FontAwesomeIcon color={colors.flatRed} icon={faHeart} /> by kevinrodriguez.io
      </footer>
      <style jsx>{`
        footer {
          font-size: 0.8em;
          color: ${colors.light};
          text-align: center;
          position: absolute;
          z-index: 1;
          bottom: 0.8em;
          width: 100vw;
        }
      `}</style>
    </>
  );
};

export default Footer;
