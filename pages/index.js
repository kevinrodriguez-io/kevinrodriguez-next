import React from 'react';
import { withRouter } from 'next/router';
import Parallax from 'react-css-parallax';

import Head from '../components/Head';
import GlobalStyles from '../components/global.styles';
import CenteredText from '../components/CenteredFlex';
import Nav from '../components/Nav';

import kevinrodriguezApi from '../api/kevinrodriguezApi';

const Home = ({ landing }) => {
  const featuredImage = landing.fields.featuredImage.fields;
  const { displayName, briefing } = landing.fields;
  return (
    <>
      <GlobalStyles />
      <Head title="Kevin Rodríguez" />
      <Nav />
      <Parallax
        src={featuredImage.file.url}
        alt={featuredImage.description}
        height="100vh"
        fixed>
        <CenteredText centerContent w60 absolute>
          <h1 className="header text-center">{displayName}</h1>
          <p className="caption text-center">{briefing}</p>
        </CenteredText>
      </Parallax>
      <style jsx>{`
        .header {
          text-transform: uppercase;
          color: #ecf0f1;
        }
        .caption {
          color: #ecf0f1;
        }
      `}</style>
    </>
  );
};

Home.getInitialProps = async () => {
  const locale = 'en-US';
  const searchTitle = 'Kevin Rodríguez';
  const landing = await kevinrodriguezApi.getEntries({
    content_type: 'landing',
    'fields.displayName': searchTitle,
    locale,
  });
  return { landing: landing.items[0] };
};

export default withRouter(Home);
