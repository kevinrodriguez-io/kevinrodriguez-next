import React from 'react';
import Parallax from 'react-css-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHammer } from '@fortawesome/free-solid-svg-icons';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CenteredFlex from '../../components/CenteredFlex';

import { withTranslation } from '../../i18n';

const Blog = ({t}) => {
  return (
    <>
      <Nav mode="transparent" />
      <Parallax src="static/sea.jpeg" height="100vh" alt="sea">
        <CenteredFlex absolute>
          <h1 className="header">
            <FontAwesomeIcon icon={faHammer} /> {t('workInProgress')}
          </h1>
        </CenteredFlex>
      </Parallax>
      <Footer mode="transparent" />
    </>
  );
};

Blog.getInitialProps = async ({ req }) => {
  return {
    namespacesRequired: ['common', 'nav', 'footer'],
  };
};

export default withTranslation('common')(Blog);
