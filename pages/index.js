import React from 'react';
import { withRouter } from 'next/router';
import Parallax from 'react-css-parallax';
import Head from '../components/Head';
import GlobalStyles from '../components/global.styles';
import CenteredText from '../components/CenteredFlex';

import kevinrodriguezApi from '../api/kevinrodriguezApi';

const Home = ({ resume }) => {
  const featuredImage = resume.fields.featuredImage.fields;
  return (
    <>
      <GlobalStyles />
      <Head title="Kevin Rodríguez" />
      <Parallax
        src={featuredImage.file.url}
        alt={featuredImage.description}
        height="100vh"
        fixed>
        <CenteredText centerContent w60 absolute>
          <h1 className="header text-center">Kevin Rodríguez</h1>
          <p className="caption text-center">
            Kevin Rodríguez is a computer systems engineer with expertise in
            business informatic solutions, database architecture and
            optimization, general purpose sofware development, app development
            and web systems development.
          </p>
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
  const searchTitle = 'Resume';
  const resume = await kevinrodriguezApi.getEntries({
    content_type: 'resume',
    'fields.title': searchTitle,
    locale,
  });
  return { resume: resume.items[0] };
};

export default withRouter(Home);
