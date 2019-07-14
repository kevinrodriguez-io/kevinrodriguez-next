module.exports = {
  webpack: config => {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty',
    };
    return config;
  },
  publicRuntimeConfig: {
    CTF_SPACE_ID: 'q25vrbd3wsbu',
    CTF_CDA_ACCESS_TOKEN:
      '76aa8a55ad7a96e58e6d092eb478373373ca836523f90b824782d3e2892d726f',
  },
};
