module.exports = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/raw_engg",
        permanent: false,
      },
    ];
  },
};
