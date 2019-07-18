/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link, Router, i18n, withTranslation } from '../i18n';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import {
  getBackgroundColorForMode,
  getTextColorForMode,
} from '../ui/Theme/colors';

const links = [
  {
    href: 'https://github.com/kevinrodriguez-io',
    label: 'Github',
    icon: faGithub,
  },
  {
    href: 'https://medium.com/@kevinrodrguez',
    label: 'Medium',
    icon: faMedium,
  },
].map(link => {
  link.key = `nav-link-${link.href}-${link.label}`;
  return link;
});

const Nav = ({ mode = 'transparent', fixed = false, t }) => {
  const handleLangSwitch = async e => {
    e.preventDefault();
    await i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en');
    const { pathname, query } = Router;
    Router.push({ pathname, query }, Router.asPath);
  };
  const navClasses = [];
  switch (mode) {
    case 'dark':
    case 'light':
      navClasses.push('elevated');
      break;
    default:
      break;
  }
  return (
    <>
      <nav className={navClasses.join(' ')}>
        <div className="links left">
          <div>
            <Link href="/">
              <a>Kevin Rodríguez</a>
            </Link>
          </div>
          <div>
            <form onSubmit={handleLangSwitch}>
              <button type="submit">
                {i18n.language === 'en' ? (
                  <span>
                    <span role="img" aria-label="Bandera de españa">
                      🇪🇸
                    </span>
                    <span>&nbsp;Español</span>
                  </span>
                ) : (
                  <span>
                    <span role="img" aria-label="US Flag">
                      🇺🇸
                    </span>
                    <span>&nbsp;English</span>
                  </span>
                )}
              </button>
            </form>
          </div>
        </div>
        <div className="links right-large">
          <div>
            <Link href="/resume">
              <a>{t('resume')}</a>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <a>{t('blog')}</a>
            </Link>
          </div>
          {links.map(({ key, href, label, icon }) => (
            <div key={key}>
              <Link href={href}>
                <a>
                  {icon && (
                    <FontAwesomeIcon
                      style={{ marginRight: '0.8em' }}
                      icon={icon}
                    />
                  )}
                  {label}
                </a>
              </Link>
            </div>
          ))}
        </div>
        <div className="links right-small">
          <div>
            <FontAwesomeIcon color={getTextColorForMode(mode)} icon={faBars} />
          </div>
        </div>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          position: ${fixed ? 'fixed' : 'absolute'};
          width: 100%;
          flex-direction: row;
          z-index: 1;
          background-color: ${getBackgroundColorForMode(mode)};
        }
        .links {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .links.left div {
          margin: 0.8em 0.8em 0.8em 0.8em;
        }
        @media only screen and (max-width: 560px) {
          .links.right-large {
            display: none;
          }
        }
        @media only screen and (min-width: 560px) {
          .links.right-small {
            display: none;
          }
        }
        button {
          background: none;
          color: ${getTextColorForMode(mode)};
          border: none;
          padding: 0 !important;
          font: inherit;
          cursor: pointer;
          font-size: 0.8em;
        }
        .links.right-small {
          margin-left: auto;
        }
        .links.right-small div {
          margin: 0.8em 0.8em 0.8em 0.8em;
        }
        .links.right-large {
          margin-left: auto;
        }
        .links.right-large div {
          margin: 0.8em 0.8em 0.8em 0.8em;
        }
        a {
          color: ${getTextColorForMode(mode)};
          text-decoration: unset;
          font-size: 0.8em;
        }
      `}</style>
    </>
  );
};

export default withTranslation('nav')(Nav);
