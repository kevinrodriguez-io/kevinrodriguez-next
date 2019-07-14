/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faMedium } from '@fortawesome/free-brands-svg-icons';

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
          <Link prefetch href="/">
            <a>Home</a>
          </Link>
        </div>
        <div className="links right">
          {links.map(({ key, href, label, icon }) => (
            <Link href={href} key={key}>
              <a>
                {icon && (
                  <FontAwesomeIcon style={{ marginRight: '1em' }} icon={icon} />
                )}
                {label}
              </a>
            </Link>
          ))}
        </div>
      </nav>
      <style jsx>{`
        nav {
          display: flex;
          position: absolute;
          width: 100vw;
          flex-direction: row;
          justify-content: space-between;
          z-index: 1;
        }
        .links {
          padding-top: 1em;
          padding-bottom: 1em;
        }
        .links.left {
          padding-left: 1em;
        }
        .links.right {
          padding-right: 1em;
        }
        a {
          color: ${colors.lighter};
          text-decoration: unset;
          margin-left: 1em;
          margin-right: 1em;
          font-size: 0.8em;
        }
      `}</style>
    </>
  );
};

export default Nav;
