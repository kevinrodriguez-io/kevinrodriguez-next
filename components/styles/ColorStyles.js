import React from 'react';

import { colors } from '../../ui/Theme/colors';

const AppColorStyles = () => {
  return (
    <style global jsx>{`
      .blue {
        color: ${colors.flatBlue}!important;
      }
      .darkBlue {
        color: ${colors.flatBlueDark}!important;
      }
      .green {
        color: ${colors.flatGreen}!important;
      }
      .darkGreen {
        color: ${colors.flatGreenDark}!important;
      }
      .bg-dark {
        background-color: ${colors.darker};
        color: ${colors.lighter};
      }
      .bg-less-dark {
        background-color: ${colors.dark};
        color: ${colors.lighter};
      }
      .bg-light {
        background-color: ${colors.lighter};
        color: ${colors.dark};
      }
      .bg-less-light {
        background-color: ${colors.light};
        color: ${colors.darker};
      }
    `}</style>
  );
};

export default AppColorStyles;
