/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

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

const Nav = ({ mode = 'transparent', fixed = false }) => {
  return (
    <>
      <nav>
        <div className="links left">
          <div>
            <Link href="/">
              <a>Kevin Rodríguez</a>
            </Link>
          </div>
          <div>
            <Link href="/es">
              <a>
                <span role="img" aria-label="Bandera de españa">
                  🇪🇸
                </span>
                &nbsp;Español
              </a>
            </Link>
          </div>
        </div>
        <div className="links right-large">
          <div>
            <Link href="/resume">
              <a>Resume</a>
            </Link>
          </div>
          <div>
            <Link href="/blog">
              <a>Blog</a>
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
          width: 100vw;
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

export default Nav;
