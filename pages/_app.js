import React from 'react';
import App, { Container } from 'next/app';
import { PageTransition } from 'next-page-transitions';

import GlobalStyles from '../components/global.styles';
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
        <GlobalStyles>
          <PageTransition timeout={300} classNames="page-transition">
            <Component {...pageProps} key={router.route} />
          </PageTransition>
        </GlobalStyles>
        <style jsx global>{`
          .page-transition-enter {
            opacity: 0;
          }
          .page-transition-enter-active {
            opacity: 1;
            transition: opacity 300ms;
          }
          .page-transition-exit {
            opacity: 1;
          }
          .page-transition-exit-active {
            opacity: 0;
            transition: opacity 300ms;
          }
        `}</style>
      </Container>
    );
  }
}

export default appWithTranslation(KevinRodriguezApp);
