import React from 'react'
import Parallax from 'react-css-parallax';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '../components/head'
import GlobalStyles from '../components/global.styles';
import CenteredText from '../components/centeredText';

import kevinrodriguezApi from '../api/kevinrodriguezApi';

const Home = ({ resume }) => {
  const { 
    featuredImage, 
    aboutMe,
    previousWorkImage,
    previousWork
  } = resume.fields;
  return (
    <>
      <GlobalStyles />
      <Head title="Home" />
      <Parallax
        src={featuredImage.fields.file.url}
        alt={featuredImage.fields.description}
        height="100vh"
      >
        <CenteredText>
          <h1 className="header text-center">Kevin Rodríguez</h1>
          <p className="caption text-center">Kevin Rodríguez is a computer systems engineer with expertise in business informatic solutions, database architecture and optimization, general purpose sofware development, app development and web systems development.</p>
        </CenteredText>
      </Parallax>
      <section className="text-section bg-dark">
        <h2>About me</h2>
        <p>
          {documentToReactComponents(aboutMe)}
        </p>
      </section>
      <Parallax 
        src={previousWorkImage.fields.file.url} 
        alt={previousWorkImage.fields.description}
        height='50vh'
      > 
        <CenteredText>
          <h1 className="header text-center">
            Previous experience
          </h1>
        </CenteredText>
      </Parallax>
      <section className="text-section bg-dark">
        {
          previousWork.map(previousWorkItem => (
            <div>
              {previousWorkItem.fields.companyName}
            </div>
          ))
        }
      </section>
      <section style={{ overflowX: 'scroll' }} className="text-section bg-dark">
        <pre>
          {JSON.stringify(resume, null, 2)}
        </pre>
      </section>
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
  )
}

Home.getInitialProps = async (context) => {
  const locale = 'en-US';
  const searchTitle = 'Resume';
  const resume = await kevinrodriguezApi.getEntries({
    content_type: 'resume',
    'fields.title': searchTitle,
    locale
  });
  return { resume: resume.items[0] };
}

export default Home
