import React from 'react';
import Parallax from 'react-css-parallax';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
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
  const getStars = stars => {
    const starElements = [];
    for (let i = 0; i < stars; i++) {
      starElements.push(
        <FontAwesomeIcon key={i} icon={faStar} color={colors.primary} />
      );
    }
    return starElements;
  };
  return (
    <div className="ma-1em pa-1em elevated bg-less-dark auto-grid">
      <h3>{group}</h3>
      {technologies
        .sort((a, b) => b.stars - a.stars)
        .map(technology => (
          <div key={technology.name} className="row space-between">
            <div>{technology.name}</div>
            <div>{getStars(technology.stars)}</div>
          </div>
        ))}
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

const StudyCard = ({ study, startDateTitle }) => {
  const { degree, institutionImage, institutionName, from } = study.fields;
  const { file, description } = institutionImage.fields;
  return (
    <div className="ma-1em pa-1em elevated bg-less-dark auto-grid">
      <Parallax src={file.url} alt={description} height="250px" fixed />
      <h3>{institutionName}</h3>
      <p>{degree}</p>
      <h4 className="no-break-title mr-1em">{startDateTitle}</h4>
      {from && <span>{from}</span>}
    </div>
  );
};

const StudiesListing = ({ studies, startDateTitle }) => {
  return studies.map(study => (
    <StudyCard
      key={study.fields.degree}
      study={study}
      startDateTitle={startDateTitle}
    />
  ));
};

const OtherStudyCard = ({
  study,
  institutionTitle,
  instructorTitle,
  viewCertificateTitle,
}) => {
  const { title, certificateUrl, institutionName, instructor } = study.fields;
  return (
    <div className="ma-1em pa-1em elevated bg-less-dark auto-grid">
      <h3 className="text-center max-250 center-block">{title}</h3>
      <div className="row space-between">
        <div className="mr-1em">
          <h4 className="no-break-title">{institutionTitle}: </h4>
          {institutionName}
        </div>
        <div>
          <h4 className="no-break-title">{instructorTitle}: </h4>
          {instructor}
        </div>
      </div>
      <div className="my-1em text-center">
        <a className="primary" href={certificateUrl}>
          {viewCertificateTitle}
        </a>
      </div>
    </div>
  );
};

const OtherStudiesListing = ({
  otherStudies,
  institutionTitle,
  instructorTitle,
  viewCertificateTitle,
}) => {
  return otherStudies.map(study => (
    <OtherStudyCard
      key={study.fields.title}
      study={study}
      {...{ institutionTitle, instructorTitle, viewCertificateTitle }}
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
  const {
    aboutMe,
    previousWork,
    availableTechnologies,
    studies,
    otherStudies,
    title,
  } = resume.fields;
  return (
    <>
      <Head title={`Kevin Rodríguez - ${title}`} />
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
      <section className="bg-dark row px-10">
        <StudiesListing studies={studies} startDateTitle={t('startDate')} />
      </section>
      <SectionTitleParallax
        image={resume.fields.otherStudiesImage.fields}
        title={t('otherStudies')}
        height="250px"
      />
      <section className="bg-dark row px-10 margin-bottom-footer">
        <OtherStudiesListing
          otherStudies={otherStudies}
          institutionTitle={t('institution')}
          instructorTitle={t('instructor')}
          viewCertificateTitle={t('viewCertificate')}
        />
      </section>
      <Footer fixed mode="dark" />
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
          background-color: ${colors.primary};
          padding: 0.8em 0.8em 0.8em 0.8em;
          color: ${colors.dark};
          text-decoration: unset;
          border-radius: 5%;
        }
        .max-250 {
          max-width: 250px;
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
    namespacesRequired: ['common', 'nav', 'footer'],
  };
};

export default withTranslation('common')(Resume);
