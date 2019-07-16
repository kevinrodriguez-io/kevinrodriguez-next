import React from 'react';
import Parallax from 'react-css-parallax';
import { documentToReactComponents } from '@contentful/rich-text-react-renderer';

import Head from '../../components/Head';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';
import CenteredFlex from '../../components/CenteredFlex';

import kevinrodriguezApi from '../../api/kevinrodriguezApi';

import { colors } from '../../ui/Theme/colors';

import { withTranslation, i18n } from '../../i18n';
import {
  getLocaleFromCurrentLanguage,
  getCurrentLanguage,
} from '../../lib/locale';
import groupBy from '../../lib/groupBy';

const PreviousWorkElement = ({
  previousWorkElement,
  jobTitleHeaderText,
  fromHeaderText,
  toHeaderText,
  responsibilitiesHeaderText,
}) => {
  const {
    companyName,
    jobTitle,
    from,
    to,
    responsibilities,
  } = previousWorkElement.fields;
  return (
    <div className="ma-1em pa-1em elevated bg-less-dark auto-grid">
      <div>
        <h3>{companyName}</h3>
      </div>
      <div className="my-1em">
        <h4 className="no-break-title">{jobTitleHeaderText}&nbsp;</h4>
        {jobTitle}
      </div>
      <div>
        <h4 className="no-break-title">{fromHeaderText}&nbsp;</h4>
        {from}
        {to && (
          <>
            <h4 className="no-break-title" style={{ marginLeft: '1em' }}>
              {toHeaderText}&nbsp;
            </h4>
            {to}
          </>
        )}
      </div>
      <h4>{responsibilitiesHeaderText}</h4>
      {documentToReactComponents(responsibilities)}
    </div>
  );
};

const PreviousWorkListing = ({
  previousWork,
  jobTitleHeaderText,
  fromHeaderText,
  toHeaderText,
  responsibilitiesHeaderText,
}) => {
  return previousWork.map(element => (
    <PreviousWorkElement
      key={element.fields.companyName}
      previousWorkElement={element}
      {...{
        jobTitleHeaderText,
        fromHeaderText,
        toHeaderText,
        responsibilitiesHeaderText,
      }}
    />
  ));
};

const TechnologyGroup = ({ group, technologies }) => {
  return (
    <div className="ma-1em pa-1em elevated bg-less-dark auto-grid">
      <h3>{group}</h3>
      {JSON.stringify(technologies, null, 2)}
    </div>
  );
};

const TechnologiesListing = ({ availableTechnologies }) => {
  const groupedTechnologies = groupBy(
    availableTechnologies.map(t => t.fields),
    'category'
  );
  return Object.keys(groupedTechnologies).map(key => (
    <TechnologyGroup
      technologies={groupedTechnologies[key]}
      group={key}
      key={key}
    />
  ));
};

const TopParallax = ({
  featuredImage,
  profilePicture,
  title,
  subtitle,
  email,
  ctaText,
}) => {
  return (
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
        <h1 className="header text-center">{title}</h1>
        <p className="caption text-center">{subtitle}</p>
        <div className="contact-cta-container text-center">
          <a className="contact-cta" href={`mailto:${email}`}>
            {ctaText}
          </a>
        </div>
      </CenteredFlex>
    </Parallax>
  );
};

const SectionTitleParallax = ({ image, title, height }) => {
  return (
    <Parallax src={image.file.url} alt={image.description} height={height}>
      <CenteredFlex centerContent w60 absolute>
        <h2 className="header text-center">{title}</h2>
      </CenteredFlex>
    </Parallax>
  );
};

const Resume = ({ resume, t }) => {
  const { aboutMe, previousWork, availableTechnologies } = resume.fields;
  return (
    <>
      <Head title="Kevin Rodríguez" />
      <Nav fixed mode="dark" />
      <TopParallax
        featuredImage={resume.fields.featuredImage.fields}
        profilePicture={resume.fields.profilePicture.fields}
        title="Kevin Rodríguez"
        subtitle={resume.fields.subtitle}
        email="_@kevinrodriguez.io"
        ctaText={t('contact')}
      />
      <section className="bg-dark px-10 pa-1em">
        <h2>{t('aboutMe')}</h2>
        {documentToReactComponents(aboutMe)}
      </section>
      <SectionTitleParallax
        image={resume.fields.previousWorkImage.fields}
        title={t('previousWork')}
        height="250px"
      />
      <section className="bg-dark row px-10">
        <PreviousWorkListing
          previousWork={previousWork}
          fromHeaderText={t('from')}
          jobTitleHeaderText={t('jobTitle')}
          responsibilitiesHeaderText={t('responsibilities')}
          toHeaderText={t('to')}
        />
      </section>
      <SectionTitleParallax
        image={resume.fields.availableTechnologiesImage.fields}
        title={t('technologies')}
        height="250px"
      />
      <section className="bg-dark row px-10">
        <TechnologiesListing availableTechnologies={availableTechnologies} />
      </section>
      <SectionTitleParallax
        image={resume.fields.studiesImage.fields}
        title={t('studies')}
        height="250px"
      />
      <Footer fixed mode="dark" />
      <pre
        className="bg-light"
        style={{ margin: '0', padding: '1em 1em 1em 1em', overflow: 'scroll' }}>
        {JSON.stringify(resume.fields, null, 2)}
      </pre>
      <style jsx global>{`
        img.profile-picture {
          width: 125px;
          height: 125px;
          border-radius: 100%;
        }
        div.contact-cta-container {
          padding: 0.8em 0.8em 0.8em 0.8em;
        }
        a.contact-cta {
          background-color: ${colors.flatSkyBlue};
          padding: 0.8em 0.8em 0.8em 0.8em;
          color: ${colors.lighter};
          text-decoration: unset;
          border-radius: 5%;
        }
      `}</style>
    </>
  );
};

Resume.getInitialProps = async ({ req }) => {
  const currentLanguage = getCurrentLanguage(req, i18n);
  const locale = getLocaleFromCurrentLanguage(currentLanguage);
  const searchTitle = locale === 'es-CR' ? 'Currículum' : 'Resume';
  const resume = await kevinrodriguezApi.getEntries({
    content_type: 'resume',
    'fields.title': searchTitle,
    locale,
  });
  return {
    resume: resume.items[0],
    namespacesRequired: ['common'],
  };
};

export default withTranslation('common')(Resume);
