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
        .bg-light {
          background-color: ${colors.lighter};
          color: ${colors.dark};
        }
      `}</style>
    </>
  );
}
