import React from 'react';
import App, { Container } from 'next/app';
import GlobalStyles from '../components/global.styles';
import '@fortawesome/fontawesome-svg-core/styles.css';

class KevinRodriguezApp extends App {
  static async getInitialProps({ Component, ctx, router }) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }
    return { pageProps };
  }
  render() {
    const { Component, pageProps } = this.props;
    return (
      <Container>
        <GlobalStyles>
          <Component {...pageProps} />
        </GlobalStyles>
      </Container>
    );
  }
}

export default KevinRodriguezApp;
