import React from 'react';
import Router from 'next/router';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';

import * as gtag from '../lib/gtag';

import ColorStyles from '../components/styles/ColorStyles';
import TransitionStyles from '../components/styles/TransitionStyles';

import '@fortawesome/fontawesome-svg-core/styles.css';
import { appWithTranslation } from '../i18n';

import './styles.css';

class KevinRodriguezApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps, router } = this.props;
    return (
      <Container>
        <noscript style={{ color: 'white' }}>
          This site needs js to work properly
        </noscript>
        <PageTransition timeout={300} classNames="page-transition">
          <Component {...pageProps} key={router.route} />
        </PageTransition>
        <ColorStyles />
        <TransitionStyles />
      </Container>
    );
  }
}

Router.events.on('routeChangeComplete', url => gtag.pageView(url));

export default appWithTranslation(KevinRodriguezApp);
