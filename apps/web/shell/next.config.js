const { composePlugins, withNx } = require("@nx/next");
// const flowRight = require("lodash/flowRight");
// const withI18n = require("./config/withI18n");
//const withSentry = require("./config/withSentry");
// const { withSentryConfig } = require("@sentry/nextjs");
// const { CONTACT_URL, ABLY_API_KEY } = process.env;

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  basePath: "",

  nx: {
    // Set this to true if you would like to to use SVGR
    // See: https://github.com/gregberge/svgr
    svgr: false,
  },

  swcMinify: true,
  reactStrictMode: true,

  /*pageExtensions: ["js", "jsx", "md", "mdx", "ts", "tsx"],*/

  experimental: {
    serverActions: true,
    serverComponentsExternalPackages: ["redis", "redis-om"],

    /*swcPlugins: [
      [
        "next-superjson-plugin",
        {
          excluded: [],
        },
      ],
    ],
    webpackBuildWorker: true,
    swcTraceProfiling: true,
    forceSwcTransforms: true,*/
  },

  devIndicators: {
    buildActivityPosition: "bottom-right",
  },

  transpilePackages: [
    "jotai",
    "framer-motion",
    "react-lottie",
    "react-hook-form",
    "@open-system/design-system-components",
    "@open-system/core-components",
    "@open-system/core-feature-form",
    "@open-system/shared-components",
    "@open-system/contact-feature-form",
  ],

  // Disable linting during build => the linter may have optional dev dependencies
  // (eslint-plugin-cypress) that wont exist during prod build
  // You should lint manually only
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  typescript: {
    ignoreBuildErrors: true,
  },

  webpack(config) {
    config.experiments.topLevelAwait = true;

    return {
      ...config,
      module: {
        ...config?.module,
        rules: [
          ...(config?.module?.rules ?? []),
          {
            loader: "@svgr/webpack",
            options: {
              prettier: false,
              svgo: true,
              svgoConfig: {
                plugins: [
                  {
                    name: "preset-default",
                    params: {
                      overrides: { removeViewBox: false },
                    },
                  },
                ],
              },
              titleProp: true,
            },
            test: /\.svg$/,
          },
          {
            test: /\.(eot|ttf|woff|woff2)$/,
            use: {
              loader: "file-loader",
              options: {
                name: "[name].[ext]",
                publicPath: "fonts",
                outputPath: "fonts",
              },
            },
          },
        ],
      },
    };
  },

  /*sentry: {
    // For all available options, see:
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/

    // Upload a larger set of source maps for prettier stack traces (increases build time)
    widenClientFileUpload: true,

    // Transpiles SDK to be compatible with IE11 (increases bundle size)
    transpileClientSDK: true,

    // Routes browser requests to Sentry through a Next.js rewrite to circumvent ad-blockers (increases server load)
    tunnelRoute: "/monitoring",

    // Hides source maps from generated client bundles
    hideSourceMaps: true,

    // Automatically tree-shake Sentry logger statements to reduce bundle size
    disableLogger: true,
  },*/

  /*async redirects() {
    return [
      {
        source: "/",
        destination: "/home",
        permanent: true,
      },
    ];
  },*/
};

const plugins = [
  // require("@next/mdx")(),

  withNx,

  config => {
    // Enable Webpack analyzer
    if (process.env.ANALYZE) {
      const withBundleAnalyzer = require("@next/bundle-analyzer")({
        enabled: !!process.env.ANALYZE,
      });
      return withBundleAnalyzer(config);
    }

    return config;
  },

  config => {
    if (process.env.MAINTENANCE_MODE) {
      config.redirects = async () => {
        return [
          {
            source: "/",
            destination: "/maintenance",
            permanent: false,
          },
          {
            source: "/((?!maintenance|_next|api).*)",
            destination: "/maintenance",
            permanent: false,
          },
          ...config.redirects,
        ];
      };
    }

    return config;
  },

  /*config =>
    withSentryConfig(
      config,
      {
        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options

        // Suppresses source map uploading logs during build
        org: process.env.SENTRY_ORGANIZATION,
        project: process.env.SENTRY_PROJECT,

        silent: false, // Suppresses all logs

        // For all available options, see:
        // https://github.com/getsentry/sentry-webpack-plugin#options.
        // Will disable release creation and source map upload during local dev
        dryRun: false,
        disableServerWebpackPlugin: false,
        disableClientWebpackPlugin: false,
      }
    ),*/
];

module.exports = composePlugins(...plugins)(nextConfig);
