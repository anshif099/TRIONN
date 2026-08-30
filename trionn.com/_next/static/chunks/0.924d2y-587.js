(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 61604, e => {
    "use strict";
    var t, r, n, i, a, o, s, l, c, u, d, f, h, m, p, g = function() {
            return "u" > typeof window
        },
        w = function() {
            return t || g() && (t = window.gsap) && t.registerPlugin && t
        },
        v = function(e) {
            return c.maxScroll(e || n)
        },
        b = function(e, t) {
            var r, i, o = e.parentNode || a,
                s = e.getBoundingClientRect(),
                l = o.getBoundingClientRect(),
                c = l.top - s.top,
                u = l.bottom - s.bottom,
                d = (Math.abs(c) > Math.abs(u) ? c : u) / (1 - t),
                f = -d * t;
            return d > 0 && (i = .5 == (r = l.height / (n.innerHeight + l.height)) ? 2 * l.height : 2 * Math.min(l.height, Math.abs(-d * r / (2 * r - 1))) * (t || 1), f += t ? -i * t : -i / 2, d += i), {
                change: d,
                offset: f
            }
        },
        x = function(e) {
            var t = i.querySelector(".ScrollSmoother-wrapper");
            return t || ((t = i.createElement("div")).classList.add("ScrollSmoother-wrapper"), e.parentNode.insertBefore(t, e), t.appendChild(e)), t
        },
        y = function() {
            var e;

            function y(e) {
                var g = this;
                r || y.register(t) || console.warn("Please gsap.registerPlugin(ScrollSmoother)"), e = this.vars = e || {}, u && u.kill(), u = this, m(this);
                var w, M, S, P, T, R, E, C, F, j, D, k, _, z, A, W, B = e,
                    L = B.smoothTouch,
                    N = B.onUpdate,
                    H = B.onStop,
                    O = B.smooth,
                    V = B.onFocusIn,
                    q = B.normalizeScroll,
                    I = B.wholePixels,
                    U = this,
                    Y = e.effectsPrefix || "",
                    G = c.getScrollFunc(n),
                    X = 1 === c.isTouch ? !0 === L ? .8 : parseFloat(L) || 0 : 0 === O || !1 === O ? 0 : parseFloat(O) || .8,
                    K = X && +e.speed || 1,
                    $ = 0,
                    Z = 0,
                    J = 1,
                    Q = f(0),
                    ee = function() {
                        return Q.update(-$)
                    },
                    et = {
                        y: 0
                    },
                    er = function() {
                        return w.style.overflow = "visible"
                    },
                    en = function(e) {
                        e.update();
                        var t = e.getTween();
                        t && (t.pause(), t._time = t._dur, t._tTime = t._tDur), A = !1, e.animation.progress(e.progress, !0)
                    },
                    ei = function(e, t) {
                        (e !== $ && !j || t) && (I && (e = Math.round(e)), X && (w.style.transform = "matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, " + e + ", 0, 1)", w._gsap.y = e + "px"), Z = e - $, $ = e, c.isUpdating || y.isRefreshing || c.update())
                    },
                    ea = function(e) {
                        return arguments.length ? (e < 0 && (e = 0), et.y = -e, A = !0, j ? $ = -e : ei(-e), c.isRefreshing ? P.update() : G(e / K), this) : -$
                    },
                    eo = "u" > typeof ResizeObserver && !1 !== e.autoResize && new ResizeObserver(function() {
                        if (!c.isRefreshing) {
                            var e = v(M) * K;
                            e < -$ && ea(e), p.restart(!0)
                        }
                    }),
                    es = function(e) {
                        M.scrollTop = 0, e.target.contains && e.target.contains(M) || V && !1 === V(g, e) || (c.isInViewport(e.target) || e.target === W || g.scrollTo(e.target, !1, "center center"), W = e.target)
                    },
                    el = function(e, t) {
                        if (e < t.start) return e;
                        var r = isNaN(t.ratio) ? 1 : t.ratio,
                            n = t.end - t.start,
                            i = e - t.start,
                            a = t.offset || 0,
                            o = t.pins || [],
                            s = o.offset || 0,
                            l = t._startClamp && t.start <= 0 || t.pins && t.pins.offset ? 0 : t._endClamp && t.end === v() ? 1 : .5;
                        return o.forEach(function(t) {
                            n -= t.distance, t.nativeStart <= e && (i -= t.distance)
                        }), s && (i *= (n - s / r) / n), e + (i - a * l) / r - i
                    },
                    ec = function e(r, n, i) {
                        i || (r.pins.length = r.pins.offset = 0);
                        var a, o, s, l, c, u, d, f, h = r.pins,
                            m = r.markers;
                        for (d = 0; d < n.length; d++)
                            if (f = n[d], r.trigger && f.trigger && r !== f && (f.trigger === r.trigger || f.pinnedContainer === r.trigger || r.trigger.contains(f.trigger)) && (c = f._startNative || f._startClamp || f.start, u = f._endNative || f._endClamp || f.end, s = el(c, r), l = f.pin && u > 0 ? s + (u - c) : el(u, r), f.setPositions(s, l, !0, (f._startClamp ? Math.max(0, s) : s) - c), f.markerStart && m.push(t.quickSetter([f.markerStart, f.markerEnd], "y", "px")), f.pin && f.end > 0 && !i)) {
                                if (a = f.end - f.start, o = r._startClamp && f.start < 0) {
                                    if (r.start > 0) {
                                        r.setPositions(0, r.end + (r._startNative - r.start), !0), e(r, n);
                                        return
                                    }
                                    a += f.start, h.offset = -f.start
                                }
                                h.push({
                                    start: f.start,
                                    nativeStart: c,
                                    end: f.end,
                                    distance: a,
                                    trig: f
                                }), r.setPositions(r.start, r.end + (o ? -f.start : a), !0)
                            }
                    },
                    eu = function(e, t) {
                        T.forEach(function(r) {
                            return ec(r, e, t)
                        })
                    },
                    ed = function() {
                        a = i.documentElement, o = i.body, er(), requestAnimationFrame(er), T && (c.getAll().forEach(function(e) {
                            e._startNative = e.start, e._endNative = e.end
                        }), T.forEach(function(e) {
                            var t = e._startClamp || e.start,
                                r = e.autoSpeed ? Math.min(v(), e.end) : t + Math.abs((e.end - t) / e.ratio),
                                n = r - e.end;
                            if ((t -= n / 2) > (r -= n / 2)) {
                                var i = t;
                                t = r, r = i
                            }
                            e._startClamp && t < 0 ? (n = (r = e.ratio < 0 ? v() : e.end / e.ratio) - e.end, t = 0) : (e.ratio < 0 || e._endClamp && r >= v()) && (r = v(), t = e.ratio < 0 || e.ratio > 1 ? 0 : r - (r - e.start) / e.ratio, n = (r - t) * e.ratio - (e.end - e.start)), e.offset = n || 1e-4, e.pins.length = e.pins.offset = 0, e.setPositions(t, r, !0)
                        }), eu(c.sort())), Q.reset()
                    },
                    ef = function() {
                        return c.addEventListener("refresh", ed)
                    },
                    eh = function() {
                        return T && T.forEach(function(e) {
                            return e.vars.onRefresh(e)
                        })
                    },
                    em = function() {
                        return T && T.forEach(function(e) {
                            return e.vars.onRefreshInit(e)
                        }), eh
                    },
                    ep = function(e, t, r, n) {
                        return function() {
                            var i = "function" == typeof t ? t(r, n) : t;
                            i || 0 === i || (i = n.getAttribute("data-" + Y + e) || +("speed" === e)), n.setAttribute("data-" + Y + e, i);
                            var a = "clamp(" === (i + "").substr(0, 6);
                            return {
                                clamp: a,
                                value: a ? i.substr(6, i.length - 7) : i
                            }
                        }
                    },
                    eg = function(e, r, n, i, a) {
                        a = ("function" == typeof a ? a(i, e) : a) || 0;
                        var o, s, u, f, h, m, p = ep("speed", r, i, e),
                            g = ep("lag", n, i, e),
                            w = t.getProperty(e, "y"),
                            x = e._gsap,
                            y = [],
                            S = function() {
                                r = p(), n = parseFloat(g().value), o = parseFloat(r.value) || 1, h = (u = "auto" === r.value) || s && s._startClamp && s.start <= 0 || y.offset ? 0 : s && s._endClamp && s.end === v() ? 1 : .5, f && f.kill(), f = n && t.to(e, {
                                    ease: d,
                                    overwrite: !1,
                                    y: "+=0",
                                    duration: n
                                }), s && (s.ratio = o, s.autoSpeed = u)
                            },
                            P = function() {
                                x.y = w + "px", x.renderTransform(1), S()
                            },
                            R = [],
                            E = 0,
                            C = function(t) {
                                if (u) {
                                    P();
                                    var r = b(e, l(0, 1, -t.start / (t.end - t.start)));
                                    E = r.change, m = r.offset
                                } else m = y.offset || 0, E = (t.end - t.start - m) * (1 - o);
                                y.forEach(function(e) {
                                    return E -= e.distance * (1 - o)
                                }), t.offset = E || .001, t.vars.onUpdate(t), f && f.progress(1)
                            };
                        return S(), (1 !== o || u || f) && (s = c.create({
                            trigger: u ? e.parentNode : e,
                            start: function() {
                                return r.clamp ? "clamp(top bottom+=" + a + ")" : "top bottom+=" + a
                            },
                            end: function() {
                                return r.value < 0 ? "max" : r.clamp ? "clamp(bottom top-=" + a + ")" : "bottom top-=" + a
                            },
                            scroller: M,
                            scrub: !0,
                            refreshPriority: -999,
                            onRefreshInit: P,
                            onRefresh: C,
                            onKill: function(e) {
                                var t = T.indexOf(e);
                                t >= 0 && T.splice(t, 1), P()
                            },
                            onUpdate: function(e) {
                                var r, n, i, a = w + E * (e.progress - h),
                                    o = y.length,
                                    s = 0;
                                if (e.offset) {
                                    if (o) {
                                        for (n = -$, i = e.end; o--;) {
                                            if ((r = y[o]).trig.isActive || n >= r.start && n <= r.end) {
                                                f && (r.trig.progress += r.trig.direction < 0 ? .001 : -.001, r.trig.update(0, 0, 1), f.resetTo("y", parseFloat(x.y), -Z, !0), J && f.progress(1));
                                                return
                                            }
                                            n > r.end && (s += r.distance), i -= r.distance
                                        }
                                        a = w + s + E * ((t.utils.clamp(e.start, e.end, n) - e.start - s) / (i - e.start) - h)
                                    }
                                    R.length && !u && R.forEach(function(e) {
                                        return e(a - s)
                                    }), a = Math.round(1e5 * (a + m)) / 1e5 || 0, f ? (f.resetTo("y", a, -Z, !0), J && f.progress(1)) : (x.y = a + "px", x.renderTransform(1))
                                }
                            }
                        }), C(s), t.core.getCache(s.trigger).stRevert = em, s.startY = w, s.pins = y, s.markers = R, s.ratio = o, s.autoSpeed = u, e.style.willChange = "transform"), s
                    };

                function ew() {
                    return S = w.clientHeight, w.style.overflow = "visible", o.style.height = n.innerHeight + (S - n.innerHeight) / K + "px", S - n.innerHeight
                }
                ef(), c.addEventListener("killAll", ef), t.delayedCall(.5, function() {
                    return J = 0
                }), this.scrollTop = ea, this.scrollTo = function(e, r, n) {
                    var i = t.utils.clamp(0, v(), isNaN(e) ? g.offset(e, n, !!r && !j) : +e);
                    r ? j ? t.to(g, {
                        duration: X,
                        scrollTop: i,
                        overwrite: "auto",
                        ease: d
                    }) : G(i) : ea(i)
                }, this.offset = function(e, r, n) {
                    var i, a = (e = s(e)[0]).style.cssText,
                        o = c.create({
                            trigger: e,
                            start: r || "top top"
                        });
                    return T && (J ? c.refresh() : eu([o], !0)), i = o.start / (n ? K : 1), o.kill(!1), e.style.cssText = a, t.core.getCache(e).uncache = 1, i
                }, this.content = function(e) {
                    if (arguments.length) {
                        var r = s(e || "#smooth-content")[0] || console.warn("ScrollSmoother needs a valid content element.") || o.children[0];
                        return r !== w && (F = (w = r).getAttribute("style") || "", eo && eo.observe(w), t.set(w, {
                            overflow: "visible",
                            width: "100%",
                            boxSizing: "border-box",
                            y: "+=0"
                        }), X || t.set(w, {
                            clearProps: "transform"
                        })), this
                    }
                    return w
                }, this.wrapper = function(e) {
                    return arguments.length ? (C = (M = s(e || "#smooth-wrapper")[0] || x(w)).getAttribute("style") || "", ew(), t.set(M, X ? {
                        overflow: "hidden",
                        position: "fixed",
                        height: "100%",
                        width: "100%",
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0
                    } : {
                        overflow: "visible",
                        position: "relative",
                        width: "100%",
                        height: "auto",
                        top: "auto",
                        bottom: "auto",
                        left: "auto",
                        right: "auto"
                    }), this) : M
                }, this.effects = function(e, t) {
                    if (T || (T = []), !e) return T.slice(0);
                    (e = s(e)).forEach(function(e) {
                        for (var t = T.length; t--;) T[t].trigger === e && T[t].kill()
                    });
                    var r, n, i, a = t = t || {},
                        o = a.speed,
                        l = a.lag,
                        u = a.effectsPadding,
                        d = [];
                    for (n = 0; n < e.length; n++)(i = eg(e[n], o, l, n, u)) && d.push(i);
                    return (r = T).push.apply(r, d), !1 !== t.refresh && c.refresh(), d
                }, this.sections = function(e, t) {
                    if (R || (R = []), !e) return R.slice(0);
                    var r, n = s(e).map(function(e) {
                        return c.create({
                            trigger: e,
                            start: "top 120%",
                            end: "bottom -20%",
                            onToggle: function(t) {
                                e.style.opacity = t.isActive ? "1" : "0", e.style.pointerEvents = t.isActive ? "all" : "none"
                            }
                        })
                    });
                    return t && t.add ? (r = R).push.apply(r, n) : R = n.slice(0), n
                }, this.content(e.content), this.wrapper(e.wrapper), this.render = function(e) {
                    return ei(e || 0 === e ? e : $)
                }, this.getVelocity = function() {
                    return Q.getVelocity(-$)
                }, c.scrollerProxy(M, {
                    scrollTop: ea,
                    scrollHeight: function() {
                        return ew() && o.scrollHeight
                    },
                    fixedMarkers: !1 !== e.fixedMarkers && !!X,
                    content: w,
                    getBoundingClientRect: function() {
                        return {
                            top: 0,
                            left: 0,
                            width: n.innerWidth,
                            height: n.innerHeight
                        }
                    }
                }), c.defaults({
                    scroller: M
                });
                var ev = c.getAll().filter(function(e) {
                    return e.scroller === n || e.scroller === M
                });
                ev.forEach(function(e) {
                    return e.revert(!0, !0)
                }), P = c.create({
                    animation: t.fromTo(et, {
                        y: function() {
                            return z = 0, 0
                        }
                    }, {
                        y: function() {
                            return z = 1, -ew()
                        },
                        immediateRender: !1,
                        ease: "none",
                        data: "ScrollSmoother",
                        duration: 100,
                        onUpdate: function() {
                            if (z) {
                                var e = A;
                                e && (en(P), et.y = $), ei(et.y, e), ee(), N && !j && N(U)
                            }
                        }
                    }),
                    onRefreshInit: function(e) {
                        if (!y.isRefreshing) {
                            if (y.isRefreshing = !0, T) {
                                var t = c.getAll().filter(function(e) {
                                    return !!e.pin
                                });
                                T.forEach(function(e) {
                                    e.vars.pinnedContainer || t.forEach(function(t) {
                                        if (t.pin.contains(e.trigger)) {
                                            var r = e.vars;
                                            r.pinnedContainer = t.pin, e.vars = null, e.init(r, e.animation)
                                        }
                                    })
                                })
                            }
                            var r = e.getTween();
                            _ = r && r._end > r._dp._time, k = $, et.y = 0, X && (1 === c.isTouch && (M.style.position = "absolute"), M.scrollTop = 0, 1 === c.isTouch && (M.style.position = "fixed"))
                        }
                    },
                    onRefresh: function(e) {
                        e.animation.invalidate(), et.y = 0, e.setPositions(e.start, ew() / K), _ || en(e), et.y = -G() * K, ei(et.y), J || (_ && (A = !1), e.animation.progress(t.utils.clamp(0, 1, -(k / K / e.end)))), _ && (e.progress -= .001, e.update()), y.isRefreshing = !1
                    },
                    id: "ScrollSmoother",
                    scroller: n,
                    invalidateOnRefresh: !0,
                    start: 0,
                    refreshPriority: -9999,
                    end: function() {
                        return ew() / K
                    },
                    onScrubComplete: function() {
                        Q.reset(), H && H(g)
                    },
                    scrub: X || !0
                }), this.smooth = function(t) {
                    return arguments.length && (K = (X = t || 0) && +e.speed || 1, P.scrubDuration(t)), P.getTween() ? P.getTween().duration() : 0
                }, P.getTween() && (P.getTween().vars.ease = e.ease || d), this.scrollTrigger = P, e.effects && this.effects(!0 === e.effects ? "[data-" + Y + "speed], [data-" + Y + "lag]" : e.effects, {
                    effectsPadding: e.effectsPadding,
                    refresh: !1
                }), e.sections && this.sections(!0 === e.sections ? "[data-section]" : e.sections), ev.forEach(function(e) {
                    e.vars.scroller = M, e.revert(!1, !0), e.init(e.vars, e.animation)
                }), this.paused = function(e, t) {
                    return arguments.length ? (!!j !== e && (e ? (P.getTween() && P.getTween().pause(), G(-$ / K), Q.reset(), (D = c.normalizeScroll()) && D.disable(), (j = c.observe({
                        preventDefault: !0,
                        type: "wheel,touch,scroll",
                        debounce: !1,
                        allowClicks: !0,
                        onChangeY: function() {
                            return ea(-$)
                        }
                    })).nested = h(a, "wheel,touch,scroll", !0, !1 !== t)) : (j.nested.kill(), j.kill(), j = 0, D && D.enable(), P.progress = (-$ / K - P.start) / (P.end - P.start), en(P))), this) : !!j
                }, this.kill = this.revert = function() {
                    g.paused(!1), en(P), P.kill();
                    for (var e = (T || []).concat(R || []), t = e.length; t--;) e[t].kill();
                    c.scrollerProxy(M), c.removeEventListener("killAll", ef), c.removeEventListener("refresh", ed), M.style.cssText = C, w.style.cssText = F;
                    var r = c.defaults({});
                    r && r.scroller === M && c.defaults({
                        scroller: n
                    }), g.normalizer && c.normalizeScroll(!1), clearInterval(E), u = null, eo && eo.disconnect(), o.style.removeProperty("height"), n.removeEventListener("focusin", es)
                }, this.refresh = function(e, t) {
                    return P.refresh(e, t)
                }, q && (this.normalizer = c.normalizeScroll(!0 === q ? {
                    debounce: !0,
                    content: !X && w
                } : q)), c.config(e), "scrollBehavior" in n.getComputedStyle(o) && t.set([o, a], {
                    scrollBehavior: "auto"
                }), n.addEventListener("focusin", es), E = setInterval(ee, 250), "loading" === i.readyState || requestAnimationFrame(function() {
                    return c.refresh()
                })
            }
            return y.register = function(e) {
                    return !r && (t = e || w(), g() && window.document && (n = window, a = (i = document).documentElement, o = i.body), t) && (s = t.utils.toArray, l = t.utils.clamp, d = t.parseEase("expo"), m = t.core.context || function() {}, c = t.core.globals().ScrollTrigger, t.core.globals("ScrollSmoother", y), o && c) && (p = t.delayedCall(.2, function() {
                        return c.isRefreshing || u && u.refresh()
                    }).pause(), f = c.core._getVelocityProp, h = c.core._inputObserver, y.refresh = c.refresh, r = 1), r
                }, e = [{
                    key: "progress",
                    get: function() {
                        return this.scrollTrigger ? this.scrollTrigger.animation._time / 100 : 0
                    }
                }],
                function(e, t) {
                    for (var r = 0; r < t.length; r++) {
                        var n = t[r];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }(y.prototype, e), y
        }();
    y.version = "3.15.0", y.create = function(e) {
        return u && e && u.content() === s(e.content)[0] ? u : new y(e)
    }, y.get = function() {
        return u
    }, w() && t.registerPlugin(y), e.s(["ScrollSmoother", 0, y])
}, 40169, e => {
    "use strict";
    var t = e.i(43476);
    e.i(48062);
    var r = e.i(11846);
    e.i(83390);
    var n = e.i(90782),
        i = e.i(19442),
        a = e.i(65747),
        o = e.i(89970),
        s = e.i(83495),
        l = e.i(71645),
        c = e.i(32009),
        u = e.i(61604);
    e.i(11303);
    var d = e.i(62749);
    o.default.registerPlugin(s.ScrollTrigger, u.ScrollSmoother), o.default.ticker.lagSmoothing(0), o.default.ticker.fps(60), e.s(["default", 0, function() {
        let e = (0, l.useRef)(null),
            u = (0, l.useRef)(null),
            f = (0, l.useRef)(null),
            h = (0, l.useRef)([]),
            m = window.innerWidth < 768,
            p = window.innerHeight * ((m ? 1.5 : 5) + 1),
            g = (0, d.useTransitionReady)(),
            w = ["images/orbit/orbit-09.jpg", "images/orbit/orbit-08.jpg", "images/orbit/orbit-07.jpg", "images/orbit/orbit-06.jpg", "images/orbit/orbit-05.jpg", "images/orbit/orbit-04.jpg", "images/orbit/orbit-03.jpg", "images/orbit/orbit-02.jpg", "images/orbit/orbit-01.jpg"],
            v = (w.length - 1) * 6.2 + 5.8,
            b = 28 / (2 * Math.PI * 2),
            x = Math.sqrt(144 + b * b),
            y = 2 * Math.PI * 2 * x,
            M = (.5 * y + v + 10) / (y + v) * (400 / 600);
        return (0, a.useGSAP)(() => {
            if (!g || !u.current) return;
            let e = o.default.timeline({
                scrollTrigger: {
                    trigger: u.current,
                    start: "top center",
                    end: `+=${p*M+window.innerHeight/2}`,
                    scrub: .6,
                    invalidateOnRefresh: !0
                }
            });
            e.to(".top-word", {
                x: "100vw",
                ease: "none"
            }, 0).to(".bottom-word", {
                x: "-100vw",
                ease: "none"
            }, 0);
            let t = () => e.scrollTrigger ? .refresh(),
                r = requestAnimationFrame(t),
                n = 0,
                i = new ResizeObserver(() => {
                    let r;
                    if ((r = e.scrollTrigger) && r.progress > 0) {
                        i ? .disconnect(), i = null;
                        return
                    }
                    cancelAnimationFrame(n), n = requestAnimationFrame(t)
                });
            return i.observe(document.body), () => {
                cancelAnimationFrame(r), cancelAnimationFrame(n), i ? .disconnect(), e.kill()
            }
        }, {
            scope: u,
            dependencies: [g]
        }), (0, a.useGSAP)(() => {
            if (!g) return;
            let t = e.current,
                r = u.current,
                n = f.current,
                i = () => window.innerWidth >= 768 && window.innerWidth < 1200,
                a = () => window.innerWidth < 768 ? 2 : 3,
                l = () => window.innerWidth < 768 ? 28 : i() ? 24 : 22,
                d = () => window.innerWidth < 768 ? 58 : i() ? 54 : 52,
                m = 568 / 812,
                p = new c.WebGLRenderer({
                    canvas: t,
                    antialias: !0,
                    alpha: !0
                });
            p.setPixelRatio(2), p.setSize(window.innerWidth, window.innerHeight), p.setClearColor(263432, 0);
            let v = new c.Scene;

            function M() {
                let e = Math.tan(d() * Math.PI / 180 / 2) * l(),
                    t = e * (window.innerWidth / window.innerHeight),
                    r = a(),
                    n = window.innerWidth < 768 ? 3 : 2,
                    o = window.innerWidth >= 1440,
                    s = window.innerWidth < 768 ? .18 : i() ? .28 : o ? .5 : .38,
                    c = window.innerWidth < 768 ? .22 : i() ? .36 : o ? .7 : .55;
                return Math.min((2 * t * (window.innerWidth < 768 ? .88 : i() ? .84 : o ? .78 : .8) - (r - 1) * s) / r, (2 * e * (window.innerWidth < 768 || i() ? .82 : o ? .78 : .8) - (n - 1) * c) / n / m, window.innerWidth < 768 ? 99 : i() ? 8.5 : 9.2)
            }
            let S = new c.PerspectiveCamera(d(), window.innerWidth / window.innerHeight, .1, 500);
            S.position.set(0, 0, l()), S.lookAt(0, 0, 0);
            let P = new c.TextureLoader,
                T = w.length + 6,
                R = 0,
                E = !1,
                C = () => {
                    ++R !== T || E || ef()
                },
                F = e => Object.assign(P.load(e, C), {
                    minFilter: c.LinearFilter,
                    magFilter: c.LinearFilter,
                    generateMipmaps: !1
                }),
                j = w.map(F),
                D = [F("images/orbit/orbit-01.jpg"), F("images/orbit/orbit-02.jpg"), F("images/orbit/orbit-05.jpg"), F("images/orbit/orbit-03.jpg"), F("images/orbit/orbit-08.jpg"), F("images/orbit/orbit-07.jpg")],
                k = [];

            function _() {
                k.forEach(e => v.remove(e)), k = [];
                let e = M(),
                    t = e * m,
                    r = d() * Math.PI / 180,
                    n = window.innerHeight / (2 * Math.tan(r / 2) * l()),
                    i = e * n,
                    a = t * n,
                    o = `
          uniform sampler2D map;
          uniform vec2 uSize;
          uniform float uRadius;
          varying vec2 vUv;
          void main(){
            vec2 pxPos = (vUv - 0.5) * uSize;
            vec2 halfSize = uSize * 0.5;
            vec2 q = abs(pxPos) - halfSize + uRadius;
            float dist = min(max(q.x, q.y), 0.0) + length(max(q, 0.0)) - uRadius;
            float alpha = 1.0 - smoothstep(-0.5, 0.5, dist);
            if (alpha <= 0.0) discard;
            vec4 col = texture2D(map, vUv);
            gl_FragColor = vec4(col.rgb, col.a * alpha);
          }`;
                D.forEach(r => {
                    let n = new c.PlaneGeometry(e, t, 20, 12),
                        s = new c.Mesh(n, new c.ShaderMaterial({
                            uniforms: {
                                map: {
                                    value: r
                                },
                                uSize: {
                                    value: new c.Vector2(i, a)
                                },
                                uRadius: {
                                    value: 8
                                }
                            },
                            vertexShader: "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
                            fragmentShader: o,
                            side: c.DoubleSide,
                            transparent: !0
                        }));
                    s.visible = !1, s.renderOrder = 3, s.frustumCulled = !1;
                    let l = n.attributes.position.array,
                        u = l.length / 3,
                        d = new Float32Array(u),
                        f = new Float32Array(u);
                    for (let e = 0; e < u; e++) d[e] = l[3 * e], f[e] = l[3 * e + 1];
                    s.userData = {
                        restX: d,
                        restY: f,
                        wave: 1,
                        waveT: 0
                    }, v.add(s), k.push(s)
                })
            }

            function z(e, t, r, n) {
                let i = e.geometry.attributes.position,
                    {
                        restX: a,
                        restY: o
                    } = e.userData,
                    s = A,
                    l = W,
                    c = B,
                    u = n % c,
                    d = Math.floor(n / c),
                    f = u > 0 && u < c - 1;
                for (let e = 0; e < i.count; e++) {
                    let n, c = a[e],
                        h = o[e];
                    if (f) n = 1 - (h / l + .5);
                    else {
                        let e = c / s + .5,
                            t = 1 - (h / l + .5);
                        n = 0 === u ? (0 === d ? e + t : e + 1 - t) * .5 : (0 === d ? 1 - e + t : 1 - e + 1 - t) * .5
                    }
                    i.setXYZ(e, c, h, t * n * Math.sin(n * Math.PI * .9 - 2 * r) * s * .12)
                }
                i.needsUpdate = !0
            }
            let A = 0,
                W = 0,
                B = 3,
                L = () => {
                    W = (A = M()) * m, B = a()
                };
            L();
            let N = 0,
                H = () => {
                    cancelAnimationFrame(N), N = requestAnimationFrame(() => {
                        S.fov = d(), S.aspect = window.innerWidth / window.innerHeight, S.position.set(0, 0, l()), S.updateProjectionMatrix(), p.setSize(window.innerWidth, window.innerHeight), L(), _(), eu = !1, s.ScrollTrigger.refresh()
                    })
                },
                O = 5.8 * m,
                V = 2 * Math.PI,
                q = e => {
                    let t;
                    return new c.Vector3(12 * Math.cos(e), -16 + e * b - 2.5 * Math.exp(-(t = (e - V) / 2) * t), 12 * Math.sin(e))
                },
                I = e => {
                    let t = (e - V) / 2,
                        r = -2 * t / 2 * 2.5 * Math.exp(-t * t);
                    return new c.Vector3(-12 * Math.sin(e), b - r, 12 * Math.cos(e)).normalize()
                }; {
                let e = [];
                for (let t = 0; t <= 400; t++) e.push(q(t / 400 * 2 * Math.PI * 2));
                let t = new c.Line(new c.BufferGeometry().setFromPoints(e), new c.LineBasicMaterial({
                    color: 6710886,
                    transparent: !0,
                    opacity: 0,
                    depthWrite: !1
                }));
                t.renderOrder = -1, v.add(t)
            }
            let U = [],
                Y = []; {
                let e = d() * Math.PI / 180,
                    t = .5 * O + 4 / window.innerHeight * 2 * Math.tan(e / 2) * l() + .12 * O;
                for (let e = 0; e <= 600; e++) {
                    let r = e / 600 * 2 * Math.PI * 2,
                        n = q(r),
                        i = new c.Vector3().crossVectors(I(r), new c.Vector3(Math.cos(r), 0, Math.sin(r))).normalize();
                    i.y += .6, i.normalize(), U.push(new c.Vector3(n.x + i.x * t, n.y + i.y * t, n.z + i.z * t)), Y.push(new c.Vector3(n.x - i.x * t, n.y - i.y * t, n.z - i.z * t))
                }
            }
            let G = [...U].reverse(),
                X = [...Y].reverse(); {
                let e = Math.tan(d() * Math.PI / 180 / 2) * l(),
                    t = X[0],
                    r = X[1],
                    n = t.x - r.x,
                    i = t.y - r.y,
                    a = t.z - r.z,
                    o = Math.sqrt(n * n + i * i + a * a),
                    s = n / o,
                    u = i / o,
                    f = a / o,
                    h = (e - t.y) / u,
                    m = [];
                for (let e = 20; e >= 1; e--) {
                    let r = e / 20 * h;
                    m.push(new c.Vector3(t.x + s * r, t.y + u * r, t.z + f * r))
                }
                X.unshift(...m)
            }
            let K = Math.floor(86.80000000000001),
                $ = window.innerWidth < 768 ? 1 : 2,
                Z = new c.LineBasicMaterial({
                    color: "#9E9E9E",
                    linewidth: $
                }),
                J = new c.LineBasicMaterial({
                    color: "#9E9E9E",
                    linewidth: $
                }),
                Q = new c.BufferGeometry().setFromPoints(G),
                ee = new c.BufferGeometry().setFromPoints(X);
            Q.setDrawRange(0, 0), ee.setDrawRange(0, 0);
            let et = new c.Line(Q, Z),
                er = new c.Line(ee, J);
            et.renderOrder = 5, et.frustumCulled = !1, er.renderOrder = 5, er.frustumCulled = !1, v.add(et), v.add(er);
            let en = new c.LineBasicMaterial({
                    color: "#9E9E9E",
                    transparent: !0,
                    opacity: 1
                }),
                ei = new c.LineBasicMaterial({
                    color: "#9E9E9E",
                    transparent: !0,
                    opacity: 1
                });

            function ea(e, t = !1) {
                let r = Math.tan(d() * Math.PI / 180 / 2) * l() * (window.innerWidth / window.innerHeight),
                    n = window.innerWidth < 768 ? 0 : r * (80 / window.innerWidth),
                    i = -r + n,
                    a = r - n,
                    o = [];
                for (let r = 0; r <= 600; r++) {
                    let n = r / 600;
                    o.push(new c.Vector3(t ? a - n * (a - i) : i + n * (a - i), e, 0))
                }
                return o
            }
            let eo = new c.BufferGeometry().setFromPoints(ea(0)),
                es = new c.BufferGeometry().setFromPoints(ea(0));
            eo.setDrawRange(0, 0), es.setDrawRange(0, 0);
            let el = new c.Line(eo, en),
                ec = new c.Line(es, ei);
            el.renderOrder = 5, el.frustumCulled = !1, ec.renderOrder = 5, ec.frustumCulled = !1, v.add(el), v.add(ec);
            let eu = !1,
                ed = j.map(e => {
                    let t = new c.Mesh(new c.PlaneGeometry(1, 1, 116, 1), new c.ShaderMaterial({
                        uniforms: {
                            map: {
                                value: e
                            }
                        },
                        vertexShader: "varying vec2 vUv; void main(){ vUv=uv; gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.0); }",
                        fragmentShader: "uniform sampler2D map; varying vec2 vUv; void main(){ vec2 uv=vUv; if(gl_FrontFacing) uv.x=1.0-uv.x; gl_FragColor=texture2D(map,uv); }",
                        side: c.DoubleSide
                    }));
                    return t.visible = !1, t.renderOrder = 1, t.frustumCulled = !1, t.geometry.boundingBox = new c.Box3(new c.Vector3(-1e3, -1e3, -1e3), new c.Vector3(1e3, 1e3, 1e3)), t.geometry.boundingSphere = new c.Sphere(new c.Vector3(0, 0, 0), 1e3), v.add(t), t
                });
            _();
            let ef = () => {
                let e = ed.map(e => e.visible),
                    t = k.map(e => e.visible);
                ed.forEach(e => e.visible = !0), k.forEach(e => e.visible = !0), p.compile(v, S), p.render(v, S), ed.forEach((t, r) => t.visible = e[r]), k.forEach((e, r) => e.visible = t[r]), p.clear()
            };
            ef();
            let eh = o.default.matchMedia(),
                em = w.length,
                ep = (em - 1) * 6.2 + 5.8,
                eg = (.5 * y + ep + 10) / (y + ep) * (400 / 600),
                ew = window.innerWidth < 768 ? 3 : 5,
                ev = ew + 1.5,
                eb = window.innerHeight * ev,
                ex = ew / ev,
                ey = null,
                eM = null,
                eS = !1,
                eP = () => ey ? .(),
                eT = () => {
                    eS && (o.default.ticker.remove(eP), eS = !1)
                },
                eR = s.ScrollTrigger.create({
                    trigger: r,
                    start: "top top",
                    end: `+=${eb}`,
                    pin: !0,
                    markers: !1,
                    anticipatePin: 1,
                    onUpdate: () => {
                        eP(), eM ? .()
                    },
                    onRefresh: eP
                }),
                eE = document.getElementById("site-footer");
            eE && o.default.set(eE, {
                marginTop: "-100dvh",
                ease: "none"
            });
            let eC = () => eR.refresh(),
                eF = requestAnimationFrame(eC),
                ej = 0,
                eD = new ResizeObserver(() => {
                    if (eR.progress > 0) {
                        eD ? .disconnect(), eD = null;
                        return
                    }
                    cancelAnimationFrame(ej), ej = requestAnimationFrame(eC)
                });
            eD.observe(document.body);
            let ek = new c.Raycaster,
                e_ = new c.Vector2,
                ez = !1,
                eA = e => {
                    let r = t.getBoundingClientRect();
                    e_.x = (e.clientX - r.left) / r.width * 2 - 1, e_.y = -(2 * ((e.clientY - r.top) / r.height)) + 1, ez = !0
                },
                eW = () => {
                    ez = !1
                };
            r.addEventListener("pointermove", eA), r.addEventListener("pointerleave", eW);
            let eB = 0,
                eL = 0,
                eN = 0,
                eH = window.scrollY,
                eO = null,
                eV = !1,
                eq = !1,
                eI = () => {
                    let e = eR.start,
                        t = window.innerHeight,
                        r = window.scrollY - t;
                    return window.scrollY + window.innerHeight + t > e && r < e + eb
                };
            return ey = () => (e => {
                if (!eI()) {
                    eV = !1, eB = 0;
                    return
                }
                let t = !eV;
                t && (eH = window.scrollY, eV = !0);
                let r = ((eb > 0 ? Math.max(0, Math.min(1, (window.scrollY - eR.start) / eb)) : 0) - ex) / (1 - ex) >= 1;
                if (r) {
                    if (eq) return;
                    eq = !0
                } else eq = !1;
                let a = 1e3 * e,
                    s = eB ? Math.min((a - eB) / 1e3, .05) : 1 / 60;
                eB = a;
                let l = t || r;
                if (l) eH = window.scrollY;
                else {
                    let e = 1 - Math.pow(.001, s);
                    eH += (window.scrollY - eH) * e
                }
                let u = eH,
                    f = eR.start,
                    g = Math.min((eb > 0 ? Math.max(0, Math.min(1, (u - f) / eb)) : 0) / ex, 1),
                    w = Math.max(0, Math.min(1, ((eb > 0 ? Math.max(0, Math.min(1, (window.scrollY - f) / eb)) : 0) - ex) / (1 - ex)));
                if (!eO) {
                    let e = h.current.filter(Boolean);
                    if (e.length > 0) {
                        let t = o.default.timeline({
                            paused: !0,
                            defaults: {
                                ease: "none"
                            }
                        });
                        t.addLabel("stripes_start");
                        let r = e.length;
                        for (let n = 0; n < r; n++) {
                            let i = .3 * (r - 1 - n) / (r - 1 || 1) * 1,
                                a = i + .3;
                            t.to(e[n], {
                                scaleY: 1,
                                duration: a - i,
                                ease: "none"
                            }, `stripes_start+=${i}`)
                        }
                        t.to({}, {
                            duration: .1
                        }), eO = t
                    }
                }
                eO && eO.progress(w);
                let P = Math.min(1, g / (400 / 600)),
                    T = P * (601 + K),
                    R = P * (621 + K);
                if (l) eL = T, eN = R;
                else {
                    let e = 1 - Math.pow(.01, s);
                    eL += (T - eL) * e, eN += (R - eN) * e
                }
                let C = Math.floor(eL),
                    F = Math.max(0, C - K);
                Q.setDrawRange(F, Math.max(0, Math.min(C, 601) - F + 1));
                let j = Math.floor(eN),
                    D = Math.max(0, j - K);
                ee.setDrawRange(D, Math.max(0, Math.min(j, 621) - D + 1));
                let _ = P * (y + ep) - ep + 25;
                for (let e = 0; e < em; e++) {
                    let t = _ + 6.2 * e,
                        r = P < 1 && t > 0 && t < y;
                    if (ed[e].visible = r, r) {
                        let r = ed[e].userData.hoverScale ? ? 1;
                        ! function(e, t, r = 1) {
                            let n = e.geometry.attributes.position,
                                i = e.geometry.attributes.uv,
                                a = 5.8 * r,
                                o = t + 2.9 - .5 * a,
                                s = O * r,
                                l = !e.userData.uvWritten;
                            for (let e = 0; e < 117; e++) {
                                let t = e / 116,
                                    r = (o + t * a) / x,
                                    c = Math.cos(r),
                                    u = Math.sin(r),
                                    d = (r - V) / 2,
                                    f = 2.5 * Math.exp(-d * d),
                                    h = 12 * c,
                                    m = -16 + r * b - f,
                                    p = 12 * u,
                                    g = -12 * u,
                                    w = b - -2 * d / 2 * f,
                                    v = 12 * c,
                                    y = Math.sqrt(g * g + w * w + v * v) || 1;
                                g /= y;
                                let M = (w /= y) * u,
                                    S = (v /= y) * c - g * u,
                                    P = -w * c,
                                    T = Math.sqrt(M * M + S * S + P * P) || 1;
                                M /= T, S /= T, P /= T, S += .6, T = Math.sqrt(M * M + S * S + P * P) || 1, M /= T, S /= T, P /= T;
                                for (let r = 0; r < 2; r++) {
                                    let a = (0 === r ? -.5 : .5) * s,
                                        o = 117 * r + e;
                                    n.setXYZ(o, h + M * a, m + S * a, p + P * a), l && i.setXY(o, t, r)
                                }
                            }
                            n.needsUpdate = !0, l && (i.needsUpdate = !0, e.userData.uvWritten = !0), e.position.set(0, 0, 0), e.rotation.set(0, 0, 0), e.scale.set(1, 1, 1)
                        }(ed[e], Math.min(t, y - .001), r)
                    }
                }
                let L = null;
                if (ez) {
                    ek.setFromCamera(e_, S);
                    let e = ed.filter(e => e.visible);
                    if (e.length > 0) {
                        let t = ek.intersectObjects(e, !1);
                        t.length > 0 && (L = t[0].object)
                    }
                }
                let N = 1 - Math.pow(.001, s);
                for (let e = 0; e < em; e++) {
                    let t = ed[e],
                        r = t.userData.hoverScale ? ? 1,
                        n = t === L && t.visible ? 1.12 : 1;
                    t.userData.hoverScale = r + (n - r) * N
                }
                let H = Math.max(0, Math.min(1, (g - eg) / (1 - eg))),
                    q = Math.max(0, 1 - 4 * H),
                    I = n.querySelector(".title");
                if (I instanceof HTMLElement && (I.style.opacity = String(q)), H > 0 && !eu) {
                    let e = window.innerWidth < 768 ? 3 : 2,
                        t = window.innerWidth < 768 ? .22 : i() ? .36 : .55,
                        r = M() * m,
                        n = e * r + (e - 1) * t;
                    window.innerWidth < 768 ? (eo.setFromPoints(ea(.5 * n - r - .5 * t, !1)), es.setFromPoints(ea(.5 * n - 2 * r - 1.5 * t, !0))) : (eo.setFromPoints(ea(0, !1)), es.setFromPoints(ea(0, !1))), eo.setDrawRange(0, 0), es.setDrawRange(0, 0), eu = !0
                }
                if (eu) {
                    let e = 1 - Math.pow(1 - Math.max(0, Math.min(1, (H - .2) / .8)), 2.5);
                    if (eo.setDrawRange(0, Math.round(600 * e)), window.innerWidth < 768) {
                        let e = Math.max(0, Math.min(1, (H - .2 - .08) / .7200000000000001));
                        es.setDrawRange(0, Math.round((1 - Math.pow(1 - e, 2.5)) * 600))
                    } else es.setDrawRange(0, 0)
                }
                let U = Math.tan(d() * Math.PI / 180 / 2) * S.position.z,
                    Y = U * S.aspect,
                    G = A,
                    X = W,
                    $ = B;
                for (let e = 0; e < 6; e++) {
                    let t = k[e];
                    if (!t) continue;
                    let r = Math.max(0, Math.min(1, (H - .08 * e) / .4));
                    if (r <= 0 && !t.userData.wave) {
                        t.visible = !1;
                        continue
                    }
                    t.visible = !0;
                    let n = 1 - Math.pow(1 - r, 3),
                        a = function(e) {
                            let t = A,
                                r = W,
                                n = B,
                                a = window.innerWidth < 768 ? 3 : 2,
                                o = window.innerWidth < 768 ? .18 : i() ? .28 : .38,
                                s = window.innerWidth < 768 ? .22 : i() ? .36 : .55,
                                l = Math.floor(e / n);
                            return new c.Vector3(-(.5 * (n * t + (n - 1) * o)) + .5 * t + e % n * (t + o), .5 * (a * r + (a - 1) * s) - .5 * r - l * (r + s), 0)
                        }(e),
                        o = e % $,
                        l = e < $ ? U + 2 * X : -U - 2 * X,
                        u = 0 === o ? -Y - 2 * G : o === $ - 1 ? Y + 2 * G : a.x;
                    t.position.set(u + (a.x - u) * n, l + (a.y - l) * n, 0), t.userData.waveT += 1.08 * s, t.userData.wave = r < 1 ? Math.min(1, t.userData.wave + 1.8 * s) : Math.max(0, t.userData.wave - .72 * s), t.userData.wave > 0 ? (z(t, t.userData.wave, t.userData.waveT, e), t.userData.waveFlat = !1) : t.userData.waveFlat || (z(t, 0, t.userData.waveT, e), t.userData.waveFlat = !0)
                }
                E = !0, p.render(v, S)
            })(o.default.ticker.time), (eM = () => {
                eI() ? eS || (o.default.ticker.add(eP), eS = !0) : eT()
            })(), ey(), () => {
                eT(), eh.revert(), window.removeEventListener("resize", H), r.removeEventListener("pointermove", eA), r.removeEventListener("pointerleave", eW), cancelAnimationFrame(N), cancelAnimationFrame(eF), cancelAnimationFrame(ej), eD ? .disconnect(), eO && eO.kill(), eR.kill(), p.dispose(), v.traverse(e => {
                    e instanceof c.Mesh && (e.geometry.dispose(), e.material instanceof c.Material && e.material.dispose())
                })
            }
        }, {
            scope: u,
            dependencies: [g]
        }), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsxs)("div", {
                ref: u,
                className: "relative z-10 h-dvh bg-[#C3C3C3] pt-25 pb-20 lg:py-20 overflow-hidden -top-0.5!",
                children: [(0, t.jsx)("canvas", {
                    ref: e,
                    className: "absolute inset-0 w-full h-full pointer-events-none z-1"
                }), (0, t.jsxs)("div", {
                    className: "tr__container w-full h-full flex items-center flex-col justify-between text-dark-font",
                    children: [(0, t.jsx)("div", {
                        ref: f,
                        className: "pointer-events-none select-none dribble-title absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full overflow-visible whitespace-nowrap",
                        children: (0, t.jsxs)("div", {
                            className: "flex flex-col w-full overflow-visible",
                            children: [(0, t.jsx)(n.BlurTextReveal, {
                                as: "h2",
                                text: "Design in",
                                animationType: "chars",
                                stagger: .05,
                                className: "text-dark-font relative mrquee-text leading-[0.8]! uppercase top-word will-change-transform self-start -translate-x-full"
                            }), (0, t.jsx)(n.BlurTextReveal, {
                                as: "span",
                                html: "Exploring ideas through <br/> daily design practice.",
                                animationType: "words",
                                stagger: .05,
                                className: "text-dark-font relative title my-3 mx-auto text-center"
                            }), (0, t.jsx)(n.BlurTextReveal, {
                                as: "h2",
                                text: "motion",
                                animationType: "chars",
                                stagger: .05,
                                className: "text-dark-font relative mrquee-text leading-[0.8]! uppercase bottom-word will-change-transform self-end translate-x-full"
                            })]
                        })
                    }), (0, t.jsx)("div", {
                        className: "hidden md:block flex-1"
                    }), (0, t.jsxs)("div", {
                        className: "w-full flex flex-col md:flex-row items-center md:items-end justify-between gap-10 max-md:h-full",
                        children: [(0, t.jsx)(i.FadeInOnScroll, {
                            className: "w-full block relative z-5",
                            start: "top 100%",
                            children: (0, t.jsxs)("p", {
                                className: "small text-center md:text-left",
                                children: ["Concepts, explorations, and interface ", (0, t.jsx)("br", {}), "experiments shared openly as part of ", (0, t.jsx)("br", {}), "our creative process."]
                            })
                        }), (0, t.jsx)(r.WordShiftButton, {
                            text: "View on Dribbble",
                            href: "https://dribbble.com/trionnstudio",
                            customClass: "relative z-5",
                            target: "_blank"
                        })]
                    })]
                }), (0, t.jsx)("div", {
                    className: "absolute inset-0 pointer-events-none flex flex-col w-full h-full z-30",
                    children: Array.from({
                        length: 5
                    }).map((e, r) => (0, t.jsx)("div", {
                        ref: e => {
                            e && (h.current[r] = e)
                        },
                        style: {
                            flex: 1,
                            width: "100%",
                            marginTop: r > 0 ? "-1px" : void 0,
                            paddingBottom: "-1px",
                            backgroundColor: "#040508",
                            transform: "scaleY(0)",
                            transformOrigin: "bottom",
                            willChange: "transform"
                        }
                    }, r))
                })]
            })
        })
    }])
}, 99060, e => {
    e.n(e.i(40169))
}]);