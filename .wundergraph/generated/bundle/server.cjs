var u = Object.defineProperty;
var f = Object.getOwnPropertyDescriptor;
var m = Object.getOwnPropertyNames;
var n = Object.prototype.hasOwnProperty;
var p = (e, r) => {
    for (var t in r) u(e, t, { get: r[t], enumerable: !0 });
  },
  s = (e, r, t, i) => {
    if ((r && typeof r == "object") || typeof r == "function")
      for (let o of m(r))
        !n.call(e, o) &&
          o !== t &&
          u(e, o, {
            get: () => r[o],
            enumerable: !(i = f(r, o)) || i.enumerable,
          });
    return e;
  };
var d = e => s(u({}, "__esModule", { value: !0 }), e);
var c = {};
p(c, { default: () => h });
module.exports = d(c);
var a = require("@wundergraph/sdk/server"),
  h = (0, a.configureWunderGraphServer)(() => ({
    hooks: { queries: {}, mutations: {} },
  }));
0 && (module.exports = {});
//# sourceMappingURL=server.cjs.map
