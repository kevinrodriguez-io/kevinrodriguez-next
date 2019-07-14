import React from 'react';

const withLang = X => WrappedComponent => {
  const WithLangComponent = props => {
    return <WrappedComponent {...props} {...{ X }} />;
  };
  WithLangComponent.getInitialProps = WrappedComponent.getInitialProps;
  return WithLangComponent;
};

export default withLang;
