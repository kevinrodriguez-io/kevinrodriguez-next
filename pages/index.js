/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Parallax from 'react-css-parallax';
import Typed from 'react-typed';

import Head from '../components/Head.js';
import CenteredText from '../components/CenteredFlex.js';
import Nav from '../components/Nav.js';
import Footer from '../components/Footer.js';

import kevinrodriguezApi from '../api/kevinrodriguezApi.js';

import { withTranslation, i18n } from '../i18n.js';
import {
  getLocaleFromCurrentLanguage,
  getCurrentLanguage,
} from '../lib/locale.js';

const Home = ({ landing }) => {
  const featuredImage = landing.fields.featuredImage.fields;
  const { displayName, briefing, qualities } = landing.fields;
  return (
    <>
      <Head title={displayName} description={briefing} />
      <Nav />
      <Parallax
        src={featuredImage.file.url}
        alt={featuredImage.description}
        height="100vh"
        fixed>
        <CenteredText centerContent w60 absolute>
          <h1 className="header text-center">{displayName}</h1>
          <p className="caption text-center">{briefing}</p>
          <p className="caption text-center">
            <Typed
              loop
              typeSpeed={70}
              backSpeed={35}
              strings={qualities}
              backDelay={1500}
              loopCount={0}
              showCursor
              cursorChar="|"
            />
          </p>
        </CenteredText>
      </Parallax>
      <Footer />
    </>
  );
};

Home.getInitialProps = async ({ req }) => {
  const currentLanguage = getCurrentLanguage(req, i18n);
  const locale = getLocaleFromCurrentLanguage(currentLanguage);
  const searchTitle = 'Kevin Rodríguez';
  const landing = await kevinrodriguezApi.getEntries({
    content_type: 'landing',
    'fields.displayName': searchTitle,
    locale,
  });
  return {
    landing: landing.items[0],
    namespacesRequired: ['common', 'nav', 'footer'],
  };
};

export default withTranslation('common')(Home);
