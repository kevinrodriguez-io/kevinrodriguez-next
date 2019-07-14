import React from 'react';
import Parallax from 'react-css-parallax';

import Nav from '../../components/Nav';

import kevinrodriguezApi from '../../api/kevinrodriguezApi';

const Resume = ({ resume }) => {
  const featuredImage = resume.fields.featuredImage.fields;
  return (
    <>
      <Nav />
      <Parallax
        alt={featuredImage.description}
        height="500px"
        src={featuredImage.file.url}
      />
      <pre>{JSON.stringify(resume.fields, null, 2)}</pre>
    </>
  );
};

Resume.getInitialProps = async () => {
  const locale = 'en-US';
  const searchTitle = 'Resume';
  const resume = await kevinrodriguezApi.getEntries({
    content_type: 'resume',
    'fields.title': searchTitle,
    locale,
  });
  return { resume: resume.items[0] };
};

export default Resume;
