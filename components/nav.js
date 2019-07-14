/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';
import '@fortawesome/fontawesome-svg-core/styles.css';

import colors from '../ui/Theme/colors';

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

const Nav = () => {
  return (
    <>
      <nav>
        <div className="links left">
          <div>
            <Link prefetch href="/">
              <a>Home</a>
            </Link>
          </div>
        </div>
        <div className="links right">
          <div>
            <Link prefetch href="/resume">
              <a>Resume</a>
            </Link>
          </div>
          <div>
            <Link prefetch href="/blog">
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
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          position: absolute;
          width: 100vw;
          flex-direction: row;
          z-index: 1;
        }
        .links {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .links.left div {
          margin: 0.8em 0.8em 0.8em 0.8em;
        }
        .links.right {
          width: 100%;
          justify-content: flex-end;
        }
        .links.right div {
          margin: 0.8em 0.8em 0.8em 0.8em;
        }
        a {
          color: ${colors.lighter};
          text-decoration: unset;
          font-size: 0.8em;
        }
      `}</style>
    </>
  );
};

export default Nav;
