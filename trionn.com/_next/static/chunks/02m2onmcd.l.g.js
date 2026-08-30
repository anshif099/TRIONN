(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 18581, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "useMergedRef", {
        enumerable: !0,
        get: function() {
            return l
        }
    });
    let n = e.r(71645);

    function l(e, t) {
        let r = (0, n.useRef)(null),
            l = (0, n.useRef)(null);
        return (0, n.useCallback)(n => {
            if (null === n) {
                let e = r.current;
                e && (r.current = null, e());
                let t = l.current;
                t && (l.current = null, t())
            } else e && (r.current = s(e, n)), t && (l.current = s(t, n))
        }, [e, t])
    }

    function s(e, t) {
        if ("function" != typeof e) return e.current = t, () => {
            e.current = null
        }; {
            let r = e(t);
            return "function" == typeof r ? r : () => e(null)
        }
    }("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 18566, (e, t, r) => {
    t.exports = e.r(76562)
}, 62749, e => {
    "use strict";
    var t = e.i(71645);
    let r = 0,
        n = null;

    function l() {
        n && (window.removeEventListener("trionn:intro-text-finished", n), n = null), window.clearTimeout(r), r = 0, delete document.documentElement.dataset.trionnIntroTextDone, delete document.documentElement.dataset.trionnLionStart
    }
    e.s(["cancelAboutTrionnReadySchedule", 0, l, "scheduleAboutTrionnReady", 0, function(e, t = 4500) {
        l(), n = () => {
            document.documentElement.dataset.trionnReady = "true", window.dispatchEvent(new CustomEvent("loader" === e ? "trionn-loader:complete" : "trionn-transition:complete")), l()
        }, window.addEventListener("trionn:intro-text-finished", n, {
            once: !0
        }), r = window.setTimeout(n, t)
    }, "useTransitionEarlyStart", 0, function() {
        let [e, r] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            "true" === document.documentElement.dataset.trionnReady && r(!0);
            let e = () => {
                    r(!0)
                },
                t = () => {
                    delete document.documentElement.dataset.trionnIntroTextDone, delete document.documentElement.dataset.trionnLionStart, r(!1)
                },
                n = () => {
                    r(!0)
                };
            return window.addEventListener("trionn-transition:early-start", e), window.addEventListener("trionn-loader:complete", n), window.addEventListener("trionn-transition:complete", n), window.addEventListener("trionn-transition:start", t), () => {
                window.removeEventListener("trionn-transition:early-start", e), window.removeEventListener("trionn-loader:complete", n), window.removeEventListener("trionn-transition:complete", n), window.removeEventListener("trionn-transition:start", t)
            }
        }, []), e
    }, "useTransitionReady", 0, function() {
        let [e, r] = (0, t.useState)(!1);
        return (0, t.useEffect)(() => {
            "true" === document.documentElement.dataset.trionnReady && r(!0);
            let e = () => {
                    document.documentElement.dataset.trionnReady = "true", r(!0)
                },
                t = () => {
                    l(), delete document.documentElement.dataset.trionnIntroTextDone, delete document.documentElement.dataset.trionnLionStart, document.documentElement.dataset.trionnReady = "false", r(!1)
                };
            return window.addEventListener("trionn-loader:complete", e), window.addEventListener("trionn-transition:complete", e), window.addEventListener("trionn-transition:start", t), () => {
                window.removeEventListener("trionn-loader:complete", e), window.removeEventListener("trionn-transition:complete", e), window.removeEventListener("trionn-transition:start", t)
            }
        }, []), e
    }])
}, 53477, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(62749);
    let l = (0, r.createContext)(null);
    e.s(["TransitionProvider", 0, function({
        children: e
    }) {
        let [s, i] = (0, r.useState)(!1), [a, o] = (0, r.useState)("loader"), [u, c] = (0, r.useState)(""), [d, f] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            "sweep-in" === a && window.dispatchEvent(new CustomEvent("trionn-transition:start"))
        }, [a]);
        let p = (0, r.useRef)(null),
            y = (0, r.useCallback)(() => {
                i(!0), f(!0), o("idle"), "/about" === window.location.pathname ? (0, n.scheduleAboutTrionnReady)("loader") : (document.documentElement.dataset.trionnReady = "true", window.dispatchEvent(new CustomEvent("trionn-loader:complete")))
            }, []),
            h = (0, r.useCallback)(() => new Promise(e => {
                p.current = e
            }), []),
            m = (0, r.useCallback)(() => {
                window.dispatchEvent(new CustomEvent("trionn-transition:belts-closed")), p.current ? .(), p.current = null
            }, []),
            x = (0, r.useMemo)(() => ({
                isLoaderComplete: s,
                markLoaderComplete: y,
                phase: a,
                setPhase: o,
                transitionLabel: u,
                setTransitionLabel: c,
                isContentVisible: d,
                setContentVisible: f,
                beltsClosed: h,
                notifyBeltsClosed: m
            }), [s, y, a, u, d, h, m]);
        return (0, t.jsx)(l.Provider, {
            value: x,
            children: e
        })
    }, "useTransition", 0, function() {
        let e = (0, r.useContext)(l);
        if (!e) throw Error("useTransition must be used within TransitionProvider");
        return e
    }])
}, 36526, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(53477);
    let l = "52% 52%",
        s = e => 1 - Math.pow(1 - e, 3),
        i = e => e < .5 ? 2 * e * e : -1 + (4 - 2 * e) * e,
        a = e => 1 + 2.70158 * Math.pow(e - 1, 3) + 1.70158 * Math.pow(e - 1, 2);
    class o {
        ids = new Set;
        aborted = !1;
        raf(e) {
            if (this.aborted) return;
            let t = 0;
            t = requestAnimationFrame(r => {
                this.ids.delete(t), this.aborted || e(r)
            }), this.ids.add(t)
        }
        requestVisibleFrame(e) {
            this.raf(t => {
                document.hidden ? this.requestVisibleFrame(e) : e(t)
            })
        }
        abort() {
            this.aborted = !0, this.ids.forEach(e => cancelAnimationFrame(e)), this.ids.clear()
        }
    }

    function u(e, t, r) {
        let n = 1.2 + .37 * t % .8,
            l = 8 + .61 * t % 14,
            s = 1.7 * t % (2 * Math.PI),
            i = "h" === r ? `M -10 ${e.toFixed(1)}` : `M ${e.toFixed(1)} -10`;
        for (let t = 1; t <= 60; t++)
            if ("h" === r) {
                let r = t / 60 * 598 - 10;
                i += ` L ${r.toFixed(1)} ${(e+l*Math.sin(r/578*n*Math.PI+s)).toFixed(1)}`
            } else {
                let r = t / 60 * 606 - 10;
                i += ` L ${(e+l*Math.sin(r/586*n*Math.PI+s)).toFixed(1)} ${r.toFixed(1)}`
            }
        return i
    }

    function c(e) {
        return Array.from({
            length: 28
        }, (t, r) => {
            let n = 3.14159 * r + 1.618;
            if ("top-down" === e) {
                let e = (r + .5) * 20.928571428571427;
                return {
                    path: u(e, n, "h"),
                    delay: .028239 * r,
                    fillX: -10,
                    fillY: e - 10.464285714285714,
                    fillW: 600,
                    fillH: 21.928571428571427,
                    axis: "h"
                }
            }
            if ("bottom-up" === e) {
                let e = 586 - (r + .5) * 20.928571428571427;
                return {
                    path: u(e, n, "h"),
                    delay: .028239 * r,
                    fillX: -10,
                    fillY: e,
                    fillW: 600,
                    fillH: 21.928571428571427,
                    axis: "h"
                }
            } {
                let e = (r + .5) * 20.642857142857142;
                return {
                    path: u(e, n, "v"),
                    delay: .028239 * r,
                    fillX: e - 10.321428571428571,
                    fillY: -10,
                    fillW: 21.642857142857142,
                    fillH: 610,
                    axis: "v"
                }
            }
        })
    }
    let d = c("bottom-up"),
        f = c("left-right"),
        p = c("top-down");

    function y(e, t, r, n) {
        if (!e || !t) return;
        if (n <= 0) {
            e.innerHTML = "", t.innerHTML = "";
            return
        }
        let l = "",
            s = "";
        r.forEach(e => {
            let t = Math.max(0, Math.min(1, (n - e.delay) / .154034));
            if (t <= 0) return;
            let r = i(Math.min(1, (n - e.delay) / .2156476));
            r > 0 && (s += "h" === e.axis ? `<rect x="${e.fillX}" y="${e.fillY.toFixed(1)}" width="${e.fillW}" height="${(e.fillH*r+2).toFixed(1)}" fill="#434343"/>` : `<rect x="${e.fillX.toFixed(1)}" y="-10" width="${(e.fillW*r+2).toFixed(1)}" height="610" fill="#434343"/>`);
            let a = Math.max(0, 1 - i(Math.min(1, (n - e.delay) / .33887480000000003)));
            a > .01 && (l += `<path d="${e.path}" fill="none" stroke="#888" stroke-width="1.5" stroke-linecap="round" pathLength="1" stroke-dasharray="1" stroke-dashoffset="${(1-i(t)).toFixed(4)}" opacity="${a.toFixed(3)}"/>`)
        }), t.innerHTML = s, e.innerHTML = l
    }
    let h = "M269.431 257.019C268.708 258.271 268.717 259.816 269.455 261.06L286.98 290.611C288.54 293.241 292.355 293.219 293.885 290.57L327.284 232.72C328.825 230.052 332.677 230.054 334.215 232.724L425.279 390.875C425.982 392.095 427.275 392.856 428.682 392.878L463.65 393.434C466.755 393.483 468.73 390.129 467.18 387.438L353.861 190.681C353.148 189.444 353.149 187.921 353.863 186.685L388.264 127.101C388.965 125.885 388.979 124.391 388.299 123.163L371.368 92.5833C369.861 89.8615 365.96 89.8265 364.404 92.5208L269.431 257.019Z",
        m = "M316.66 425.547C318.087 425.545 319.406 426.304 320.123 427.537L356.868 490.777C357.572 491.989 358.86 492.744 360.263 492.767L395.242 493.322C398.347 493.372 400.322 490.018 398.773 487.327L304.909 324.268C304.196 323.03 302.878 322.266 301.449 322.263L265.933 322.201C262.846 322.196 260.916 325.543 262.468 328.212L293.454 381.508C295.005 384.176 293.079 387.521 289.993 387.519L107.1 387.384C105.67 387.383 104.348 388.146 103.633 389.384L86.0729 419.792C84.532 422.461 86.4598 425.796 89.5411 425.793L316.66 425.547Z",
        x = "M182.809 283.818C179.736 283.807 177.822 280.479 179.359 277.818L271.364 118.461C272.066 117.245 272.079 115.751 271.399 114.523L254.468 83.9432C252.961 81.2213 249.06 81.1863 247.504 83.8807L133.245 281.783C132.528 283.026 131.2 283.789 129.765 283.783L56.9478 283.499C55.5132 283.494 54.1855 284.257 53.4681 285.499L35.9048 315.92C34.3665 318.584 36.2864 321.915 39.363 321.92L229.336 322.201C230.767 322.203 232.091 321.441 232.806 320.201L250.222 290.036C251.759 287.375 249.845 284.047 246.771 284.036L182.809 283.818Z",
        v = (0, t.jsxs)("svg", {
            width: "13",
            height: "13",
            viewBox: "0 0 13 13",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            children: [(0, t.jsx)("line", {
                x1: "6.5",
                y1: "0",
                x2: "6.5",
                y2: "13",
                stroke: "#555"
            }), (0, t.jsx)("line", {
                x1: "13",
                y1: "6.5",
                x2: "0",
                y2: "6.5",
                stroke: "#555"
            })]
        }),
        w = [1, -1, -1, 1];
    e.s(["default", 0, function() {
        let {
            phase: e,
            isLoaderComplete: i,
            markLoaderComplete: u,
            setContentVisible: c
        } = (0, n.useTransition)(), g = (0, r.useRef)(null), b = (0, r.useRef)(null), E = (0, r.useRef)(null), R = (0, r.useRef)(null), j = (0, r.useRef)(null), L = (0, r.useRef)(null), C = (0, r.useRef)(null), M = (0, r.useRef)(null), T = (0, r.useRef)(null), $ = (0, r.useRef)(null), k = (0, r.useRef)(null), N = (0, r.useRef)(null), S = (0, r.useRef)([]), F = (0, r.useRef)(null), P = (0, r.useRef)(null), A = (0, r.useRef)(null), O = (0, r.useRef)(null), _ = (0, r.useRef)(null), D = (0, r.useRef)(null), q = (0, r.useRef)(null), I = (0, r.useRef)(null), H = (0, r.useRef)(null), Y = (0, r.useRef)(null), W = (0, r.useRef)(null), B = (0, r.useRef)(null), V = (0, r.useRef)(null), U = (0, r.useRef)(null), K = (0, r.useRef)(null), X = (0, r.useRef)(null), Z = (0, r.useRef)(null), z = (0, r.useRef)(null), G = (0, r.useRef)(null), J = (0, r.useRef)(null), Q = (0, r.useRef)(null), ee = (0, r.useRef)(null), et = (0, r.useRef)(null), er = (0, r.useRef)(null), en = (0, r.useRef)(null), el = (0, r.useRef)(!1), es = (0, r.useRef)(0), ei = (0, r.useRef)(null);
        null === ei.current && (ei.current = new o), (0, r.useEffect)(() => {
            let e = ei.current;
            return () => e.abort()
        }, []), (0, r.useEffect)(() => {
            if ("loader" !== e) {
                es.current && cancelAnimationFrame(es.current);
                return
            }
            let t = () => {
                window.scrollTo(0, 0), es.current = requestAnimationFrame(t)
            };
            return es.current = requestAnimationFrame(t), () => {
                es.current && cancelAnimationFrame(es.current)
            }
        }, [e]);
        let ea = (0, r.useCallback)((e, t, r, n, l, s, i) => new Promise(a => {
                setTimeout(() => {
                    var s, o;
                    let u, c;
                    s = ei.current, o = () => {
                        e.style.opacity = "0", a()
                    }, c = 0, s.requestVisibleFrame(function a(d) {
                        void 0 !== u && (c += d - u), u = d;
                        let f = Math.min(c / 500, 1);
                        (s => {
                            let a = s * s * s;
                            e.style.opacity = String(1 - a), e.style.transform = `translate(${t*a}px,${r*a}px) rotate${l}(${n*a}deg) rotateZ(${i*a}deg) scale(${1+.5*a})`
                        })(f, d), f < 1 ? s.requestVisibleFrame(a) : o && o()
                    })
                }, s)
            }), []),
            eo = (0, r.useCallback)(e => {
                let t = E.current,
                    r = M.current,
                    n = T.current,
                    s = $.current,
                    i = k.current,
                    a = N.current,
                    o = L.current,
                    u = C.current,
                    c = R.current,
                    h = [F.current, P.current, A.current],
                    m = [V.current, U.current, K.current, X.current],
                    x = [Q.current, ee.current, et.current, er.current, en.current];
                t.style.visibility = "visible", r.textContent = "", r.style.opacity = "0", n.style.opacity = "1", [q, I, H, Y, W, B].forEach(e => {
                    e.current && (e.current.innerHTML = "")
                }), x.forEach(e => e.classList.remove("visible")), s.innerHTML = [0, 1].map(e => `<div class="pl-slot-digit">${e}</div>`).join(""), i.innerHTML = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map(e => `<div class="pl-slot-digit">${e}</div>`).join(""), a.innerHTML = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0].map(e => `<div class="pl-slot-digit">${e}</div>`).join(""), h.forEach(e => {
                    e.style.opacity = "1", e.style.transformOrigin = l, e.style.transform = "scale(1)"
                });
                let v = c.offsetWidth,
                    w = c.offsetHeight;
                u.setAttribute("x", "0.75"), u.setAttribute("y", "0.75"), u.setAttribute("width", (v - 1.5).toFixed(2)), u.setAttribute("height", (w - 1.5).toFixed(2)), o.style.opacity = "1", u.style.strokeDashoffset = "1";
                let [g, b, j, S] = m, Z = {
                    tl: 0,
                    tr: 0,
                    br: 0,
                    bl: 0
                }, z = null, G = 2 * v + 2 * w, J = v / G, el = (v + w) / G, es = (2 * v + w) / G, ea = !1, eo = !1;
                x[0].classList.add("visible");
                let eu = performance.now();
                ! function t(r) {
                    let n = Math.min((r - eu) / 2e3, 1);
                    s.style.transform = `translateY(${-n}rem)`, i.style.transform = `translateY(${-(10*n*1)%10}rem)`, a.style.transform = `translateY(${-(30*n*1)%10}rem)`, u.style.strokeDashoffset = String(1 - n);
                    let c = z ? (r - z) / 1e3 : 0;
                    if (z = r, Z.tl += 360 * c, n >= J && (Z.tr += 360 * c), n >= el && (Z.br += 360 * c), n >= es && (Z.bl += 360 * c), g.style.transform = `rotate(${Z.tl}deg)`, b.style.transform = `rotate(${Z.tr}deg)`, S.style.transform = `rotate(${Z.br}deg)`, j.style.transform = `rotate(${Z.bl}deg)`, !ea && n >= .05 && (x[3].classList.add("visible"), x[1].classList.add("visible"), ea = !0), !eo && n >= .1 && (x[4].classList.add("visible"), x[2].classList.add("visible"), eo = !0), y(Y.current, q.current, d, n), y(W.current, I.current, f, n), y(B.current, H.current, p, n), n < 1) ei.current.requestVisibleFrame(t);
                    else {
                        s.style.transform = "translateY(-1rem)", i.style.transform = "translateY(0px)", a.style.transform = "translateY(0px)", u.style.strokeDashoffset = "0", [g, b, S, j].forEach(e => {
                            e.style.transform = "rotate(0deg)"
                        }), h.forEach(e => {
                            e.style.opacity = "1", e.style.transformOrigin = l, e.style.transform = "scale(1)"
                        }), [O.current, _.current, D.current].forEach(e => {
                            e && (e.style.display = "none")
                        });
                        let t = performance.now();
                        ! function r(n) {
                            let l = Math.min((n - t) / 200, 1);
                            o.style.opacity = String(1 - l), l < 1 ? ei.current.raf(r) : e()
                        }(performance.now())
                    }
                }(performance.now())
            }, []),
            eu = (0, r.useCallback)(e => {
                let t = j.current,
                    r = R.current,
                    n = [V.current, U.current, K.current, X.current],
                    l = b.current,
                    s = r.getBoundingClientRect(),
                    i = window.innerWidth,
                    a = window.innerHeight,
                    o = s.left,
                    u = s.top,
                    c = s.width,
                    d = s.height;
                t.style.position = "fixed", t.style.inset = "auto", t.style.left = o + "px", t.style.top = u + "px", t.style.width = c + "px", t.style.height = d + "px", t.style.transform = "none", t.style.zIndex = "250", n.forEach(e => {
                    e.style.cssText += ";position:fixed;left:auto;top:auto;right:auto;bottom:auto;transform:translate(-50%,-50%);z-index:300;"
                });
                let f = performance.now();
                ! function r(s) {
                    let p = Math.min((s - f) / 900, 1),
                        y = p < .5 ? 4 * p * p * p : 1 - Math.pow(-2 * p + 2, 3) / 2,
                        h = o - o * y,
                        m = u - u * y,
                        x = c + (i - c) * y,
                        v = d + (a - d) * y;
                    t.style.left = h + "px", t.style.top = m + "px", t.style.width = x + "px", t.style.height = v + "px", n[0].style.left = h - 12.5 + 6.5 + "px", n[0].style.top = m - 12.5 + 6.5 + "px", n[1].style.left = h + x + 12.5 - 6.5 + "px", n[1].style.top = m - 12.5 + 6.5 + "px", n[2].style.left = h - 12.5 + 6.5 + "px", n[2].style.top = m + v + 12.5 - 6.5 + "px", n[3].style.left = h + x + 12.5 - 6.5 + "px", n[3].style.top = m + v + 12.5 - 6.5 + "px";
                    let w = Math.round(210 * (1 - y));
                    if (t.style.background = `rgb(${w},${w},${w})`, p >= .8) {
                        let e = Math.round(255 * (1 - (p - .8) / .19999999999999996));
                        l.style.background = `rgb(${e},${e},${e})`
                    }
                    p > .65 && n.forEach(e => {
                        e.style.opacity = String(1 - (p - .65) / .35)
                    }), p < 1 ? ei.current.requestVisibleFrame(r) : (n.forEach(e => {
                        e.style.opacity = "0"
                    }), t.style.background = "#000", l.style.background = "#000", t.style.left = "0", t.style.top = "0", t.style.width = "100vw", t.style.height = "100dvh", e())
                }(performance.now())
            }, []),
            ec = (0, r.useCallback)(e => {
                let t = [Z.current, z.current, G.current, J.current],
                    r = j.current,
                    n = R.current,
                    i = [V.current, U.current, K.current, X.current],
                    o = [F.current, P.current, A.current];
                i.forEach(e => {
                    e.style.opacity = "0"
                }), r.style.opacity = "0", r.style.transform = "scale(0)";
                let u = window.innerWidth / 2,
                    c = window.innerHeight / 2,
                    d = n.getBoundingClientRect(),
                    f = {
                        tl: {
                            x: d.left - 12.5 + 6.5,
                            y: d.top - 12.5 + 6.5
                        },
                        tr: {
                            x: d.right + 12.5 - 6.5,
                            y: d.top - 12.5 + 6.5
                        },
                        bl: {
                            x: d.left - 12.5 + 6.5,
                            y: d.bottom + 12.5 - 6.5
                        },
                        br: {
                            x: d.right + 12.5 - 6.5,
                            y: d.bottom + 12.5 - 6.5
                        }
                    },
                    p = [{
                        el: t[0],
                        sx: 60,
                        sy: 60,
                        fx: f.tl.x,
                        fy: f.tl.y
                    }, {
                        el: t[1],
                        sx: window.innerWidth - 60,
                        sy: 60,
                        fx: f.tr.x,
                        fy: f.tr.y
                    }, {
                        el: t[2],
                        sx: 60,
                        sy: window.innerHeight - 60,
                        fx: f.bl.x,
                        fy: f.bl.y
                    }, {
                        el: t[3],
                        sx: window.innerWidth - 60,
                        sy: window.innerHeight - 60,
                        fx: f.br.x,
                        fy: f.br.y
                    }];
                p.forEach(({
                    el: e,
                    sx: t,
                    sy: r
                }) => {
                    e.style.left = t + "px", e.style.top = r + "px", e.style.opacity = "1"
                });
                let y = !1,
                    h = performance.now();
                ei.current.requestVisibleFrame(function t(n) {
                    let d = n - h;
                    if (d <= 900) {
                        let e = Math.min(d / 900, 1),
                            r = 1 - Math.pow(1 - e, 5);
                        p.forEach(({
                            el: t,
                            sx: n,
                            sy: l
                        }, i) => {
                            t.style.left = n + (u - n) * r + "px", t.style.top = l + (c - l) * r + "px", t.style.transform = `translate(-50%,-50%) rotate(${720*w[i]*(1-s(e))}deg)`
                        }), ei.current.requestVisibleFrame(t)
                    } else {
                        let n = Math.min((d - 900) / 600, 1),
                            f = s(n),
                            h = 1 + 2.8 * Math.pow(n - 1, 3) + 1.8 * Math.pow(n - 1, 2);
                        if (r.style.opacity = "1", r.style.transform = `scale(${f})`, !y && f >= .4) {
                            y = !0;
                            let e = performance.now();
                            ! function t(r) {
                                let n = r - e,
                                    i = (e, t, r, l) => {
                                        let i = Math.max(0, Math.min(1, (n - t) / 700));
                                        if (i <= 0) return;
                                        let o = a(i),
                                            u = 1 - Math.max(0, Math.min(1, s(i)));
                                        e.style.opacity = String(Math.min(1, 3 * i)), e.style.transformOrigin = "52% 52%", e.style.transform = `rotateY(${r*u}deg) rotateZ(${l*u}deg) scale(${.15+.85*o})`
                                    };
                                i(A.current, 0, -60, 28), i(F.current, 200, 60, -32);
                                let u = Math.max(0, Math.min(1, (n - 400) / 700));
                                if (u > 0) {
                                    let e = a(u),
                                        t = 1 - Math.max(0, Math.min(1, s(u))),
                                        r = P.current;
                                    r.style.opacity = String(Math.min(1, 3 * u)), r.style.transformOrigin = "52% 52%", r.style.transform = `rotateX(${-50*t}deg) rotateZ(${-24*t}deg) scale(${.15+.85*e})`
                                }
                                n < 1100 ? ei.current.requestVisibleFrame(t) : o.forEach(e => {
                                    e.style.opacity = "1", e.style.transformOrigin = l, e.style.transform = "scale(1)"
                                })
                            }(performance.now())
                        }
                        let m = 1 - s(n);
                        p.forEach(({
                            el: e,
                            fx: t,
                            fy: r
                        }, n) => {
                            e.style.left = u + (t - u) * h + "px", e.style.top = c + (r - c) * h + "px", e.style.opacity = "1", e.style.transform = `translate(-50%,-50%) scale(1) rotate(${1080*w[n]*m}deg)`
                        }), n < 1 ? ei.current.requestVisibleFrame(t) : (r.style.transform = "scale(1)", i.forEach(e => {
                            e.style.opacity = "1"
                        }), p.forEach(({
                            el: e
                        }) => {
                            e.style.opacity = "0", e.style.transform = "translate(-50%,-50%) scale(1) rotate(0deg)"
                        }), e())
                    }
                })
            }, []);
        return (0, r.useEffect)(() => {
            if ("loader" !== e || el.current) return;
            el.current = !0;
            let t = g.current,
                r = E.current,
                n = j.current,
                l = b.current,
                s = [F.current, P.current, A.current];
            c(!1), S.current.forEach(e => {
                e.style.transform = "scaleY(0)", e.style.opacity = "0"
            }), t.classList.add("active"), r.style.visibility = "visible", [V, U, K, X].forEach(e => {
                e.current && (e.current.style.opacity = "0")
            }), n.style.opacity = "0", s.forEach(e => {
                e.style.opacity = "0"
            }), ec(() => {
                setTimeout(() => {
                    eo(() => {
                        let e = j.current;
                        e.style.opacity = "1", e.style.background = "#D2D2D2", ea(P.current, 0, 80, -50, "X", 0, -24), ea(F.current, 120, 0, 60, "Y", 100, -32), ea(A.current, -120, 0, -60, "Y", 200, 28), [T.current, Q.current, ee.current, et.current, er.current, en.current].forEach(e => {
                            e && (e.style.transition = "opacity 0.4s", e.style.opacity = "0")
                        }), eu(() => {
                            c(!0), "/about" === window.location.pathname && setTimeout(() => {
                                document.documentElement.dataset.trionnEarlyStart = "true", window.dispatchEvent(new CustomEvent("trionn-transition:early-start"))
                            }, 200);
                            let n = performance.now();
                            ! function s(i) {
                                let a = Math.min((i - n) / 700, 1),
                                    o = String(1 - a);
                                e.style.opacity = o, l.style.opacity = o, a < 1 ? ei.current.requestVisibleFrame(s) : (r.style.visibility = "hidden", r.style.display = "none", e.style.display = "none", l.style.display = "none", e.style.cssText = "background:#D2D2D2;", [V, U, K, X].forEach(e => {
                                    e.current && (e.current.style.cssText = "")
                                }), t.classList.remove("active"), setTimeout(() => {
                                    r.style.display = ""
                                }, 50), setTimeout(() => {
                                    u()
                                }, 50))
                            }(performance.now())
                        })
                    })
                }, 150)
            })
        }, [e, u, c, ec, eo, ea, eu]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                ref: b,
                className: "pl-white-overlay",
                style: i ? {
                    display: "none"
                } : void 0
            }), (0, t.jsx)("div", {
                ref: g,
                className: "pl-overlay",
                children: Array.from({
                    length: 10
                }, (e, r) => (0, t.jsx)("div", {
                    ref: e => {
                        e && (S.current[r] = e)
                    },
                    className: "pl-belt"
                }, r))
            }), (0, t.jsx)("div", {
                ref: Z,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: v
            }), (0, t.jsx)("div", {
                ref: z,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: v
            }), (0, t.jsx)("div", {
                ref: G,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: v
            }), (0, t.jsx)("div", {
                ref: J,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: v
            }), (0, t.jsxs)("div", {
                ref: E,
                className: "pl-overlay-center",
                children: [(0, t.jsxs)("div", {
                    ref: R,
                    className: "pl-overlay-logo-wrap",
                    children: [(0, t.jsx)("div", {
                        ref: j,
                        className: "pl-logo-black-box"
                    }), (0, t.jsx)("svg", {
                        ref: L,
                        className: "pl-border-svg",
                        style: {
                            opacity: 0
                        },
                        children: (0, t.jsx)("rect", {
                            ref: C,
                            x: "0.75",
                            y: "0.75",
                            width: "1",
                            height: "1",
                            fill: "none",
                            stroke: "#434343",
                            strokeWidth: "1.5",
                            strokeDasharray: "1",
                            strokeDashoffset: "1",
                            pathLength: 1,
                            rx: "2"
                        })
                    }), (0, t.jsx)("div", {
                        ref: V,
                        className: "pl-logo-corner-plus tl",
                        children: v
                    }), (0, t.jsx)("div", {
                        ref: U,
                        className: "pl-logo-corner-plus tr",
                        children: v
                    }), (0, t.jsx)("div", {
                        ref: K,
                        className: "pl-logo-corner-plus bl",
                        children: v
                    }), (0, t.jsx)("div", {
                        ref: X,
                        className: "pl-logo-corner-plus br",
                        children: v
                    }), (0, t.jsxs)("svg", {
                        ref: F,
                        className: "pl-t-path",
                        viewBox: "-79.5 -31.4 662 640",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, t.jsx)("defs", {
                            children: (0, t.jsx)("clipPath", {
                                id: "pl-clip1",
                                children: (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: h
                                })
                            })
                        }), (0, t.jsx)("path", {
                            ref: O,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: h,
                            fill: "none",
                            stroke: "#aaa",
                            strokeWidth: "1.5"
                        }), (0, t.jsx)("g", {
                            clipPath: "url(#pl-clip1)",
                            ref: q
                        }), (0, t.jsx)("g", {
                            clipPath: "url(#pl-clip1)",
                            ref: Y
                        })]
                    }), (0, t.jsxs)("svg", {
                        ref: P,
                        className: "pl-t-path",
                        viewBox: "-79.5 -31.4 662 640",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, t.jsx)("defs", {
                            children: (0, t.jsx)("clipPath", {
                                id: "pl-clip2",
                                children: (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: m
                                })
                            })
                        }), (0, t.jsx)("path", {
                            ref: _,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: m,
                            fill: "none",
                            stroke: "#aaa",
                            strokeWidth: "1.5"
                        }), (0, t.jsx)("g", {
                            clipPath: "url(#pl-clip2)",
                            ref: I
                        }), (0, t.jsx)("g", {
                            clipPath: "url(#pl-clip2)",
                            ref: W
                        })]
                    }), (0, t.jsxs)("svg", {
                        ref: A,
                        className: "pl-t-path",
                        viewBox: "-79.5 -31.4 662 640",
                        fill: "none",
                        xmlns: "http://www.w3.org/2000/svg",
                        children: [(0, t.jsx)("defs", {
                            children: (0, t.jsx)("clipPath", {
                                id: "pl-clip3",
                                children: (0, t.jsx)("path", {
                                    fillRule: "evenodd",
                                    clipRule: "evenodd",
                                    d: x
                                })
                            })
                        }), (0, t.jsx)("path", {
                            ref: D,
                            fillRule: "evenodd",
                            clipRule: "evenodd",
                            d: x,
                            fill: "none",
                            stroke: "#aaa",
                            strokeWidth: "1.5"
                        }), (0, t.jsx)("g", {
                            clipPath: "url(#pl-clip3)",
                            ref: H
                        }), (0, t.jsx)("g", {
                            clipPath: "url(#pl-clip3)",
                            ref: B
                        })]
                    }), (0, t.jsx)("div", {
                        ref: M,
                        className: "pl-overlay-page-label title"
                    })]
                }), (0, t.jsxs)("div", {
                    className: "pl-overlay-tagline",
                    children: [(0, t.jsx)("span", {
                        ref: Q,
                        className: "pl-tag-word title",
                        children: "Inspire"
                    }), (0, t.jsx)("span", {
                        ref: er,
                        className: "pl-tag-dot",
                        children: "·"
                    }), (0, t.jsx)("span", {
                        ref: ee,
                        className: "pl-tag-word title",
                        children: "Innovate"
                    }), (0, t.jsx)("span", {
                        ref: en,
                        className: "pl-tag-dot",
                        children: "·"
                    }), (0, t.jsx)("span", {
                        ref: et,
                        className: "pl-tag-word title",
                        children: "Impact"
                    })]
                }), (0, t.jsxs)("div", {
                    ref: T,
                    className: "pl-overlay-counter",
                    children: [(0, t.jsx)("div", {
                        className: "pl-slot-reel",
                        children: (0, t.jsx)("div", {
                            ref: $,
                            className: "pl-slot-strip"
                        })
                    }), (0, t.jsx)("div", {
                        className: "pl-slot-reel",
                        children: (0, t.jsx)("div", {
                            ref: k,
                            className: "pl-slot-strip"
                        })
                    }), (0, t.jsx)("div", {
                        className: "pl-slot-reel",
                        children: (0, t.jsx)("div", {
                            ref: N,
                            className: "pl-slot-strip"
                        })
                    })]
                })]
            })]
        })
    }])
}, 11087, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(18566),
        l = e.i(53477),
        s = e.i(62749);
    let i = [1, -1, -1, 1],
        a = e => 1 - Math.pow(1 - e, 3);
    class o {
        ids = new Set;
        aborted = !1;
        raf(e) {
            if (this.aborted) return;
            let t = 0;
            t = requestAnimationFrame(r => {
                this.ids.delete(t), this.aborted || e(r)
            }), this.ids.add(t)
        }
        requestVisibleFrame(e) {
            this.raf(t => {
                document.hidden ? this.requestVisibleFrame(e) : e(t)
            })
        }
        abort() {
            this.aborted = !0, this.ids.forEach(e => cancelAnimationFrame(e)), this.ids.clear()
        }
    }

    function u(e, t, r, n) {
        let l = 0,
            s;
        e.requestVisibleFrame(function i(a) {
            void 0 !== s && (l += a - s), s = a;
            let o = Math.min(l / t, 1);
            r(o), o < 1 ? e.requestVisibleFrame(i) : n && n()
        })
    }
    let c = (0, t.jsxs)("svg", {
        width: "13",
        height: "13",
        viewBox: "0 0 13 13",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        children: [(0, t.jsx)("line", {
            x1: "6.5",
            y1: "0",
            x2: "6.5",
            y2: "13",
            stroke: "#555"
        }), (0, t.jsx)("line", {
            x1: "13",
            y1: "6.5",
            x2: "0",
            y2: "6.5",
            stroke: "#555"
        })]
    });
    e.s(["default", 0, function() {
        let {
            phase: e,
            setPhase: d,
            transitionLabel: f,
            isLoaderComplete: p,
            notifyBeltsClosed: y,
            setContentVisible: h
        } = (0, l.useTransition)(), m = (0, r.useRef)(null), x = (0, r.useRef)(null), v = (0, r.useRef)(null), w = (0, r.useRef)(null), g = (0, r.useRef)([]), b = (0, r.useRef)(null), E = (0, r.useRef)(null), R = (0, r.useRef)(null), j = (0, r.useRef)(null), L = (0, r.useRef)(null), C = (0, r.useRef)(null), M = (0, r.useRef)(null), T = (0, r.useRef)(null), $ = (0, n.usePathname)(), k = (0, r.useRef)($), N = (0, r.useRef)(null);
        null === N.current && (N.current = new o), (0, r.useEffect)(() => {
            let e = N.current;
            return () => e.abort()
        }, []);
        let S = (0, r.useCallback)(() => {
                let e = w.current.getBoundingClientRect(),
                    t = window.innerWidth,
                    r = window.innerHeight;
                return {
                    corners: [{
                        x: e.left - 12.5 + 6.5,
                        y: e.top - 12.5 + 6.5
                    }, {
                        x: e.right + 12.5 - 6.5,
                        y: e.top - 12.5 + 6.5
                    }, {
                        x: e.left - 12.5 + 6.5,
                        y: e.bottom + 12.5 - 6.5
                    }, {
                        x: e.right + 12.5 - 6.5,
                        y: e.bottom + 12.5 - 6.5
                    }],
                    screen: [{
                        x: 40,
                        y: 40
                    }, {
                        x: t - 40,
                        y: 40
                    }, {
                        x: 40,
                        y: r - 40
                    }, {
                        x: t - 40,
                        y: r - 40
                    }]
                }
            }, []),
            F = (0, r.useCallback)(e => {
                let t = g.current,
                    r = m.current;
                if (!r) return;
                t.forEach(e => {
                    e.style.transform = "scaleY(0.008)", e.style.transformOrigin = "center center", e.style.opacity = "1"
                });
                let n = N.current;
                n.raf(() => n.raf(() => {
                    r.classList.add("active");
                    let n = 0;
                    t.forEach((t, r) => {
                        setTimeout(() => {
                            u(N.current, 500, e => {
                                t.style.transform = `scaleY(${.008+1.092*a(e)})`
                            }, () => {
                                t.style.transform = "scaleY(1)", 10 == ++n && e()
                            })
                        }, 38 * r)
                    })
                }))
            }, []),
            P = (0, r.useCallback)(e => {
                let t = g.current,
                    r = 0;
                [...t].reverse().forEach((t, n) => {
                    setTimeout(() => {
                        u(N.current, 420, e => {
                            t.style.transform = `scaleY(${1-e*e*e*1.092})`
                        }, () => {
                            t.style.transform = "scaleY(0)", 10 == ++r && e()
                        })
                    }, 38 * n)
                })
            }, []),
            A = (0, r.useCallback)(e => {
                let t = [L.current, C.current, M.current, T.current],
                    {
                        corners: r,
                        screen: n
                    } = S();
                t.forEach((e, t) => {
                    e.style.left = n[t].x + "px", e.style.top = n[t].y + "px", e.style.opacity = "1"
                }), u(N.current, 840, e => {
                    let l = a(e);
                    t.forEach((e, t) => {
                        e.style.left = n[t].x + (r[t].x - n[t].x) * l + "px", e.style.top = n[t].y + (r[t].y - n[t].y) * l + "px", e.style.transform = `translate(-50%,-50%) rotate(${720*i[t]*(1-l)}deg)`
                    })
                }, e)
            }, [S]),
            O = (0, r.useCallback)(() => {
                let e = [L.current, C.current, M.current, T.current],
                    {
                        corners: t,
                        screen: r
                    } = S();
                e.forEach((e, r) => {
                    e.style.left = t[r].x + "px", e.style.top = t[r].y + "px", e.style.opacity = "1"
                }), u(N.current, 760, n => {
                    let l = n * n * n;
                    e.forEach((e, s) => {
                        e.style.left = t[s].x + (r[s].x - t[s].x) * l + "px", e.style.top = t[s].y + (r[s].y - t[s].y) * l + "px", n > .6 && (e.style.opacity = String(1 - (n - .6) / .4))
                    })
                }, () => e.forEach(e => {
                    e.style.opacity = "0"
                }))
            }, [S]),
            _ = (0, r.useCallback)(e => {
                let t = v.current;
                t && (t.textContent = e, t.style.opacity = "0", t.style.transform = "translate(-50%, calc(-50% + 100px))", u(N.current, 840, e => {
                    let r = a(e);
                    t.style.opacity = String(r), t.style.transform = `translate(-50%, calc(-50% + ${100*(1-r)}px))`
                }))
            }, []),
            D = (0, r.useCallback)(e => {
                let t = v.current;
                t ? u(N.current, 760, e => {
                    let r = e * e * e;
                    t.style.opacity = String(1 - r), t.style.transform = `translate(-50%, calc(-50% + ${-100*r}px))`
                }, () => {
                    t.textContent = "", t.style.opacity = "0", t.style.transform = "translate(-50%,-50%)", e()
                }) : e()
            }, []);
        return (0, r.useEffect)(() => {
            if ("sweep-in" !== e || !p) return;
            document.documentElement.dataset.trionnReady = "false";
            let t = x.current,
                r = [b.current, E.current, R.current, j.current];
            t && (t.style.visibility = "visible"), r.forEach(e => {
                e.style.opacity = "0", e.style.visibility = "hidden"
            }), _(f), F(() => {}), A(() => {
                h(!1), d("label-show"), setTimeout(() => {
                    y()
                }, 60)
            })
        }, [e, p, F, A, _, f, d, y, h]), (0, r.useEffect)(() => {
            if ($ === k.current || (k.current = $, "label-show" !== e && "sweep-in" !== e)) return;
            d("sweep-out"), h(!0);
            let t = [b.current, E.current, R.current, j.current],
                r = x.current,
                n = N.current;
            n.raf(() => n.raf(() => {
                "/about" === $ && setTimeout(() => {
                    document.documentElement.dataset.trionnEarlyStart = "true", window.dispatchEvent(new CustomEvent("trionn-transition:early-start"))
                }, 250), P(() => {
                    let e = m.current;
                    e && e.classList.remove("active"), r && (r.style.visibility = "hidden"), t.forEach(e => {
                        e.style.opacity = "", e.style.visibility = ""
                    }), d("idle"), n.raf(() => {
                        "/about" === $ ? (0, s.scheduleAboutTrionnReady)("transition") : setTimeout(() => {
                            document.documentElement.dataset.trionnReady = "true", window.dispatchEvent(new CustomEvent("trionn-transition:complete"))
                        }, 50)
                    })
                }), D(() => {}), O()
            }))
        }, [$, e, d, P, O, D, h]), (0, t.jsxs)(t.Fragment, {
            children: [(0, t.jsx)("div", {
                ref: m,
                className: "pl-trans-overlay",
                children: Array.from({
                    length: 10
                }, (e, r) => (0, t.jsx)("div", {
                    ref: e => {
                        e && (g.current[r] = e)
                    },
                    className: "pl-belt"
                }, `trans-belt-${r}`))
            }), (0, t.jsx)("div", {
                ref: L,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: c
            }), (0, t.jsx)("div", {
                ref: C,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: c
            }), (0, t.jsx)("div", {
                ref: M,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: c
            }), (0, t.jsx)("div", {
                ref: T,
                className: "pl-flying-plus",
                style: {
                    opacity: 0
                },
                children: c
            }), (0, t.jsxs)("div", {
                ref: x,
                className: "pl-trans-center",
                children: [(0, t.jsxs)("div", {
                    ref: w,
                    className: "pl-overlay-logo-wrap",
                    style: {
                        pointerEvents: "none"
                    },
                    children: [(0, t.jsx)("div", {
                        ref: b,
                        className: "pl-logo-corner-plus tl",
                        children: c
                    }), (0, t.jsx)("div", {
                        ref: E,
                        className: "pl-logo-corner-plus tr",
                        children: c
                    }), (0, t.jsx)("div", {
                        ref: R,
                        className: "pl-logo-corner-plus bl",
                        children: c
                    }), (0, t.jsx)("div", {
                        ref: j,
                        className: "pl-logo-corner-plus br",
                        children: c
                    })]
                }), (0, t.jsx)("div", {
                    ref: v,
                    className: "pl-overlay-page-label"
                })]
            })]
        })
    }])
}, 95057, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        formatUrl: function() {
            return a
        },
        formatWithValidation: function() {
            return u
        },
        urlObjectKeys: function() {
            return o
        }
    };
    for (var l in n) Object.defineProperty(r, l, {
        enumerable: !0,
        get: n[l]
    });
    let s = e.r(90809)._(e.r(98183)),
        i = /https?|ftp|gopher|file/;

    function a(e) {
        let {
            auth: t,
            hostname: r
        } = e, n = e.protocol || "", l = e.pathname || "", a = e.hash || "", o = e.query || "", u = !1;
        t = t ? encodeURIComponent(t).replace(/%3A/i, ":") + "@" : "", e.host ? u = t + e.host : r && (u = t + (~r.indexOf(":") ? `[${r}]` : r), e.port && (u += ":" + e.port)), o && "object" == typeof o && (o = String(s.urlQueryToSearchParams(o)));
        let c = e.search || o && `?${o}` || "";
        return n && !n.endsWith(":") && (n += ":"), e.slashes || (!n || i.test(n)) && !1 !== u ? (u = "//" + (u || ""), l && "/" !== l[0] && (l = "/" + l)) : u || (u = ""), a && "#" !== a[0] && (a = "#" + a), c && "?" !== c[0] && (c = "?" + c), l = l.replace(/[?#]/g, encodeURIComponent), c = c.replace("#", "%23"), `${n}${u}${l}${c}${a}`
    }
    let o = ["auth", "hash", "host", "hostname", "href", "path", "pathname", "port", "protocol", "query", "search", "slashes"];

    function u(e) {
        return a(e)
    }
}, 73668, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "isLocalURL", {
        enumerable: !0,
        get: function() {
            return s
        }
    });
    let n = e.r(18967),
        l = e.r(52817);

    function s(e) {
        if (!(0, n.isAbsoluteUrl)(e)) return !0;
        try {
            let t = (0, n.getLocationOrigin)(),
                r = new URL(e, t);
            return r.origin === t && (0, l.hasBasePath)(r.pathname)
        } catch (e) {
            return !1
        }
    }
}, 84508, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    }), Object.defineProperty(r, "errorOnce", {
        enumerable: !0,
        get: function() {
            return n
        }
    });
    let n = e => {}
}, 22016, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return x
        },
        useLinkStatus: function() {
            return w
        }
    };
    for (var l in n) Object.defineProperty(r, l, {
        enumerable: !0,
        get: n[l]
    });
    let s = e.r(90809),
        i = e.r(43476),
        a = s._(e.r(71645)),
        o = e.r(95057),
        u = e.r(8372),
        c = e.r(18581),
        d = e.r(18967),
        f = e.r(5550);
    e.r(33525);
    let p = e.r(88540),
        y = e.r(91949),
        h = e.r(73668),
        m = e.r(9396);

    function x(t) {
        var r, n;
        let l, s, x, [w, g] = (0, a.useOptimistic)(y.IDLE_LINK_STATUS),
            b = (0, a.useRef)(null),
            {
                href: E,
                as: R,
                children: j,
                prefetch: L = null,
                passHref: C,
                replace: M,
                shallow: T,
                scroll: $,
                onClick: k,
                onMouseEnter: N,
                onTouchStart: S,
                legacyBehavior: F = !1,
                onNavigate: P,
                transitionTypes: A,
                ref: O,
                unstable_dynamicOnHover: _,
                ...D
            } = t;
        l = j, F && ("string" == typeof l || "number" == typeof l) && (l = (0, i.jsx)("a", {
            children: l
        }));
        let q = a.default.useContext(u.AppRouterContext),
            I = !1 !== L,
            H = !1 !== L ? null === (n = L) || "auto" === n ? m.FetchStrategy.PPR : m.FetchStrategy.Full : m.FetchStrategy.PPR,
            Y = "string" == typeof(r = R || E) ? r : (0, o.formatUrl)(r);
        if (F) {
            if (l ? .$$typeof === Symbol.for("react.lazy")) throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."), "__NEXT_ERROR_CODE", {
                value: "E863",
                enumerable: !1,
                configurable: !0
            });
            s = a.default.Children.only(l)
        }
        let W = F ? s && "object" == typeof s && s.ref : O,
            B = a.default.useCallback(e => (null !== q && (b.current = (0, y.mountLinkInstance)(e, Y, q, H, I, g)), () => {
                b.current && ((0, y.unmountLinkForCurrentNavigation)(b.current), b.current = null), (0, y.unmountPrefetchableInstance)(e)
            }), [I, Y, q, H, g]),
            V = {
                ref: (0, c.useMergedRef)(B, W),
                onClick(t) {
                    F || "function" != typeof k || k(t), F && s.props && "function" == typeof s.props.onClick && s.props.onClick(t), !q || t.defaultPrevented || function(t, r, n, l, s, i, o) {
                        if ("u" > typeof window) {
                            let u, {
                                nodeName: c
                            } = t.currentTarget;
                            if ("A" === c.toUpperCase() && ((u = t.currentTarget.getAttribute("target")) && "_self" !== u || t.metaKey || t.ctrlKey || t.shiftKey || t.altKey || t.nativeEvent && 2 === t.nativeEvent.which) || t.currentTarget.hasAttribute("download")) return;
                            if (!(0, h.isLocalURL)(r)) {
                                l && (t.preventDefault(), location.replace(r));
                                return
                            }
                            if (t.preventDefault(), i) {
                                let e = !1;
                                if (i({
                                        preventDefault: () => {
                                            e = !0
                                        }
                                    }), e) return
                            }
                            let {
                                dispatchNavigateAction: d
                            } = e.r(99781);
                            a.default.startTransition(() => {
                                d(r, l ? "replace" : "push", !1 === s ? p.ScrollBehavior.NoScroll : p.ScrollBehavior.Default, n.current, o)
                            })
                        }
                    }(t, Y, b, M, $, P, A)
                },
                onMouseEnter(e) {
                    F || "function" != typeof N || N(e), F && s.props && "function" == typeof s.props.onMouseEnter && s.props.onMouseEnter(e), q && I && (0, y.onNavigationIntent)(e.currentTarget, !0 === _)
                },
                onTouchStart: function(e) {
                    F || "function" != typeof S || S(e), F && s.props && "function" == typeof s.props.onTouchStart && s.props.onTouchStart(e), q && I && (0, y.onNavigationIntent)(e.currentTarget, !0 === _)
                }
            };
        return (0, d.isAbsoluteUrl)(Y) ? V.href = Y : F && !C && ("a" !== s.type || "href" in s.props) || (V.href = (0, f.addBasePath)(Y)), x = F ? a.default.cloneElement(s, V) : (0, i.jsx)("a", { ...D,
            ...V,
            children: l
        }), (0, i.jsx)(v.Provider, {
            value: w,
            children: x
        })
    }
    e.r(84508);
    let v = (0, a.createContext)(y.IDLE_LINK_STATUS),
        w = () => (0, a.useContext)(v);
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 32692, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(22016),
        n = e.i(18566),
        l = e.i(53477),
        s = e.i(71645);
    e.s(["default", 0, function({
        transitionLabel: e = "",
        href: i,
        children: a,
        ...o
    }) {
        let u = (0, n.useRouter)(),
            c = (0, n.usePathname)(),
            {
                phase: d,
                setPhase: f,
                setTransitionLabel: p,
                beltsClosed: y
            } = (0, l.useTransition)(),
            h = (0, s.useCallback)(t => {
                let r = "string" == typeof i ? i : i.pathname ? ? "/";
                if (!r.startsWith("#") && "" !== r) {
                    if (r === c || "idle" !== d) return void t.preventDefault();
                    t.preventDefault(), p(e || r.replace(/^\//, "").replace(/-/g, " ") || "Home"), f("sweep-in"), y().then(() => {
                        window.scrollTo(0, 0), u.push(r, {
                            scroll: !1
                        })
                    })
                }
            }, [i, c, d, f, p, y, u, e]);
        return (0, t.jsx)(r.default, {
            href: i,
            onNavigate: h,
            ...o,
            children: a
        })
    }])
}, 81415, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(53477);
    e.s(["default", 0, function({
        children: e
    }) {
        let {
            isContentVisible: n,
            isLoaderComplete: l
        } = (0, r.useTransition)();
        return (0, t.jsx)("div", {
            style: {
                opacity: +!!n,
                visibility: l || n ? "visible" : "hidden",
                pointerEvents: n ? "auto" : "none"
            },
            children: e
        })
    }])
}, 11303, e => {
    "use strict";
    e.i(53477), e.i(36526), e.i(11087), e.i(32692), e.i(81415), e.i(62749), e.s([])
}, 65747, e => {
    "use strict";
    var t = e.i(71645),
        r = e.i(89970);
    let n = "u" > typeof document ? t.useLayoutEffect : t.useEffect,
        l = e => e && !Array.isArray(e) && "object" == typeof e,
        s = [],
        i = {},
        a = r.default,
        o = (e, r = s) => {
            let o = i;
            l(e) ? (o = e, e = null, r = "dependencies" in o ? o.dependencies : s) : l(r) && (r = "dependencies" in (o = r) ? o.dependencies : s), e && "function" != typeof e && console.warn("First parameter must be a function or config object");
            let {
                scope: u,
                revertOnUpdate: c
            } = o, d = (0, t.useRef)(!1), f = (0, t.useRef)(a.context(() => {}, u)), p = (0, t.useRef)(e => f.current.add(null, e)), y = r && r.length && !c;
            return y && n(() => (d.current = !0, () => f.current.revert()), s), n(() => {
                if (e && f.current.add(e, u), !y || !d.current) return () => f.current.revert()
            }, r), {
                context: f.current,
                contextSafe: p.current
            }
        };
    o.register = e => {
        a = e
    }, o.headless = !0, e.s(["useGSAP", 0, o])
}]);