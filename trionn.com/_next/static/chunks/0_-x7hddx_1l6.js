(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 33525, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "warnOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 98183, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        assign: function() {
            return o
        },
        searchParamsToUrlQuery: function() {
            return s
        },
        urlQueryToSearchParams: function() {
            return a
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });

    function s(e) {
        let t = {};
        for (let [r, n] of e.entries()) {
            let e = t[r];
            void 0 === e ? t[r] = n : Array.isArray(e) ? e.push(n) : t[r] = [e, n]
        }
        return t
    }

    function l(e) {
        return "string" == typeof e ? e : ("number" != typeof e || isNaN(e)) && "boolean" != typeof e ? "" : String(e)
    }

    function a(e) {
        let t = new URLSearchParams;
        for (let [r, n] of Object.entries(e))
            if (Array.isArray(n))
                for (let e of n) t.append(r, l(e));
            else t.set(r, l(n));
        return t
    }

    function o(e, ...t) {
        for (let r of t) {
            for (let t of r.keys()) e.delete(t);
            for (let [t, n] of r.entries()) e.append(t, n)
        }
        return e
    }
}, 18967, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        DecodeError: function() {
            return y
        },
        MiddlewareNotFoundError: function() {
            return b
        },
        MissingStaticPage: function() {
            return x
        },
        NormalizeError: function() {
            return w
        },
        PageNotFoundError: function() {
            return v
        },
        SP: function() {
            return m
        },
        ST: function() {
            return g
        },
        WEB_VITALS: function() {
            return s
        },
        execOnce: function() {
            return l
        },
        getDisplayName: function() {
            return d
        },
        getLocationOrigin: function() {
            return u
        },
        getURL: function() {
            return c
        },
        isAbsoluteUrl: function() {
            return o
        },
        isResSent: function() {
            return f
        },
        loadGetInitialProps: function() {
            return h
        },
        normalizeRepeatedSlashes: function() {
            return p
        },
        stringifyError: function() {
            return E
        }
    };
    for (var i in n) Object.defineProperty(r, i, {
        enumerable: !0,
        get: n[i]
    });
    let s = ["CLS", "FCP", "FID", "INP", "LCP", "TTFB"];

    function l(e) {
        let t, r = !1;
        return (...n) => (r || (r = !0, t = e(...n)), t)
    }
    let a = /^[a-zA-Z][a-zA-Z\d+\-.]*?:/,
        o = e => a.test(e);

    function u() {
        let {
            protocol: e,
            hostname: t,
            port: r
        } = window.location;
        return `${e}//${t}${r?":"+r:""}`
    }

    function c() {
        let {
            href: e
        } = window.location, t = u();
        return e.substring(t.length)
    }

    function d(e) {
        return "string" == typeof e ? e : e.displayName || e.name || "Unknown"
    }

    function f(e) {
        return e.finished || e.headersSent
    }

    function p(e) {
        let t = e.split("?");
        return t[0].replace(/\\/g, "/").replace(/\/\/+/g, "/") + (t[1] ? `?${t.slice(1).join("?")}` : "")
    }
    async function h(e, t) {
        let r = t.res || t.ctx && t.ctx.res;
        if (!e.getInitialProps) return t.ctx && t.Component ? {
            pageProps: await h(t.Component, t.ctx)
        } : {};
        let n = await e.getInitialProps(t);
        if (r && f(r)) return n;
        if (!n) throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`), "__NEXT_ERROR_CODE", {
            value: "E1025",
            enumerable: !1,
            configurable: !0
        });
        return n
    }
    let m = "u" > typeof performance,
        g = m && ["mark", "measure", "getEntriesByName"].every(e => "function" == typeof performance[e]);
    class y extends Error {}
    class w extends Error {}
    class v extends Error {
        constructor(e) {
            super(), this.code = "ENOENT", this.name = "PageNotFoundError", this.message = `Cannot find module for page: ${e}`
        }
    }
    class x extends Error {
        constructor(e, t) {
            super(), this.message = `Failed to load static file for page: ${e} ${t}`
        }
    }
    class b extends Error {
        constructor() {
            super(), this.code = "ENOENT", this.message = "Cannot find the middleware module"
        }
    }

    function E(e) {
        return JSON.stringify({
            message: e.message,
            stack: e.stack
        })
    }
}, 42936, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let n = (0, r.createContext)(null);
    e.s(["SiteSoundProvider", 0, function({
        children: e
    }) {
        let [i, s] = (0, r.useState)(!1), l = (0, r.useCallback)(() => {
            s(e => !e)
        }, []), a = (0, r.useRef)(i);
        (0, r.useEffect)(() => {
            a.current = i
        }, [i]);
        let o = (0, r.useRef)(!1),
            u = (0, r.useRef)(!1);
        (0, r.useEffect)(() => {
            let e = () => {
                    a.current && (o.current = !0), s(!1)
                },
                t = () => {
                    o.current && (o.current = !1, "u" > typeof document && document.hidden ? u.current = !0 : s(!0))
                },
                r = () => {
                    document.hidden ? (a.current && (u.current = !0), document.querySelectorAll("audio").forEach(e => {
                        e.paused || e.pause()
                    }), s(!1)) : u.current && (u.current = !1, s(!0))
                };
            return window.addEventListener("trionn-transition:start", e), window.addEventListener("trionn-transition:complete", t), document.addEventListener("visibilitychange", r), () => {
                window.removeEventListener("trionn-transition:start", e), window.removeEventListener("trionn-transition:complete", t), document.removeEventListener("visibilitychange", r)
            }
        }, []);
        let c = (0, r.useMemo)(() => ({
            soundEnabled: i,
            setSoundEnabled: s,
            toggleSound: l
        }), [i, l]);
        return (0, t.jsx)(n.Provider, {
            value: c,
            children: e
        })
    }, "useSiteSound", 0, function() {
        let e = (0, r.useContext)(n);
        if (!e) throw Error("useSiteSound must be used within SiteSoundProvider");
        return e
    }])
}, 75324, e => {
    "use strict";
    let t, r, n = "function" == typeof Symbol ? Symbol() : "_split",
        i, s = "u" > typeof Intl && "Segmenter" in Intl ? new Intl.Segmenter : 0,
        l = e => e ? "string" == typeof e ? l(document.querySelectorAll(e)) : "length" in e ? Array.from(e).reduce((e, t) => ("string" == typeof t ? e.push(...l(t)) : e.push(t), e), []) : [e] : [],
        a = e => l(e).filter(e => e && 1 === e.nodeType),
        o = [],
        u = function() {},
        c = {
            add: e => e()
        },
        d = /\s+/g,
        f = RegExp("\\p{RI}\\p{RI}|\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?(\\u{200D}\\p{Emoji}(\\p{EMod}|\\u{FE0F}\\u{20E3}?|[\\u{E0020}-\\u{E007E}]+\\u{E007F})?)*|.", "gu"),
        p = {
            left: 0,
            top: 0,
            width: 0,
            height: 0
        },
        h = (e, t) => {
            for (; ++t < e.length && e[t] === p;);
            return e[t] || p
        },
        m = ({
            element: e,
            html: t,
            ariaL: r,
            ariaH: n
        }) => {
            e.innerHTML = t, r ? e.setAttribute("aria-label", r) : e.removeAttribute("aria-label"), n ? e.setAttribute("aria-hidden", n) : e.removeAttribute("aria-hidden")
        },
        g = (e, t) => {
            if (t) {
                let r = new Set(e.join("").match(t) || o),
                    n = e.length,
                    i, s, l, a;
                if (r.size) {
                    for (; --n > -1;)
                        for (l of (s = e[n], r))
                            if (l.startsWith(s) && l.length > s.length) {
                                for (i = 0, a = s; l.startsWith(a += e[n + ++i]) && a.length < l.length;);
                                if (i && a.length === l.length) {
                                    e[n] = l, e.splice(n + 1, i);
                                    break
                                }
                            }
                }
            }
            return e
        },
        y = e => "inline" === window.getComputedStyle(e).display && (e.style.display = "inline-block"),
        w = (e, t, r) => t.insertBefore("string" == typeof e ? document.createTextNode(e) : e, r),
        v = (e, t, r) => {
            let n = t[e + "sClass"] || "",
                {
                    tag: i = "div",
                    aria: s = "auto",
                    propIndex: l = !1
                } = t,
                a = "line" === e ? "block" : "inline-block",
                o = n.indexOf("++") > -1,
                u = t => {
                    let u = document.createElement(i),
                        c = r.length + 1;
                    return n && (u.className = n + (o ? " " + n + c : "")), l && u.style.setProperty("--" + e, c + ""), "none" !== s && u.setAttribute("aria-hidden", "true"), "span" !== i && (u.style.position = "relative", u.style.display = a), u.textContent = t, r.push(u), u
                };
            return o && (n = n.replace("++", "")), u.collection = r, u
        },
        x = (e, t, r, n, i, l, a, u, c, f) => {
            var p;
            let h = Array.from(e.childNodes),
                m = 0,
                {
                    wordDelimiter: v,
                    reduceWhiteSpace: b = !0,
                    prepareText: E
                } = t,
                S = e.getBoundingClientRect(),
                T = S,
                N = !b && "pre" === window.getComputedStyle(e).whiteSpace.substring(0, 3),
                C = 0,
                A = r.collection,
                j, L, R, O, _, P, F, M, k, q, B, $, V, I, z, W, H, D;
            for ("object" == typeof v ? (R = v.delimiter || v, L = v.replaceWith || "") : L = "" === v ? "" : v || " ", j = " " !== L; m < h.length; m++)
                if (3 === (O = h[m]).nodeType) {
                    for (z = O.textContent || "", b ? z = z.replace(d, " ") : N && (z = z.replace(/\n/g, L + "\n")), E && (z = E(z, e)), O.textContent = z, H = (_ = L || R ? z.split(R || L) : z.match(u) || o)[_.length - 1], M = j ? " " === H.slice(-1) : !H, H || _.pop(), T = S, (F = j ? " " === _[0].charAt(0) : !_[0]) && w(" ", e, O), _[0] || _.shift(), g(_, c), l && f || (O.textContent = ""), k = 1; k <= _.length; k++)
                        if (W = _[k - 1], !b && N && "\n" === W.charAt(0) && (null == (p = O.previousSibling) || p.remove(), w(document.createElement("br"), e, O), W = W.slice(1)), b || "" !== W)
                            if (" " === W) e.insertBefore(document.createTextNode(" "), O);
                            else {
                                if (j && " " === W.charAt(0) && w(" ", e, O), C && 1 === k && !F && A.indexOf(C.parentNode) > -1 ? (P = A[A.length - 1]).appendChild(document.createTextNode(n ? "" : W)) : (w(P = r(n ? "" : W), e, O), C && 1 === k && !F && P.insertBefore(C, P.firstChild)), n)
                                    for (D = 0, B = s ? g([...s.segment(W)].map(e => e.segment), c) : W.match(u) || o; D < B.length; D++) P.appendChild(" " === B[D] ? document.createTextNode(" ") : n(B[D]));
                                if (l && f) {
                                    if (z = O.textContent = z.substring(W.length + 1, z.length), (q = P.getBoundingClientRect()).top > T.top && q.left <= T.left) {
                                        for ($ = e.cloneNode(), V = e.childNodes[0]; V && V !== P;) I = V, V = V.nextSibling, $.appendChild(I);
                                        e.parentNode.insertBefore($, e), i && y($)
                                    }
                                    T = q
                                }(k < _.length || M) && w(k >= _.length ? " " : j && " " === W.slice(-1) ? " " + L : L, e, O)
                            }
                    else w(L, e, O);
                    e.removeChild(O), C = 0
                } else 1 === O.nodeType && (a && a.indexOf(O) > -1 ? (A.indexOf(O.previousSibling) > -1 && A[A.length - 1].appendChild(O), C = O) : (x(O, t, r, n, i, l, a, u, c, !0), C = 0), i && y(O))
        },
        b = class e {
            constructor(e, t) {
                this.isSplit = !1, i || E.register(window.gsap), this.elements = a(e), this.chars = [], this.words = [], this.lines = [], this.masks = [], this.vars = t, this.elements.forEach(e => {
                    var r;
                    !1 !== t.overwrite && (null == (r = e[n]) || r._data.orig.filter(({
                        element: t
                    }) => t === e).forEach(m)), e[n] = this
                }), this._split = () => this.isSplit && this.split(this.vars);
                let r = [],
                    s, l = () => {
                        let e = r.length,
                            t;
                        for (; e--;) {
                            let n = (t = r[e]).element.offsetWidth;
                            if (n !== t.width) {
                                t.width = n, this._split();
                                return
                            }
                        }
                    };
                this._data = {
                    orig: r,
                    obs: "u" > typeof ResizeObserver && new ResizeObserver(() => {
                        clearTimeout(s), s = setTimeout(l, 200)
                    })
                }, u(this), this.split(t)
            }
            split(e) {
                return (this._ctx || c).add(() => {
                    this.isSplit && this.revert(), this.vars = e = e || this.vars || {};
                    let {
                        type: t = "chars,words,lines",
                        aria: n = "auto",
                        deepSlice: i = !0,
                        smartWrap: s,
                        onSplit: o,
                        autoSplit: u = !1,
                        specialChars: c,
                        mask: d
                    } = this.vars, m = t.indexOf("lines") > -1, g = t.indexOf("chars") > -1, y = t.indexOf("words") > -1, w = g && !y && !m, b = c && ("push" in c ? RegExp("(?:" + c.join("|") + ")", "gu") : c), E = b ? RegExp(b.source + "|" + f.source, "gu") : f, S = !!e.ignore && a(e.ignore), {
                        orig: T,
                        animTime: N,
                        obs: C
                    } = this._data, A;
                    (g || y || m) && (this.elements.forEach((t, r) => {
                        T[r] = {
                            element: t,
                            html: t.innerHTML,
                            ariaL: t.getAttribute("aria-label"),
                            ariaH: t.getAttribute("aria-hidden")
                        }, "auto" === n ? t.setAttribute("aria-label", (t.textContent || "").trim()) : "hidden" === n && t.setAttribute("aria-hidden", "true");
                        let a = [],
                            o = [],
                            u = [],
                            c = g ? v("char", e, a) : null,
                            d = v("word", e, o),
                            f, N, C, A;
                        if (x(t, e, d, c, w, i && (m || w), S, E, b, !1), m) {
                            let r, n, i = l(t.childNodes),
                                s = (r = v("line", e, u), n = window.getComputedStyle(t).textAlign || "left", (e, s) => {
                                    let l = r("");
                                    for (l.style.textAlign = n, t.insertBefore(l, i[e]); e < s; e++) l.appendChild(i[e]);
                                    l.normalize()
                                }),
                                a, o = [],
                                c = 0,
                                d = i.map(e => 1 === e.nodeType ? e.getBoundingClientRect() : p),
                                m = p,
                                g;
                            for (f = 0; f < i.length; f++) 1 === (a = i[f]).nodeType && ("BR" === a.nodeName ? (f && "BR" === i[f - 1].nodeName || (o.push(a), s(c, f + 1)), c = f + 1, m = h(d, f)) : (g = d[f], f && g.top > m.top && g.left < m.left + m.width - 1 && (s(c, f), c = f), m = g));
                            c < f && s(c, f), o.forEach(e => {
                                var t;
                                return null == (t = e.parentNode) ? void 0 : t.removeChild(e)
                            })
                        }
                        if (!y) {
                            for (f = 0; f < o.length; f++)
                                if (N = o[f], g || !N.nextSibling || 3 !== N.nextSibling.nodeType)
                                    if (s && !m) {
                                        for ((C = document.createElement("span")).style.whiteSpace = "nowrap"; N.firstChild;) C.appendChild(N.firstChild);
                                        N.replaceWith(C)
                                    } else N.replaceWith(...N.childNodes);
                            else(A = N.nextSibling) && 3 === A.nodeType && (A.textContent = (N.textContent || "") + (A.textContent || ""), N.remove());
                            o.length = 0, t.normalize()
                        }
                        this.lines.push(...u), this.words.push(...o), this.chars.push(...a)
                    }), d && this[d] && this.masks.push(...this[d].map(e => {
                        let t = e.cloneNode();
                        return e.replaceWith(t), t.appendChild(e), e.className && (t.className = e.className.trim().split(" ").map(e => e + "-mask").join(" ")), t.style.overflow = "clip", t
                    }))), this.isSplit = !0, r && m && u && r.addEventListener("loadingdone", this._split), (A = o && o(this)) && A.totalTime && (this._data.anim = N ? A.totalTime(N) : A), m && u && this.elements.forEach((e, t) => {
                        T[t].width = e.offsetWidth, C && C.observe(e)
                    })
                }), this
            }
            kill() {
                let {
                    obs: e
                } = this._data;
                e && e.disconnect(), null == r || r.removeEventListener("loadingdone", this._split)
            }
            revert() {
                var e, t;
                if (this.isSplit) {
                    let {
                        orig: r,
                        anim: n
                    } = this._data;
                    this.kill(), r.forEach(m), this.chars.length = this.words.length = this.lines.length = r.length = this.masks.length = 0, this.isSplit = !1, n && (this._data.animTime = n.totalTime(), n.revert()), null == (t = (e = this.vars).onRevert) || t.call(e, this)
                }
                return this
            }
            static create(t, r) {
                return new e(t, r)
            }
            static register(e) {
                (t = t || e || window.gsap) && (l = t.utils.toArray, u = t.core.context || u), !i && window.innerWidth > 0 && (r = document.fonts, i = !0)
            }
        };
    b.version = "3.15.0";
    let E = b;
    e.s(["SplitText", 0, E, "default", 0, E])
}, 91092, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(65747),
        i = e.i(89970),
        s = e.i(75324),
        l = e.i(83495);
    e.i(11303);
    var a = e.i(62749);
    i.default.registerPlugin(s.default, l.ScrollTrigger);
    let o = {
            every: 2,
            count: 2,
            blur: 8,
            fade: .4,
            duration: .3
        },
        u = (0, r.forwardRef)(({
            text: e,
            html: l,
            as: u = "h2",
            className: c = "",
            animationType: d = "words",
            stagger: f = .05,
            duration: p = .8,
            ease: h = "power2.out",
            delay: m = 0,
            from: g = "random",
            start: y = "top 90%",
            end: w = "bottom 10%",
            once: v = !1,
            scrub: x = !1,
            flicker: b = !1,
            flickerConfig: E = o,
            onCompleteAnimation: S,
            waitForTransition: T = !0,
            manual: N = !1,
            markers: C = !1
        }, A) => {
            let j = (0, a.useTransitionReady)(),
                L = (0, r.useRef)(null),
                R = (0, r.useRef)(null);
            return (0, r.useImperativeHandle)(A, () => ({
                play() {
                    R.current ? .restart()
                }
            })), (0, n.useGSAP)(() => {
                if (!L.current || T && !j) return;
                let e = new s.default(L.current, {
                    type: "chars,words,lines",
                    smartWrap: !0,
                    wordsClass: "words",
                    charsClass: "chars",
                    linesClass: "lines"
                });
                L.current.removeAttribute("aria-label");
                let t = "lines" === d ? e.lines : "chars" === d ? e.chars : e.words;
                i.default.set([L.current, t], {
                    autoAlpha: 0,
                    filter: "blur(12px)",
                    force3D: !0,
                    willChange: "filter, opacity"
                });
                let r = null,
                    n = {
                        paused: N,
                        onComplete: () => {
                            S && S(), b ? r = ((e, {
                                every: t = 2,
                                count: r = 2,
                                blur: n = 8,
                                fade: s = .4,
                                duration: l = .3,
                                ease: a = "power2.out"
                            } = {}) => i.default.timeline({
                                repeat: -1,
                                repeatDelay: t
                            }).call(() => {
                                let t = i.default.utils.shuffle(e).slice(0, r);
                                i.default.fromTo(t, {
                                    autoAlpha: s,
                                    filter: `blur(${n}px)`
                                }, {
                                    autoAlpha: 1,
                                    filter: "blur(0px)",
                                    duration: l,
                                    stagger: .05,
                                    ease: a
                                })
                            }))(t, E) : b || x || i.default.set([L.current, t], {
                                willChange: "auto",
                                filter: "none"
                            })
                        }
                    };
                N || (n.scrollTrigger = {
                    trigger: L.current,
                    start: y,
                    end: w,
                    scrub: x,
                    once: v,
                    markers: C,
                    invalidateOnRefresh: !0
                });
                let l = i.default.timeline(n);
                l.to(L.current, {
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: .5,
                    ease: h
                }, m).to(t, {
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: p,
                    stagger: {
                        each: f,
                        from: g
                    },
                    ease: h
                }, m), R.current = l;
                let a = 0,
                    o = 0,
                    u = null;
                if (!N && l.scrollTrigger) {
                    let e = () => {
                        l.progress() > 0 || l.scrollTrigger ? .refresh()
                    };
                    a = requestAnimationFrame(e), (u = new ResizeObserver(() => {
                        if (l.progress() > 0) {
                            u ? .disconnect(), u = null;
                            return
                        }
                        cancelAnimationFrame(o), o = requestAnimationFrame(e)
                    })).observe(document.body)
                }
                return () => {
                    cancelAnimationFrame(a), cancelAnimationFrame(o), u ? .disconnect(), r ? .kill(), l.scrollTrigger ? .kill(), l.kill(), R.current = null, e.revert()
                }
            }, [j, T, N]), (0, t.jsx)(u, {
                ref: L,
                className: c,
                style: {
                    visibility: "hidden"
                },
                dangerouslySetInnerHTML: l ? {
                    __html: l
                } : void 0,
                children: l ? null : e
            })
        });
    u.displayName = "BlurTextReveal", e.s(["default", 0, u])
}, 84997, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(65747),
        n = e.i(89970),
        i = e.i(83495),
        s = e.i(75324),
        l = e.i(71645);
    e.i(11303);
    var a = e.i(62749);
    n.default.registerPlugin(i.ScrollTrigger, s.default), e.s(["default", 0, ({
        text: e,
        html: i,
        as: o = "h1",
        className: u = "",
        scrub: c = !0,
        stagger: d = .03,
        markers: f = !1
    }) => {
        let p = (0, l.useRef)(null),
            h = (0, a.useTransitionReady)();
        return (0, r.useGSAP)(() => {
            if (!p.current || !h) return;
            let e = new s.default(p.current, {
                    type: "chars",
                    aria: "none",
                    charsClass: "chars",
                    smartWrap: !0
                }),
                t = !1,
                r = n.default.to(e.chars, {
                    color: "#d8d8d8",
                    stagger: d,
                    scrollTrigger: {
                        trigger: p.current,
                        endTrigger: e.chars[e.chars.length - 1],
                        scrub: c,
                        start: "top 80%",
                        end: "bottom center",
                        markers: f,
                        invalidateOnRefresh: !0,
                        onToggle: e => {
                            e.isActive && (t = !0)
                        }
                    }
                }),
                i = 0,
                l = 0,
                a = null,
                o = () => r.scrollTrigger ? .refresh();
            r.scrollTrigger && (i = requestAnimationFrame(o), (a = new ResizeObserver(() => {
                if (t) {
                    a ? .disconnect(), a = null;
                    return
                }
                cancelAnimationFrame(l), l = requestAnimationFrame(o)
            })).observe(document.body));
            let u = () => {
                document.hidden || requestAnimationFrame(o)
            };
            return document.addEventListener("visibilitychange", u), () => {
                cancelAnimationFrame(i), cancelAnimationFrame(l), a ? .disconnect(), document.removeEventListener("visibilitychange", u), r.scrollTrigger ? .kill(), r.kill(), e.revert()
            }
        }, [h]), (0, t.jsx)(o, {
            ref: p,
            className: `${u} text-[rgba(216,216,216,0.1)]`,
            dangerouslySetInnerHTML: i ? {
                __html: i
            } : void 0,
            children: i ? null : e
        })
    }])
}, 38846, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(89970);
    e.i(11303);
    var n = e.i(62749);
    e.s(["default", 0, ({
        as: e = "div",
        children: i,
        className: s = "",
        y: l = 20,
        duration: a = .8,
        delay: o = 0,
        ease: u = "power2.out",
        start: c = "top 90%",
        once: d = !0
    }) => {
        let f = (0, t.useRef)(null),
            p = (0, n.useTransitionReady)();
        return (0, t.useEffect)(() => {
            let e = f.current;
            if (!e) return;
            let t = null,
                n = !1,
                i = r.default.context(() => {
                    r.default.set(e, {
                        opacity: 0,
                        y: l,
                        force3D: !0
                    })
                });
            if (!p) return () => {
                n = !0, i.revert()
            };
            let s = c.match(/top\s+(\d+)%/),
                h = s ? parseInt(s[1], 10) : 100,
                m = s ? `${-(100-h)}%` : "0%",
                g = () => {
                    !n && (r.default.to(e, {
                        opacity: 1,
                        y: 0,
                        duration: a,
                        delay: o,
                        ease: u,
                        force3D: !0
                    }), d && t ? .disconnect())
                };
            return (() => {
                if (n || t) return;
                (t = new IntersectionObserver(([e]) => {
                    e.isIntersecting && g()
                }, {
                    threshold: 0,
                    rootMargin: `0px 0px ${m} 0px`
                })).observe(e);
                let r = e.getBoundingClientRect(),
                    i = h / 100 * window.innerHeight;
                r.top <= i && r.bottom > 0 && g()
            })(), () => {
                n = !0, t ? .disconnect(), i.revert()
            }
        }, [l, a, o, u, c, d, p]), t.default.createElement(e, {
            ref: f,
            className: s
        }, i)
    }])
}, 3918, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(89970);
    e.s(["default", 0, function({
        children: e,
        className: i
    }) {
        let s = (0, r.useRef)(null),
            l = (0, r.useRef)(null),
            a = (0, r.useRef)(null);
        (0, r.useEffect)(() => {
            let e = s.current,
                t = l.current,
                r = a.current;
            if (!e || !t || !r) return;
            let i = t.querySelectorAll(".char"),
                o = r.querySelectorAll(".char"),
                u = null,
                c = () => {
                    n.default.set(t, {
                        opacity: 1
                    }), n.default.set(i, {
                        y: 0,
                        opacity: 1,
                        filter: "blur(0px)"
                    }), n.default.set(r, {
                        opacity: 0
                    }), n.default.set(o, {
                        opacity: 0,
                        y: 0,
                        filter: "blur(0px)"
                    })
                },
                d = () => {
                    u && (u.kill(), u = null), c();
                    let e = n.default.timeline({
                        onComplete: () => {
                            u = null, c()
                        }
                    });
                    u = e, e.set(r, {
                        opacity: 1
                    }), e.set(o, {
                        opacity: 0,
                        y: 0,
                        filter: "blur(0px)"
                    }), e.to(i, {
                        y: e => e % 2 == 0 ? -10 : 10,
                        opacity: 0,
                        filter: "blur(5px)",
                        duration: .3,
                        stagger: .025,
                        ease: "power2.in"
                    }), e.to(o, {
                        opacity: 1,
                        duration: .4,
                        stagger: .04,
                        ease: "power2.out"
                    }, "-=0.02")
                },
                f = e.closest(".group") || e;
            return f.addEventListener("mouseenter", d), () => {
                u && (u.kill(), u = null), f.removeEventListener("mouseenter", d)
            }
        }, []);
        let o = e => e.split("").map((e, r) => (0, t.jsx)("span", {
            className: "char inline-block will-change-[transform,opacity,filter]",
            children: " " === e ? " " : e
        }, r));
        return (0, t.jsxs)("span", {
            ref: s,
            className: `nav-link relative inline-flex cursor-pointer leading-none overflow-visible select-none ${i||""}`,
            children: [(0, t.jsx)("span", {
                ref: l,
                className: "text-layer original inline-flex",
                children: o(e)
            }), (0, t.jsx)("span", {
                ref: a,
                className: "text-layer clone absolute left-0 top-0 inline-flex opacity-0 pointer-events-none",
                children: o(e)
            })]
        })
    }])
}, 83390, e => {
    "use strict";
    e.i(91092), e.i(84997), e.i(38846), e.i(3918), e.s([])
}, 90782, e => {
    "use strict";
    var t = e.i(91092);
    e.s(["BlurTextReveal", () => t.default])
}, 67080, 31462, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    let n = function() {
        for (var e, t, r = 0, n = "", i = arguments.length; r < i; r++)(e = arguments[r]) && (t = function e(t) {
            var r, n, i = "";
            if ("string" == typeof t || "number" == typeof t) i += t;
            else if ("object" == typeof t)
                if (Array.isArray(t)) {
                    var s = t.length;
                    for (r = 0; r < s; r++) t[r] && (n = e(t[r])) && (i && (i += " "), i += n)
                } else
                    for (n in t) t[n] && (i && (i += " "), i += n);
            return i
        }(e)) && (n && (n += " "), n += t);
        return n
    };
    e.i(11303);
    var i = e.i(32692);
    e.s(["TransitionLink", () => i.default], 31462);
    var i = i;

    function s(e, t) {
        let r;
        return function(...n) {
            clearTimeout(r), r = setTimeout(() => e.apply(this, n), t)
        }
    }
    e.s(["default", 0, function({
        text: e,
        href: l = "#",
        customClass: a,
        styleVars: o,
        label: u,
        type: c,
        target: d,
        onClick: f,
        ariaLabel: p
    }) {
        let h = (0, r.useRef)(null),
            m = (0, r.useRef)(null),
            g = (0, r.useMemo)(() => [...e].map((e, r) => (0, t.jsx)("span", {
                className: "text inline-block select-none will-change-transform",
                children: " " === e ? " " : e
            }, `${e}-${r}`)), [e]),
            y = (e, t, r = "0") => getComputedStyle(e).getPropertyValue(t).trim() || r,
            w = (e, t, r = 0) => {
                let n = y(e, t, "");
                if (!n) return r;
                if (n.endsWith("ms")) return parseInt(n);
                if (n.endsWith("s")) return Math.round(1e3 * parseFloat(n));
                let i = parseInt(n);
                return Number.isFinite(i) ? i : r
            },
            v = e => {
                e.offsetWidth
            },
            x = e => {
                e && e.getAnimations().forEach(e => {
                    try {
                        e.commitStyles()
                    } catch {}
                    e.cancel()
                })
            },
            b = (e, t, r, n, i = 0) => {
                let s;
                if (!e) return;
                e.getAnimations().forEach(e => e.cancel());
                let l = (s = getComputedStyle(e).transform) && "none" !== s ? new DOMMatrixReadOnly(s).m41 : 0,
                    a = parseFloat(getComputedStyle(e).opacity) || 0,
                    o = e.animate([{
                        transform: `translateX(${l}px)`,
                        opacity: a
                    }, {
                        transform: `translateX(${t})`,
                        opacity: r
                    }], {
                        duration: n,
                        delay: i,
                        easing: "ease",
                        fill: "forwards"
                    });
                return o.onfinish = () => {
                    e.style.transform = `translateX(${t})`, e.style.opacity = String(r)
                }, o
            },
            E = (e, t, r, n, i = 0) => {
                if (!e) return;
                e.style.transformOrigin = `${t} center`, x(e);
                let s = (e => {
                        let t = getComputedStyle(e).transform;
                        if (!t || "none" === t) return 1;
                        let r = new DOMMatrixReadOnly(t);
                        return Math.hypot(r.m11, r.m12)
                    })(e),
                    l = e.animate([{
                        transform: `scaleX(${s})`
                    }, {
                        transform: `scaleX(${r})`
                    }], {
                        duration: n,
                        delay: i,
                        easing: "ease",
                        fill: "forwards"
                    });
                return l.onfinish = () => {
                    e.style.transform = `scaleX(${r})`
                }, l
            },
            S = (e, t) => {
                let r = e.querySelectorAll(".text"),
                    n = r.length,
                    i = parseInt(y(e, "--step", "50")) || 50,
                    s = parseInt(y(e, "--base-dur", "600")) || 600,
                    l = parseInt(y(e, "--dur-step", "50")) || 50,
                    a = ((e, t) => {
                        let r, n = e.querySelector(".btn"),
                            i = e.querySelector(".word");
                        if (!n || !i) return 0;
                        let s = n.getBoundingClientRect(),
                            l = i.getBoundingClientRect(),
                            a = parseFloat(getComputedStyle(n).paddingRight) || 0;
                        if ("in" === t) r = s.right - a + 1;
                        else {
                            let t = e.querySelector(".arrow-right"),
                                n = t ? t.getBoundingClientRect().width : 0,
                                i = parseFloat(y(e, "--arrow-gap", "10")) || 10,
                                l = Math.max(parseFloat(y(e, "--inset-min", "8")) || 8, .5 * a);
                            r = s.right - l - n - i
                        }
                        return Math.max(0, r - l.right)
                    })(e, t);
                return r.forEach((e, r) => {
                    let o = "in" === t ? n - r - 1 : r;
                    e.style.setProperty("--group-move", `${a}px`), e.style.setProperty("--delay", `${o*i}ms`), e.style.setProperty("--dur", `${s+o*l}ms`)
                }), Math.max(120, Math.round(((n - 1) * i + (s + (n - 1) * l)) * (parseFloat(y(e, "--reentry-factor", "0.75")) || .75)))
            },
            T = (0, r.useRef)(new WeakMap),
            N = e => {
                let t = T.current.get(e);
                t ? .inTimer && clearTimeout(t.inTimer), t ? .outTimer && clearTimeout(t.outTimer), T.current.set(e, {})
            };
        (0, r.useEffect)(() => {
            let e = h.current,
                t = m.current;
            requestAnimationFrame(() => {
                let t, r, n, i;
                S(e, "out"), t = e.querySelector(".arrow-right .arrow-sprite"), r = e.querySelector(".arrow-left .arrow-sprite"), t ? .getAnimations().forEach(e => e.cancel()), r ? .getAnimations().forEach(e => e.cancel()), t && (t.style.opacity = "1", t.style.transform = "translateX(0)"), r && (r.style.opacity = "0", r.style.transform = "translateX(-120%)"), N(e), n = e.querySelector(".u-right"), i = e.querySelector(".u-left"), x(n), x(i), n && (n.style.transformOrigin = "right center", n.style.transform = "scaleX(1)"), i && (i.style.transformOrigin = "left center", i.style.transform = "scaleX(0)")
            });
            let r = () => {
                    let t, r, n, i, s = S(e, "in");
                    v(e), e.classList.add("is-hovered"), t = y(e, "--run", "28px"), b(e.querySelector(".arrow-right .arrow-sprite"), t, 0, w(e, "--out-time", 260), 0), b(e.querySelector(".arrow-left .arrow-sprite"), "0px", 1, w(e, "--in-time", 420), s), N(e), r = e.querySelector(".u-right"), n = e.querySelector(".u-left"), E(r, "right", 0, w(e, "--ul-out-time", 1900), 0), i = window.setTimeout(() => {
                        E(n, "left", 1, w(e, "--ul-in-time", 900), 0)
                    }, s), T.current.set(e, {
                        inTimer: i
                    })
                },
                n = () => {
                    let t, r, n, i = S(e, "out");
                    v(e), e.classList.remove("is-hovered"), t = y(e, "--run", "28px"), b(e.querySelector(".arrow-left .arrow-sprite"), `calc(-1 * ${t})`, 0, w(e, "--out-time", 260), 0), b(e.querySelector(".arrow-right .arrow-sprite"), "0px", 1, w(e, "--in-time", 420), i), N(e), r = e.querySelector(".u-right"), E(e.querySelector(".u-left"), "left", 0, w(e, "--ul-out-time", 1900), 0), n = window.setTimeout(() => {
                        E(r, "right", 1, w(e, "--ul-in-time", 900), 0)
                    }, i), T.current.set(e, {
                        outTimer: n
                    })
                },
                i = s(r, 20),
                l = s(n, 20);
            t.addEventListener("mouseenter", i), t.addEventListener("mouseleave", l);
            let a = () => {
                    e.classList.contains("is-hovered") || r()
                },
                o = r => {
                    !t.contains(r.target) && e.classList.contains("is-hovered") && n()
                };
            t.addEventListener("touchstart", a, {
                passive: !0
            }), document.addEventListener("touchstart", o, {
                passive: !0
            });
            let u = null,
                c = () => {
                    u && cancelAnimationFrame(u), u = requestAnimationFrame(() => {
                        let t = e.classList.contains("is-hovered");
                        S(e, t ? "in" : "out")
                    })
                };
            return window.addEventListener("resize", c), () => {
                t.removeEventListener("mouseenter", i), t.removeEventListener("mouseleave", l), t.removeEventListener("touchstart", a), document.removeEventListener("touchstart", o), window.removeEventListener("resize", c)
            }
        }, [e]);
        let C = {
            "--button_wrapper-color": o ? .buttonWrapperColor ? ? "#434343",
            "--step": o ? .step ? ? "30ms",
            "--base-dur": o ? .baseDur ? ? "300ms",
            "--dur-step": o ? .durStep ? ? "30ms",
            "--inset-min": o ? .insetMin ? ? "8px",
            "--arrow-gap": o ? .arrowGap ? ? "10px",
            "--run": o ? .run ? ? "28px",
            "--out-time": o ? .outTime ? ? "200ms",
            "--in-time": o ? .inTime ? ? "320ms",
            "--reentry-factor": o ? .reentryFactor ? ? "0.5",
            "--ul-out-time": o ? .ulOutTime ? ? "1000ms",
            "--ul-in-time": o ? .ulInTime ? ? "500ms",
            "--pad-x": o ? .padX ? ? "0px",
            "--arrow-size": o ? .arrowSize ? ? "2.5rem"
        };
        return (0, t.jsx)("div", {
            ref: h,
            style: C,
            className: n("button_wrapper relative w-50 uppercase transition-opacity duration-300 hover:opacity-95", a),
            children: "submit" === c || "button" === c || f ? (0, t.jsxs)("button", {
                ref: m,
                type: "submit" === c ? "submit" : "button",
                onClick: f,
                "aria-label": p,
                className: n("btn button-text relative flex w-full min-h-10 cursor-pointer items-center overflow-hidden no-underline uppercase", "px-[calc(var(--pad-x)*1.2)]"),
                draggable: !1,
                children: [(0, t.jsxs)("span", {
                    className: "underline pointer-events-none absolute inset-x-0 bottom-0 h-[0.063rem] min-h-px",
                    children: [(0, t.jsx)("span", {
                        className: "u-right absolute inset-x-0 bottom-0 h-[0.063rem] min-h-px will-change-transform",
                        style: {
                            backgroundColor: "var(--button_wrapper-color)"
                        }
                    }), (0, t.jsx)("span", {
                        className: "u-left absolute inset-x-0 bottom-0 h-[0.063rem] min-h-px will-change-transform origin-left",
                        style: {
                            backgroundColor: "var(--button_wrapper-color)"
                        }
                    })]
                }), (0, t.jsx)("span", {
                    className: "word relative inline-flex will-change-transform pr-px",
                    style: {
                        color: "var(--button_wrapper-color)"
                    },
                    children: g
                }), (0, t.jsx)("span", {
                    className: "arrow arrow-right pointer-events-none absolute right-[calc(var(--pad-x)*1.2)] top-1/2 -translate-y-1/2 inline-flex items-center justify-center",
                    style: {
                        width: "var(--arrow-size)",
                        height: "var(--arrow-size)"
                    },
                    "aria-hidden": "true",
                    children: (0, t.jsx)("span", {
                        className: "arrow-sprite h-full w-full opacity-0 will-change-[transform,opacity] flex items-center justify-end",
                        children: (0, t.jsx)("svg", {
                            width: "10",
                            height: "9",
                            viewBox: "0 0 10 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-2.5 h-2.5",
                            children: (0, t.jsx)("path", {
                                d: "M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z",
                                style: {
                                    fill: "var(--button_wrapper-color)"
                                }
                            })
                        })
                    })
                }), (0, t.jsx)("span", {
                    className: "arrow arrow-left pointer-events-none absolute left-[calc(var(--pad-x)*1.2)] top-1/2 -translate-y-1/2 inline-flex items-center justify-center",
                    style: {
                        width: "var(--arrow-size)",
                        height: "var(--arrow-size)"
                    },
                    "aria-hidden": "true",
                    children: (0, t.jsx)("span", {
                        className: "arrow-sprite h-full w-full opacity-0 will-change-[transform,opacity] flex items-center",
                        children: (0, t.jsx)("svg", {
                            width: "10",
                            height: "9",
                            viewBox: "0 0 10 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-2.5 h-2.5",
                            children: (0, t.jsx)("path", {
                                d: "M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z",
                                style: {
                                    fill: "var(--button_wrapper-color)"
                                }
                            })
                        })
                    })
                })]
            }) : (0, t.jsxs)(i.default, {
                ref: m,
                href: l,
                target: d,
                transitionLabel: u,
                className: n("btn button-text relative flex w-full min-h-10 cursor-pointer items-center overflow-hidden no-underline", "px-[calc(var(--pad-x)*1.2)]"),
                draggable: !1,
                children: [(0, t.jsxs)("span", {
                    className: "underline pointer-events-none absolute inset-x-0 bottom-0 h-[0.063rem] min-h-px",
                    children: [(0, t.jsx)("span", {
                        className: "u-right absolute inset-x-0 bottom-0 h-[0.063rem] min-h-px will-change-transform",
                        style: {
                            backgroundColor: "var(--button_wrapper-color)"
                        }
                    }), (0, t.jsx)("span", {
                        className: "u-left absolute inset-x-0 bottom-0 h-[0.063rem] min-h-px will-change-transform origin-left",
                        style: {
                            backgroundColor: "var(--button_wrapper-color)"
                        }
                    })]
                }), (0, t.jsx)("span", {
                    className: "word relative inline-flex will-change-transform pr-px",
                    style: {
                        color: "var(--button_wrapper-color)"
                    },
                    children: g
                }), (0, t.jsx)("span", {
                    className: "arrow arrow-right pointer-events-none absolute right-[calc(var(--pad-x)*1.2)] top-1/2 -translate-y-1/2 inline-flex items-center justify-center",
                    style: {
                        width: "var(--arrow-size)",
                        height: "var(--arrow-size)"
                    },
                    "aria-hidden": "true",
                    children: (0, t.jsx)("span", {
                        className: "arrow-sprite h-full w-full opacity-0 will-change-[transform,opacity] flex items-center justify-end",
                        children: (0, t.jsx)("svg", {
                            width: "10",
                            height: "9",
                            viewBox: "0 0 10 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-2.5 h-2.5",
                            children: (0, t.jsx)("path", {
                                d: "M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z",
                                style: {
                                    fill: "var(--button_wrapper-color)"
                                }
                            })
                        })
                    })
                }), (0, t.jsx)("span", {
                    className: "arrow arrow-left pointer-events-none absolute left-[calc(var(--pad-x)*1.2)] top-1/2 -translate-y-1/2 inline-flex items-center justify-center",
                    style: {
                        width: "var(--arrow-size)",
                        height: "var(--arrow-size)"
                    },
                    "aria-hidden": "true",
                    children: (0, t.jsx)("span", {
                        className: "arrow-sprite h-full w-full opacity-0 will-change-[transform,opacity] flex items-center",
                        children: (0, t.jsx)("svg", {
                            width: "10",
                            height: "9",
                            viewBox: "0 0 10 9",
                            fill: "none",
                            xmlns: "http://www.w3.org/2000/svg",
                            className: "w-2.5 h-2.5",
                            children: (0, t.jsx)("path", {
                                d: "M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z",
                                style: {
                                    fill: "var(--button_wrapper-color)"
                                }
                            })
                        })
                    })
                })]
            })
        })
    }], 67080)
}, 48062, 11846, e => {
    "use strict";
    var t = e.i(67080);
    e.s([], 48062), e.s(["WordShiftButton", () => t.default], 11846)
}]);