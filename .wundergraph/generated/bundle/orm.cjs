var t = Object.defineProperty;
var i = Object.getOwnPropertyDescriptor;
var o = Object.getOwnPropertyNames;
var r = Object.prototype.hasOwnProperty;
var u = (d, e, f, p) => {
  if ((e && typeof e == "object") || typeof e == "function")
    for (let n of o(e))
      !r.call(d, n) &&
        n !== f &&
        t(d, n, {
          get: () => e[n],
          enumerable: !(p = i(e, n)) || p.enumerable,
        });
  return d;
};
var x = d => u(t({}, "__esModule", { value: !0 }), d);
var y = {};
module.exports = x(y);
//# sourceMappingURL=orm.cjs.map
