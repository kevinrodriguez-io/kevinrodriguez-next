import React from 'react';
import Parallax from 'react-css-parallax';

import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CenteredFlex from '../../components/CenteredFlex';

import kevinrodriguezApi from '../../api/kevinrodriguezApi';

import { withTranslation, i18n } from '../../i18n';
import {
  getLocaleFromCurrentLanguage,
  getCurrentLanguage,
} from '../../lib/locale';

const Resume = ({ resume }) => {
  const featuredImage = resume.fields.featuredImage.fields;
  const profilePicture = resume.fields.profilePicture.fields;
  const { subtitle } = resume.fields;
  return (
    <>
      <Nav fixed mode="dark" />
      <Parallax
        alt={featuredImage.description}
        height="500px"
        src={featuredImage.file.url}>
        <CenteredFlex centerContent w60 absolute>
          <div className="text-center">
            <img
              className="profile-picture"
              src={profilePicture.file.url}
              alt={profilePicture.description}
            />
          </div>
          <h1 className="header text-center">Kevin Rodríguez</h1>
          <p className="caption text-center">{subtitle}</p>
        </CenteredFlex>
      </Parallax>
      <Footer fixed mode="dark" />
      <pre>{JSON.stringify(resume.fields, null, 2)}</pre>
      <style jsx>{`
        img.profile-picture {
          width: 125px;
          height: 125px;
          border-radius: 100%;
        }
      `}</style>
    </>
  );
};

Resume.getInitialProps = async ({ pathname, query, asPath, req, res, err }) => {
  const currentLanguage = getCurrentLanguage(req, i18n);
  const locale = getLocaleFromCurrentLanguage(currentLanguage);
  const searchTitle = locale === 'es-CR' ? 'Currículum' : 'Resume';
  const resume = await kevinrodriguezApi.getEntries({
    content_type: 'resume',
    'fields.title': searchTitle,
    locale,
  });
  console.log({
    currentLanguage,
    locale,
    searchTitle,
    resume,
  });
  return {
    resume: resume.items[0],
    namespacesRequired: ['common'],
  };
};

export default withTranslation('common')(Resume);
