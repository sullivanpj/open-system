var e = require("@wundergraph/sdk");
var t = require("@wundergraph/sdk"),
  o = (0, t.configureWunderGraphOperations)({
    operations: {
      defaultConfig: { authentication: { required: !1 } },
      queries: r => ({
        ...r,
        caching: {
          enable: !0,
          staleWhileRevalidate: 60,
          maxAge: 60,
          public: !0,
        },
        liveQuery: { enable: !0, pollingIntervalSeconds: 1 },
      }),
      mutations: r => ({ ...r }),
      subscriptions: r => ({ ...r }),
      custom: {},
    },
  });
var n = require("@wundergraph/sdk/server"),
  a = (0, n.configureWunderGraphServer)(() => ({
    hooks: { queries: {}, mutations: {} },
  }));
var i = e.introspect.graphql({
  apiNamespace: "contact",
  url: "https://contact-api.open-system.workers.dev/graphql",
  subscriptionsUseSSE: !0,
});
(0, e.configureWunderGraphApplication)({
  apis: [i],
  server: a,
  operations: o,
  generate: {
    codeGenerators: [
      { templates: [...e.templates.typescript.all], path: "./generated" },
    ],
  },
  cors: {
    ...e.cors.allowAll,
    allowedOrigins:
      process.env.NODE_ENV === "production"
        ? ["https://patsullivan.org"]
        : [
            "http://localhost:3000",
            new e.EnvironmentVariable("WG_ALLOWED_ORIGIN"),
          ],
  },
  security: {
    enableGraphQLEndpoint:
      process.env.NODE_ENV !== "production" ||
      process.env.GITPOD_WORKSPACE_ID !== void 0,
  },
});
//# sourceMappingURL=config.cjs.map
