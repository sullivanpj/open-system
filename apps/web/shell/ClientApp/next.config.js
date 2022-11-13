// eslint-disable-next-line @typescript-eslint/no-var-requires
const { withNx } = require("@nrwl/next/plugins/with-nx");
const { DOCS_URL, API_URL } = process.env;

/**
 * @type {import('@nrwl/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: true,
  },
  swcMinify: true,
  experimental: {
    // Required:
    appDir: true,
  },

  async rewrites() {
    return [
      /**
       * Rewrites for Multi Zones
       */
      {
        source: "/home",
        destination: `${DOCS_URL}`,
      },
      {
        source: "/home/:path*",
        destination: `${DOCS_URL}/:path*`,
      },
      {
        source: "/api/:path*",
        destination: `${API_URL}/api/:path*`,
      },
    ];
  },
};

module.exports = withNx(nextConfig);
