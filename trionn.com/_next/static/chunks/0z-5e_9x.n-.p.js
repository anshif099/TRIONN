(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 71871, e => {
    "use strict";
    var t = e.i(89970);
    class i {
        entries = new Map;
        namesToId = new Map;
        nextId = 1;
        isRunning = !1;
        tabHidden = !1;
        constructor() {
            "u" > typeof document && document.addEventListener("visibilitychange", () => {
                this.tabHidden = document.hidden, this.tabHidden || this.ensureRunning()
            })
        }
        register(e, t = !0, i) {
            let s = this.nextId++;
            return this.entries.set(s, {
                fn: e,
                active: t,
                name: i,
                suspendReasons: new Set
            }), i && this.namesToId.set(i, s), t && this.ensureRunning(), s
        }
        unregister(e) {
            let t = this.entries.get(e);
            t ? .name && this.namesToId.delete(t.name), this.entries.delete(e)
        }
        setActive(e, t) {
            let i = this.entries.get(e);
            i && (i.active = t, this.isEffectivelyActive(i) && this.ensureRunning())
        }
        suspend(e, t) {
            let i = this.resolve(e);
            i && i.suspendReasons.add(t)
        }
        resume(e, t) {
            let i = this.resolve(e);
            i && (i.suspendReasons.delete(t), this.isEffectivelyActive(i) && this.ensureRunning())
        }
        resolve(e) {
            if ("number" == typeof e) return this.entries.get(e);
            let t = this.namesToId.get(e);
            return void 0 !== t ? this.entries.get(t) : void 0
        }
        isEffectivelyActive(e) {
            return e.active && 0 === e.suspendReasons.size
        }
        ensureRunning() {
            this.isRunning || (this.isRunning = !0, t.default.ticker.add(this.tick))
        }
        tick = e => {
            let i = 1e3 * e;
            if (this.tabHidden) return;
            let s = !1;
            for (let e of this.entries.values()) this.isEffectivelyActive(e) && (s = !0, e.fn(i));
            s || (t.default.ticker.remove(this.tick), this.isRunning = !1)
        }
    }
    let s = null;
    e.s(["getCanvasManager", 0, function() {
        return s || (s = new i), s
    }])
}, 88143, (e, t, i) => {
    "use strict";

    function s({
        widthInt: e,
        heightInt: t,
        blurWidth: i,
        blurHeight: r,
        blurDataURL: o,
        objectFit: n
    }) {
        let l = i ? 40 * i : e,
            a = r ? 40 * r : t,
            c = l && a ? `viewBox='0 0 ${l} ${a}'` : "";
        return `%3Csvg xmlns='http://www.w3.org/2000/svg' ${c}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${c?"none":"contain"===n?"xMidYMid":"cover"===n?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${o}'/%3E%3C/svg%3E`
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "getImageBlurSvg", {
        enumerable: !0,
        get: function() {
            return s
        }
    })
}, 87690, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var s = {
        VALID_LOADERS: function() {
            return o
        },
        imageConfigDefault: function() {
            return n
        }
    };
    for (var r in s) Object.defineProperty(i, r, {
        enumerable: !0,
        get: s[r]
    });
    let o = ["default", "imgix", "cloudinary", "akamai", "custom"],
        n = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            path: "/_next/image",
            loader: "default",
            loaderFile: "",
            domains: [],
            disableStaticImages: !1,
            minimumCacheTTL: 14400,
            formats: ["image/webp"],
            maximumDiskCacheSize: void 0,
            maximumRedirects: 3,
            maximumResponseBody: 5e7,
            dangerouslyAllowLocalIP: !1,
            dangerouslyAllowSVG: !1,
            contentSecurityPolicy: "script-src 'none'; frame-src 'none'; sandbox;",
            contentDispositionType: "attachment",
            localPatterns: void 0,
            remotePatterns: [],
            qualities: [75],
            unoptimized: !1,
            customCacheHandler: !1
        }
}, 8927, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "getImgProps", {
        enumerable: !0,
        get: function() {
            return c
        }
    }), e.r(33525);
    let s = e.r(43369),
        r = e.r(88143),
        o = e.r(87690),
        n = ["-moz-initial", "fill", "none", "scale-down", void 0];

    function l(e) {
        return void 0 !== e.default
    }

    function a(e) {
        return void 0 === e ? e : "number" == typeof e ? Number.isFinite(e) ? e : NaN : "string" == typeof e && /^[0-9]+$/.test(e) ? parseInt(e, 10) : NaN
    }

    function c({
        src: e,
        sizes: t,
        unoptimized: i = !1,
        priority: h = !1,
        preload: u = !1,
        loading: d,
        className: p,
        quality: f,
        width: m,
        height: v,
        fill: g = !1,
        style: w,
        overrideSrc: y,
        onLoad: b,
        onLoadingComplete: S,
        placeholder: x = "empty",
        blurDataURL: C,
        fetchPriority: E,
        decoding: _ = "async",
        layout: R,
        objectFit: j,
        objectPosition: z,
        lazyBoundary: O,
        lazyRoot: P,
        ...N
    }, T) {
        var L;
        let M, k, H, {
                imgConf: A,
                showAltText: I,
                blurComplete: W,
                defaultLoader: D
            } = T,
            V = A || o.imageConfigDefault;
        if ("allSizes" in V) M = V;
        else {
            let e = [...V.deviceSizes, ...V.imageSizes].sort((e, t) => e - t),
                t = V.deviceSizes.sort((e, t) => e - t),
                i = V.qualities ? .sort((e, t) => e - t);
            M = { ...V,
                allSizes: e,
                deviceSizes: t,
                qualities: i
            }
        }
        if (void 0 === D) throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"), "__NEXT_ERROR_CODE", {
            value: "E163",
            enumerable: !1,
            configurable: !0
        });
        let $ = N.loader || D;
        delete N.loader, delete N.srcSet;
        let U = "__next_img_default" in $;
        if (U) {
            if ("custom" === M.loader) throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`), "__NEXT_ERROR_CODE", {
                value: "E252",
                enumerable: !1,
                configurable: !0
            })
        } else {
            let e = $;
            $ = t => {
                let {
                    config: i,
                    ...s
                } = t;
                return e(s)
            }
        }
        if (R) {
            "fill" === R && (g = !0);
            let e = {
                intrinsic: {
                    maxWidth: "100%",
                    height: "auto"
                },
                responsive: {
                    width: "100%",
                    height: "auto"
                }
            }[R];
            e && (w = { ...w,
                ...e
            });
            let i = {
                responsive: "100vw",
                fill: "100vw"
            }[R];
            i && !t && (t = i)
        }
        let B = "",
            F = a(m),
            q = a(v);
        if ((L = e) && "object" == typeof L && (l(L) || void 0 !== L.src)) {
            let t = l(e) ? e.default : e;
            if (!t.src) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E460",
                enumerable: !1,
                configurable: !0
            });
            if (!t.height || !t.width) throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`), "__NEXT_ERROR_CODE", {
                value: "E48",
                enumerable: !1,
                configurable: !0
            });
            if (k = t.blurWidth, H = t.blurHeight, C = C || t.blurDataURL, B = t.src, !g)
                if (F || q) {
                    if (F && !q) {
                        let e = F / t.width;
                        q = Math.round(t.height * e)
                    } else if (!F && q) {
                        let e = q / t.height;
                        F = Math.round(t.width * e)
                    }
                } else F = t.width, q = t.height
        }
        let X = !h && !u && ("lazy" === d || void 0 === d);
        (!(e = "string" == typeof e ? e : B) || e.startsWith("data:") || e.startsWith("blob:")) && (i = !0, X = !1), M.unoptimized && (i = !0), U && !M.dangerouslyAllowSVG && e.split("?", 1)[0].endsWith(".svg") && (i = !0);
        let Y = a(f),
            G = Object.assign(g ? {
                position: "absolute",
                height: "100%",
                width: "100%",
                left: 0,
                top: 0,
                right: 0,
                bottom: 0,
                objectFit: j,
                objectPosition: z
            } : {}, I ? {} : {
                color: "transparent"
            }, w),
            Z = W || "empty" === x ? null : "blur" === x ? `url("data:image/svg+xml;charset=utf-8,${(0,r.getImageBlurSvg)({widthInt:F,heightInt:q,blurWidth:k,blurHeight:H,blurDataURL:C||"",objectFit:G.objectFit})}")` : `url("${x}")`,
            J = n.includes(G.objectFit) ? "fill" === G.objectFit ? "100% 100%" : "cover" : G.objectFit,
            K = Z ? {
                backgroundSize: J,
                backgroundPosition: G.objectPosition || "50% 50%",
                backgroundRepeat: "no-repeat",
                backgroundImage: Z
            } : {},
            Q = function({
                config: e,
                src: t,
                unoptimized: i,
                width: r,
                quality: o,
                sizes: n,
                loader: l
            }) {
                if (i) {
                    if (t.startsWith("/") && !t.startsWith("//")) {
                        let e = (0, s.getDeploymentId)();
                        if (e) {
                            let i = t.indexOf("?");
                            if (-1 !== i) {
                                let s = new URLSearchParams(t.slice(i + 1));
                                s.get("dpl") || (s.append("dpl", e), t = t.slice(0, i) + "?" + s.toString())
                            } else t += `?dpl=${e}`
                        }
                    }
                    return {
                        src: t,
                        srcSet: void 0,
                        sizes: void 0
                    }
                }
                let {
                    widths: a,
                    kind: c
                } = function({
                    deviceSizes: e,
                    allSizes: t
                }, i, s) {
                    if (s) {
                        let i = /(^|\s)(1?\d?\d)vw/g,
                            r = [];
                        for (let e; e = i.exec(s);) r.push(parseInt(e[2]));
                        if (r.length) {
                            let i = .01 * Math.min(...r);
                            return {
                                widths: t.filter(t => t >= e[0] * i),
                                kind: "w"
                            }
                        }
                        return {
                            widths: t,
                            kind: "w"
                        }
                    }
                    return "number" != typeof i ? {
                        widths: e,
                        kind: "w"
                    } : {
                        widths: [...new Set([i, 2 * i].map(e => t.find(t => t >= e) || t[t.length - 1]))],
                        kind: "x"
                    }
                }(e, r, n), h = a.length - 1;
                return {
                    sizes: n || "w" !== c ? n : "100vw",
                    srcSet: a.map((i, s) => `${l({config:e,src:t,quality:o,width:i})} ${"w"===c?i:s+1}${c}`).join(", "),
                    src: l({
                        config: e,
                        src: t,
                        quality: o,
                        width: a[h]
                    })
                }
            }({
                config: M,
                src: e,
                unoptimized: i,
                width: F,
                quality: Y,
                sizes: t,
                loader: $
            }),
            ee = X ? "lazy" : d;
        return {
            props: { ...N,
                loading: ee,
                fetchPriority: E,
                width: F,
                height: q,
                decoding: _,
                className: p,
                style: { ...G,
                    ...K
                },
                sizes: Q.sizes,
                srcSet: Q.srcSet,
                src: y || Q.src
            },
            meta: {
                unoptimized: i,
                preload: u || h,
                placeholder: x,
                fill: g
            }
        }
    }
}, 98879, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let s = e.r(71645),
        r = "u" < typeof window,
        o = r ? () => {} : s.useLayoutEffect,
        n = r ? () => {} : s.useEffect;

    function l(e) {
        let {
            headManager: t,
            reduceComponentsToState: i
        } = e;

        function l() {
            if (t && t.mountedInstances) {
                let e = s.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));
                t.updateHead(i(e))
            }
        }
        return r && (t ? .mountedInstances ? .add(e.children), l()), o(() => (t ? .mountedInstances ? .add(e.children), () => {
            t ? .mountedInstances ? .delete(e.children)
        })), o(() => (t && (t._pendingUpdate = l), () => {
            t && (t._pendingUpdate = l)
        })), n(() => (t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null), () => {
            t && t._pendingUpdate && (t._pendingUpdate(), t._pendingUpdate = null)
        })), null
    }
}, 25633, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var s = {
        default: function() {
            return m
        },
        defaultHead: function() {
            return u
        }
    };
    for (var r in s) Object.defineProperty(i, r, {
        enumerable: !0,
        get: s[r]
    });
    let o = e.r(55682),
        n = e.r(90809),
        l = e.r(43476),
        a = n._(e.r(71645)),
        c = o._(e.r(98879)),
        h = e.r(42732);

    function u() {
        return [(0, l.jsx)("meta", {
            charSet: "utf-8"
        }, "charset"), (0, l.jsx)("meta", {
            name: "viewport",
            content: "width=device-width"
        }, "viewport")]
    }

    function d(e, t) {
        return "string" == typeof t || "number" == typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((e, t) => "string" == typeof t || "number" == typeof t ? e : e.concat(t), [])) : e.concat(t)
    }
    e.r(33525);
    let p = ["name", "httpEquiv", "charSet", "itemProp"];

    function f(e) {
        let t, i, s, r;
        return e.reduce(d, []).reverse().concat(u().reverse()).filter((t = new Set, i = new Set, s = new Set, r = {}, e => {
            let o = !0,
                n = !1;
            if (e.key && "number" != typeof e.key && e.key.indexOf("$") > 0) {
                n = !0;
                let i = e.key.slice(e.key.indexOf("$") + 1);
                t.has(i) ? o = !1 : t.add(i)
            }
            switch (e.type) {
                case "title":
                case "base":
                    i.has(e.type) ? o = !1 : i.add(e.type);
                    break;
                case "meta":
                    for (let t = 0, i = p.length; t < i; t++) {
                        let i = p[t];
                        if (e.props.hasOwnProperty(i))
                            if ("charSet" === i) s.has(i) ? o = !1 : s.add(i);
                            else {
                                let t = e.props[i],
                                    s = r[i] || new Set;
                                ("name" !== i || !n) && s.has(t) ? o = !1 : (s.add(t), r[i] = s)
                            }
                    }
            }
            return o
        })).reverse().map((e, t) => {
            let i = e.key || t;
            return a.default.cloneElement(e, {
                key: i
            })
        })
    }
    let m = function({
        children: e
    }) {
        let t = (0, a.useContext)(h.HeadManagerContext);
        return (0, l.jsx)(c.default, {
            reduceComponentsToState: f,
            headManager: t,
            children: e
        })
    };
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 18556, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "ImageConfigContext", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let s = e.r(55682)._(e.r(71645)),
        r = e.r(87690),
        o = s.default.createContext(r.imageConfigDefault)
}, 65856, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "RouterContext", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let s = e.r(55682)._(e.r(71645)).default.createContext(null)
}, 70965, (e, t, i) => {
    "use strict";

    function s(e, t) {
        let i = e || 75;
        return t ? .qualities ? .length ? t.qualities.reduce((e, t) => Math.abs(t - i) < Math.abs(e - i) ? t : e, t.qualities[0]) : i
    }
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "findClosestQuality", {
        enumerable: !0,
        get: function() {
            return s
        }
    })
}, 1948, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "default", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let s = e.r(70965),
        r = e.r(43369);

    function o({
        config: e,
        src: t,
        width: i,
        quality: n
    }) {
        let l = (0, r.getDeploymentId)();
        if (t.startsWith("/") && !t.startsWith("//")) {
            let e = t.indexOf("?");
            if (-1 !== e) {
                let i = new URLSearchParams(t.slice(e + 1)),
                    s = i.get("dpl");
                if (s) {
                    l = s, i.delete("dpl");
                    let r = i.toString();
                    t = t.slice(0, e) + (r ? "?" + r : "")
                }
            }
        }
        if (t.startsWith("/") && t.includes("?") && e.localPatterns ? .length === 1 && "**" === e.localPatterns[0].pathname && "" === e.localPatterns[0].search) throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`), "__NEXT_ERROR_CODE", {
            value: "E871",
            enumerable: !1,
            configurable: !0
        });
        let a = (0, s.findClosestQuality)(n, e);
        return `${e.path}?url=${encodeURIComponent(t)}&w=${i}&q=${a}${t.startsWith("/")&&l?`&dpl=${l}`:""}`
    }
    o.__next_img_default = !0;
    let n = o
}, 5500, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    }), Object.defineProperty(i, "Image", {
        enumerable: !0,
        get: function() {
            return b
        }
    });
    let s = e.r(55682),
        r = e.r(90809),
        o = e.r(43476),
        n = r._(e.r(71645)),
        l = s._(e.r(74080)),
        a = s._(e.r(25633)),
        c = e.r(8927),
        h = e.r(87690),
        u = e.r(18556);
    e.r(33525);
    let d = e.r(65856),
        p = s._(e.r(1948)),
        f = e.r(18581),
        m = {
            deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
            imageSizes: [32, 48, 64, 96, 128, 256, 384],
            qualities: [75],
            path: "/_next/image",
            loader: "default",
            dangerouslyAllowSVG: !1,
            unoptimized: !0
        };

    function v(e, t, i, s, r, o, n) {
        let l = e ? .src;
        e && e["data-loaded-src"] !== l && (e["data-loaded-src"] = l, ("decode" in e ? e.decode() : Promise.resolve()).catch(() => {}).then(() => {
            if (e.parentElement && e.isConnected) {
                if ("empty" !== t && r(!0), i ? .current) {
                    let t = new Event("load");
                    Object.defineProperty(t, "target", {
                        writable: !1,
                        value: e
                    });
                    let s = !1,
                        r = !1;
                    i.current({ ...t,
                        nativeEvent: t,
                        currentTarget: e,
                        target: e,
                        isDefaultPrevented: () => s,
                        isPropagationStopped: () => r,
                        persist: () => {},
                        preventDefault: () => {
                            s = !0, t.preventDefault()
                        },
                        stopPropagation: () => {
                            r = !0, t.stopPropagation()
                        }
                    })
                }
                s ? .current && s.current(e)
            }
        }))
    }

    function g(e) {
        return n.use ? {
            fetchPriority: e
        } : {
            fetchpriority: e
        }
    }
    "u" < typeof window && (globalThis.__NEXT_IMAGE_IMPORTED = !0);
    let w = (0, n.forwardRef)(({
        src: e,
        srcSet: t,
        sizes: i,
        height: s,
        width: r,
        decoding: l,
        className: a,
        style: c,
        fetchPriority: h,
        placeholder: u,
        loading: d,
        unoptimized: p,
        fill: m,
        onLoadRef: w,
        onLoadingCompleteRef: y,
        setBlurComplete: b,
        setShowAltText: S,
        sizesInput: x,
        onLoad: C,
        onError: E,
        ..._
    }, R) => {
        let j = (0, n.useCallback)(e => {
                e && (E && (e.src = e.src), e.complete && v(e, u, w, y, b, p, x))
            }, [e, u, w, y, b, E, p, x]),
            z = (0, f.useMergedRef)(R, j);
        return (0, o.jsx)("img", { ..._,
            ...g(h),
            loading: d,
            width: r,
            height: s,
            decoding: l,
            "data-nimg": m ? "fill" : "1",
            className: a,
            style: c,
            sizes: i,
            srcSet: t,
            src: e,
            ref: z,
            onLoad: e => {
                v(e.currentTarget, u, w, y, b, p, x)
            },
            onError: e => {
                S(!0), "empty" !== u && b(!0), E && E(e)
            }
        })
    });

    function y({
        isAppRouter: e,
        imgAttributes: t
    }) {
        let i = {
            as: "image",
            imageSrcSet: t.srcSet,
            imageSizes: t.sizes,
            crossOrigin: t.crossOrigin,
            referrerPolicy: t.referrerPolicy,
            ...g(t.fetchPriority)
        };
        return e && l.default.preload ? (l.default.preload(t.src, i), null) : (0, o.jsx)(a.default, {
            children: (0, o.jsx)("link", {
                rel: "preload",
                href: t.srcSet ? void 0 : t.src,
                ...i
            }, "__nimg-" + t.src + t.srcSet + t.sizes)
        })
    }
    let b = (0, n.forwardRef)((e, t) => {
        let i = (0, n.useContext)(d.RouterContext),
            s = (0, n.useContext)(u.ImageConfigContext),
            r = (0, n.useMemo)(() => {
                let e = m || s || h.imageConfigDefault,
                    t = [...e.deviceSizes, ...e.imageSizes].sort((e, t) => e - t),
                    i = e.deviceSizes.sort((e, t) => e - t),
                    r = e.qualities ? .sort((e, t) => e - t);
                return { ...e,
                    allSizes: t,
                    deviceSizes: i,
                    qualities: r,
                    localPatterns: "u" < typeof window ? s ? .localPatterns : e.localPatterns
                }
            }, [s]),
            {
                onLoad: l,
                onLoadingComplete: a
            } = e,
            f = (0, n.useRef)(l);
        (0, n.useEffect)(() => {
            f.current = l
        }, [l]);
        let v = (0, n.useRef)(a);
        (0, n.useEffect)(() => {
            v.current = a
        }, [a]);
        let [g, b] = (0, n.useState)(!1), [S, x] = (0, n.useState)(!1), {
            props: C,
            meta: E
        } = (0, c.getImgProps)(e, {
            defaultLoader: p.default,
            imgConf: r,
            blurComplete: g,
            showAltText: S
        });
        return (0, o.jsxs)(o.Fragment, {
            children: [(0, o.jsx)(w, { ...C,
                unoptimized: E.unoptimized,
                placeholder: E.placeholder,
                fill: E.fill,
                onLoadRef: f,
                onLoadingCompleteRef: v,
                setBlurComplete: b,
                setShowAltText: x,
                sizesInput: e.sizes,
                ref: t
            }), E.preload ? (0, o.jsx)(y, {
                isAppRouter: !i,
                imgAttributes: C
            }) : null]
        })
    });
    ("function" == typeof i.default || "object" == typeof i.default && null !== i.default) && void 0 === i.default.__esModule && (Object.defineProperty(i.default, "__esModule", {
        value: !0
    }), Object.assign(i.default, i), t.exports = i.default)
}, 94909, (e, t, i) => {
    "use strict";
    Object.defineProperty(i, "__esModule", {
        value: !0
    });
    var s = {
        default: function() {
            return h
        },
        getImageProps: function() {
            return c
        }
    };
    for (var r in s) Object.defineProperty(i, r, {
        enumerable: !0,
        get: s[r]
    });
    let o = e.r(55682),
        n = e.r(8927),
        l = e.r(5500),
        a = o._(e.r(1948));

    function c(e) {
        let {
            props: t
        } = (0, n.getImgProps)(e, {
            defaultLoader: a.default,
            imgConf: {
                deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
                imageSizes: [32, 48, 64, 96, 128, 256, 384],
                qualities: [75],
                path: "/_next/image",
                loader: "default",
                dangerouslyAllowSVG: !1,
                unoptimized: !0
            }
        });
        for (let [e, i] of Object.entries(t)) void 0 === i && delete t[e];
        return {
            props: t
        }
    }
    let h = l.Image
}, 57688, (e, t, i) => {
    t.exports = e.r(94909)
}, 36497, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(71645),
        s = e.i(18566);
    let r = (0, i.createContext)({
        isOpen: !1,
        open: () => {},
        close: () => {},
        toggle: () => {},
        isSuppressed: !1
    });
    e.s(["ContactPopupProvider", 0, function({
        children: e
    }) {
        let [o, n] = (0, i.useState)(!1), l = "/contact" === (0, s.usePathname)(), a = (0, i.useCallback)(() => {
            l ? window.dispatchEvent(new CustomEvent("trionn-scroll-to", {
                detail: {
                    target: "#contact-forms-section"
                }
            })) : n(!0)
        }, [l]), c = (0, i.useCallback)(() => n(!1), []), h = (0, i.useCallback)(() => {
            n(e => !e && !l)
        }, [l]);
        o && l && n(!1);
        let u = (0, i.useMemo)(() => ({
            isOpen: o,
            open: a,
            close: c,
            toggle: h,
            isSuppressed: l
        }), [o, a, c, h, l]);
        return (0, t.jsx)(r.Provider, {
            value: u,
            children: e
        })
    }, "useContactPopup", 0, () => (0, i.useContext)(r)])
}, 67273, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(71645),
        s = e.i(22016),
        r = e.i(89970),
        o = e.i(65747);
    e.i(84422);
    var n = e.i(44029);
    e.i(83390);
    var l = e.i(34470),
        a = e.i(36497),
        c = e.i(42163);
    r.default.registerPlugin(o.useGSAP);
    let h = c.enquiry.find(e => e.url.startsWith("mailto:")) ? .title ? ? "hello@trionn.com";
    e.s(["default", 0, function() {
        let {
            isOpen: e,
            close: u
        } = (0, a.useContactPopup)(), d = (0, i.useRef)(null), p = (0, i.useRef)(null), f = (0, i.useRef)(null), m = (0, i.useRef)(null);
        return (0, o.useGSAP)(() => {
            let e = r.default.matchMedia();
            return e.add("(min-width: 768px)", () => {
                r.default.set(f.current, {
                    x: 0
                }), m.current = r.default.timeline({
                    paused: !0
                }).to(p.current, {
                    autoAlpha: 1,
                    duration: 0
                }, 0).fromTo(f.current, {
                    clipPath: "circle(0% at 95% 5%)",
                    scale: .9,
                    rotation: 2,
                    autoAlpha: 0
                }, {
                    clipPath: "circle(150% at 0% 5%)",
                    scale: 1,
                    rotation: 0,
                    autoAlpha: 1,
                    duration: 1.2,
                    ease: "expo.inOut"
                }, 0).fromTo(".contact-popup-inner .stagger-item", {
                    y: 20,
                    autoAlpha: 0
                }, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .6,
                    stagger: .07,
                    ease: "power2.out"
                }, "<0.6")
            }), e.add("(max-width: 767px)", () => {
                r.default.set(f.current, {
                    clipPath: "none",
                    scale: 1,
                    rotation: 0,
                    autoAlpha: 1,
                    x: "100%"
                }), m.current = r.default.timeline({
                    paused: !0
                }).to(p.current, {
                    autoAlpha: 1,
                    duration: 0
                }, 0).fromTo(f.current, {
                    x: "100%"
                }, {
                    x: "0%",
                    duration: .8,
                    ease: "expo.inOut"
                }, 0).fromTo(".contact-popup-inner .stagger-item", {
                    y: 20,
                    autoAlpha: 0
                }, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .5,
                    stagger: .05,
                    ease: "power2.out"
                }, .4)
            }), () => e.revert()
        }, {
            scope: d
        }), (0, i.useEffect)(() => {
            m.current && (e ? m.current.timeScale(1).play() : m.current.timeScale(1.75).reverse())
        }, [e]), (0, i.useEffect)(() => {
            if (!e) return;
            let t = window.innerWidth < 768,
                i = window.scrollY,
                s = e => {
                    "Escape" === e.key && u()
                },
                r = () => {
                    Math.abs(window.scrollY - i) > 50 && u()
                },
                o = !t,
                n = () => {
                    window.innerWidth >= 768 !== o && u()
                },
                l = () => u();
            return t ? document.body.style.overflow = "hidden" : window.addEventListener("scroll", r, {
                passive: !0
            }), window.addEventListener("keydown", s), window.addEventListener("resize", n), window.addEventListener("trionn-transition:start", l), () => {
                document.body.style.overflow = "", window.removeEventListener("scroll", r), window.removeEventListener("keydown", s), window.removeEventListener("resize", n), window.removeEventListener("trionn-transition:start", l)
            }
        }, [e, u]), (0, t.jsx)("div", {
            ref: d,
            children: (0, t.jsxs)("div", {
                ref: p,
                role: "dialog",
                "aria-modal": "true",
                "aria-label": "Contact TRIONN",
                "aria-hidden": !e,
                className: "contact-popup-wrapper invisible opacity-0 fixed inset-0 z-100 flex justify-end md:p-4 pointer-events-none",
                children: [(0, t.jsx)("div", {
                    className: `contact-popup-backdrop absolute inset-0 ${e?"pointer-events-auto":"pointer-events-none"}`,
                    onClick: u
                }), (0, t.jsxs)("div", {
                    ref: f,
                    "data-lenis-prevent": "true",
                    className: "contact-popup-panel no-scrollbar relative z-5 w-full md:max-w-136 h-full md:max-h-full overflow-y-auto overscroll-contain bg-white text-dark-font md:rounded-lg md:border md:border-cream pointer-events-auto",
                    style: {
                        clipPath: "circle(0% at 95% 5%)",
                        opacity: 0,
                        visibility: "hidden"
                    },
                    children: [(0, t.jsx)("button", {
                        type: "button",
                        onClick: u,
                        "aria-label": "Close contact form",
                        className: "absolute top-3 right-3 z-20 flex h-7 w-7 items-center justify-center rounded-full border border-[#111214]/15 text-[#111214] transition-colors duration-300 hover:border-[#111214]/60 cursor-pointer",
                        children: (0, t.jsx)("svg", {
                            viewBox: "0 0 24 24",
                            className: "h-2.5 w-2.5",
                            "aria-hidden": "true",
                            children: (0, t.jsx)("path", {
                                d: "M4 4 L20 20 M20 4 L4 20",
                                stroke: "currentColor",
                                strokeWidth: "1.5",
                                strokeLinecap: "round"
                            })
                        })
                    }), (0, t.jsxs)("div", {
                        className: "contact-popup-inner flex min-h-full w-full flex-col p-6 md:p-10 text-dark-font justify-between",
                        children: [(0, t.jsxs)("div", {
                            className: "z-3 relative",
                            children: [(0, t.jsxs)("div", {
                                className: "stagger-item flex flex-col gap-2 mb-4",
                                children: [(0, t.jsx)("h2", {
                                    className: "h3",
                                    children: "Let's build something great."
                                }), (0, t.jsx)("p", {
                                    className: "small max-w-74",
                                    children: "Tell us about your project, we usually reply within one business day."
                                })]
                            }), (0, t.jsx)("div", {
                                className: "stagger-item mb-8",
                                children: (0, t.jsx)(n.ContactForm, {
                                    variant: "light",
                                    layout: "stack",
                                    showReplyNote: !1
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "stagger-item flex flex-col items-center z-2 relative",
                            children: (0, t.jsxs)("div", {
                                className: "flex items-center gap-4 mb-6 w-full",
                                children: [(0, t.jsx)("span", {
                                    className: "h-px flex-1 bg-black/10"
                                }), (0, t.jsx)("span", {
                                    className: "title text-black/60",
                                    children: "or"
                                }), (0, t.jsx)("span", {
                                    className: "h-px flex-1 bg-black/10"
                                })]
                            })
                        }), (0, t.jsxs)("div", {
                            className: "stagger-item flex flex-col items-center z-2 relative",
                            children: [(0, t.jsxs)(s.default, {
                                href: c.bookACallUrl,
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "group flex items-center justify-center rounded-lg border border-black bg-cream px-10 py-4 button-text uppercase text-dark-font transition-colors duration-300 hover:border-black hover:bg-black hover:text-light-font relative w-full",
                                children: [(0, t.jsxs)("svg", {
                                    width: "20",
                                    height: "20",
                                    viewBox: "0 0 20 20",
                                    fill: "none",
                                    xmlns: "http://www.w3.org/2000/svg",
                                    className: "absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5",
                                    children: [(0, t.jsx)("path", {
                                        d: "M18.6667 4.38667C18.6657 3.5524 18.3339 2.75257 17.744 2.16265C17.1541 1.57274 16.3543 1.24092 15.52 1.24H14.9524V0.666667C14.9524 0.489856 14.8822 0.320286 14.7571 0.195262C14.6321 0.0702379 14.4625 0 14.2857 0C14.1089 0 13.9394 0.0702379 13.8143 0.195262C13.6893 0.320286 13.6191 0.489856 13.6191 0.666667V1.24H5.04813V0.666667C5.04813 0.489856 4.9779 0.320286 4.85287 0.195262C4.72785 0.0702379 4.55828 0 4.38147 0C4.20466 0 4.03509 0.0702379 3.91006 0.195262C3.78504 0.320286 3.7148 0.489856 3.7148 0.666667V1.24H3.14667C2.3124 1.24092 1.51257 1.57274 0.922651 2.16265C0.332735 2.75257 0.000917591 3.5524 0 4.38667V15.52C0.000917591 16.3543 0.332735 17.1541 0.922651 17.744C1.51257 18.3339 2.3124 18.6657 3.14667 18.6667H10.2753C11.3281 19.5237 12.6426 19.9942 14 20C15.5908 19.9982 17.1159 19.3655 18.2407 18.2407C19.3655 17.1159 19.9982 15.5908 20 14C19.9942 12.6426 19.5237 11.3281 18.6667 10.2753V4.38667ZM3.14667 2.57333H3.71427V3.14227C3.71427 3.31908 3.7845 3.48865 3.90953 3.61367C4.03455 3.7387 4.20412 3.80893 4.38093 3.80893C4.55774 3.80893 4.72731 3.7387 4.85234 3.61367C4.97736 3.48865 5.0476 3.31908 5.0476 3.14227V2.57333H13.618V3.14227C13.618 3.31908 13.6882 3.48865 13.8133 3.61367C13.9383 3.7387 14.1079 3.80893 14.2847 3.80893C14.4615 3.80893 14.631 3.7387 14.7561 3.61367C14.8811 3.48865 14.9513 3.31908 14.9513 3.14227V2.57333H15.52C16.0008 2.5739 16.4617 2.76513 16.8016 3.10507C17.1415 3.44501 17.3328 3.90591 17.3333 4.38667V4.95253H1.33333V4.38667C1.3339 3.90591 1.52513 3.44501 1.86507 3.10507C2.20501 2.76513 2.66591 2.5739 3.14667 2.57333ZM1.33333 15.52V6.28587H17.3333V9.01573C16.18 8.24232 14.794 7.89329 13.4119 8.02824C12.0299 8.16319 10.7376 8.77376 9.75566 9.75566C8.77376 10.7376 8.16319 12.0299 8.02824 13.4119C7.89329 14.794 8.24232 16.18 9.01573 17.3333H3.14667C2.66592 17.3327 2.20504 17.1415 1.86511 16.8016C1.52517 16.4616 1.33393 16.0007 1.33333 15.52ZM14 18.6667C13.077 18.6667 12.1748 18.393 11.4073 17.8802C10.6399 17.3674 10.0418 16.6386 9.68856 15.7859C9.33535 14.9331 9.24294 13.9948 9.423 13.0896C9.60307 12.1843 10.0475 11.3528 10.7002 10.7002C11.3528 10.0475 12.1843 9.60307 13.0896 9.423C13.9948 9.24294 14.9331 9.33535 15.7859 9.68856C16.6386 10.0418 17.3674 10.6399 17.8802 11.4073C18.393 12.1748 18.6667 13.077 18.6667 14C18.6652 15.2372 18.173 16.4233 17.2982 17.2982C16.4233 18.173 15.2372 18.6652 14 18.6667Z",
                                        fill: "currentColor"
                                    }), (0, t.jsx)("path", {
                                        d: "M14.6667 13.7243V11.3337C14.6667 11.1568 14.5965 10.9873 14.4714 10.8623C14.3464 10.7372 14.1769 10.667 14 10.667C13.8232 10.667 13.6537 10.7372 13.5286 10.8623C13.4036 10.9873 13.3334 11.1568 13.3334 11.3337V14.0003C13.3333 14.0879 13.3506 14.1746 13.3841 14.2554C13.4176 14.3363 13.4668 14.4098 13.5287 14.4717L14.862 15.805C14.9878 15.9264 15.1562 15.9936 15.331 15.9921C15.5058 15.9906 15.673 15.9205 15.7966 15.7969C15.9202 15.6733 15.9903 15.5061 15.9918 15.3313C15.9933 15.1565 15.9261 14.9881 15.8047 14.8623L14.6667 13.7243Z",
                                        fill: "currentColor"
                                    })]
                                }), "Book a 30-minute call"]
                            }), (0, t.jsxs)("p", {
                                className: "small text-center text-dark-font/60 mt-6",
                                children: ["Prefer email? ", (0, t.jsx)(s.default, {
                                    href: `mailto:${h}`,
                                    className: "text-dark-font",
                                    children: (0, t.jsx)(l.HoverBlur, {
                                        className: "text-dark-font!",
                                        children: h
                                    })
                                })]
                            })]
                        })]
                    })]
                })]
            })
        })
    }])
}, 66961, e => {
    "use strict";
    var t = e.i(43476),
        i = e.i(67080),
        s = e.i(36497);
    e.s(["default", 0, function({
        text: e,
        customClass: r,
        styleVars: o
    }) {
        let {
            open: n
        } = (0, s.useContactPopup)();
        return (0, t.jsx)(i.default, {
            text: e,
            customClass: r,
            styleVars: o,
            onClick: n,
            ariaLabel: `${e} — open the inquiry form`
        })
    }])
}, 52819, e => {
    "use strict";
    e.i(67273), e.i(66961), e.i(36497), e.s([])
}, 54090, e => {
    "use strict";
    var t = e.i(66961);
    e.s(["ContactCTA", () => t.default])
}, 55667, e => {
    "use strict";
    var t = "1.3.23";

    function i(e, t, i) {
        return Math.max(e, Math.min(t, i))
    }
    var s = class {
            isRunning = !1;
            value = 0;
            from = 0;
            to = 0;
            currentTime = 0;
            lerp;
            duration;
            easing;
            onUpdate;
            advance(e) {
                if (!this.isRunning) return;
                let t = !1;
                if (this.duration && this.easing) {
                    this.currentTime += e;
                    let s = i(0, this.currentTime / this.duration, 1),
                        r = (t = s >= 1) ? 1 : this.easing(s);
                    this.value = this.from + (this.to - this.from) * r
                } else if (this.lerp) {
                    var s, r, o, n;
                    this.value = (s = this.value, r = this.to, o = 60 * this.lerp, (1 - (n = 1 - Math.exp(-o * e))) * s + n * r), Math.round(this.value) === Math.round(this.to) && (this.value = this.to, t = !0)
                } else this.value = this.to, t = !0;
                t && this.stop(), this.onUpdate ? .(this.value, t)
            }
            stop() {
                this.isRunning = !1
            }
            fromTo(e, t, {
                lerp: i,
                duration: s,
                easing: r,
                onStart: o,
                onUpdate: n
            }) {
                this.from = this.value = e, this.to = t, this.lerp = i, this.duration = s, this.easing = r, this.currentTime = 0, this.isRunning = !0, o ? .(), this.onUpdate = n
            }
        },
        r = class {
            width = 0;
            height = 0;
            scrollHeight = 0;
            scrollWidth = 0;
            debouncedResize;
            wrapperResizeObserver;
            contentResizeObserver;
            constructor(e, t, {
                autoResize: i = !0,
                debounce: s = 250
            } = {}) {
                this.wrapper = e, this.content = t, i && (this.debouncedResize = function(e, t) {
                    let i;
                    return function(...s) {
                        clearTimeout(i), i = setTimeout(() => {
                            i = void 0, e.apply(this, s)
                        }, t)
                    }
                }(this.resize, s), this.wrapper instanceof Window ? window.addEventListener("resize", this.debouncedResize) : (this.wrapperResizeObserver = new ResizeObserver(this.debouncedResize), this.wrapperResizeObserver.observe(this.wrapper)), this.contentResizeObserver = new ResizeObserver(this.debouncedResize), this.contentResizeObserver.observe(this.content)), this.resize()
            }
            destroy() {
                this.wrapperResizeObserver ? .disconnect(), this.contentResizeObserver ? .disconnect(), this.wrapper === window && this.debouncedResize && window.removeEventListener("resize", this.debouncedResize)
            }
            resize = () => {
                this.onWrapperResize(), this.onContentResize()
            };
            onWrapperResize = () => {
                this.wrapper instanceof Window ? (this.width = window.innerWidth, this.height = window.innerHeight) : (this.width = this.wrapper.clientWidth, this.height = this.wrapper.clientHeight)
            };
            onContentResize = () => {
                this.wrapper instanceof Window ? (this.scrollHeight = this.content.scrollHeight, this.scrollWidth = this.content.scrollWidth) : (this.scrollHeight = this.wrapper.scrollHeight, this.scrollWidth = this.wrapper.scrollWidth)
            };
            get limit() {
                return {
                    x: this.scrollWidth - this.width,
                    y: this.scrollHeight - this.height
                }
            }
        },
        o = class {
            events = {};
            emit(e, ...t) {
                let i = this.events[e] || [];
                for (let e = 0, s = i.length; e < s; e++) i[e] ? .(...t)
            }
            on(e, t) {
                return this.events[e] ? this.events[e].push(t) : this.events[e] = [t], () => {
                    this.events[e] = this.events[e] ? .filter(e => t !== e)
                }
            }
            off(e, t) {
                this.events[e] = this.events[e] ? .filter(e => t !== e)
            }
            destroy() {
                this.events = {}
            }
        };
    let n = 100 / 6,
        l = {
            passive: !1
        };

    function a(e, t) {
        return 1 === e ? n : 2 === e ? t : 1
    }
    var c = class {
        touchStart = {
            x: 0,
            y: 0
        };
        lastDelta = {
            x: 0,
            y: 0
        };
        window = {
            width: 0,
            height: 0
        };
        emitter = new o;
        constructor(e, t = {
            wheelMultiplier: 1,
            touchMultiplier: 1
        }) {
            this.element = e, this.options = t, window.addEventListener("resize", this.onWindowResize), this.onWindowResize(), this.element.addEventListener("wheel", this.onWheel, l), this.element.addEventListener("touchstart", this.onTouchStart, l), this.element.addEventListener("touchmove", this.onTouchMove, l), this.element.addEventListener("touchend", this.onTouchEnd, l)
        }
        on(e, t) {
            return this.emitter.on(e, t)
        }
        destroy() {
            this.emitter.destroy(), window.removeEventListener("resize", this.onWindowResize), this.element.removeEventListener("wheel", this.onWheel, l), this.element.removeEventListener("touchstart", this.onTouchStart, l), this.element.removeEventListener("touchmove", this.onTouchMove, l), this.element.removeEventListener("touchend", this.onTouchEnd, l)
        }
        onTouchStart = e => {
            let {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: 0,
                y: 0
            }, this.emitter.emit("scroll", {
                deltaX: 0,
                deltaY: 0,
                event: e
            })
        };
        onTouchMove = e => {
            let {
                clientX: t,
                clientY: i
            } = e.targetTouches ? e.targetTouches[0] : e, s = -(t - this.touchStart.x) * this.options.touchMultiplier, r = -(i - this.touchStart.y) * this.options.touchMultiplier;
            this.touchStart.x = t, this.touchStart.y = i, this.lastDelta = {
                x: s,
                y: r
            }, this.emitter.emit("scroll", {
                deltaX: s,
                deltaY: r,
                event: e
            })
        };
        onTouchEnd = e => {
            this.emitter.emit("scroll", {
                deltaX: this.lastDelta.x,
                deltaY: this.lastDelta.y,
                event: e
            })
        };
        onWheel = e => {
            let {
                deltaX: t,
                deltaY: i,
                deltaMode: s
            } = e, r = a(s, this.window.width), o = a(s, this.window.height);
            t *= r, i *= o, t *= this.options.wheelMultiplier, i *= this.options.wheelMultiplier, this.emitter.emit("scroll", {
                deltaX: t,
                deltaY: i,
                event: e
            })
        };
        onWindowResize = () => {
            this.window = {
                width: window.innerWidth,
                height: window.innerHeight
            }
        }
    };
    let h = e => Math.min(1, 1.001 - 2 ** (-10 * e));
    var u = class {
            _isScrolling = !1;
            _isStopped = !1;
            _isLocked = !1;
            _preventNextNativeScrollEvent = !1;
            _resetVelocityTimeout = null;
            _rafId = null;
            isTouching;
            time = 0;
            userData = {};
            lastVelocity = 0;
            velocity = 0;
            direction = 0;
            options;
            targetScroll;
            animatedScroll;
            animate = new s;
            emitter = new o;
            dimensions;
            virtualScroll;
            constructor({
                wrapper: e = window,
                content: i = document.documentElement,
                eventsTarget: s = e,
                smoothWheel: o = !0,
                syncTouch: n = !1,
                syncTouchLerp: l = .075,
                touchInertiaExponent: a = 1.7,
                duration: u,
                easing: d,
                lerp: p = .1,
                infinite: f = !1,
                orientation: m = "vertical",
                gestureOrientation: v = "horizontal" === m ? "both" : "vertical",
                touchMultiplier: g = 1,
                wheelMultiplier: w = 1,
                autoResize: y = !0,
                prevent: b,
                virtualScroll: S,
                overscroll: x = !0,
                autoRaf: C = !1,
                anchors: E = !1,
                autoToggle: _ = !1,
                allowNestedScroll: R = !1,
                __experimental__naiveDimensions: j = !1,
                naiveDimensions: z = j,
                stopInertiaOnNavigate: O = !1
            } = {}) {
                window.lenisVersion = t, window.lenis || (window.lenis = {}), window.lenis.version = t, "horizontal" === m && (window.lenis.horizontal = !0), !0 === n && (window.lenis.touch = !0), e && e !== document.documentElement || (e = window), "number" == typeof u && "function" != typeof d ? d = h : "function" == typeof d && "number" != typeof u && (u = 1), this.options = {
                    wrapper: e,
                    content: i,
                    eventsTarget: s,
                    smoothWheel: o,
                    syncTouch: n,
                    syncTouchLerp: l,
                    touchInertiaExponent: a,
                    duration: u,
                    easing: d,
                    lerp: p,
                    infinite: f,
                    gestureOrientation: v,
                    orientation: m,
                    touchMultiplier: g,
                    wheelMultiplier: w,
                    autoResize: y,
                    prevent: b,
                    virtualScroll: S,
                    overscroll: x,
                    autoRaf: C,
                    anchors: E,
                    autoToggle: _,
                    allowNestedScroll: R,
                    naiveDimensions: z,
                    stopInertiaOnNavigate: O
                }, this.dimensions = new r(e, i, {
                    autoResize: y
                }), this.updateClassName(), this.targetScroll = this.animatedScroll = this.actualScroll, this.options.wrapper.addEventListener("scroll", this.onNativeScroll), this.options.wrapper.addEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.addEventListener("click", this.onClick), this.options.wrapper.addEventListener("pointerdown", this.onPointerDown), this.virtualScroll = new c(s, {
                    touchMultiplier: g,
                    wheelMultiplier: w
                }), this.virtualScroll.on("scroll", this.onVirtualScroll), this.options.autoToggle && (this.checkOverflow(), this.rootElement.addEventListener("transitionend", this.onTransitionEnd)), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            }
            destroy() {
                this.emitter.destroy(), this.options.wrapper.removeEventListener("scroll", this.onNativeScroll), this.options.wrapper.removeEventListener("scrollend", this.onScrollEnd, {
                    capture: !0
                }), this.options.wrapper.removeEventListener("pointerdown", this.onPointerDown), (this.options.anchors || this.options.stopInertiaOnNavigate) && this.options.wrapper.removeEventListener("click", this.onClick), this.virtualScroll.destroy(), this.dimensions.destroy(), this.cleanUpClassName(), this._rafId && cancelAnimationFrame(this._rafId)
            }
            on(e, t) {
                return this.emitter.on(e, t)
            }
            off(e, t) {
                return this.emitter.off(e, t)
            }
            onScrollEnd = e => {
                e instanceof CustomEvent || "smooth" !== this.isScrolling && !1 !== this.isScrolling || e.stopPropagation()
            };
            dispatchScrollendEvent = () => {
                this.options.wrapper.dispatchEvent(new CustomEvent("scrollend", {
                    bubbles: this.options.wrapper === window,
                    detail: {
                        lenisScrollEnd: !0
                    }
                }))
            };
            get overflow() {
                let e = this.isHorizontal ? "overflow-x" : "overflow-y";
                return getComputedStyle(this.rootElement)[e]
            }
            checkOverflow() {
                ["hidden", "clip"].includes(this.overflow) ? this.internalStop() : this.internalStart()
            }
            onTransitionEnd = e => {
                e.propertyName ? .includes("overflow") && e.target === this.rootElement && this.checkOverflow()
            };
            setScroll(e) {
                this.isHorizontal ? this.options.wrapper.scrollTo({
                    left: e,
                    behavior: "instant"
                }) : this.options.wrapper.scrollTo({
                    top: e,
                    behavior: "instant"
                })
            }
            onClick = e => {
                let t = e.composedPath().filter(e => e instanceof HTMLAnchorElement && e.href).map(e => new URL(e.href)),
                    i = new URL(window.location.href);
                if (this.options.anchors) {
                    let e = t.find(e => i.host === e.host && i.pathname === e.pathname && e.hash);
                    if (e) {
                        let t = "object" == typeof this.options.anchors && this.options.anchors ? this.options.anchors : void 0,
                            i = `#${e.hash.split("#")[1]}`;
                        this.scrollTo(i, t);
                        return
                    }
                }
                if (this.options.stopInertiaOnNavigate && t.some(e => i.host === e.host && i.pathname !== e.pathname)) return void this.reset()
            };
            onPointerDown = e => {
                1 === e.button && this.reset()
            };
            onVirtualScroll = e => {
                if ("function" == typeof this.options.virtualScroll && !1 === this.options.virtualScroll(e)) return;
                let {
                    deltaX: t,
                    deltaY: i,
                    event: s
                } = e;
                if (this.emitter.emit("virtual-scroll", {
                        deltaX: t,
                        deltaY: i,
                        event: s
                    }), s.ctrlKey || s.lenisStopPropagation) return;
                let r = s.type.includes("touch"),
                    o = s.type.includes("wheel");
                this.isTouching = "touchstart" === s.type || "touchmove" === s.type;
                let n = 0 === t && 0 === i;
                if (this.options.syncTouch && r && "touchstart" === s.type && n && !this.isStopped && !this.isLocked) return void this.reset();
                let l = "vertical" === this.options.gestureOrientation && 0 === i || "horizontal" === this.options.gestureOrientation && 0 === t;
                if (n || l) return;
                let a = s.composedPath();
                a = a.slice(0, a.indexOf(this.rootElement));
                let c = this.options.prevent,
                    h = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
                if (a.find(e => e instanceof HTMLElement && ("function" == typeof c && c ? .(e) || e.hasAttribute ? .("data-lenis-prevent") || "vertical" === h && e.hasAttribute ? .("data-lenis-prevent-vertical") || "horizontal" === h && e.hasAttribute ? .("data-lenis-prevent-horizontal") || r && e.hasAttribute ? .("data-lenis-prevent-touch") || o && e.hasAttribute ? .("data-lenis-prevent-wheel") || this.options.allowNestedScroll && this.hasNestedScroll(e, {
                        deltaX: t,
                        deltaY: i
                    })))) return;
                if (this.isStopped || this.isLocked) {
                    s.cancelable && s.preventDefault();
                    return
                }
                if (!(this.options.syncTouch && r || this.options.smoothWheel && o)) {
                    this.isScrolling = "native", this.animate.stop(), s.lenisStopPropagation = !0;
                    return
                }
                let u = i;
                "both" === this.options.gestureOrientation ? u = Math.abs(i) > Math.abs(t) ? i : t : "horizontal" === this.options.gestureOrientation && (u = t), (!this.options.overscroll || this.options.infinite || this.options.wrapper !== window && this.limit > 0 && (this.animatedScroll > 0 && this.animatedScroll < this.limit || 0 === this.animatedScroll && i > 0 || this.animatedScroll === this.limit && i < 0)) && (s.lenisStopPropagation = !0), s.cancelable && s.preventDefault();
                let d = r && this.options.syncTouch,
                    p = r && "touchend" === s.type;
                p && (u = Math.sign(u) * Math.abs(this.velocity) ** this.options.touchInertiaExponent), this.scrollTo(this.targetScroll + u, {
                    programmatic: !1,
                    ...d ? {
                        lerp: p ? this.options.syncTouchLerp : 1
                    } : {
                        lerp: this.options.lerp,
                        duration: this.options.duration,
                        easing: this.options.easing
                    }
                })
            };
            resize() {
                this.dimensions.resize(), this.animatedScroll = this.targetScroll = this.actualScroll, this.emit()
            }
            emit() {
                this.emitter.emit("scroll", this)
            }
            onNativeScroll = () => {
                if (null !== this._resetVelocityTimeout && (clearTimeout(this._resetVelocityTimeout), this._resetVelocityTimeout = null), this._preventNextNativeScrollEvent) {
                    this._preventNextNativeScrollEvent = !1;
                    return
                }
                if (!1 === this.isScrolling || "native" === this.isScrolling) {
                    let e = this.animatedScroll;
                    this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity, this.velocity = this.animatedScroll - e, this.direction = Math.sign(this.animatedScroll - e), this.isStopped || (this.isScrolling = "native"), this.emit(), 0 !== this.velocity && (this._resetVelocityTimeout = setTimeout(() => {
                        this.lastVelocity = this.velocity, this.velocity = 0, this.isScrolling = !1, this.emit()
                    }, 400))
                }
            };
            reset() {
                this.isLocked = !1, this.isScrolling = !1, this.animatedScroll = this.targetScroll = this.actualScroll, this.lastVelocity = this.velocity = 0, this.animate.stop()
            }
            start() {
                if (this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.removeProperty("overflow");
                    this.internalStart()
                }
            }
            internalStart() {
                this.isStopped && (this.reset(), this.isStopped = !1, this.emit())
            }
            stop() {
                if (!this.isStopped) {
                    if (this.options.autoToggle) return void this.rootElement.style.setProperty("overflow", "clip");
                    this.internalStop()
                }
            }
            internalStop() {
                this.isStopped || (this.reset(), this.isStopped = !0, this.emit())
            }
            raf = e => {
                let t = e - (this.time || e);
                this.time = e, this.animate.advance(.001 * t), this.options.autoRaf && (this._rafId = requestAnimationFrame(this.raf))
            };
            scrollTo(e, {
                offset: t = 0,
                immediate: s = !1,
                lock: r = !1,
                programmatic: o = !0,
                lerp: n = o ? this.options.lerp : void 0,
                duration: l = o ? this.options.duration : void 0,
                easing: a = o ? this.options.easing : void 0,
                onStart: c,
                onComplete: u,
                force: d = !1,
                userData: p
            } = {}) {
                if ((this.isStopped || this.isLocked) && !d) return;
                let f = e,
                    m = t;
                if ("string" == typeof f && ["top", "left", "start", "#"].includes(f)) f = 0;
                else if ("string" == typeof f && ["bottom", "right", "end"].includes(f)) f = this.limit;
                else {
                    let e = null;
                    if ("string" == typeof f ? (e = document.querySelector(f)) || ("#top" === f ? f = 0 : console.warn("Lenis: Target not found", f)) : f instanceof HTMLElement && f ? .nodeType && (e = f), e) {
                        if (this.options.wrapper !== window) {
                            let e = this.rootElement.getBoundingClientRect();
                            m -= this.isHorizontal ? e.left : e.top
                        }
                        let t = e.getBoundingClientRect(),
                            i = getComputedStyle(e),
                            s = this.isHorizontal ? Number.parseFloat(i.scrollMarginLeft) : Number.parseFloat(i.scrollMarginTop),
                            r = getComputedStyle(this.rootElement),
                            o = this.isHorizontal ? Number.parseFloat(r.scrollPaddingLeft) : Number.parseFloat(r.scrollPaddingTop);
                        f = (this.isHorizontal ? t.left : t.top) + this.animatedScroll - (Number.isNaN(s) ? 0 : s) - (Number.isNaN(o) ? 0 : o)
                    }
                }
                if ("number" == typeof f) {
                    if (f += m, this.options.infinite) {
                        if (o) {
                            this.targetScroll = this.animatedScroll = this.scroll;
                            let e = f - this.animatedScroll;
                            e > this.limit / 2 ? f -= this.limit : e < -this.limit / 2 && (f += this.limit)
                        }
                    } else f = i(0, f, this.limit);
                    if (f === this.targetScroll) {
                        c ? .(this), u ? .(this);
                        return
                    }
                    if (this.userData = p ? ? {}, s) {
                        this.animatedScroll = this.targetScroll = f, this.setScroll(this.scroll), this.reset(), this.preventNextNativeScrollEvent(), this.emit(), u ? .(this), this.userData = {}, requestAnimationFrame(() => {
                            this.dispatchScrollendEvent()
                        });
                        return
                    }
                    o || (this.targetScroll = f), "number" == typeof l && "function" != typeof a ? a = h : "function" == typeof a && "number" != typeof l && (l = 1), this.animate.fromTo(this.animatedScroll, f, {
                        duration: l,
                        easing: a,
                        lerp: n,
                        onStart: () => {
                            r && (this.isLocked = !0), this.isScrolling = "smooth", c ? .(this)
                        },
                        onUpdate: (e, t) => {
                            this.isScrolling = "smooth", this.lastVelocity = this.velocity, this.velocity = e - this.animatedScroll, this.direction = Math.sign(this.velocity), this.animatedScroll = e, this.setScroll(this.scroll), o && (this.targetScroll = e), t || this.emit(), t && (this.reset(), this.emit(), u ? .(this), this.userData = {}, requestAnimationFrame(() => {
                                this.dispatchScrollendEvent()
                            }), this.preventNextNativeScrollEvent())
                        }
                    })
                }
            }
            preventNextNativeScrollEvent() {
                this._preventNextNativeScrollEvent = !0, requestAnimationFrame(() => {
                    this._preventNextNativeScrollEvent = !1
                })
            }
            hasNestedScroll(e, {
                deltaX: t,
                deltaY: i
            }) {
                let s, r, o, n, l, a, c, h, u, d, p, f, m, v, g, w, y = Date.now();
                e._lenis || (e._lenis = {});
                let b = e._lenis;
                if (y - (b.time ? ? 0) > 2e3) {
                    b.time = Date.now();
                    let t = window.getComputedStyle(e);
                    if (b.computedStyle = t, s = ["auto", "overlay", "scroll"].includes(t.overflowX), r = ["auto", "overlay", "scroll"].includes(t.overflowY), l = ["auto"].includes(t.overscrollBehaviorX), a = ["auto"].includes(t.overscrollBehaviorY), b.hasOverflowX = s, b.hasOverflowY = r, !(s || r)) return !1;
                    c = e.scrollWidth, h = e.scrollHeight, u = e.clientWidth, d = e.clientHeight, o = c > u, n = h > d, b.isScrollableX = o, b.isScrollableY = n, b.scrollWidth = c, b.scrollHeight = h, b.clientWidth = u, b.clientHeight = d, b.hasOverscrollBehaviorX = l, b.hasOverscrollBehaviorY = a
                } else o = b.isScrollableX, n = b.isScrollableY, s = b.hasOverflowX, r = b.hasOverflowY, c = b.scrollWidth, h = b.scrollHeight, u = b.clientWidth, d = b.clientHeight, l = b.hasOverscrollBehaviorX, a = b.hasOverscrollBehaviorY;
                if (!(s && o || r && n)) return !1;
                let S = Math.abs(t) >= Math.abs(i) ? "horizontal" : "vertical";
                if ("horizontal" === S) p = Math.round(e.scrollLeft), f = c - u, m = t, v = s, g = o, w = l;
                else {
                    if ("vertical" !== S) return !1;
                    p = Math.round(e.scrollTop), f = h - d, m = i, v = r, g = n, w = a
                }
                return !w && (p >= f || p <= 0) || (m > 0 ? p < f : p > 0) && v && g
            }
            get rootElement() {
                return this.options.wrapper === window ? document.documentElement : this.options.wrapper
            }
            get limit() {
                return this.options.naiveDimensions ? this.isHorizontal ? this.rootElement.scrollWidth - this.rootElement.clientWidth : this.rootElement.scrollHeight - this.rootElement.clientHeight : this.dimensions.limit[this.isHorizontal ? "x" : "y"]
            }
            get isHorizontal() {
                return "horizontal" === this.options.orientation
            }
            get actualScroll() {
                let e = this.options.wrapper;
                return this.isHorizontal ? e.scrollX ? ? e.scrollLeft : e.scrollY ? ? e.scrollTop
            }
            get scroll() {
                var e;
                return this.options.infinite ? (this.animatedScroll % (e = this.limit) + e) % e : this.animatedScroll
            }
            get progress() {
                return 0 === this.limit ? 1 : this.scroll / this.limit
            }
            get isScrolling() {
                return this._isScrolling
            }
            set isScrolling(e) {
                this._isScrolling !== e && (this._isScrolling = e, this.updateClassName())
            }
            get isStopped() {
                return this._isStopped
            }
            set isStopped(e) {
                this._isStopped !== e && (this._isStopped = e, this.updateClassName())
            }
            get isLocked() {
                return this._isLocked
            }
            set isLocked(e) {
                this._isLocked !== e && (this._isLocked = e, this.updateClassName())
            }
            get isSmooth() {
                return "smooth" === this.isScrolling
            }
            get className() {
                let e = "lenis";
                return this.options.autoToggle && (e += " lenis-autoToggle"), this.isStopped && (e += " lenis-stopped"), this.isLocked && (e += " lenis-locked"), this.isScrolling && (e += " lenis-scrolling"), "smooth" === this.isScrolling && (e += " lenis-smooth"), e
            }
            updateClassName() {
                this.cleanUpClassName(), this.className.split(" ").forEach(e => {
                    this.rootElement.classList.add(e)
                })
            }
            cleanUpClassName() {
                for (let e of Array.from(this.rootElement.classList))("lenis" === e || e.startsWith("lenis-")) && this.rootElement.classList.remove(e)
            }
        },
        d = e.i(71645),
        p = e.i(43476);
    let f = (0, d.createContext)(null),
        m = new class {
            listeners = [];
            constructor(e) {
                this.state = e
            }
            set(e) {
                for (let t of (this.state = e, this.listeners)) t(this.state)
            }
            subscribe(e) {
                return this.listeners = [...this.listeners, e], () => {
                    this.listeners = this.listeners.filter(t => t !== e)
                }
            }
            get() {
                return this.state
            }
        }(null),
        v = (0, d.forwardRef)(({
            children: e,
            root: t = !1,
            options: i = {},
            autoRaf: s = !0,
            className: r = "",
            ...o
        }, n) => {
            let l = (0, d.useRef)(null),
                a = (0, d.useRef)(null),
                [c, h] = (0, d.useState)(void 0);
            (0, d.useImperativeHandle)(n, () => ({
                wrapper: l.current,
                content: a.current,
                lenis: c
            }), [c]), (0, d.useEffect)(() => {
                let e = new u({ ...i,
                    ...l.current && a.current && {
                        wrapper: l.current,
                        content: a.current
                    },
                    autoRaf: i ? .autoRaf ? ? s
                });
                return h(e), () => {
                    e.destroy(), h(void 0)
                }
            }, [s, JSON.stringify({ ...i,
                wrapper: null,
                content: null
            })]);
            let v = (0, d.useRef)([]),
                g = (0, d.useCallback)((e, t) => {
                    v.current.push({
                        callback: e,
                        priority: t
                    }), v.current.sort((e, t) => e.priority - t.priority)
                }, []),
                w = (0, d.useCallback)(e => {
                    v.current = v.current.filter(t => t.callback !== e)
                }, []);
            return ((0, d.useEffect)(() => {
                if (t && c) return m.set({
                    lenis: c,
                    addCallback: g,
                    removeCallback: w
                }), () => m.set(null)
            }, [t, c, g, w]), (0, d.useEffect)(() => {
                if (!c) return;
                let e = e => {
                    for (let {
                            callback: t
                        } of v.current) t(e)
                };
                return c.on("scroll", e), () => {
                    c.off("scroll", e)
                }
            }, [c]), e) ? (0, p.jsx)(f.Provider, {
                value: {
                    lenis: c,
                    addCallback: g,
                    removeCallback: w
                },
                children: t && "asChild" !== t ? e : (0, p.jsx)("div", {
                    ref: l,
                    className: `${r} ${c?.className??""}`.trim(),
                    ...o,
                    children: (0, p.jsx)("div", {
                        ref: a,
                        children: e
                    })
                })
            }) : null
        }),
        g = {};
    e.s(["ReactLenis", 0, v, "useLenis", 0, function(e, t = [], i = 0) {
        let s = (0, d.useContext)(f),
            r = function(e) {
                let [t, i] = (0, d.useState)(e.get());
                return (0, d.useEffect)(() => e.subscribe(e => i(e)), [e]), t
            }(m),
            {
                lenis: o,
                addCallback: n,
                removeCallback: l
            } = s ? ? r ? ? g;
        return (0, d.useEffect)(() => {
            if (e && n && l && o) return n(e, i), e(o), () => {
                l(e)
            }
        }, [o, n, l, i, ...t, e]), o
    }], 55667)
}]);