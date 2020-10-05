webpackJsonp([1], {
    NHnr: function(e, t, n) {
        "use strict";
        Object.defineProperty(t, "__esModule", { value: !0 });
        var r = n("7+uW"),
            a = {
                render: function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", { attrs: { id: "app" } }, [t("router-view")], 1)
                },
                staticRenderFns: []
            };
        var s = n("VU/8")({ name: "App" }, a, !1, function(e) { n("gsu9") }, null, null).exports,
            i = n("/ocq"),
            o = {
                render: function() {
                    var e = this.$createElement,
                        t = this._self._c || e;
                    return t("div", { staticClass: "hello" }, [t("h1", [this._v(this._s(this.msg))])])
                },
                staticRenderFns: []
            };
        var u = n("VU/8")({ name: "HelloWorld", data: function() { return { msg: "App Manager example" } } }, o, !1, function(e) { n("uisK") }, "data-v-8e8646f2", null).exports;
        r.a.use(i.a);
        var l = new i.a({ routes: [{ path: "/", name: "HelloWorld", component: u }] });
        r.a.config.productionTip = !1, new r.a({ el: "#app", router: l, components: { App: s }, template: "<App/>" })
    },
    gsu9: function(e, t) {},
    uisK: function(e, t) {}
}, ["NHnr"]);
//# sourceMappingURL=app.6b8ada1fccd4351e9efe.js.map