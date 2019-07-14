import React from 'react';

export default function GlobalStyles() {
  return (
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
        background-color: #272727;
        color: #ebf0f1;
      }
      .bg-light {
        background-color: #ebf0f1;
        color: #2c2c2b;
      }
    `}</style>
  );
}
