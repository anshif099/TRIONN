(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 7617, e => {
    "use strict";
    var t = e.i(43476);
    e.i(48062);
    var r = e.i(11846),
        l = e.i(71645),
        n = e.i(65747),
        a = e.i(89970),
        i = e.i(57688),
        s = e.i(59087);
    e.i(11303);
    var o = e.i(31462);
    let c = (0, l.forwardRef)(function({
        item: e
    }, c) {
        let d = (0, l.useRef)(null),
            u = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            h = (0, l.useRef)(null),
            m = (0, l.useRef)(null);
        return (0, n.useGSAP)(() => {
            if (!d.current) return;
            a.default.set([u.current, f.current, h.current], {
                autoAlpha: 0
            });
            let e = a.default.timeline({
                paused: !0,
                defaults: {
                    ease: "power3.out"
                }
            });
            return e.to(u.current, {
                autoAlpha: 1,
                ease: "sine",
                duration: .7
            }, "<35%").to(f.current, {
                autoAlpha: 1,
                ease: "sine",
                duration: .6
            }, "<").to(h.current, {
                autoAlpha: 1,
                duration: .4
            }, "<50%"), m.current = e, () => {
                e.kill()
            }
        }, {
            dependencies: []
        }), (0, l.useImperativeHandle)(c, () => ({
            play: () => {
                m.current ? .play()
            }
        })), (0, t.jsxs)("div", {
            ref: d,
            className: "relative flex flex-col w-full pointer-events-auto py-20 lg:py-16 lg:max-h-dvh",
            children: [(0, t.jsxs)(o.TransitionLink, {
                href: `work/${e.slug}`,
                className: "relative w-full aspect-670/460 overflow-hidden rounded-lg",
                transitionLabel: e.title,
                children: [(0, t.jsx)(i.default, {
                    src: e.image,
                    alt: e.title,
                    fill: !0,
                    sizes: "(max-width: 768px) 90vw, 45vw",
                    className: "hidden md:block object-cover"
                }), e.mobileImage && (0, t.jsx)(i.default, {
                    src: e.mobileImage,
                    alt: e.title,
                    fill: !0,
                    sizes: "(max-width: 768px) 90vw, 45vw",
                    className: "md:hidden object-cover"
                })]
            }), (0, t.jsx)("div", {
                className: "mt-6 flex flex-col text-dark-font",
                children: (0, t.jsxs)("div", {
                    className: "content-top relative flex flex-col justify-between gap-4",
                    children: [(0, t.jsx)("div", {
                        className: "flex flex-row justify-between gap-2",
                        children: (0, t.jsx)("h3", {
                            ref: u,
                            className: "m-0",
                            children: e.title
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col sm:flex-row justify-between gap-10 lg:gap-4",
                        children: [(0, t.jsx)("p", {
                            ref: f,
                            className: "small max-w-80 4xl:max-w-75",
                            children: (0, s.default)(e.subTitle)
                        }), (0, t.jsx)("div", {
                            className: "",
                            ref: h,
                            children: (0, t.jsx)(r.WordShiftButton, {
                                text: "Explore project",
                                href: `work/${e.slug}`,
                                label: e.title
                            })
                        })]
                    })]
                })
            })]
        })
    });
    e.i(83390);
    var d = e.i(90782),
        u = e.i(42163),
        f = e.i(83495);
    a.default.registerPlugin(f.ScrollTrigger, n.useGSAP), e.s(["default", 0, function({
        trackRef: e,
        workHandleRef: i
    }) {
        let s = (0, l.useRef)([]),
            o = (0, l.useRef)(null),
            h = (0, l.useRef)(null),
            m = (0, l.useRef)(null),
            p = (0, l.useRef)(null);
        return (0, n.useGSAP)(() => {
            if (!h.current || !e.current || !p.current) return;
            a.default.set(h.current, {
                scaleY: 0,
                transformOrigin: "center center"
            }), a.default.set(m.current, {
                rotation: 0,
                xPercent: -50,
                yPercent: -50,
                autoAlpha: 0
            });
            let t = !0,
                r = a.default.quickTo(m.current, "rotation", {
                    duration: .1,
                    ease: "none"
                }),
                l = () => {
                    if (!e.current || !p.current) return;
                    let l = window.innerWidth,
                        n = window.innerHeight;
                    if (l < 768) {
                        let l = e.current.getBoundingClientRect(),
                            i = Math.max(0, l.height - n),
                            s = a.default.utils.clamp(0, 1, i > 0 ? -l.top / i : 0);
                        r(360 * s), a.default.set(h.current, {
                            scaleY: s,
                            transformOrigin: "center center"
                        });
                        let o = s >= .99;
                        o !== t && (t = o, a.default.to(m.current, {
                            autoAlpha: +!o,
                            duration: .3,
                            ease: "power2.out"
                        }))
                    } else {
                        let e = p.current.getBoundingClientRect(),
                            n = 0;
                        if (e.right <= l) {
                            let t = l - e.right;
                            n = a.default.utils.clamp(0, 1, t / l)
                        } else n = 0;
                        r(360 * n), a.default.set(h.current, {
                            scaleY: n,
                            transformOrigin: "center center"
                        });
                        let i = n <= .01 || e.right < 0;
                        i !== t && (t = i, a.default.to(m.current, {
                            autoAlpha: +!i,
                            duration: .15,
                            ease: "power2.out"
                        }))
                    }
                },
                n = f.ScrollTrigger.create({
                    onUpdate: l
                }),
                i = 0,
                s = () => {
                    l(), i = requestAnimationFrame(s)
                };
            return i = requestAnimationFrame(s), () => {
                n.kill(), cancelAnimationFrame(i)
            }
        }, {
            scope: o
        }), i && (i.current = {
            playPanel: e => {
                s.current[e] ? .play()
            }
        }), (0, t.jsx)("div", {
            ref: o,
            className: "relative overflow-visible h-full w-full max-md:bg-[linear-gradient(0deg,#D2D2D2_0%,#FFFFFF_100%)] min-h-dvh",
            children: (0, t.jsx)("div", {
                className: "relative md:absolute md:inset-0 flex items-start md:items-center overflow-visible z-10",
                children: (0, t.jsxs)("div", {
                    ref: e,
                    className: "flex flex-col md:flex-row h-auto md:h-dvh flex-nowrap items-center will-change-transform @container w-full",
                    children: [(0, t.jsx)("div", {
                        className: "pointer-events-auto flex w-screen md:w-[50%] md:max-w-[50cqw] shrink-0 h-auto md:h-full flex-col justify-center items-center px-6 md:px-10 py-20 md:py-0 md:bg-[linear-gradient(0deg,#D2D2D2_0%,#FFFFFF_100%)]",
                        children: (0, t.jsxs)("div", {
                            className: "title-block flex flex-col items-center text-center gap-10 md:gap-12 pt-20",
                            children: [(0, t.jsx)(d.BlurTextReveal, {
                                as: "h2",
                                html: "Selected work <br />&amp; explorations",
                                animationType: "chars",
                                stagger: .05,
                                className: "text-dark-font text-[2.5rem] leading-[1.1] md:text-5xl font-medium tracking-tight"
                            }), (0, t.jsx)("div", {
                                className: "whitespace-nowrap hidden md:block",
                                children: (0, t.jsx)(r.WordShiftButton, {
                                    text: "view all projects",
                                    href: "/work"
                                })
                            })]
                        })
                    }), u.projects.filter(e => e.visibleInHome).map((e, r) => (0, t.jsxs)("div", {
                        className: "js-work-card relative flex w-[calc(100%-3rem)] md:w-[50%] md:max-w-[50cqw] shrink-0 min-w-0 h-auto py-0 md:h-full items-center pointer-events-none md:bg-[linear-gradient(0deg,#D2D2D2_0%,#FFFFFF_100%)]",
                        children: [(0, t.jsx)("div", {
                            className: "js-card-line hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-dvh w-px bg-grey-line/15 origin-top",
                            style: {
                                transform: "scaleY(0)"
                            }
                        }), (0, t.jsx)("div", {
                            className: "js-card-line-horizontal block md:hidden absolute left-0 bottom-0 w-full h-px bg-grey-line/15 origin-left",
                            style: {
                                transform: "scaleX(0)"
                            }
                        }), (0, t.jsx)("div", {
                            className: "js-work-card-inner w-full will-change-transform px-0 md:px-20",
                            children: (0, t.jsx)(c, {
                                ref: e => {
                                    s.current[r] = e
                                },
                                item: e
                            })
                        })]
                    }, r)), (0, t.jsxs)("div", {
                        ref: p,
                        className: "js-work-card relative flex w-[calc(100%-3rem)] md:w-[50%] md:max-w-[50cqw] shrink-0 min-w-0 h-auto md:h-full items-center pointer-events-none md:min-h-dvh py-40 md:py-16 md:bg-[linear-gradient(0deg,#D2D2D2_0%,#FFFFFF_100%)]",
                        children: [(0, t.jsx)("div", {
                            className: "js-card-line hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-dvh w-px bg-grey-line/15 origin-top",
                            style: {
                                transform: "scaleY(0)"
                            }
                        }), (0, t.jsx)("div", {
                            className: "js-work-card-inner w-full will-change-transform px-0 md:px-10 lg:px-16 xl:px-20",
                            children: (0, t.jsx)("div", {
                                className: "relative flex flex-col items-center justify-center w-full pointer-events-auto",
                                children: (0, t.jsxs)("div", {
                                    className: "group flex flex-col items-center justify-center gap-10 text-center w-full h-full",
                                    children: [(0, t.jsx)("h3", {
                                        className: "text-dark-font transition-transform duration-700 max-w-100 lg:max-w-116",
                                        children: "Discover our complete collection of digital experiences, brands, and platforms."
                                    }), (0, t.jsx)("div", {
                                        className: "relative inline-flex items-center gap-4 transition-transform duration-700 mt-2",
                                        children: (0, t.jsx)(r.WordShiftButton, {
                                            text: "view all projects",
                                            href: "/work"
                                        })
                                    })]
                                })
                            })
                        }), (0, t.jsxs)("div", {
                            className: "absolute right-0 top-0 bottom-0 h-dvh w-px pointer-events-none z-20 hidden md:block",
                            children: [(0, t.jsx)("div", {
                                ref: h,
                                className: "absolute top-0 left-0 h-full w-full bg-grey-line/15"
                            }), (0, t.jsxs)("svg", {
                                ref: m,
                                width: "13",
                                height: "13",
                                viewBox: "0 0 13 13",
                                fill: "none",
                                xmlns: "http://www.w3.org/2000/svg",
                                className: "absolute left-0 top-1/2 overflow-visible z-[30] svg-plus-icon",
                                children: [(0, t.jsx)("line", {
                                    x1: "6.5",
                                    y1: "0",
                                    x2: "6.5",
                                    y2: "13",
                                    strokeWidth: "1",
                                    stroke: "#2F323B"
                                }), (0, t.jsx)("line", {
                                    x1: "0",
                                    y1: "6.5",
                                    x2: "13",
                                    y2: "6.5",
                                    strokeWidth: "1",
                                    stroke: "#2F323B"
                                })]
                            })]
                        })]
                    })]
                })
            })
        })
    }], 7617)
}, 28236, e => {
    "use strict";
    var t = e.i(43476);
    e.i(48062);
    var r = e.i(11846);

    function l(e) {
        return e ? 600 : 800
    }

    function n(e) {
        return e ? 60 : 150
    }

    function a() {
        return window.innerWidth < 768
    }

    function i(e) {
        return 200 + n(e) + l(e) + 200
    }
    i(!1);
    var s = e.i(42936);
    e.i(83390);
    var o = e.i(90782);
    e.i(11303);
    var c, d, u, f, h, m, p, g, x = e.i(62749),
        v = e.i(71871),
        w = e.i(65747),
        y = e.i(89970),
        b = function() {
            return "u" > typeof window
        },
        j = function() {
            return c || b() && (c = window.gsap) && c.registerPlugin && c
        },
        k = /[-+=\.]*\d+[\.e\-\+]*\d*[e\-\+]*\d*/gi,
        M = {
            rect: ["width", "height"],
            circle: ["r", "r"],
            ellipse: ["rx", "ry"],
            line: ["x2", "y2"]
        },
        S = function(e) {
            return Math.round(1e4 * e) / 1e4
        },
        T = function(e) {
            return parseFloat(e) || 0
        },
        N = function(e, t) {
            var r = T(e);
            return ~e.indexOf("%") ? r / 100 * t : r
        },
        A = function(e, t) {
            return T(e.getAttribute(t))
        },
        R = Math.sqrt,
        C = function(e, t, r, l, n, a) {
            return R(Math.pow((T(r) - T(e)) * n, 2) + Math.pow((T(l) - T(t)) * a, 2))
        },
        _ = function(e) {
            return console.warn(e)
        },
        P = function(e) {
            return "non-scaling-stroke" === e.getAttribute("vector-effect")
        },
        z = function(e, t, r) {
            var l, n, a = e.indexOf(" ");
            return a < 0 ? (l = void 0 !== r ? r + "" : e, n = e) : (l = e.substr(0, a), n = e.substr(a + 1)), (l = N(l, t)) > (n = N(n, t)) ? [n, l] : [l, n]
        },
        F = function(e) {
            if (!(e = d(e)[0])) return 0;
            var t, r, l, n, a, i, s, o = e.tagName.toLowerCase(),
                c = e.style,
                u = 1,
                f = 1;
            P(e) && (u = R((f = e.getScreenCTM()).a * f.a + f.b * f.b), f = R(f.d * f.d + f.c * f.c));
            try {
                r = e.getBBox()
            } catch (e) {
                _("Some browsers won't measure invisible elements (like display:none or masks inside defs).")
            }
            var h = r || {
                    x: 0,
                    y: 0,
                    width: 0,
                    height: 0
                },
                p = h.x,
                g = h.y,
                x = h.width,
                v = h.height;
            if (r && (x || v) || !M[o] || (x = A(e, M[o][0]), v = A(e, M[o][1]), "rect" !== o && "line" !== o && (x *= 2, v *= 2), "line" === o && (p = A(e, "x1"), g = A(e, "y1"), x = Math.abs(x - p), v = Math.abs(v - g))), "path" === o) n = c.strokeDasharray, c.strokeDasharray = "none", t = e.getTotalLength() || 0, S(u) !== S(f) && !m && (m = 1) && _("Warning: <path> length cannot be measured when vector-effect is non-scaling-stroke and the element isn't proportionally scaled."), t *= (u + f) / 2, c.strokeDasharray = n;
            else if ("rect" === o) t = 2 * x * u + 2 * v * f;
            else if ("line" === o) t = C(p, g, p + x, g + v, u, f);
            else if ("polyline" === o || "polygon" === o)
                for (l = e.getAttribute("points").match(k) || [], "polygon" === o && l.push(l[0], l[1]), t = 0, a = 2; a < l.length; a += 2) t += C(l[a - 2], l[a - 1], l[a], l[a + 1], u, f) || 0;
            else("circle" === o || "ellipse" === o) && (t = Math.PI * (3 * ((i = x / 2 * u) + (s = v / 2 * f)) - R((3 * i + s) * (i + 3 * s))));
            return t || 0
        },
        I = function(e, t) {
            if (!(e = d(e)[0])) return [0, 0];
            t || (t = F(e) + 1);
            var r = u.getComputedStyle(e),
                l = r.strokeDasharray || "",
                n = T(r.strokeDashoffset),
                a = l.indexOf(",");
            return a < 0 && (a = l.indexOf(" ")), (l = a < 0 ? t : T(l.substr(0, a))) > t && (l = t), [-n || 0, l - n || 0]
        },
        L = function() {
            b() && (document, u = window, h = c = j(), d = c.utils.toArray, p = c.core.getStyleSaver, g = c.core.reverting || function() {}, f = -1 !== ((u.navigator || {}).userAgent || "").indexOf("Edge"))
        },
        D = {
            version: "3.15.0",
            name: "drawSVG",
            register: function(e) {
                c = e, L()
            },
            init: function(e, t, r, l, n) {
                if (!e.getBBox) return !1;
                h || L();
                var a, i, s, o = F(e);
                return this.styles = p && p(e, "strokeDashoffset,strokeDasharray,strokeMiterlimit"), this.tween = r, this._style = e.style, this._target = e, t + "" == "true" ? t = "0 100%" : t ? -1 === (t + "").indexOf(" ") && (t = "0 " + t) : t = "0 0", a = I(e, o), i = z(t, o, a[0]), this._length = S(o), this._dash = S(a[1] - a[0]), this._offset = S(-a[0]), this._dashPT = this.add(this, "_dash", this._dash, S(i[1] - i[0]), 0, 0, 0, 0, 0, 1), this._offsetPT = this.add(this, "_offset", this._offset, S(-i[0]), 0, 0, 0, 0, 0, 1), f && (s = u.getComputedStyle(e)).strokeLinecap !== s.strokeLinejoin && (i = T(s.strokeMiterlimit), this.add(e.style, "strokeMiterlimit", i, i + .01)), this._live = P(e) || ~(t + "").indexOf("live"), this._nowrap = ~(t + "").indexOf("nowrap"), this._props.push("drawSVG"), 1
            },
            render: function(e, t) {
                if (t.tween._time || !g()) {
                    var r, l, n, a, i = t._pt,
                        s = t._style;
                    if (i) {
                        for (t._live && (r = F(t._target)) !== t._length && (l = r / t._length, t._length = r, t._offsetPT && (t._offsetPT.s *= l, t._offsetPT.c *= l), t._dashPT ? (t._dashPT.s *= l, t._dashPT.c *= l) : t._dash *= l); i;) i.r(e, i.d), i = i._next;
                        n = t._dash || e && 1 !== e && 1e-4 || 0, r = t._length - n + .1, a = t._offset, n && a && n + Math.abs(a % t._length) > t._length - .05 && (a += a < 0 ? .005 : -.005) && (r += .005), s.strokeDashoffset = n ? a : a + .001, s.strokeDasharray = r < .1 ? "none" : n ? n + "px," + (t._nowrap ? 999999 : r) + "px" : "0px, 999999px"
                    }
                } else t.styles.revert()
            },
            getLength: F,
            getPosition: I
        };
    j() && c.registerPlugin(D);
    var q = e.i(83495),
        E = e.i(71645);
    y.default.registerPlugin(D, q.ScrollTrigger);
    let B = [
            ["M35.9,59.8V.5", "M30,59.7V.4", "M6.4,59.8V.5", "M59.5,59.7V.4", "M53.6,59.7V.4", "M47.7,59.7V.4", "M41.8,59.7V.4", "M24.1,59.7V.3", "M18.2,59.7V.4", "M12.3,59.7V.4", "M.5,59.7V.4"],
            ["M.6,30c0,16.2,13.2,29.4,29.4,29.4s29.4-13.2,29.4-29.4S46.2.6,30,.6.6,13.8.6,30Z", "M6.6,30c0,12.9,10.5,23.4,23.4,23.4s23.4-10.5,23.4-23.4S42.9,6.6,30,6.6,6.6,17.1,6.6,30Z", "M12.6,30c0,9.6,7.8,17.4,17.4,17.4s17.4-7.8,17.4-17.4-7.8-17.4-17.4-17.4-17.4,7.8-17.4,17.4Z", "M18.6,30c0,6.3,5.1,11.4,11.4,11.4s11.4-5.1,11.4-11.4-5.1-11.4-11.4-11.4-11.4,5.1-11.4,11.4Z", "M24.6,30c0,3,2.4,5.4,5.4,5.4s5.4-2.4,5.4-5.4-2.4-5.4-5.4-5.4-5.4,2.4-5.4,5.4Z"],
            ["M.6,59.2c0,.1.1.3.3.3h58.3c.1,0,.3-.1.3-.3V.9c0-.1-.1-.3-.3-.3H.8c-.1,0-.3.1-.3.3v58.3h0Z", "M6.6,53.2c0,.1,0,.2.2.2h46.4c.1,0,.2,0,.2-.2V6.8c0-.1,0-.2-.2-.2H6.8c-.1,0-.2,0-.2.2v46.4h0Z", "M12.6,47.2c0,.1.1.3.3.3h34.3c.1,0,.3-.1.3-.3V12.9c0-.1-.1-.3-.3-.3H12.8c-.1,0-.3.1-.3.3v34.3h0Z", "M18.6,41.2c0,.1.1.2.2.2h22.3c.1,0,.2-.1.2-.2v-22.3c0-.1-.1-.2-.2-.2h-22.3c-.1,0-.2.1-.2.2v22.3h0Z", "M24.6,35.2c0,.1,0,.2.2.2h10.4c.1,0,.2,0,.2-.2v-10.4c0-.1,0-.2-.2-.2h-10.4c-.1,0-.2,0-.2.2v10.4Z", "M29.3,30.1c0-.4.3-.7.7-.7s.7.3.7.7-.3.7-.7.7-.7-.3-.7-.7Z"],
            ["M.5,59.2c4.7-.1,8.8-1.1,12.5-3,10.1-5.1,16.5-15,16.5-26.2S23.1,8.8,13,3.7C9.3,1.9,5.2.9.5.8", "M59.6.8c-4.7.1-8.8,1.1-12.5,3-10.1,5.1-16.5,15-16.5,26.3s6.4,21.1,16.5,26.2c3.6,1.8,7.8,2.8,12.5,3", "M59.9,6.6c-9.8.6-16.8,5.1-21,13.5-1.5,3-2.2,6.3-2.2,9.9,0,3.6.8,6.9,2.3,9.9,4.3,8.4,11.3,12.9,21.1,13.4", "M.4,53.3c7.8-.4,13.9-3.5,18.2-9.2,3.2-4.2,4.8-8.9,4.8-14.1,0-5.2-1.6-9.9-4.8-14.1C14.3,10.2,8.2,7.1.4,6.7", "M.5,47.3c5.7-.3,10.3-2.6,13.6-7.1,2.3-3.1,3.4-6.4,3.4-10.2,0-3.7-1.1-7.1-3.4-10.2-3.3-4.5-7.8-6.8-13.6-7.1", "M59.8,12.6c-6.8.5-11.7,3.5-14.9,9-1.5,2.5-2.2,5.3-2.2,8.3s.7,5.8,2.2,8.3c3.2,5.5,8.2,8.5,14.9,9", "M59.6,18.7c-6.2.4-11,5.2-11,11.3,0,6.1,4.8,10.9,11,11.3", "M.4,41.3c5.3-.5,8.9-3.2,10.6-8.2.3-.9.5-1.9.5-3.1h0c0-1.2-.1-2.3-.4-3.1-1.7-5-5.2-7.7-10.5-8.2", "M.6,35.3c2.7-.3,4.9-2.5,4.9-5.3,0-2.8-2.1-5-4.9-5.3", "M59.7,24.6c-2.8.2-5.1,2.5-5.1,5.3,0,2.8,2.2,5.1,5,5.4"],
            ["M47.9,25c0,2.3,0,4.1,0,5.3-.2,4.8-1.9,8.8-5.1,12.1-10,10.2-27.1,5.3-30.2-8.5-2.1-9.1,3.2-18.1,12.3-21,1.7-.5,4.7-.8,9.1-.8,5.8,0,15.2,0,26.1,0M53.7,25c0,2.5,0,4.4,0,5.5,0,3.2-.7,6.3-2.1,9.3-3,6.4-7.9,10.7-14.5,12.8-4.9,1.5-9.7,1.5-14.5-.1C6.5,47,1,27.1,12.3,14.3c3.3-3.7,7.4-6.2,12.4-7.4,1.9-.4,5.2-.7,10.1-.6,7.2,0,16.2,0,25.2,0M36.4,25c0,1,0,2.1,0,3.4,0,3-.4,5.3-3,6.9-3.7,2.4-8.3.4-9.5-3.7-.5-1.9-.2-3.7,1.1-5.4,2-2.7,4.4-2.6,8.1-2.6,12.4,0,21.1,0,26.1,0,.2,0,.3.1.3.3,0,3,.2,6,0,8.6-.9,9.5-5.4,16.9-13.4,22.2-12.7,8.4-30.1,5.2-39.3-6.9C-6.7,30.3,3.1,5.1,24.8,1.1c1.8-.3,5.2-.5,10.1-.5,4.2,0,13.3,0,25,0M42.1,25c0,1.2,0,2.8,0,5,0,5-3,9.4-7.7,11.3-7.6,3-16-2.3-16.5-10.5-.2-3.3.8-6.2,2.9-8.6,1.6-1.8,3.5-3.1,5.7-3.7,1.3-.4,3.5-.6,6.5-.6,11.4,0,21,0,27,0"],
            ["M17.2,59.4h25.5", "M8.9,52.9h42.2", "M4.2,46.4h51.4", "M1.6,39.8h56.7", "M.4,33.3h59.2", "M.4,26.8h59.2", "M1.5,20.3h56.9", "M4.2,13.7h51.5", "M8.9,7.2h42.2", "M17.3.7h25.4"]
        ],
        V = [{
            id: "card-L0",
            svgIndex: 0,
            title: "AI & Intelligent Automation",
            description: "AI-powered solutions designed to enhance products, automate workflows, and unlock smarter digital experiences."
        }, {
            id: "card-L1",
            svgIndex: 1,
            title: "Web Development",
            description: "Custom web development delivered with a product-focused, design-conscious approach."
        }, {
            id: "card-L2",
            svgIndex: 2,
            title: "Product Design",
            description: "Thoughtful product design that captures attention, deepens engagement, and builds lasting loyalty."
        }],
        O = [{
            id: "card-R0",
            svgIndex: 3,
            title: "Website & Mobile Design",
            description: "High-quality website and app experiences designed to attract users and keep them coming back."
        }, {
            id: "card-R1",
            svgIndex: 4,
            title: "WordPress Development",
            description: "WordPress development focused on performance, clarity, and experiences that convert visitors into loyal users."
        }, {
            id: "card-R2",
            svgIndex: 5,
            title: "Branding",
            description: "Impactful branding positions startups for success through credibility, clarity, and lasting loyalty."
        }],
        W = ["A.I.", "Design", "Development", "Branding"];

    function H(e, t) {
        return e + Math.random() * (t - e)
    }

    function $(e, t) {
        return Math.floor(H(e, t + 1))
    }

    function Z({
        data: e
    }) {
        let r = B[e.svgIndex];
        return (0, t.jsx)("div", {
            className: "w-full relative",
            children: (0, t.jsxs)("div", {
                className: "card-inner pointer-events-auto bg-[#000]/60 lg:bg-[#000]/20 border-0 rounded-lg p-10 h-full flex flex-col justify-between overflow-hidden relative backdrop-blur-md min-h-fit md:min-h-79",
                children: [(0, t.jsxs)("div", {
                    className: "card-top relative z-10 flex justify-between items-start gap-6",
                    children: [(0, t.jsx)("h3", {
                        className: "text-white m-0 max-w-50",
                        children: e.title
                    }), (0, t.jsx)("svg", {
                        viewBox: "0 0 60 60",
                        xmlns: "http://www.w3.org/2000/svg",
                        className: "card-svg-icon shrink-0 w-16 lg:w-25 h-16 lg:h-25",
                        children: r.map((e, r) => (0, t.jsx)("path", {
                            className: "svg-path",
                            fill: "none",
                            stroke: "#d8d8d8",
                            strokeMiterlimit: 10,
                            style: {
                                vectorEffect: "non-scaling-stroke"
                            },
                            d: e
                        }, r))
                    })]
                }), (0, t.jsx)("p", {
                    className: "text-light-font relative z-10 m-0 small max-w-88 md:max-w-78 2xl:max-w-80 4xl:max-w-75 mt-10",
                    children: e.description
                })]
            })
        })
    }

    function Y({
        soundEnabledRef: e
    }) {
        let {
            soundEnabled: t
        } = (0, s.useSiteSound)();
        return (0, E.useEffect)(() => {
            e.current = t
        }, [t, e]), null
    }

    function G({
        scrollProgressRef: e,
        embedded: s = !1
    } = {}) {
        let c = (0, x.useTransitionReady)(),
            d = (0, E.useRef)(!1),
            u = (0, E.useRef)(null),
            f = (0, E.useRef)(null),
            h = (0, E.useRef)(null),
            m = (0, E.useRef)(null),
            p = (0, E.useRef)(null),
            g = (0, E.useRef)(null),
            b = (0, E.useRef)(null),
            j = (0, E.useRef)(null),
            k = (0, E.useRef)(null),
            M = (0, E.useRef)(null),
            S = (0, E.useRef)(null),
            T = (0, E.useRef)([]),
            N = (0, E.useRef)({
                tl: null,
                targets: []
            }),
            A = (0, E.useRef)({}),
            R = (0, E.useCallback)(e => t => {
                A.current[e] = t
            }, []),
            C = (0, E.useRef)({
                imgs: Array(371),
                loaded: 0,
                preloading: !1,
                videoIdx: 0,
                scrollT: 0,
                cardsT: 0,
                particles: [],
                prevInZone: !1,
                testimonialsRaised: !1,
                unpinnedEventFired: !1,
                particleContainer: null,
                gsapTL: null,
                cardsTL: null,
                svgFired: new Set,
                pairCenterTimes: []
            }),
            _ = (0, E.useCallback)(() => {
                let e = [],
                    t = p.current;
                return t && t.querySelectorAll("[data-line]").forEach(t => {
                    var r;
                    let l = getComputedStyle(t),
                        n = t.firstChild;
                    if (!n || n.nodeType !== Node.TEXT_NODE) return;
                    let a = n.textContent || "",
                        i = "uppercase" === (r = l.textTransform) ? a.toUpperCase() : "lowercase" === r ? a.toLowerCase() : "capitalize" === r ? a.replace(/\S+/g, e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase()) : a;
                    if (i.length !== a.length) return;
                    let s = parseFloat(l.fontSize),
                        o = l.fontFamily,
                        c = l.fontWeight,
                        d = l.fontStyle,
                        u = l.color,
                        f = document.createRange();
                    for (let t = 0; t < a.length; t++) {
                        f.setStart(n, t), f.setEnd(n, t + 1);
                        let r = f.getBoundingClientRect();
                        (0 !== r.width || 0 !== r.height) && e.push({
                            ch: i[t],
                            x: r.left + r.width / 2,
                            y: r.top + r.height / 2,
                            fontSize: s,
                            fontFamily: o,
                            fontWeight: c,
                            fontStyle: d,
                            color: u
                        })
                    }
                }), e
            }, []),
            P = (0, E.useCallback)(() => {
                let e = C.current;
                e.gsapTL && (e.gsapTL.kill(), e.gsapTL = null), e.particleContainer && (e.particleContainer.remove(), e.particleContainer = null), e.particles = [];
                let t = document.createElement("div");
                t.style.cssText = "position:fixed;inset:0;pointer-events:none;z-index:999;overflow:visible;isolation:isolate;mix-blend-mode:difference;", document.body.appendChild(t), e.particleContainer = t;
                let r = _(),
                    l = Math.max(window.innerWidth, window.innerHeight),
                    n = window.innerWidth,
                    a = window.innerHeight,
                    i = $(2, 3),
                    s = new Set;
                for (; s.size < Math.min(i, r.length);) s.add($(0, r.length - 1));
                r.forEach((r, i) => {
                    let o = s.has(i),
                        c = document.createElement("span");
                    c.textContent = r.ch, c.style.cssText = `position:absolute;top:0;left:0;font-family:${r.fontFamily};font-style:${r.fontStyle};font-weight:${r.fontWeight};font-size:${r.fontSize}px;color:${r.color};font-synthesis:none;transform-origin:center center;will-change:transform,opacity;white-space:nowrap;line-height:1;-webkit-font-smoothing:antialiased;`, t.appendChild(c);
                    let d = c.getBoundingClientRect(),
                        u = -(d.width / 2),
                        f = -(d.height / 2);
                    y.default.set(c, {
                        x: r.x + u,
                        y: r.y + f,
                        opacity: 1
                    });
                    let h = H(-Math.PI, Math.PI),
                        m = o ? H(.05, .15) * l : H(.4, .9) * l;
                    e.particles.push({
                        el: c,
                        ox: r.x,
                        oy: r.y,
                        fontSize: r.fontSize,
                        isHero: o,
                        offX: u,
                        offY: f,
                        tx: o ? n / 2 + H(-(.15 * n), .15 * n) : null,
                        ty: o ? a / 2 + H(-(.15 * a), .15 * a) : null,
                        heroScale: o ? H(6, 10) : 1,
                        dirX: Math.cos(h),
                        dirY: Math.sin(h) * H(-1, .18),
                        speed: m,
                        rotX: H(-360, 360),
                        rotY: H(-360, 360),
                        rotZ: o ? H(-15, 15) : H(-180, 180),
                        fadeOffset: H(0, .3)
                    })
                });
                let o = y.default.timeline({
                    paused: !0
                });
                o.to({
                    _p: 0
                }, {
                    _p: 1,
                    duration: 1,
                    ease: "none",
                    onUpdate() {
                        let t = this.progress();
                        e.particles.forEach(e => {
                            let r, l = e.isHero ? e.ox + (e.tx - e.ox) * t : e.ox + e.dirX * e.speed * t,
                                n = e.isHero ? e.oy + (e.ty - e.oy) * t : e.oy + e.dirY * e.speed * t;
                            r = e.isHero ? t < .15 ? t / .15 : t > .7 ? 1 - (t - .7) / .3 : 1 : t < e.fadeOffset + .3 ? 1 : Math.max(0, 1 - (t - e.fadeOffset - .3) / .35);
                            let a = e.isHero ? e.fontSize * (1 + (e.heroScale - 1) * Math.min(1, t / .5)) : e.fontSize,
                                i = Math.cos(e.rotY * t * Math.PI / 180),
                                s = e.isHero ? 1 : Math.cos(e.rotX * t * Math.PI / 180),
                                o = e.rotZ * t;
                            y.default.set(e.el, {
                                x: l + e.offX,
                                y: n + e.offY,
                                fontSize: a,
                                rotation: o,
                                scaleX: i,
                                scaleY: s,
                                opacity: Math.max(0, r)
                            })
                        })
                    }
                }), e.gsapTL = o
            }, [_]),
            z = (0, E.useCallback)(() => {
                let e = C.current;
                e.gsapTL && (e.gsapTL.kill(), e.gsapTL = null), e.particleContainer && (e.particleContainer.remove(), e.particleContainer = null), e.particles = []
            }, []),
            F = (0, E.useCallback)(() => {
                let e, t, r = C.current;
                r.cardsTL && r.cardsTL.kill();
                let l = window.innerWidth,
                    n = window.innerHeight,
                    a = l < 768,
                    i = l >= 768 && l < 1512,
                    s = a ? 24 : 40;
                a ? t = Math.round(.55 * (e = l - 2 * s)) : (e = i ? Math.round(.42 * l) : Math.round(.28 * l), t = Math.round(.32 * n));
                let o = A.current,
                    c = Object.values(o).filter(Boolean);
                c.forEach(r => {
                    r.style.width = e + "px", r.style.height = t + "px"
                }), y.default.set(c, {
                    opacity: 0,
                    x: 0,
                    y: 0
                });
                let d = y.default.timeline({
                    paused: !0
                });
                if (a) {
                    let a = ["card-L0", "card-R0", "card-L1", "card-R1", "card-L2", "card-R2"];
                    r.svgFired = new Set, r.pairCenterTimes = a.map((e, t) => ({
                        lk: e,
                        rk: "",
                        centerTime: .12 * t + .09
                    })), a.forEach((r, a) => {
                        let i = o[r];
                        if (!i) return;
                        let s = [];
                        for (let r = 0; r <= 12; r++) {
                            let a = r / 12,
                                i = (l - e) / 2,
                                o = n + a * (-t - n),
                                c = a < .15 ? a / .15 : a > .85 ? 1 - (a - .85) / .15 : 1;
                            s.push({
                                x: i,
                                y: o,
                                opacity: c
                            })
                        }
                        d.to(i, {
                            keyframes: s,
                            duration: .3,
                            ease: "none"
                        }, .12 * a);
                        let c = Array.from(i.querySelectorAll(".svg-path"));
                        c.length && y.default.set(c, {
                            drawSVG: "0%"
                        })
                    })
                } else {
                    let a = [
                        ["card-L0", "card-R0"],
                        ["card-L1", "card-R1"],
                        ["card-L2", "card-R2"]
                    ];
                    r.svgFired = new Set, r.pairCenterTimes = a.map(([e, t], r) => ({
                        lk: e,
                        rk: t,
                        centerTime: .2 * r + .135
                    })), a.forEach(([r, a], c) => {
                        let u = .2 * c,
                            f = o[r],
                            h = o[a];
                        if (!f || !h) return;
                        let m = [],
                            p = [];
                        for (let r = 0; r <= 12; r++) {
                            let a = r / 12,
                                o = -(.7 * e),
                                c = n + a * (-t - n),
                                d = a <= .5 ? Math.sin(a * Math.PI) : 1,
                                u = o + d * ((i ? s : .1 * l) - o),
                                f = l - .3 * e,
                                h = -t,
                                g = h + a * (n - h),
                                x = f + d * ((i ? l - s - e : .9 * l - e) - f),
                                v = a < .15 ? a / .15 : a > .85 ? 1 - (a - .85) / .15 : 1;
                            m.push({
                                x: u,
                                y: c,
                                opacity: v
                            }), p.push({
                                x: x,
                                y: g,
                                opacity: v
                            })
                        }
                        d.to(f, {
                            keyframes: m,
                            duration: .45,
                            ease: "none"
                        }, u), d.to(h, {
                            keyframes: p,
                            duration: .45,
                            ease: "none"
                        }, u);
                        let g = Array.from(f.querySelectorAll(".svg-path")),
                            x = Array.from(h.querySelectorAll(".svg-path"));
                        g.length && y.default.set(g, {
                            drawSVG: "0%"
                        }), x.length && y.default.set(x, {
                            drawSVG: "0%"
                        })
                    })
                }
                r.cardsTL = d
            }, []),
            I = (0, E.useCallback)(e => {
                let t = C.current;
                t.cardsTL || F();
                let r = Object.values(A.current).filter(Boolean);
                if (e < .56) return void y.default.set(r, {
                    opacity: 0,
                    x: 0,
                    y: 0
                });
                let l = Math.min(1, (e - .56) / .43999999999999995);
                t.cardsTL ? .progress(l);
                let n = t.cardsTL ? .time() ? ? 0;
                t.pairCenterTimes.forEach(({
                    lk: e,
                    rk: r,
                    centerTime: l
                }) => {
                    if (!t.svgFired.has(e) && n >= l) {
                        t.svgFired.add(e);
                        let l = A.current[e],
                            n = A.current[r];
                        if (l) {
                            let e = Array.from(l.querySelectorAll(".svg-path"));
                            e.length && y.default.fromTo(e, {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 1.5,
                                ease: "none",
                                stagger: .04
                            })
                        }
                        if (n) {
                            let e = Array.from(n.querySelectorAll(".svg-path"));
                            e.length && y.default.fromTo(e, {
                                drawSVG: "0%"
                            }, {
                                drawSVG: "100%",
                                duration: 1.5,
                                ease: "none",
                                stagger: .04
                            })
                        }
                    }
                })
            }, [F, .56, 1]),
            L = (0, E.useCallback)(e => {
                let t = u.current;
                if (!t) return;
                let r = C.current,
                    l = Math.round(e),
                    n = r.imgs[l];
                n && n.complete && n.naturalWidth > 0 && t.src !== n.src && (t.src = n.src)
            }, []),
            D = (0, E.useCallback)(() => {
                let e, t, r = u.current;
                if (!r) return;
                let l = window.matchMedia("(max-width: 677px)").matches,
                    n = window.matchMedia("(max-width: 767px)").matches,
                    a = window.matchMedia("(min-width: 768px) and (max-width: 1023px)").matches;
                l || n ? (e = 999, t = 594) : e = a ? Math.round(16 / 9 * (t = Math.round(.75 * Math.round(window.visualViewport ? .height ? ? window.innerHeight)))) : Math.round(16 / 9 * (t = Math.round(window.visualViewport ? .height ? ? window.innerHeight))), r.style.width = e + "px", r.style.height = t + "px", C.current.cardsTL = null, L(C.current.videoIdx)
            }, [L]),
            q = (0, E.useCallback)(e => {
                let t = p.current;
                t && (t.style.transition = "none", t.style.opacity = e ? "1" : "0")
            }, []),
            B = (0, E.useCallback)(() => {
                let e = C.current;
                if (e.preloading || e.loaded > 0) return;
                e.preloading = !0;
                let t = "u" > typeof requestIdleCallback ? requestIdleCallback : e => setTimeout(e, 0),
                    r = l => {
                        let n = Math.min(l + 20, 371),
                            a = 0,
                            i = n - l,
                            s = () => {
                                a++, e.loaded++, 371 === e.loaded && L(0), a === i && n < 371 && t(() => r(n))
                            };
                        for (let t = l; t < n; t++) {
                            let r = new Image;
                            r.decoding = "async", r.src = `/images/stone/frame_${String(t+1).padStart(4,"0")}.webp`, r.decode().then(s, s), e.imgs[t] = r
                        }
                    };
                r(0)
            }, [L, 371]);
        return (0, w.useGSAP)(() => {
            if (!c) return;
            let t = C.current;
            D(), ("u" > typeof requestIdleCallback ? requestIdleCallback : e => setTimeout(e, 200))(() => B()), F();
            let r = Object.values(A.current).filter(Boolean);
            r.length && y.default.set(r, {
                opacity: 0,
                x: 0,
                y: 0
            });
            let s = () => {
                D()
            };
            window.addEventListener("resize", s);
            let o = (0, v.getCanvasManager)(),
                p = o.register(r => {
                    if (!t.loaded) return;
                    if (e) {
                        var s, o;
                        let r, c, p, x, v, w, M, S, A, R = e.current,
                            C = a();
                        r = n(C), p = (200 + r) / (c = i(C)), x = (200 + r + l(C)) / c, t.scrollT = R < p ? 0 : R > x ? 1 : (R - p) / (x - p), s = T.current, o = N.current, v = n(C), w = i(C), S = Math.max(0, Math.min(1, (R - (M = (200 + v + l(C)) / w)) / (1 - M))), 0 === (A = s.filter(Boolean)).length || ((!o.tl || o.targets.length !== A.length || o.targets.some((e, t) => e !== A[t]) || A.some(e => !e.isConnected)) && (o.tl && o.tl.kill(), o.tl = function(e) {
                            let t = window.innerWidth <= 768,
                                r = y.default.timeline({
                                    paused: !0,
                                    defaults: {
                                        ease: "none"
                                    }
                                });
                            r.addLabel("stripes_start");
                            let l = e.length;
                            for (let t = 0; t < l; t++) {
                                let n = .3 * (l - 1 - t) / (l - 1 || 1) * 1,
                                    a = n + .3;
                                r.to(e[t], {
                                    scaleY: 1,
                                    duration: a - n,
                                    ease: "none"
                                }, `stripes_start+=${n}`)
                            }
                            let n = document.getElementById("testimonials");
                            return n && y.default.set(n, {
                                marginTop: "-100dvh",
                                willChange: "transform",
                                force3D: !0
                            }), t ? r.to(n, {
                                yPercent: 0,
                                ease: "none"
                            }, "stripes_start-=0.16") : r.to(n, {
                                yPercent: 0,
                                ease: "none"
                            }, "stripes_start-=0.4"), r.to({}, {
                                duration: .1
                            }), r
                        }(A), o.targets = A), o.tl.progress(S));
                        let _ = t.scrollT;
                        if (j.current && (j.current.style.opacity = String(_ <= 0 ? 1 : _ >= .12 ? 0 : 1 - _ / .12)), t.cardsT += (_ - t.cardsT) * .08, k.current) {
                            k.current.style.mixBlendMode = "difference";
                            let e = y.default.utils.clamp(0, 1, (_ - .01) / .12),
                                t = y.default.utils.interpolate("rgba(216,216,216,1)", "rgba(255,255,255,1)", e);
                            if (k.current.querySelectorAll("[data-services-copy], [data-services-copy] *").forEach(e => {
                                    e.style.setProperty("color", t, "important")
                                }), g.current && b.current) {
                                g.current.style.opacity = String(y.default.utils.clamp(0, 1, 1 - (e - .3) / .2)), b.current.style.opacity = String(y.default.utils.clamp(0, 1, (e - .5) / .2));
                                let t = g.current.querySelectorAll(".chars"),
                                    r = b.current.querySelectorAll(".chars");
                                t.forEach((r, l) => {
                                    let n = l / t.length * .3,
                                        a = y.default.utils.clamp(0, 1, (e - n) / .2);
                                    r.style.opacity = String(1 - a), r.style.filter = `blur(${12*a}px)`
                                }), r.forEach((t, l) => {
                                    let n = .5 + l / r.length * .3,
                                        a = y.default.utils.clamp(0, 1, (e - n) / .2);
                                    t.style.opacity = String(a), t.style.filter = `blur(${(1-a)*12}px)`
                                })
                            }
                        }
                        u.current && (u.current.style.opacity = String(y.default.utils.clamp(0, 1, _ / .08)));
                        let P = window.innerWidth >= 768 ? f.current : h.current,
                            z = window.innerWidth >= 768 ? h.current : f.current;
                        if (P && (P.style.opacity = String(.5 * y.default.utils.clamp(0, 1, (_ - .04) / .08)), _ >= .04 && P.paused && !P.dataset.playPending ? (P.dataset.playPending = "1", P.play().then(() => {
                                delete P.dataset.playPending
                            }).catch(() => {})) : _ < .04 && (delete P.dataset.playPending, P.paused || P.pause())), z && (z.style.opacity = "0", z.paused || z.pause()), m.current) {
                            let e = d.current && _ >= .04 && R < .95;
                            if (e && m.current.paused ? m.current.play().catch(() => {}) : e || m.current.paused || m.current.pause(), e) {
                                let e = y.default.utils.clamp(0, 1, (_ - .04) / .16),
                                    t = 1 - y.default.utils.clamp(0, 1, (R - .85) / .1);
                                m.current.volume = e * t
                            }
                        }
                    }
                    let c = 370 * t.scrollT;
                    t.videoIdx += (c - t.videoIdx) * .12;
                    let p = t.scrollT >= .35 && t.scrollT <= .53,
                        x = t.scrollT > .53,
                        v = p ? (t.scrollT - .35) / .18000000000000005 : 0;
                    p && !t.prevInZone && P(), !p && t.prevInZone && z(), t.prevInZone = p, L(t.videoIdx), p && t.gsapTL ? (t.gsapTL.progress(v), q(!1)) : x ? q(!1) : q(!0), I(t.cardsT)
                }, !1),
                x = S.current,
                w = new IntersectionObserver(([t]) => {
                    let r = t.isIntersecting;
                    if (o.setActive(p, r), r) e && B();
                    else {
                        let e = f.current;
                        e && !e.paused && e.pause();
                        let t = h.current;
                        t && !t.paused && t.pause();
                        let r = m.current;
                        r && !r.paused && r.pause()
                    }
                }, {
                    root: null,
                    threshold: 0,
                    rootMargin: "128px 0px"
                });
            return x && w.observe(x), () => {
                o.unregister(p), w.disconnect(), window.removeEventListener("resize", s), z(), t.cardsTL && t.cardsTL.kill(), N.current.tl && (N.current.tl.kill(), N.current.tl = null, N.current.targets = [])
            }
        }, [D, B, L, P, z, q, I, F, 371, .35, .53, e, s, c]), (0, t.jsxs)("section", {
            ref: M,
            id: "trionn-services",
            className: `relative min-h-dvh ${s?"h-full min-h-0 w-full":""}`,
            children: [(0, t.jsx)(Y, {
                soundEnabledRef: d
            }), (0, t.jsxs)("div", {
                ref: S,
                className: `relative w-full overflow-hidden bg-[#000] ${s?"h-full min-h-dvh":"h-dvh min-h-dvh"}`,
                children: [(0, t.jsx)("div", {
                    ref: j,
                    className: "pointer-events-none absolute inset-0 z-25 bg-white",
                    style: {
                        opacity: +!!s
                    },
                    "aria-hidden": !0
                }), (0, t.jsx)("img", {
                    ref: u,
                    id: "c",
                    alt: "",
                    "aria-hidden": !0,
                    className: "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 block max-[677px]:w-full max-[677px]:h-full md:h-dvh md:w-auto max-w-none object-contain",
                    style: {
                        opacity: +!s
                    }
                }), (0, t.jsx)("video", {
                    ref: f,
                    src: "/video/homepage-services-video.mp4",
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    preload: "auto",
                    className: "pointer-events-none object-cover z-1 mix-blend-screen absolute inset-0 h-full w-full min-h-full min-w-full hidden md:block",
                    style: {
                        opacity: 0,
                        transform: "rotate(180deg) translateZ(0)",
                        willChange: "opacity"
                    }
                }), (0, t.jsx)("video", {
                    ref: h,
                    src: "/video/homepage-services-video_m.mp4",
                    muted: !0,
                    loop: !0,
                    playsInline: !0,
                    preload: "auto",
                    className: "pointer-events-none object-cover z-1 mix-blend-screen absolute inset-0 h-full w-full min-h-full min-w-full md:hidden",
                    style: {
                        opacity: 0,
                        transform: "rotate(180deg) translateZ(0)",
                        willChange: "opacity"
                    }
                }), (0, t.jsx)("audio", {
                    ref: m,
                    src: "/audio/thunder.mp3",
                    loop: !0,
                    preload: "auto",
                    onTimeUpdate: e => {
                        e.currentTarget.currentTime >= 14 && (e.currentTarget.currentTime = 0)
                    }
                }), (0, t.jsxs)("div", {
                    className: "absolute inset-0 pointer-events-none overflow-hidden z-2 max-md:z-40",
                    style: {
                        perspective: "93.75rem"
                    },
                    children: [V.map(e => (0, t.jsx)("div", {
                        ref: R(e.id),
                        className: "svc-card z-10 absolute top-0 left-0 will-change-[transform,opacity] transform-3d lg:p-6",
                        children: (0, t.jsx)(Z, {
                            data: e
                        })
                    }, e.id)), O.map(e => (0, t.jsx)("div", {
                        ref: R(e.id),
                        className: "svc-card absolute z-10 top-0 left-0 will-change-[transform,opacity] transform-3d lg:p-6",
                        children: (0, t.jsx)(Z, {
                            data: e
                        })
                    }, e.id))]
                }), (0, t.jsxs)("div", {
                    ref: k,
                    className: "tr__container relative flex h-full flex-col items-center justify-between pt-40 lg:pt-30 pb-20 z-30",
                    children: [(0, t.jsx)("div", {
                        "data-services-copy": !0,
                        className: "relative z-20 block",
                        children: (0, t.jsx)(o.BlurTextReveal, {
                            as: "span",
                            text: "OUR SERVICES",
                            animationType: "chars",
                            stagger: .05,
                            className: `title text-center relative z-20 block transition-colors duration-500 ${s?"":"text-light-font"}`
                        })
                    }), (0, t.jsx)("div", {
                        ref: p,
                        className: "relative z-20 my-20 flex w-full items-center justify-center pointer-events-none",
                        children: (0, t.jsx)("div", {
                            className: "text-center",
                            children: W.map((e, r) => (0, t.jsx)("div", {
                                "data-line": !0,
                                "data-services-copy": !0,
                                className: `block mrquee-text uppercase transition-colors duration-500 ${s?"":"text-light-font"}`,
                                children: e
                            }, r))
                        })
                    }), (0, t.jsxs)("div", {
                        className: "relative z-20 flex flex-col gap-10 md:flex-row w-full justify-center lg:justify-between",
                        children: [(0, t.jsx)("div", {
                            className: "hidden w-1/3 lg:block"
                        }), (0, t.jsxs)("div", {
                            "data-services-copy": !0,
                            className: "w-full lg:text-center md:w-1/2 lg:w-1/3 relative min-h-10",
                            children: [(0, t.jsx)("div", {
                                ref: g,
                                className: "absolute inset-0 flex items-center justify-center md:justify-start lg:justify-center",
                                style: {
                                    opacity: 1
                                },
                                children: (0, t.jsx)(o.BlurTextReveal, {
                                    as: "span",
                                    text: "✦ Design with intent. Built to work.",
                                    animationType: "chars",
                                    stagger: .05,
                                    className: `title relative z-20 block ${s?"":"text-light-font"}`
                                })
                            }), (0, t.jsx)("div", {
                                ref: b,
                                className: "absolute inset-0 flex items-center justify-center md:justify-start lg:justify-center",
                                style: {
                                    opacity: 0
                                },
                                children: (0, t.jsx)(o.BlurTextReveal, {
                                    as: "span",
                                    html: "✦ Different disciplines. One standard of craft.",
                                    animationType: "chars",
                                    stagger: .05,
                                    className: `title relative z-20 block ${s?"":"text-light-font"}`
                                })
                            })]
                        }), (0, t.jsx)("div", {
                            className: "flex w-full justify-center md:justify-end md:w-1/2 lg:w-1/3",
                            children: (0, t.jsx)(r.WordShiftButton, {
                                text: "view services",
                                href: "/services",
                                customClass: "relative z-20",
                                styleVars: {
                                    buttonWrapperColor: "#D8D8D8"
                                }
                            })
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "absolute inset-0 pointer-events-none flex flex-col w-full h-full z-30 max-md:z-50",
                    children: Array.from({
                        length: 5
                    }).map((e, r) => (0, t.jsx)("div", {
                        "data-stripe-id": `svc-stripe-${r}`,
                        ref: e => {
                            e && (T.current[r] = e)
                        },
                        style: {
                            flex: 1,
                            width: "100%",
                            marginTop: r > 0 ? "-0.5px" : void 0,
                            paddingBottom: "0.5px",
                            backgroundColor: "#fff",
                            transform: "scaleY(0)",
                            transformOrigin: "bottom",
                            willChange: "transform"
                        }
                    }, r))
                })]
            })]
        })
    }
    var U = e.i(7617);
    y.default.registerPlugin(q.ScrollTrigger), e.s(["default", 0, function() {
        let e = (0, E.useRef)(null),
            r = (0, E.useRef)(null),
            s = (0, E.useRef)(null),
            o = (0, E.useRef)(null),
            c = (0, E.useRef)(0),
            d = (0, E.useRef)(null),
            u = (0, x.useTransitionReady)();
        return (0, w.useGSAP)(() => {
            let t;
            if (!u) return;
            let f = e.current,
                h = r.current,
                m = s.current,
                p = o.current;
            if (!f || !h || !p || !m) return;
            if (a()) {
                y.default.set([h, m], {
                    clearProps: "transform"
                }), y.default.set(p, {
                    clearProps: "transform",
                    autoAlpha: 1
                }), f.querySelectorAll(".js-work-card-inner").forEach(e => y.default.set(e, {
                    y: 0,
                    opacity: 1
                })), f.querySelectorAll(".js-card-line").forEach(e => y.default.set(e, {
                    scaleY: 1
                })), f.querySelectorAll(".js-card-line-horizontal").forEach(e => y.default.set(e, {
                    scaleX: 1
                })), requestAnimationFrame(() => {
                    let e = f.querySelectorAll(".js-work-card").length;
                    for (let t = 0; t < e; t++) d.current ? .playPanel(t)
                });
                let e = 100 + (l(!0) + 100),
                    t = 100 / e,
                    r = i(!0),
                    a = (200 + n(!0)) / r;
                y.default.set(p, {
                    marginTop: "-100vh",
                    zIndex: 1
                });
                let s = q.ScrollTrigger.create({
                    trigger: p,
                    start: "top top",
                    end: `+=${e}%`,
                    pin: !0,
                    pinSpacing: !0,
                    anticipatePin: 1,
                    markers: !1,
                    onUpdate: e => {
                        c.current = a + (t >= 1 ? 0 : Math.max(0, (e.progress - t) / (1 - t))) * (1 - a)
                    }
                });
                return () => {
                    s.kill(), y.default.set(m, {
                        clearProps: "y,zIndex,backgroundColor"
                    }), y.default.set(p, {
                        clearProps: "marginTop,zIndex"
                    })
                }
            }
            let g = new Set,
                x = new Set,
                v = {
                    p: 0
                },
                w = () => {
                    let e, t, r, l, a, s = v.p;
                    c.current = s, y.default.set(p, {
                        autoAlpha: +(s >= .15)
                    });
                    let o = Math.max(0, h.scrollWidth - m.clientWidth),
                        u = Math.max(0, h.scrollHeight - m.clientHeight),
                        w = window.innerWidth,
                        b = window.innerHeight,
                        j = w < 768,
                        k = (e = 200 / i(j), s <= 0 ? 0 : s >= e ? 1 : s / e),
                        M = (t = n(j), l = 200 / (r = i(j)), a = (200 + t) / r, s <= l ? 0 : s >= a ? 1 : (s - l) / (a - l)),
                        S = 0,
                        T = 0;
                    j ? (T = k * u, y.default.to(h, {
                        x: 0,
                        y: -T,
                        duration: 0,
                        ease: "none",
                        overwrite: !0,
                        force3D: !0
                    }), y.default.to(p, {
                        xPercent: 0,
                        yPercent: 0,
                        duration: 0,
                        ease: "none",
                        overwrite: !0,
                        force3D: !0
                    }), y.default.to(m, {
                        x: 0,
                        y: -b * M,
                        duration: 0,
                        ease: "none",
                        overwrite: !0,
                        force3D: !0
                    })) : (S = k * o, y.default.to(h, {
                        x: -S,
                        y: 0
                    }), y.default.to(p, {
                        xPercent: 0,
                        yPercent: 0
                    }), y.default.to(m, {
                        x: -w * M,
                        y: 0
                    }));
                    let N = f.querySelectorAll(".js-work-card"),
                        A = j ? w : .5 * w,
                        R = j ? .85 * w : .5 * w;
                    N.forEach((e, t) => {
                        let r, l, n = e.querySelector(".js-work-card-inner"),
                            a = e.querySelectorAll(".js-card-line");
                        if (n && (r = j ? (e.offsetTop + e.offsetHeight / 2 - T) / b : (A + t * R + R / 2 - S) / w, l = j ? 0 : r > 1.2 ? 550 : r > .5 ? 550 * (1 - (1 - Math.pow(1 - (1.2 - r) / .7, 3))) : 0, y.default.set(n, {
                                y: l,
                                force3D: !0
                            }), r < 1.05 && !x.has(t) && (x.add(t), d.current ? .playPanel(t)), r < 1 && !g.has(t))) {
                            g.add(t);
                            let r = e.querySelectorAll(".js-card-line-horizontal");
                            a.length && y.default.to(a, {
                                scaleY: 1,
                                duration: 1.2,
                                ease: "power2.out",
                                delay: .1 * t
                            }), r.length && y.default.to(r, {
                                scaleX: 1,
                                duration: 1.2,
                                ease: "power2.out",
                                delay: .1 * t
                            })
                        }
                    })
                };
            t = window.innerWidth < 768, f.querySelectorAll(".js-work-card").forEach((e, r) => {
                let l = e.querySelector(".js-work-card-inner");
                l && y.default.set(l, {
                    y: 550 * !t,
                    opacity: 1,
                    force3D: !0
                })
            }), f.querySelectorAll(".js-card-line").forEach(e => {
                y.default.set(e, {
                    scaleY: 0,
                    transformOrigin: "top",
                    force3D: !0
                })
            }), y.default.set(p, {
                xPercent: 0,
                autoAlpha: 0
            });
            let b = q.ScrollTrigger.create({
                trigger: f,
                start: "top top",
                end: `+=${i(a())}%`,
                pin: !0,
                pinSpacing: !0,
                anticipatePin: 1,
                markers: !1,
                onUpdate: e => {
                    v.p = e.progress, w()
                }
            });
            w();
            let j = () => b.refresh(),
                k = requestAnimationFrame(j),
                M = () => {
                    j(), requestAnimationFrame(j)
                };
            "complete" === document.readyState ? requestAnimationFrame(j) : window.addEventListener("load", M, {
                once: !0
            });
            let S = 0,
                T = new ResizeObserver(() => {
                    cancelAnimationFrame(S), S = requestAnimationFrame(j)
                });
            return T.observe(document.body), () => {
                cancelAnimationFrame(k), cancelAnimationFrame(S), window.removeEventListener("load", M), T.disconnect(), b.kill()
            }
        }, {
            scope: e,
            dependencies: [u]
        }), (0, t.jsxs)("div", {
            ref: e,
            id: "work-section",
            className: "relative w-full min-h-screen bg-white max-md:overflow-visible md:min-h-dvh md:h-dvh md:overflow-hidden",
            children: [(0, t.jsx)("div", {
                ref: s,
                className: "relative md:absolute md:inset-0 z-2 min-h-dvh overflow-visible pointer-events-none will-change-transform",
                children: (0, t.jsx)(U.default, {
                    trackRef: r,
                    workHandleRef: d
                })
            }), (0, t.jsx)("div", {
                ref: o,
                className: "relative md:absolute md:inset-0 z-1 will-change-transform min-h-dvh",
                children: (0, t.jsx)(G, {
                    scrollProgressRef: c,
                    embedded: !0
                })
            })]
        })
    }], 28236)
}]);
