import React from 'react';

import { colors } from '../ui/Theme/colors';

export default function GlobalStyles({ children }) {
  return (
    <>
      {children}
      <style global jsx>{`
        @import url('https://fonts.googleapis.com/css?family=Montserrat:100,400,700,800,900&display=swap');
        html {
          scroll-behavior: smooth;
        }
        body {
          margin: 0;
          font-family: 'Montserrat', sans-serif;
        }
        .auto-grid {
          flex: 1 1 auto;
        }
        .elevated {
          box-shadow: 0px 4px 5px -4px rgba(0, 0, 0, 1);
        }
        .ma-1em {
          margin: 1em 1em 1em 1em;
        }
        .pa-1em {
          padding: 1em 1em 1em 1em;
        }
        .no-break-title {
          display: inline;
        }
        .my-1em {
          margin-top: 1em;
          margin-bottom: 1em;
        }
        .px-10 {
          padding-left: 10%;
          padding-right: 10%;
        }
        .mx-10 {
          margin-left: 10%;
          margin-right: 10%;
        }
        .max-width-60 {
          max-width: 60vw;
        }
        .center-block {
          margin-left: auto;
          margin-right: auto;
        }
        .text-center {
          text-align: center;
        }
        .row {
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;
        }
        .col {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
        }
        .justify {
          justify-content: space-evenly;
        }
        .flex-space-between {
          display: flex;
          justify-content: space-between;
        }
        .center-flex-absolute {
          position: absolute;
        }
        .center-flex-absolute::before {
          display: block;
          content: '';
        }
        .center-flex-absolute::after {
          display: block;
          content: '';
        }
        .center-flex::before {
          display: block;
          content: '';
        }
        .center-flex::after {
          display: block;
          content: '';
        }
        .w100 {
          width: 100%;
        }
        .h100 {
          height: 100%;
        }
        .a100 {
          width: 100%;
          height: 100%;
        }
        .text-section {
          padding: 1em 1em 1em 1em;
        }
        .bg-dark {
          background-color: ${colors.darker};
          color: ${colors.lighter};
        }
        .bg-less-dark {
          background-color: ${colors.dark};
          color: ${colors.lighter};
        }
        .bg-light {
          background-color: ${colors.lighter};
          color: ${colors.dark};
        }
        .bg-less-light {
          background-color: ${colors.light};
          color: ${colors.darker};
        }
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
}
