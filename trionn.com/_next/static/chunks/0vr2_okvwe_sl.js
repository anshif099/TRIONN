(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 30133, e => {
    "use strict";
    let t, i, s;
    var r = e.i(43476),
        a = e.i(57688),
        l = e.i(71645),
        n = e.i(74080);
    e.i(52819);
    var o = e.i(54090),
        d = e.i(70221);
    e.i(83390);
    var c = e.i(90782),
        p = e.i(19442),
        u = e.i(34470);

    function h(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
    }

    function m(e = {}, t = {}) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
            void 0 === e[i] ? e[i] = t[i] : h(t[i]) && h(e[i]) && Object.keys(t[i]).length > 0 && m(e[i], t[i])
        })
    }
    let f = {
        body: {},
        addEventListener() {},
        removeEventListener() {},
        activeElement: {
            blur() {},
            nodeName: ""
        },
        querySelector: () => null,
        querySelectorAll: () => [],
        getElementById: () => null,
        createEvent: () => ({
            initEvent() {}
        }),
        createElement: () => ({
            children: [],
            childNodes: [],
            style: {},
            setAttribute() {},
            getElementsByTagName: () => []
        }),
        createElementNS: () => ({}),
        importNode: () => null,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };

    function g() {
        let e = "u" > typeof document ? document : {};
        return m(e, f), e
    }
    let v = {
        document: f,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState() {},
            pushState() {},
            go() {},
            back() {}
        },
        CustomEvent: function() {
            return this
        },
        addEventListener() {},
        removeEventListener() {},
        getComputedStyle: () => ({
            getPropertyValue: () => ""
        }),
        Image() {},
        Date() {},
        screen: {},
        setTimeout() {},
        clearTimeout() {},
        matchMedia: () => ({}),
        requestAnimationFrame: e => "u" < typeof setTimeout ? (e(), null) : setTimeout(e, 0),
        cancelAnimationFrame(e) {
            "u" > typeof setTimeout && clearTimeout(e)
        }
    };

    function w() {
        let e = "u" > typeof window ? window : {};
        return m(e, v), e
    }

    function b({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s,
        params: r
    }) {
        let a, l, n, o, d, c, p, u, h;
        e.autoplay = {
            running: !1,
            paused: !1,
            timeLeft: 0
        }, t({
            autoplay: {
                enabled: !1,
                delay: 3e3,
                waitForTransition: !0,
                disableOnInteraction: !1,
                stopOnLastSlide: !1,
                reverseDirection: !1,
                pauseOnMouseEnter: !1
            }
        });
        let m = r && r.autoplay ? r.autoplay.delay : 3e3,
            f = r && r.autoplay ? r.autoplay.delay : 3e3,
            v = new Date().getTime();

        function w(t) {
            !e || e.destroyed || !e.wrapperEl || t.target !== e.wrapperEl || (e.wrapperEl.removeEventListener("transitionend", w), h || t.detail && t.detail.bySwiperTouchMove || M())
        }
        let y = () => {
                if (e.destroyed || !e.autoplay.running) return;
                e.autoplay.paused ? o = !0 : o && (f = n, o = !1);
                let t = e.autoplay.paused ? n : v + f - new Date().getTime();
                e.autoplay.timeLeft = t, s("autoplayTimeLeft", t, t / m), l = requestAnimationFrame(() => {
                    y()
                })
            },
            x = () => {
                let t = e.params.autoplay.delay,
                    i = (() => {
                        let t;
                        if (t = e.virtual && e.params.virtual.enabled ? e.slides.find(e => e.classList.contains("swiper-slide-active")) : e.slides[e.activeIndex]) return parseInt(t.getAttribute("data-swiper-autoplay"), 10)
                    })();
                return !Number.isNaN(i) && i > 0 && (t = i), t
            },
            S = t => {
                if (e.destroyed || !e.autoplay.running) return;
                cancelAnimationFrame(l), y();
                let i = t;
                void 0 === i && (m = i = x(), f = i), n = i;
                let r = e.params.speed,
                    o = () => {
                        e && !e.destroyed && (e.params.autoplay.reverseDirection ? !e.isBeginning || e.params.loop || e.params.rewind ? (e.slidePrev(r, !0, !0), s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(e.slides.length - 1, r, !0, !0), s("autoplay")) : !e.isEnd || e.params.loop || e.params.rewind ? (e.slideNext(r, !0, !0), s("autoplay")) : e.params.autoplay.stopOnLastSlide || (e.slideTo(0, r, !0, !0), s("autoplay")), e.params.cssMode && (v = new Date().getTime(), requestAnimationFrame(() => {
                            S()
                        })))
                    };
                return i > 0 ? (clearTimeout(a), a = setTimeout(() => {
                    o()
                }, i)) : requestAnimationFrame(() => {
                    o()
                }), i
            },
            E = () => {
                v = new Date().getTime(), e.autoplay.running = !0, S(), s("autoplayStart")
            },
            T = () => {
                e.autoplay.running = !1, clearTimeout(a), cancelAnimationFrame(l), s("autoplayStop")
            },
            C = (t, i) => {
                if (e.destroyed || !e.autoplay.running) return;
                clearTimeout(a), t || (u = !0);
                let r = () => {
                    s("autoplayPause"), e.params.autoplay.waitForTransition ? e.wrapperEl.addEventListener("transitionend", w) : M()
                };
                (e.autoplay.paused = !0, i) ? r(): (n = (n || e.params.autoplay.delay) - (new Date().getTime() - v), e.isEnd && n < 0 && !e.params.loop || (n < 0 && (n = 0), r()))
            },
            M = () => {
                e.isEnd && n < 0 && !e.params.loop || e.destroyed || !e.autoplay.running || (v = new Date().getTime(), u ? (u = !1, S(n)) : S(), e.autoplay.paused = !1, s("autoplayResume"))
            },
            P = () => {
                if (e.destroyed || !e.autoplay.running) return;
                let t = g();
                "hidden" === t.visibilityState && (u = !0, C(!0)), "visible" === t.visibilityState && M()
            },
            L = t => {
                "mouse" !== t.pointerType || (u = !0, h = !0, e.animating || e.autoplay.paused || C(!0))
            },
            k = t => {
                "mouse" === t.pointerType && (h = !1, e.autoplay.paused && M())
            };
        i("init", () => {
            e.params.autoplay.enabled && (e.params.autoplay.pauseOnMouseEnter && (e.el.addEventListener("pointerenter", L), e.el.addEventListener("pointerleave", k)), g().addEventListener("visibilitychange", P), E())
        }), i("destroy", () => {
            e.el && "string" != typeof e.el && (e.el.removeEventListener("pointerenter", L), e.el.removeEventListener("pointerleave", k)), g().removeEventListener("visibilitychange", P), e.autoplay.running && T()
        }), i("_freeModeStaticRelease", () => {
            (c || u) && M()
        }), i("_freeModeNoMomentumRelease", () => {
            e.params.autoplay.disableOnInteraction ? T() : C(!0, !0)
        }), i("beforeTransitionStart", (t, i, s) => {
            !e.destroyed && e.autoplay.running && (s || !e.params.autoplay.disableOnInteraction ? C(!0, !0) : T())
        }), i("sliderFirstMove", () => {
            if (!e.destroyed && e.autoplay.running) {
                if (e.params.autoplay.disableOnInteraction) return void T();
                d = !0, c = !1, u = !1, p = setTimeout(() => {
                    u = !0, c = !0, C(!0)
                }, 200)
            }
        }), i("touchEnd", () => {
            if (!e.destroyed && e.autoplay.running && d) {
                if (clearTimeout(p), clearTimeout(a), e.params.autoplay.disableOnInteraction) {
                    c = !1, d = !1;
                    return
                }
                c && e.params.cssMode && M(), c = !1, d = !1
            }
        }), i("slideChange", () => {
            !e.destroyed && e.autoplay.running && e.autoplay.paused && (n = x(), m = x())
        }), Object.assign(e.autoplay, {
            start: E,
            stop: T,
            pause: C,
            resume: M
        })
    }

    function y(e, t = 0) {
        return setTimeout(e, t)
    }

    function x() {
        return Date.now()
    }

    function S(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
    }

    function E(...e) {
        let t = Object(e[0]);
        for (let i = 1; i < e.length; i += 1) {
            let s = e[i];
            if (null != s && ("u" > typeof window && void 0 !== window.HTMLElement ? !(s instanceof HTMLElement) : !s || 1 !== s.nodeType && 11 !== s.nodeType)) {
                let e = Object.keys(Object(s)).filter(e => "__proto__" !== e && "constructor" !== e && "prototype" !== e);
                for (let i = 0, r = e.length; i < r; i += 1) {
                    let r = e[i],
                        a = Object.getOwnPropertyDescriptor(s, r);
                    void 0 !== a && a.enumerable && (S(t[r]) && S(s[r]) ? s[r].__swiper__ ? t[r] = s[r] : E(t[r], s[r]) : !S(t[r]) && S(s[r]) ? (t[r] = {}, s[r].__swiper__ ? t[r] = s[r] : E(t[r], s[r])) : t[r] = s[r])
                }
            }
        }
        return t
    }

    function T(e, t, i) {
        e.style.setProperty(t, i)
    }

    function C({
        swiper: e,
        targetPosition: t,
        side: i
    }) {
        let s, r = w(),
            a = -e.translate,
            l = null,
            n = e.params.speed;
        e.wrapperEl.style.scrollSnapType = "none", r.cancelAnimationFrame(e.cssModeFrameID);
        let o = t > a ? "next" : "prev",
            d = (e, t) => "next" === o && e >= t || "prev" === o && e <= t,
            c = () => {
                s = new Date().getTime(), null === l && (l = s);
                let o = a + (.5 - Math.cos(Math.max(Math.min((s - l) / n, 1), 0) * Math.PI) / 2) * (t - a);
                if (d(o, t) && (o = t), e.wrapperEl.scrollTo({
                        [i]: o
                    }), d(o, t)) {
                    e.wrapperEl.style.overflow = "hidden", e.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                        e.wrapperEl.style.overflow = "", e.wrapperEl.scrollTo({
                            [i]: o
                        })
                    }), r.cancelAnimationFrame(e.cssModeFrameID);
                    return
                }
                e.cssModeFrameID = r.requestAnimationFrame(c)
            };
        c()
    }

    function M(e) {
        return e.querySelector(".swiper-slide-transform") || e.shadowRoot && e.shadowRoot.querySelector(".swiper-slide-transform") || e
    }

    function P(e, t = "") {
        let i = w(),
            s = [...e.children];
        return (i.HTMLSlotElement && e instanceof HTMLSlotElement && s.push(...e.assignedElements()), t) ? s.filter(e => e.matches(t)) : s
    }

    function L(e) {
        try {
            console.warn(e);
            return
        } catch (e) {}
    }

    function k(e, t = []) {
        let i = document.createElement(e);
        return i.classList.add(...Array.isArray(t) ? t : function(e = "") {
            return e.trim().split(" ").filter(e => !!e.trim())
        }(t)), i
    }

    function O(e, t) {
        return w().getComputedStyle(e, null).getPropertyValue(t)
    }

    function I(e) {
        let t, i = e;
        if (i) {
            for (t = 0; null !== (i = i.previousSibling);) 1 === i.nodeType && (t += 1);
            return t
        }
    }

    function _(e, t) {
        let i = [],
            s = e.parentElement;
        for (; s;) t ? s.matches(t) && i.push(s) : i.push(s), s = s.parentElement;
        return i
    }

    function A(e, t, i) {
        let s = w();
        return i ? e["width" === t ? "offsetWidth" : "offsetHeight"] + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-right" : "margin-top")) + parseFloat(s.getComputedStyle(e, null).getPropertyValue("width" === t ? "margin-left" : "margin-bottom")) : e.offsetWidth
    }

    function z(e) {
        return (Array.isArray(e) ? e : [e]).filter(e => !!e)
    }

    function N(e, t = "") {
        "u" > typeof trustedTypes ? e.innerHTML = trustedTypes.createPolicy("html", {
            createHTML: e => e
        }).createHTML(t) : e.innerHTML = t
    }

    function j({
        swiper: e,
        extendParams: t,
        on: i
    }) {
        t({
            fadeEffect: {
                crossFade: !1
            }
        }), ! function(e) {
            let t, {
                effect: i,
                swiper: s,
                on: r,
                setTranslate: a,
                setTransition: l,
                overwriteParams: n,
                perspective: o,
                recreateShadows: d,
                getEffectParams: c
            } = e;
            r("beforeInit", () => {
                if (s.params.effect !== i) return;
                s.classNames.push(`${s.params.containerModifierClass}${i}`), o && o() && s.classNames.push(`${s.params.containerModifierClass}3d`);
                let e = n ? n() : {};
                Object.assign(s.params, e), Object.assign(s.originalParams, e)
            }), r("setTranslate _virtualUpdated", () => {
                s.params.effect === i && a()
            }), r("setTransition", (e, t) => {
                s.params.effect === i && l(t)
            }), r("transitionEnd", () => {
                s.params.effect === i && d && c && c().slideShadows && (s.slides.forEach(e => {
                    e.querySelectorAll(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").forEach(e => e.remove())
                }), d())
            }), r("virtualUpdate", () => {
                s.params.effect === i && (s.slides.length || (t = !0), requestAnimationFrame(() => {
                    t && s.slides && s.slides.length && (a(), t = !1)
                }))
            })
        }({
            effect: "fade",
            swiper: e,
            on: i,
            setTranslate: () => {
                let {
                    slides: t
                } = e;
                e.params.fadeEffect;
                for (let i = 0; i < t.length; i += 1) {
                    let t = e.slides[i],
                        s = -t.swiperSlideOffset;
                    e.params.virtualTranslate || (s -= e.translate);
                    let r = 0;
                    e.isHorizontal() || (r = s, s = 0);
                    let a = e.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(t.progress), 0) : 1 + Math.min(Math.max(t.progress, -1), 0),
                        l = function(e) {
                            let t = M(e);
                            return t !== e && (t.style.backfaceVisibility = "hidden", t.style["-webkit-backface-visibility"] = "hidden"), t
                        }(t);
                    l.style.opacity = a, l.style.transform = `translate3d(${s}px, ${r}px, 0px)`
                }
            },
            setTransition: t => {
                let i = e.slides.map(e => M(e));
                i.forEach(e => {
                        e.style.transitionDuration = `${t}ms`
                    }),
                    function({
                        swiper: e,
                        duration: t,
                        transformElements: i,
                        allSlides: s
                    }) {
                        let {
                            activeIndex: r
                        } = e;
                        if (e.params.virtualTranslate && 0 !== t) {
                            let t = !1;
                            (s ? i : i.filter(t => {
                                let i = t.classList.contains("swiper-slide-transform") ? t.parentElement ? t.parentElement : e.slides.find(e => e.shadowRoot && e.shadowRoot === t.parentNode) : t;
                                return e.getSlideIndex(i) === r
                            })).forEach(i => {
                                var s;
                                (s = () => {
                                    if (t || !e || e.destroyed) return;
                                    t = !0, e.animating = !1;
                                    let i = new window.CustomEvent("transitionend", {
                                        bubbles: !0,
                                        cancelable: !0
                                    });
                                    e.wrapperEl.dispatchEvent(i)
                                }) && i.addEventListener("transitionend", function e(t) {
                                    t.target === i && (s.call(i, t), i.removeEventListener("transitionend", e))
                                })
                            })
                        }
                    }({
                        swiper: e,
                        duration: t,
                        transformElements: i,
                        allSlides: !0
                    })
            },
            overwriteParams: () => ({
                slidesPerView: 1,
                slidesPerGroup: 1,
                watchSlidesProgress: !0,
                spaceBetween: 0,
                virtualTranslate: !e.params.cssMode
            })
        })
    }

    function $(e, t, i, s) {
        return e.params.createElements && Object.keys(s).forEach(r => {
            if (!i[r] && !0 === i.auto) {
                let a = P(e.el, `.${s[r]}`)[0];
                a || ((a = k("div", s[r])).className = s[r], e.el.append(a)), i[r] = a, t[r] = a
            }
        }), i
    }
    let D = '<svg class="swiper-navigation-icon" width="11" height="20" viewBox="0 0 11 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.38296 20.0762C0.111788 19.805 0.111788 19.3654 0.38296 19.0942L9.19758 10.2796L0.38296 1.46497C0.111788 1.19379 0.111788 0.754138 0.38296 0.482966C0.654131 0.211794 1.09379 0.211794 1.36496 0.482966L10.4341 9.55214C10.8359 9.9539 10.8359 10.6053 10.4341 11.007L1.36496 20.0762C1.09379 20.3474 0.654131 20.3474 0.38296 20.0762Z" fill="currentColor"/></svg>';

    function B({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        function r(t) {
            let i;
            return t && "string" == typeof t && e.isElement && (i = e.el.querySelector(t) || e.hostEl.querySelector(t)) ? i : (t && ("string" == typeof t && (i = [...document.querySelectorAll(t)]), e.params.uniqueNavElements && "string" == typeof t && i && i.length > 1 && 1 === e.el.querySelectorAll(t).length ? i = e.el.querySelector(t) : i && 1 === i.length && (i = i[0])), t && !i) ? t : i
        }

        function a(t, i) {
            let s = e.params.navigation;
            (t = z(t)).forEach(t => {
                t && (t.classList[i ? "add" : "remove"](...s.disabledClass.split(" ")), "BUTTON" === t.tagName && (t.disabled = i), e.params.watchOverflow && e.enabled && t.classList[e.isLocked ? "add" : "remove"](s.lockClass))
            })
        }

        function l() {
            let {
                nextEl: t,
                prevEl: i
            } = e.navigation;
            if (e.params.loop) {
                a(i, !1), a(t, !1);
                return
            }
            a(i, e.isBeginning && !e.params.rewind), a(t, e.isEnd && !e.params.rewind)
        }

        function n(t) {
            t.preventDefault(), (!e.isBeginning || e.params.loop || e.params.rewind) && (e.slidePrev(), s("navigationPrev"))
        }

        function o(t) {
            t.preventDefault(), (!e.isEnd || e.params.loop || e.params.rewind) && (e.slideNext(), s("navigationNext"))
        }

        function d() {
            let t = e.params.navigation;
            if (e.params.navigation = $(e, e.originalParams.navigation, e.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !(t.nextEl || t.prevEl)) return;
            let i = r(t.nextEl),
                s = r(t.prevEl);
            Object.assign(e.navigation, {
                nextEl: i,
                prevEl: s
            }), i = z(i), s = z(s);
            let a = (i, s) => {
                if (i) {
                    if (t.addIcons && i.matches(".swiper-button-next,.swiper-button-prev") && !i.querySelector("svg")) {
                        let e = document.createElement("div");
                        N(e, D), i.appendChild(e.querySelector("svg")), e.remove()
                    }
                    i.addEventListener("click", "next" === s ? o : n)
                }!e.enabled && i && i.classList.add(...t.lockClass.split(" "))
            };
            i.forEach(e => a(e, "next")), s.forEach(e => a(e, "prev"))
        }

        function c() {
            let {
                nextEl: t,
                prevEl: i
            } = e.navigation;
            t = z(t), i = z(i);
            let s = (t, i) => {
                t.removeEventListener("click", "next" === i ? o : n), t.classList.remove(...e.params.navigation.disabledClass.split(" "))
            };
            t.forEach(e => s(e, "next")), i.forEach(e => s(e, "prev"))
        }
        t({
            navigation: {
                nextEl: null,
                prevEl: null,
                addIcons: !0,
                hideOnClick: !1,
                disabledClass: "swiper-button-disabled",
                hiddenClass: "swiper-button-hidden",
                lockClass: "swiper-button-lock",
                navigationDisabledClass: "swiper-navigation-disabled"
            }
        }), e.navigation = {
            nextEl: null,
            prevEl: null,
            arrowSvg: D
        }, i("init", () => {
            !1 === e.params.navigation.enabled ? p() : (d(), l())
        }), i("toEdge fromEdge lock unlock", () => {
            l()
        }), i("destroy", () => {
            c()
        }), i("enable disable", () => {
            let {
                nextEl: t,
                prevEl: i
            } = e.navigation;
            (t = z(t), i = z(i), e.enabled) ? l(): [...t, ...i].filter(e => !!e).forEach(t => t.classList.add(e.params.navigation.lockClass))
        }), i("click", (t, i) => {
            let {
                nextEl: r,
                prevEl: a
            } = e.navigation;
            r = z(r), a = z(a);
            let l = i.target,
                n = a.includes(l) || r.includes(l);
            if (e.isElement && !n) {
                let e = i.path || i.composedPath && i.composedPath();
                e && (n = e.find(e => r.includes(e) || a.includes(e)))
            }
            if (e.params.navigation.hideOnClick && !n) {
                let t;
                if (e.pagination && e.params.pagination && e.params.pagination.clickable && (e.pagination.el === l || e.pagination.el.contains(l))) return;
                r.length ? t = r[0].classList.contains(e.params.navigation.hiddenClass) : a.length && (t = a[0].classList.contains(e.params.navigation.hiddenClass)), !0 === t ? s("navigationShow") : s("navigationHide"), [...r, ...a].filter(e => !!e).forEach(t => t.classList.toggle(e.params.navigation.hiddenClass))
            }
        });
        let p = () => {
            e.el.classList.add(...e.params.navigation.navigationDisabledClass.split(" ")), c()
        };
        Object.assign(e.navigation, {
            enable: () => {
                e.el.classList.remove(...e.params.navigation.navigationDisabledClass.split(" ")), d(), l()
            },
            disable: p,
            update: l,
            init: d,
            destroy: c
        })
    }

    function G(e = "") {
        return `.${e.trim().replace(/([\.:!+\/()[\]#>~*^$|=,'"@{}\\])/g,"\\$1").replace(/ /g,".")}`
    }

    function V({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        let r, a = "swiper-pagination";
        t({
            pagination: {
                el: null,
                bulletElement: "span",
                clickable: !1,
                hideOnClick: !1,
                renderBullet: null,
                renderProgressbar: null,
                renderFraction: null,
                renderCustom: null,
                progressbarOpposite: !1,
                type: "bullets",
                dynamicBullets: !1,
                dynamicMainBullets: 1,
                formatFractionCurrent: e => e,
                formatFractionTotal: e => e,
                bulletClass: `${a}-bullet`,
                bulletActiveClass: `${a}-bullet-active`,
                modifierClass: `${a}-`,
                currentClass: `${a}-current`,
                totalClass: `${a}-total`,
                hiddenClass: `${a}-hidden`,
                progressbarFillClass: `${a}-progressbar-fill`,
                progressbarOppositeClass: `${a}-progressbar-opposite`,
                clickableClass: `${a}-clickable`,
                lockClass: `${a}-lock`,
                horizontalClass: `${a}-horizontal`,
                verticalClass: `${a}-vertical`,
                paginationDisabledClass: `${a}-disabled`
            }
        }), e.pagination = {
            el: null,
            bullets: []
        };
        let l = 0;

        function n() {
            return !e.params.pagination.el || !e.pagination.el || Array.isArray(e.pagination.el) && 0 === e.pagination.el.length
        }

        function o(t, i) {
            let {
                bulletActiveClass: s
            } = e.params.pagination;
            t && (t = t[`${"prev"===i?"previous":"next"}ElementSibling`]) && (t.classList.add(`${s}-${i}`), (t = t[`${"prev"===i?"previous":"next"}ElementSibling`]) && t.classList.add(`${s}-${i}-${i}`))
        }

        function d(t) {
            let i = t.target.closest(G(e.params.pagination.bulletClass));
            if (!i) return;
            t.preventDefault();
            let s = I(i) * e.params.slidesPerGroup;
            if (e.params.loop) {
                var r, a, l;
                if (e.realIndex === s) return;
                let t = (r = e.realIndex, a = s, (r %= l = e.slides.length, (a %= l) === r + 1) ? "next" : a === r - 1 ? "previous" : void 0);
                "next" === t ? e.slideNext() : "previous" === t ? e.slidePrev() : e.slideToLoop(s)
            } else e.slideTo(s)
        }

        function c() {
            let t, i, a = e.rtl,
                d = e.params.pagination;
            if (n()) return;
            let c = e.pagination.el;
            c = z(c);
            let p = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.slides.length,
                u = e.params.loop ? Math.ceil(p / e.params.slidesPerGroup) : e.snapGrid.length;
            if (e.params.loop ? (i = e.previousRealIndex || 0, t = e.params.slidesPerGroup > 1 ? Math.floor(e.realIndex / e.params.slidesPerGroup) : e.realIndex) : void 0 !== e.snapIndex ? (t = e.snapIndex, i = e.previousSnapIndex) : (i = e.previousIndex || 0, t = e.activeIndex || 0), "bullets" === d.type && e.pagination.bullets && e.pagination.bullets.length > 0) {
                let s, n, p, u = e.pagination.bullets;
                if (d.dynamicBullets && (r = A(u[0], e.isHorizontal() ? "width" : "height", !0), c.forEach(t => {
                        t.style[e.isHorizontal() ? "width" : "height"] = `${r*(d.dynamicMainBullets+4)}px`
                    }), d.dynamicMainBullets > 1 && void 0 !== i && ((l += t - (i || 0)) > d.dynamicMainBullets - 1 ? l = d.dynamicMainBullets - 1 : l < 0 && (l = 0)), p = ((n = (s = Math.max(t - l, 0)) + (Math.min(u.length, d.dynamicMainBullets) - 1)) + s) / 2), u.forEach(e => {
                        let t = [...["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${d.bulletActiveClass}${e}`)].map(e => "string" == typeof e && e.includes(" ") ? e.split(" ") : e).flat();
                        e.classList.remove(...t)
                    }), c.length > 1) u.forEach(i => {
                    let r = I(i);
                    r === t ? i.classList.add(...d.bulletActiveClass.split(" ")) : e.isElement && i.setAttribute("part", "bullet"), d.dynamicBullets && (r >= s && r <= n && i.classList.add(...`${d.bulletActiveClass}-main`.split(" ")), r === s && o(i, "prev"), r === n && o(i, "next"))
                });
                else {
                    let i = u[t];
                    if (i && i.classList.add(...d.bulletActiveClass.split(" ")), e.isElement && u.forEach((e, i) => {
                            e.setAttribute("part", i === t ? "bullet-active" : "bullet")
                        }), d.dynamicBullets) {
                        let e = u[s],
                            t = u[n];
                        for (let e = s; e <= n; e += 1) u[e] && u[e].classList.add(...`${d.bulletActiveClass}-main`.split(" "));
                        o(e, "prev"), o(t, "next")
                    }
                }
                if (d.dynamicBullets) {
                    let t = Math.min(u.length, d.dynamicMainBullets + 4),
                        i = (r * t - r) / 2 - p * r,
                        s = a ? "right" : "left";
                    u.forEach(t => {
                        t.style[e.isHorizontal() ? s : "top"] = `${i}px`
                    })
                }
            }
            c.forEach((i, r) => {
                if ("fraction" === d.type && (i.querySelectorAll(G(d.currentClass)).forEach(e => {
                        e.textContent = d.formatFractionCurrent(t + 1)
                    }), i.querySelectorAll(G(d.totalClass)).forEach(e => {
                        e.textContent = d.formatFractionTotal(u)
                    })), "progressbar" === d.type) {
                    let s;
                    s = d.progressbarOpposite ? e.isHorizontal() ? "vertical" : "horizontal" : e.isHorizontal() ? "horizontal" : "vertical";
                    let r = (t + 1) / u,
                        a = 1,
                        l = 1;
                    "horizontal" === s ? a = r : l = r, i.querySelectorAll(G(d.progressbarFillClass)).forEach(t => {
                        t.style.transform = `translate3d(0,0,0) scaleX(${a}) scaleY(${l})`, t.style.transitionDuration = `${e.params.speed}ms`
                    })
                }
                "custom" === d.type && d.renderCustom ? (N(i, d.renderCustom(e, t + 1, u)), 0 === r && s("paginationRender", i)) : (0 === r && s("paginationRender", i), s("paginationUpdate", i)), e.params.watchOverflow && e.enabled && i.classList[e.isLocked ? "add" : "remove"](d.lockClass)
            })
        }

        function p() {
            let t = e.params.pagination;
            if (n()) return;
            let i = e.virtual && e.params.virtual.enabled ? e.virtual.slides.length : e.grid && e.params.grid.rows > 1 ? e.slides.length / Math.ceil(e.params.grid.rows) : e.slides.length,
                r = e.pagination.el;
            r = z(r);
            let a = "";
            if ("bullets" === t.type) {
                let s = e.params.loop ? Math.ceil(i / e.params.slidesPerGroup) : e.snapGrid.length;
                e.params.freeMode && e.params.freeMode.enabled && s > i && (s = i);
                for (let i = 0; i < s; i += 1) t.renderBullet ? a += t.renderBullet.call(e, i, t.bulletClass) : a += `<${t.bulletElement} ${e.isElement?'part="bullet"':""} class="${t.bulletClass}"></${t.bulletElement}>`
            }
            "fraction" === t.type && (a = t.renderFraction ? t.renderFraction.call(e, t.currentClass, t.totalClass) : `<span class="${t.currentClass}"></span> / <span class="${t.totalClass}"></span>`), "progressbar" === t.type && (a = t.renderProgressbar ? t.renderProgressbar.call(e, t.progressbarFillClass) : `<span class="${t.progressbarFillClass}"></span>`), e.pagination.bullets = [], r.forEach(i => {
                "custom" !== t.type && N(i, a || ""), "bullets" === t.type && e.pagination.bullets.push(...i.querySelectorAll(G(t.bulletClass)))
            }), "custom" !== t.type && s("paginationRender", r[0])
        }

        function u() {
            let t;
            e.params.pagination = $(e, e.originalParams.pagination, e.params.pagination, {
                el: "swiper-pagination"
            });
            let i = e.params.pagination;
            !i.el || ("string" == typeof i.el && e.isElement && (t = e.el.querySelector(i.el)), t || "string" != typeof i.el || (t = [...document.querySelectorAll(i.el)]), t || (t = i.el), t && 0 !== t.length && (e.params.uniqueNavElements && "string" == typeof i.el && Array.isArray(t) && t.length > 1 && (t = [...e.el.querySelectorAll(i.el)]).length > 1 && (t = t.find(t => _(t, ".swiper")[0] === e.el)), Array.isArray(t) && 1 === t.length && (t = t[0]), Object.assign(e.pagination, {
                el: t
            }), (t = z(t)).forEach(t => {
                "bullets" === i.type && i.clickable && t.classList.add(...(i.clickableClass || "").split(" ")), t.classList.add(i.modifierClass + i.type), t.classList.add(e.isHorizontal() ? i.horizontalClass : i.verticalClass), "bullets" === i.type && i.dynamicBullets && (t.classList.add(`${i.modifierClass}${i.type}-dynamic`), l = 0, i.dynamicMainBullets < 1 && (i.dynamicMainBullets = 1)), "progressbar" === i.type && i.progressbarOpposite && t.classList.add(i.progressbarOppositeClass), i.clickable && t.addEventListener("click", d), e.enabled || t.classList.add(i.lockClass)
            })))
        }

        function h() {
            let t = e.params.pagination;
            if (n()) return;
            let i = e.pagination.el;
            i && (i = z(i)).forEach(i => {
                i.classList.remove(t.hiddenClass), i.classList.remove(t.modifierClass + t.type), i.classList.remove(e.isHorizontal() ? t.horizontalClass : t.verticalClass), t.clickable && (i.classList.remove(...(t.clickableClass || "").split(" ")), i.removeEventListener("click", d))
            }), e.pagination.bullets && e.pagination.bullets.forEach(e => e.classList.remove(...t.bulletActiveClass.split(" ")))
        }
        i("changeDirection", () => {
            if (!e.pagination || !e.pagination.el) return;
            let t = e.params.pagination,
                {
                    el: i
                } = e.pagination;
            (i = z(i)).forEach(i => {
                i.classList.remove(t.horizontalClass, t.verticalClass), i.classList.add(e.isHorizontal() ? t.horizontalClass : t.verticalClass)
            })
        }), i("init", () => {
            !1 === e.params.pagination.enabled ? m() : (u(), p(), c())
        }), i("activeIndexChange", () => {
            void 0 === e.snapIndex && c()
        }), i("snapIndexChange", () => {
            c()
        }), i("snapGridLengthChange", () => {
            p(), c()
        }), i("destroy", () => {
            h()
        }), i("enable disable", () => {
            let {
                el: t
            } = e.pagination;
            t && (t = z(t)).forEach(t => t.classList[e.enabled ? "remove" : "add"](e.params.pagination.lockClass))
        }), i("lock unlock", () => {
            c()
        }), i("click", (t, i) => {
            let r = i.target,
                a = z(e.pagination.el);
            if (e.params.pagination.el && e.params.pagination.hideOnClick && a && a.length > 0 && !r.classList.contains(e.params.pagination.bulletClass)) {
                if (e.navigation && (e.navigation.nextEl && r === e.navigation.nextEl || e.navigation.prevEl && r === e.navigation.prevEl)) return;
                !0 === a[0].classList.contains(e.params.pagination.hiddenClass) ? s("paginationShow") : s("paginationHide"), a.forEach(t => t.classList.toggle(e.params.pagination.hiddenClass))
            }
        });
        let m = () => {
            e.el.classList.add(e.params.pagination.paginationDisabledClass);
            let {
                el: t
            } = e.pagination;
            t && (t = z(t)).forEach(t => t.classList.add(e.params.pagination.paginationDisabledClass)), h()
        };
        Object.assign(e.pagination, {
            enable: () => {
                e.el.classList.remove(e.params.pagination.paginationDisabledClass);
                let {
                    el: t
                } = e.pagination;
                t && (t = z(t)).forEach(t => t.classList.remove(e.params.pagination.paginationDisabledClass)), u(), p(), c()
            },
            disable: m,
            render: p,
            update: c,
            init: u,
            destroy: h
        })
    }

    function F() {
        let e, i;
        return t || (e = w(), t = {
            smoothScroll: (i = g()).documentElement && i.documentElement.style && "scrollBehavior" in i.documentElement.style,
            touch: !!("ontouchstart" in e || e.DocumentTouch && i instanceof e.DocumentTouch)
        }), t
    }

    function H(e = {}) {
        return i || (i = function({
            userAgent: e
        } = {}) {
            let t = F(),
                i = w(),
                s = i.navigator.platform,
                r = e || i.navigator.userAgent,
                a = {
                    ios: !1,
                    android: !1
                },
                l = i.screen.width,
                n = i.screen.height,
                o = r.match(/(Android);?[\s\/]+([\d.]+)?/),
                d = r.match(/(iPad)(?!\1).*OS\s([\d_]+)/),
                c = r.match(/(iPod)(.*OS\s([\d_]+))?/),
                p = !d && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/),
                u = "MacIntel" === s;
            return !d && u && t.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${n}`) >= 0 && ((d = r.match(/(Version)\/([\d.]+)/)) || (d = [0, 1, "13_0_0"]), u = !1), o && "Win32" !== s && (a.os = "android", a.android = !0), (d || p || c) && (a.os = "ios", a.ios = !0), a
        }(e)), i
    }

    function R() {
        return s || (s = function() {
            let e = w(),
                t = H(),
                i = !1;

            function s() {
                let t = e.navigator.userAgent.toLowerCase();
                return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
            }
            if (s()) {
                let t = String(e.navigator.userAgent);
                if (t.includes("Version/")) {
                    let [e, s] = t.split("Version/")[1].split(" ")[0].split(".").map(e => Number(e));
                    i = e < 16 || 16 === e && s < 2
                }
            }
            let r = /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),
                a = s(),
                l = a || r && t.ios;
            return {
                isSafari: i || a,
                needPerspectiveFix: i,
                need3dFix: l,
                isWebView: r
            }
        }()), s
    }
    let q = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        },
        W = (e, t, i) => {
            t && !e.classList.contains(i) ? e.classList.add(i) : !t && e.classList.contains(i) && e.classList.remove(i)
        },
        X = (e, t) => {
            if (!e || e.destroyed || !e.params) return;
            let i = t.closest(e.isElement ? "swiper-slide" : `.${e.params.slideClass}`);
            if (i) {
                let t = i.querySelector(`.${e.params.lazyPreloaderClass}`);
                !t && e.isElement && (i.shadowRoot ? t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`) : requestAnimationFrame(() => {
                    i.shadowRoot && (t = i.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`)) && !t.lazyPreloaderManaged && t.remove()
                })), t && !t.lazyPreloaderManaged && t.remove()
            }
        },
        Y = (e, t) => {
            if (!e.slides[t]) return;
            let i = e.slides[t].querySelector('[loading="lazy"]');
            i && i.removeAttribute("loading")
        },
        U = e => {
            if (!e || e.destroyed || !e.params) return;
            let t = e.params.lazyPreloadPrevNext,
                i = e.slides.length;
            if (!i || !t || t < 0) return;
            t = Math.min(t, i);
            let s = "auto" === e.params.slidesPerView ? e.slidesPerViewDynamic() : Math.ceil(e.params.slidesPerView),
                r = e.activeIndex;
            if (e.params.grid && e.params.grid.rows > 1) {
                let i = [r - t];
                i.push(...Array.from({
                    length: t
                }).map((e, t) => r + s + t)), e.slides.forEach((t, s) => {
                    i.includes(t.column) && Y(e, s)
                });
                return
            }
            let a = r + s - 1;
            if (e.params.rewind || e.params.loop)
                for (let s = r - t; s <= a + t; s += 1) {
                    let t = (s % i + i) % i;
                    (t < r || t > a) && Y(e, t)
                } else
                    for (let s = Math.max(r - t, 0); s <= Math.min(a + t, i - 1); s += 1) s !== r && (s > a || s < r) && Y(e, s)
        };

    function K({
        swiper: e,
        runCallbacks: t,
        direction: i,
        step: s
    }) {
        let {
            activeIndex: r,
            previousIndex: a
        } = e, l = i;
        l || (l = r > a ? "next" : r < a ? "prev" : "reset"), e.emit(`transition${s}`), t && "reset" === l ? e.emit(`slideResetTransition${s}`) : t && r !== a && (e.emit(`slideChangeTransition${s}`), "next" === l ? e.emit(`slideNextTransition${s}`) : e.emit(`slidePrevTransition${s}`))
    }

    function Z(e, t, i) {
        let s = w(),
            {
                params: r
            } = e,
            a = r.edgeSwipeDetection,
            l = r.edgeSwipeThreshold;
        return !a || !(i <= l) && !(i >= s.innerWidth - l) || "prevent" === a && (t.preventDefault(), !0)
    }

    function J(e) {
        var t, i;
        let s, r;
        if (this.destroyed) return;
        let a = g(),
            l = e;
        l.originalEvent && (l = l.originalEvent);
        let n = this.touchEventsData;
        if ("pointerdown" === l.type) {
            if (null !== n.pointerId && n.pointerId !== l.pointerId) return;
            n.pointerId = l.pointerId
        } else "touchstart" === l.type && 1 === l.targetTouches.length && (n.touchId = l.targetTouches[0].identifier);
        if ("touchstart" === l.type) return void Z(this, l, l.targetTouches[0].pageX);
        let {
            params: o,
            touches: d,
            enabled: c
        } = this;
        if (!c || !o.simulateTouch && "mouse" === l.pointerType || this.animating && o.preventInteractionOnTransition) return;
        !this.animating && o.cssMode && o.loop && this.loopFix();
        let p = l.target;
        if ("wrapper" === o.touchEventsTarget && (t = p, i = this.wrapperEl, s = w(), !(r = i.contains(t)) && s.HTMLSlotElement && i instanceof HTMLSlotElement && ((r = [...i.assignedElements()].includes(t)) || (r = function(e, t) {
                let i = [t];
                for (; i.length > 0;) {
                    let t = i.shift();
                    if (e === t) return !0;
                    i.push(...t.children, ...t.shadowRoot ? t.shadowRoot.children : [], ...t.assignedElements ? t.assignedElements() : [])
                }
            }(t, i))), !r) || "which" in l && 3 === l.which || "button" in l && l.button > 0 || n.isTouched && n.isMoved) return;
        let u = !!o.noSwipingClass && "" !== o.noSwipingClass,
            h = l.composedPath ? l.composedPath() : l.path;
        u && l.target && l.target.shadowRoot && h && (p = h[0]);
        let m = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
            f = !!(l.target && l.target.shadowRoot);
        if (o.noSwiping && (f ? function(e, t = this) {
                return function t(i) {
                    if (!i || i === g() || i === w()) return null;
                    i.assignedSlot && (i = i.assignedSlot);
                    let s = i.closest(e);
                    return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                }(t)
            }(m, p) : p.closest(m))) {
            this.allowClick = !0;
            return
        }
        if (o.swipeHandler && !p.closest(o.swipeHandler)) return;
        d.currentX = l.pageX, d.currentY = l.pageY;
        let v = d.currentX,
            b = d.currentY;
        if (!Z(this, l, v)) return;
        Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), d.startX = v, d.startY = b, n.touchStartTime = x(), this.allowClick = !0, this.updateSize(), this.swipeDirection = void 0, o.threshold > 0 && (n.allowThresholdMove = !1);
        let y = !0;
        p.matches(n.focusableElements) && (y = !1, "SELECT" === p.nodeName && (n.isTouched = !1)), a.activeElement && a.activeElement.matches(n.focusableElements) && a.activeElement !== p && ("mouse" === l.pointerType || "mouse" !== l.pointerType && !p.matches(n.focusableElements)) && a.activeElement.blur();
        let S = y && this.allowTouchMove && o.touchStartPreventDefault;
        (o.touchStartForcePreventDefault || S) && !p.isContentEditable && l.preventDefault(), o.freeMode && o.freeMode.enabled && this.freeMode && this.animating && !o.cssMode && this.freeMode.onTouchStart(), this.emit("touchStart", l)
    }

    function Q(e) {
        let t, i, s = g();
        if (this.destroyed) return;
        let r = this.touchEventsData,
            {
                params: a,
                touches: l,
                rtlTranslate: n,
                enabled: o
            } = this;
        if (!o || !a.simulateTouch && "mouse" === e.pointerType) return;
        let d = e;
        if (d.originalEvent && (d = d.originalEvent), "pointermove" === d.type && (null !== r.touchId || d.pointerId !== r.pointerId)) return;
        if ("touchmove" === d.type) {
            if (!(t = [...d.changedTouches].find(e => e.identifier === r.touchId)) || t.identifier !== r.touchId) return
        } else t = d;
        if (!r.isTouched) {
            r.startMoving && r.isScrolling && this.emit("touchMoveOpposite", d);
            return
        }
        let c = t.pageX,
            p = t.pageY;
        if (d.preventedByNestedSwiper) {
            l.startX = c, l.startY = p;
            return
        }
        if (!this.allowTouchMove) {
            d.target.matches(r.focusableElements) || (this.allowClick = !1), r.isTouched && (Object.assign(l, {
                startX: c,
                startY: p,
                currentX: c,
                currentY: p
            }), r.touchStartTime = x());
            return
        }
        if (a.touchReleaseOnEdges && !a.loop) {
            if (this.isVertical()) {
                if (p < l.startY && this.translate <= this.maxTranslate() || p > l.startY && this.translate >= this.minTranslate()) {
                    r.isTouched = !1, r.isMoved = !1;
                    return
                }
            } else if (n && (c > l.startX && -this.translate <= this.maxTranslate() || c < l.startX && -this.translate >= this.minTranslate())) return;
            else if (!n && (c < l.startX && this.translate <= this.maxTranslate() || c > l.startX && this.translate >= this.minTranslate())) return
        }
        if (s.activeElement && s.activeElement.matches(r.focusableElements) && s.activeElement !== d.target && "mouse" !== d.pointerType && s.activeElement.blur(), s.activeElement && d.target === s.activeElement && d.target.matches(r.focusableElements)) {
            r.isMoved = !0, this.allowClick = !1;
            return
        }
        r.allowTouchCallbacks && this.emit("touchMove", d), l.previousX = l.currentX, l.previousY = l.currentY, l.currentX = c, l.currentY = p;
        let u = l.currentX - l.startX,
            h = l.currentY - l.startY;
        if (this.params.threshold && Math.sqrt(u ** 2 + h ** 2) < this.params.threshold) return;
        if (void 0 === r.isScrolling) {
            let e;
            this.isHorizontal() && l.currentY === l.startY || this.isVertical() && l.currentX === l.startX ? r.isScrolling = !1 : u * u + h * h >= 25 && (e = 180 * Math.atan2(Math.abs(h), Math.abs(u)) / Math.PI, r.isScrolling = this.isHorizontal() ? e > a.touchAngle : 90 - e > a.touchAngle)
        }
        if (r.isScrolling && this.emit("touchMoveOpposite", d), void 0 === r.startMoving && (l.currentX !== l.startX || l.currentY !== l.startY) && (r.startMoving = !0), r.isScrolling || "touchmove" === d.type && r.preventTouchMoveFromPointerMove) {
            r.isTouched = !1;
            return
        }
        if (!r.startMoving) return;
        this.allowClick = !1, !a.cssMode && d.cancelable && d.preventDefault(), a.touchMoveStopPropagation && !a.nested && d.stopPropagation();
        let m = this.isHorizontal() ? u : h,
            f = this.isHorizontal() ? l.currentX - l.previousX : l.currentY - l.previousY;
        a.oneWayMovement && (m = Math.abs(m) * (n ? 1 : -1), f = Math.abs(f) * (n ? 1 : -1)), l.diff = m, m *= a.touchRatio, n && (m = -m, f = -f);
        let v = this.touchesDirection;
        this.swipeDirection = m > 0 ? "prev" : "next", this.touchesDirection = f > 0 ? "prev" : "next";
        let w = this.params.loop && !a.cssMode,
            b = "next" === this.touchesDirection && this.allowSlideNext || "prev" === this.touchesDirection && this.allowSlidePrev;
        if (!r.isMoved) {
            if (w && b && this.loopFix({
                    direction: this.swipeDirection
                }), r.startTranslate = this.getTranslate(), this.setTransition(0), this.animating) {
                let e = new window.CustomEvent("transitionend", {
                    bubbles: !0,
                    cancelable: !0,
                    detail: {
                        bySwiperTouchMove: !0
                    }
                });
                this.wrapperEl.dispatchEvent(e)
            }
            r.allowMomentumBounce = !1, a.grabCursor && (!0 === this.allowSlideNext || !0 === this.allowSlidePrev) && this.setGrabCursor(!0), this.emit("sliderFirstMove", d)
        }
        if (new Date().getTime(), !1 !== a._loopSwapReset && r.isMoved && r.allowThresholdMove && v !== this.touchesDirection && w && b && Math.abs(m) >= 1) {
            Object.assign(l, {
                startX: c,
                startY: p,
                currentX: c,
                currentY: p,
                startTranslate: r.currentTranslate
            }), r.loopSwapReset = !0, r.startTranslate = r.currentTranslate;
            return
        }
        this.emit("sliderMove", d), r.isMoved = !0, r.currentTranslate = m + r.startTranslate;
        let y = !0,
            S = a.resistanceRatio;
        if (a.touchReleaseOnEdges && (S = 0), m > 0 ? (w && b && !i && r.allowThresholdMove && r.currentTranslate > (a.centeredSlides ? this.minTranslate() - this.slidesSizesGrid[this.activeIndex + 1] - ("auto" !== a.slidesPerView && this.slides.length - a.slidesPerView >= 2 ? this.slidesSizesGrid[this.activeIndex + 1] + this.params.spaceBetween : 0) - this.params.spaceBetween : this.minTranslate()) && this.loopFix({
                direction: "prev",
                setTranslate: !0,
                activeSlideIndex: 0
            }), r.currentTranslate > this.minTranslate() && (y = !1, a.resistance && (r.currentTranslate = this.minTranslate() - 1 + (-this.minTranslate() + r.startTranslate + m) ** S))) : m < 0 && (w && b && !i && r.allowThresholdMove && r.currentTranslate < (a.centeredSlides ? this.maxTranslate() + this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween + ("auto" !== a.slidesPerView && this.slides.length - a.slidesPerView >= 2 ? this.slidesSizesGrid[this.slidesSizesGrid.length - 1] + this.params.spaceBetween : 0) : this.maxTranslate()) && this.loopFix({
                direction: "next",
                setTranslate: !0,
                activeSlideIndex: this.slides.length - ("auto" === a.slidesPerView ? this.slidesPerViewDynamic() : Math.ceil(parseFloat(a.slidesPerView, 10)))
            }), r.currentTranslate < this.maxTranslate() && (y = !1, a.resistance && (r.currentTranslate = this.maxTranslate() + 1 - (this.maxTranslate() - r.startTranslate - m) ** S))), y && (d.preventedByNestedSwiper = !0), !this.allowSlideNext && "next" === this.swipeDirection && r.currentTranslate < r.startTranslate && (r.currentTranslate = r.startTranslate), !this.allowSlidePrev && "prev" === this.swipeDirection && r.currentTranslate > r.startTranslate && (r.currentTranslate = r.startTranslate), this.allowSlidePrev || this.allowSlideNext || (r.currentTranslate = r.startTranslate), a.threshold > 0)
            if (Math.abs(m) > a.threshold || r.allowThresholdMove) {
                if (!r.allowThresholdMove) {
                    r.allowThresholdMove = !0, l.startX = l.currentX, l.startY = l.currentY, r.currentTranslate = r.startTranslate, l.diff = this.isHorizontal() ? l.currentX - l.startX : l.currentY - l.startY;
                    return
                }
            } else {
                r.currentTranslate = r.startTranslate;
                return
            }
        a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && this.freeMode || a.watchSlidesProgress) && (this.updateActiveIndex(), this.updateSlidesClasses()), a.freeMode && a.freeMode.enabled && this.freeMode && this.freeMode.onTouchMove(), this.updateProgress(r.currentTranslate), this.setTranslate(r.currentTranslate))
    }

    function ee(e) {
        let t, i, s = this;
        if (s.destroyed) return;
        let r = s.touchEventsData,
            a = e;
        if (a.originalEvent && (a = a.originalEvent), "touchend" === a.type || "touchcancel" === a.type) {
            if (!(t = [...a.changedTouches].find(e => e.identifier === r.touchId)) || t.identifier !== r.touchId) return
        } else {
            if (null !== r.touchId || a.pointerId !== r.pointerId) return;
            t = a
        }
        if (["pointercancel", "pointerout", "pointerleave", "contextmenu"].includes(a.type) && !(["pointercancel", "contextmenu"].includes(a.type) && (s.browser.isSafari || s.browser.isWebView))) return;
        r.pointerId = null, r.touchId = null;
        let {
            params: l,
            touches: n,
            rtlTranslate: o,
            slidesGrid: d,
            enabled: c
        } = s;
        if (!c || !l.simulateTouch && "mouse" === a.pointerType) return;
        if (r.allowTouchCallbacks && s.emit("touchEnd", a), r.allowTouchCallbacks = !1, !r.isTouched) {
            r.isMoved && l.grabCursor && s.setGrabCursor(!1), r.isMoved = !1, r.startMoving = !1;
            return
        }
        l.grabCursor && r.isMoved && r.isTouched && (!0 === s.allowSlideNext || !0 === s.allowSlidePrev) && s.setGrabCursor(!1);
        let p = x(),
            u = p - r.touchStartTime;
        if (s.allowClick) {
            let e = a.path || a.composedPath && a.composedPath();
            s.updateClickedSlide(e && e[0] || a.target, e), s.emit("tap click", a), u < 300 && p - r.lastClickTime < 300 && s.emit("doubleTap doubleClick", a)
        }
        if (r.lastClickTime = x(), y(() => {
                s.destroyed || (s.allowClick = !0)
            }), !r.isTouched || !r.isMoved || !s.swipeDirection || 0 === n.diff && !r.loopSwapReset || r.currentTranslate === r.startTranslate && !r.loopSwapReset) {
            r.isTouched = !1, r.isMoved = !1, r.startMoving = !1;
            return
        }
        if (r.isTouched = !1, r.isMoved = !1, r.startMoving = !1, i = l.followFinger ? o ? s.translate : -s.translate : -r.currentTranslate, l.cssMode) return;
        if (l.freeMode && l.freeMode.enabled) return void s.freeMode.onTouchEnd({
            currentPos: i
        });
        let h = i >= -s.maxTranslate() && !s.params.loop,
            m = 0,
            f = s.slidesSizesGrid[0];
        for (let e = 0; e < d.length; e += e < l.slidesPerGroupSkip ? 1 : l.slidesPerGroup) {
            let t = e < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
            void 0 !== d[e + t] ? (h || i >= d[e] && i < d[e + t]) && (m = e, f = d[e + t] - d[e]) : (h || i >= d[e]) && (m = e, f = d[d.length - 1] - d[d.length - 2])
        }
        let g = null,
            v = null;
        l.rewind && (s.isBeginning ? v = l.virtual && l.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1 : s.isEnd && (g = 0));
        let w = (i - d[m]) / f,
            b = m < l.slidesPerGroupSkip - 1 ? 1 : l.slidesPerGroup;
        if (u > l.longSwipesMs) {
            if (!l.longSwipes) return void s.slideTo(s.activeIndex);
            "next" === s.swipeDirection && (w >= l.longSwipesRatio ? s.slideTo(l.rewind && s.isEnd ? g : m + b) : s.slideTo(m)), "prev" === s.swipeDirection && (w > 1 - l.longSwipesRatio ? s.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > l.longSwipesRatio ? s.slideTo(v) : s.slideTo(m))
        } else {
            if (!l.shortSwipes) return void s.slideTo(s.activeIndex);
            s.navigation && (a.target === s.navigation.nextEl || a.target === s.navigation.prevEl) ? a.target === s.navigation.nextEl ? s.slideTo(m + b) : s.slideTo(m) : ("next" === s.swipeDirection && s.slideTo(null !== g ? g : m + b), "prev" === s.swipeDirection && s.slideTo(null !== v ? v : m))
        }
    }

    function et() {
        let e = this,
            {
                params: t,
                el: i
            } = e;
        if (i && 0 === i.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        let {
            allowSlideNext: s,
            allowSlidePrev: r,
            snapGrid: a
        } = e, l = e.virtual && e.params.virtual.enabled;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses();
        let n = l && t.loop;
        if ("auto" !== t.slidesPerView && !(t.slidesPerView > 1) || !e.isEnd || e.isBeginning || e.params.centeredSlides || n) e.params.loop && !l ? e.slideToLoop(e.realIndex, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0);
        else {
            let t = l ? e.virtual.slides : e.slides;
            e.slideTo(t.length - 1, 0, !1, !0)
        }
        e.autoplay && e.autoplay.running && e.autoplay.paused && (clearTimeout(e.autoplay.resizeTimeout), e.autoplay.resizeTimeout = setTimeout(() => {
            e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.resume()
        }, 500)), e.allowSlidePrev = r, e.allowSlideNext = s, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
    }

    function ei(e) {
        this.destroyed || this.enabled && !this.allowClick && (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation()))
    }

    function es() {
        if (this.destroyed) return;
        let {
            wrapperEl: e,
            rtlTranslate: t,
            enabled: i
        } = this;
        if (!i) return;
        this.previousTranslate = this.translate, this.isHorizontal() ? this.translate = -e.scrollLeft : this.translate = -e.scrollTop, 0 === this.translate && (this.translate = 0), this.updateActiveIndex(), this.updateSlidesClasses();
        let s = this.maxTranslate() - this.minTranslate();
        (0 === s ? 0 : (this.translate - this.minTranslate()) / s) !== this.progress && this.updateProgress(t ? -this.translate : this.translate), this.emit("setTranslate", this.translate, !1)
    }

    function er(e) {
        this.destroyed || (X(this, e.target), !this.params.cssMode && ("auto" === this.params.slidesPerView || this.params.autoHeight) && this.update())
    }

    function ea() {
        this.destroyed || !this.documentTouchHandlerProceeded && (this.documentTouchHandlerProceeded = !0, this.params.touchReleaseOnEdges && (this.el.style.touchAction = "auto"))
    }
    let el = (e, t) => {
            let i = g(),
                {
                    params: s,
                    el: r,
                    wrapperEl: a,
                    device: l
                } = e,
                n = !!s.nested,
                o = "on" === t ? "addEventListener" : "removeEventListener";
            r && "string" != typeof r && (i[o]("touchstart", e.onDocumentTouchStart, {
                passive: !1,
                capture: n
            }), r[o]("touchstart", e.onTouchStart, {
                passive: !1
            }), r[o]("pointerdown", e.onTouchStart, {
                passive: !1
            }), i[o]("touchmove", e.onTouchMove, {
                passive: !1,
                capture: n
            }), i[o]("pointermove", e.onTouchMove, {
                passive: !1,
                capture: n
            }), i[o]("touchend", e.onTouchEnd, {
                passive: !0
            }), i[o]("pointerup", e.onTouchEnd, {
                passive: !0
            }), i[o]("pointercancel", e.onTouchEnd, {
                passive: !0
            }), i[o]("touchcancel", e.onTouchEnd, {
                passive: !0
            }), i[o]("pointerout", e.onTouchEnd, {
                passive: !0
            }), i[o]("pointerleave", e.onTouchEnd, {
                passive: !0
            }), i[o]("contextmenu", e.onTouchEnd, {
                passive: !0
            }), (s.preventClicks || s.preventClicksPropagation) && r[o]("click", e.onClick, !0), s.cssMode && a[o]("scroll", e.onScroll), s.updateOnWindowResize ? e[t](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", et, !0) : e[t]("observerUpdate", et, !0), r[o]("load", e.onLoad, {
                capture: !0
            }))
        },
        en = (e, t) => e.grid && t.grid && t.grid.rows > 1;
    var eo = {
        init: !0,
        direction: "horizontal",
        oneWayMovement: !1,
        swiperElementNodeName: "SWIPER-CONTAINER",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        eventsPrefix: "swiper",
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        snapToSlideEdge: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: .5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 5,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: .85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        loop: !1,
        loopAddBlankSlides: !0,
        loopAdditionalSlides: 0,
        loopPreventsSliding: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-blank",
        slideActiveClass: "swiper-slide-active",
        slideVisibleClass: "swiper-slide-visible",
        slideFullyVisibleClass: "swiper-slide-fully-visible",
        slideNextClass: "swiper-slide-next",
        slidePrevClass: "swiper-slide-prev",
        wrapperClass: "swiper-wrapper",
        lazyPreloaderClass: "swiper-lazy-preloader",
        lazyPreloadPrevNext: 0,
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    let ed = {
            eventsEmitter: {
                on(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;
                    let r = i ? "unshift" : "push";
                    return e.split(" ").forEach(e => {
                        s.eventsListeners[e] || (s.eventsListeners[e] = []), s.eventsListeners[e][r](t)
                    }), s
                },
                once(e, t, i) {
                    let s = this;
                    if (!s.eventsListeners || s.destroyed || "function" != typeof t) return s;

                    function r(...i) {
                        s.off(e, r), r.__emitterProxy && delete r.__emitterProxy, t.apply(s, i)
                    }
                    return r.__emitterProxy = t, s.on(e, r, i)
                },
                onAny(e, t) {
                    return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                },
                offAny(e) {
                    if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                    let t = this.eventsAnyListeners.indexOf(e);
                    return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                },
                off(e, t) {
                    let i = this;
                    return i.eventsListeners && !i.destroyed && i.eventsListeners && e.split(" ").forEach(e => {
                        void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((s, r) => {
                            (s === t || s.__emitterProxy && s.__emitterProxy === t) && i.eventsListeners[e].splice(r, 1)
                        })
                    }), i
                },
                emit(...e) {
                    let t, i, s, r = this;
                    return r.eventsListeners && !r.destroyed && r.eventsListeners && ("string" == typeof e[0] || Array.isArray(e[0]) ? (t = e[0], i = e.slice(1, e.length), s = r) : (t = e[0].events, i = e[0].data, s = e[0].context || r), i.unshift(s), (Array.isArray(t) ? t : t.split(" ")).forEach(e => {
                        r.eventsAnyListeners && r.eventsAnyListeners.length && r.eventsAnyListeners.forEach(t => {
                            t.apply(s, [e, ...i])
                        }), r.eventsListeners && r.eventsListeners[e] && r.eventsListeners[e].forEach(e => {
                            e.apply(s, i)
                        })
                    })), r
                }
            },
            update: {
                updateSize: function() {
                    let e, t, i = this.el;
                    e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i.clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i.clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(O(i, "padding-left") || 0, 10) - parseInt(O(i, "padding-right") || 0, 10), t = t - parseInt(O(i, "padding-top") || 0, 10) - parseInt(O(i, "padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                        width: e,
                        height: t,
                        size: this.isHorizontal() ? e : t
                    }))
                },
                updateSlides: function() {
                    let e, t = this;

                    function i(e, i) {
                        return parseFloat(e.getPropertyValue(t.getDirectionLabel(i)) || 0)
                    }
                    let s = t.params,
                        {
                            wrapperEl: r,
                            slidesEl: a,
                            rtlTranslate: l,
                            wrongRTL: n
                        } = t,
                        o = t.virtual && s.virtual.enabled,
                        d = o ? t.virtual.slides.length : t.slides.length,
                        c = P(a, `.${t.params.slideClass}, swiper-slide`),
                        p = o ? t.virtual.slides.length : c.length,
                        u = [],
                        h = [],
                        m = [],
                        f = s.slidesOffsetBefore;
                    "function" == typeof f && (f = s.slidesOffsetBefore.call(t));
                    let g = s.slidesOffsetAfter;
                    "function" == typeof g && (g = s.slidesOffsetAfter.call(t));
                    let v = t.snapGrid.length,
                        w = t.slidesGrid.length,
                        b = t.size - f - g,
                        y = s.spaceBetween,
                        x = -f,
                        S = 0,
                        E = 0;
                    if (void 0 === b) return;
                    "string" == typeof y && y.indexOf("%") >= 0 ? y = parseFloat(y.replace("%", "")) / 100 * b : "string" == typeof y && (y = parseFloat(y)), t.virtualSize = -y - f - g, c.forEach(e => {
                        l ? e.style.marginLeft = "" : e.style.marginRight = "", e.style.marginBottom = "", e.style.marginTop = ""
                    }), s.centeredSlides && s.cssMode && (T(r, "--swiper-centered-offset-before", ""), T(r, "--swiper-centered-offset-after", "")), s.cssMode && (T(r, "--swiper-slides-offset-before", `${f}px`), T(r, "--swiper-slides-offset-after", `${g}px`));
                    let C = s.grid && s.grid.rows > 1 && t.grid;
                    C ? t.grid.initSlides(c) : t.grid && t.grid.unsetSlides();
                    let M = "auto" === s.slidesPerView && s.breakpoints && Object.keys(s.breakpoints).filter(e => void 0 !== s.breakpoints[e].slidesPerView).length > 0;
                    for (let r = 0; r < p; r += 1) {
                        e = 0;
                        let a = c[r];
                        if (!a || (C && t.grid.updateSlide(r, a, c), "none" !== O(a, "display"))) {
                            if (o && "auto" === s.slidesPerView) s.virtual.slidesPerViewAutoSlideSize && (e = s.virtual.slidesPerViewAutoSlideSize), e && a && (s.roundLengths && (e = Math.floor(e)), a.style[t.getDirectionLabel("width")] = `${e}px`);
                            else if ("auto" === s.slidesPerView) {
                                M && (a.style[t.getDirectionLabel("width")] = "");
                                let r = getComputedStyle(a),
                                    l = a.style.transform,
                                    n = a.style.webkitTransform;
                                if (l && (a.style.transform = "none"), n && (a.style.webkitTransform = "none"), s.roundLengths) e = t.isHorizontal() ? A(a, "width", !0) : A(a, "height", !0);
                                else {
                                    let t = i(r, "width"),
                                        s = i(r, "padding-left"),
                                        l = i(r, "padding-right"),
                                        n = i(r, "margin-left"),
                                        o = i(r, "margin-right"),
                                        d = r.getPropertyValue("box-sizing");
                                    if (d && "border-box" === d) e = t + n + o;
                                    else {
                                        let {
                                            clientWidth: i,
                                            offsetWidth: r
                                        } = a;
                                        e = t + s + l + n + o + (r - i)
                                    }
                                }
                                l && (a.style.transform = l), n && (a.style.webkitTransform = n), s.roundLengths && (e = Math.floor(e))
                            } else e = (b - (s.slidesPerView - 1) * y) / s.slidesPerView, s.roundLengths && (e = Math.floor(e)), a && (a.style[t.getDirectionLabel("width")] = `${e}px`);
                            a && (a.swiperSlideSize = e), m.push(e), s.centeredSlides ? (x = x + e / 2 + S / 2 + y, 0 === S && 0 !== r && (x = x - b / 2 - y), 0 === r && (x = x - b / 2 - y), .001 > Math.abs(x) && (x = 0), s.roundLengths && (x = Math.floor(x)), E % s.slidesPerGroup == 0 && u.push(x), h.push(x)) : (s.roundLengths && (x = Math.floor(x)), (E - Math.min(t.params.slidesPerGroupSkip, E)) % t.params.slidesPerGroup == 0 && u.push(x), h.push(x), x = x + e + y), t.virtualSize += e + y, S = e, E += 1
                        }
                    }
                    if (t.virtualSize = Math.max(t.virtualSize, b) + g, l && n && ("slide" === s.effect || "coverflow" === s.effect) && (r.style.width = `${t.virtualSize+y}px`), s.setWrapperSize && (r.style[t.getDirectionLabel("width")] = `${t.virtualSize+y}px`), C && t.grid.updateWrapperSize(e, u), !s.centeredSlides) {
                        let e = "auto" !== s.slidesPerView && s.slidesPerView % 1 != 0,
                            i = s.snapToSlideEdge && !s.loop && ("auto" === s.slidesPerView || e),
                            r = u.length;
                        if (i) {
                            let e;
                            if ("auto" === s.slidesPerView) {
                                e = 1;
                                let t = 0;
                                for (let i = m.length - 1; i >= 0; i -= 1)
                                    if ((t += m[i] + (i < m.length - 1 ? y : 0)) <= b) e = m.length - i;
                                    else break
                            } else e = Math.floor(s.slidesPerView);
                            r = Math.max(p - e, 0)
                        }
                        let a = [];
                        for (let e = 0; e < u.length; e += 1) {
                            let l = u[e];
                            s.roundLengths && (l = Math.floor(l)), i ? e <= r && a.push(l) : u[e] <= t.virtualSize - b && a.push(l)
                        }
                        u = a, Math.floor(t.virtualSize - b) - Math.floor(u[u.length - 1]) > 1 && !i && u.push(t.virtualSize - b)
                    }
                    if (o && s.loop) {
                        let e = m[0] + y;
                        if (s.slidesPerGroup > 1) {
                            let i = Math.ceil((t.virtual.slidesBefore + t.virtual.slidesAfter) / s.slidesPerGroup),
                                r = e * s.slidesPerGroup;
                            for (let e = 0; e < i; e += 1) u.push(u[u.length - 1] + r)
                        }
                        for (let i = 0; i < t.virtual.slidesBefore + t.virtual.slidesAfter; i += 1) 1 === s.slidesPerGroup && u.push(u[u.length - 1] + e), h.push(h[h.length - 1] + e), t.virtualSize += e
                    }
                    if (0 === u.length && (u = [0]), 0 !== y) {
                        let e = t.isHorizontal() && l ? "marginLeft" : t.getDirectionLabel("marginRight");
                        c.filter((e, t) => !s.cssMode || !!s.loop || t !== c.length - 1).forEach(t => {
                            t.style[e] = `${y}px`
                        })
                    }
                    if (s.centeredSlides && s.centeredSlidesBounds) {
                        let e = 0;
                        m.forEach(t => {
                            e += t + (y || 0)
                        });
                        let t = (e -= y) > b ? e - b : 0;
                        u = u.map(e => e <= 0 ? -f : e > t ? t + g : e)
                    }
                    if (s.centerInsufficientSlides) {
                        let e = 0;
                        if (m.forEach(t => {
                                e += t + (y || 0)
                            }), (e -= y) < b) {
                            let t = (b - e) / 2;
                            u.forEach((e, i) => {
                                u[i] = e - t
                            }), h.forEach((e, i) => {
                                h[i] = e + t
                            })
                        }
                    }
                    if (Object.assign(t, {
                            slides: c,
                            snapGrid: u,
                            slidesGrid: h,
                            slidesSizesGrid: m
                        }), s.centeredSlides && s.cssMode && !s.centeredSlidesBounds) {
                        T(r, "--swiper-centered-offset-before", `${-u[0]}px`), T(r, "--swiper-centered-offset-after", `${t.size/2-m[m.length-1]/2}px`);
                        let e = -t.snapGrid[0],
                            i = -t.slidesGrid[0];
                        t.snapGrid = t.snapGrid.map(t => t + e), t.slidesGrid = t.slidesGrid.map(e => e + i)
                    }
                    if (p !== d && t.emit("slidesLengthChange"), u.length !== v && (t.params.watchOverflow && t.checkOverflow(), t.emit("snapGridLengthChange")), h.length !== w && t.emit("slidesGridLengthChange"), s.watchSlidesProgress && t.updateSlidesOffset(), t.emit("slidesUpdated"), !o && !s.cssMode && ("slide" === s.effect || "fade" === s.effect)) {
                        let e = `${s.containerModifierClass}backface-hidden`,
                            i = t.el.classList.contains(e);
                        p <= s.maxBackfaceHiddenSlides ? i || t.el.classList.add(e) : i && t.el.classList.remove(e)
                    }
                },
                updateAutoHeight: function(e) {
                    let t, i = this,
                        s = [],
                        r = i.virtual && i.params.virtual.enabled,
                        a = 0;
                    "number" == typeof e ? i.setTransition(e) : !0 === e && i.setTransition(i.params.speed);
                    let l = e => r ? i.slides[i.getSlideIndexByData(e)] : i.slides[e];
                    if ("auto" !== i.params.slidesPerView && i.params.slidesPerView > 1)
                        if (i.params.centeredSlides)(i.visibleSlides || []).forEach(e => {
                            s.push(e)
                        });
                        else
                            for (t = 0; t < Math.ceil(i.params.slidesPerView); t += 1) {
                                let e = i.activeIndex + t;
                                if (e > i.slides.length && !r) break;
                                s.push(l(e))
                            } else s.push(l(i.activeIndex));
                    for (t = 0; t < s.length; t += 1)
                        if (void 0 !== s[t]) {
                            let e = s[t].offsetHeight;
                            a = e > a ? e : a
                        }(a || 0 === a) && (i.wrapperEl.style.height = `${a}px`)
                },
                updateSlidesOffset: function() {
                    let e = this.slides,
                        t = this.isElement ? this.isHorizontal() ? this.wrapperEl.offsetLeft : this.wrapperEl.offsetTop : 0;
                    for (let i = 0; i < e.length; i += 1) e[i].swiperSlideOffset = (this.isHorizontal() ? e[i].offsetLeft : e[i].offsetTop) - t - this.cssOverflowAdjustment()
                },
                updateSlidesProgress: function(e = this && this.translate || 0) {
                    let t = this.params,
                        {
                            slides: i,
                            rtlTranslate: s,
                            snapGrid: r
                        } = this;
                    if (0 === i.length) return;
                    void 0 === i[0].swiperSlideOffset && this.updateSlidesOffset();
                    let a = -e;
                    s && (a = e), this.visibleSlidesIndexes = [], this.visibleSlides = [];
                    let l = t.spaceBetween;
                    "string" == typeof l && l.indexOf("%") >= 0 ? l = parseFloat(l.replace("%", "")) / 100 * this.size : "string" == typeof l && (l = parseFloat(l));
                    for (let e = 0; e < i.length; e += 1) {
                        let n = i[e],
                            o = n.swiperSlideOffset;
                        t.cssMode && t.centeredSlides && (o -= i[0].swiperSlideOffset);
                        let d = (a + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                            c = (a - r[0] + (t.centeredSlides ? this.minTranslate() : 0) - o) / (n.swiperSlideSize + l),
                            p = -(a - o),
                            u = p + this.slidesSizesGrid[e],
                            h = p >= 0 && p <= this.size - this.slidesSizesGrid[e],
                            m = p >= 0 && p < this.size - 1 || u > 1 && u <= this.size || p <= 0 && u >= this.size;
                        m && (this.visibleSlides.push(n), this.visibleSlidesIndexes.push(e)), q(n, m, t.slideVisibleClass), q(n, h, t.slideFullyVisibleClass), n.progress = s ? -d : d, n.originalProgress = s ? -c : c
                    }
                },
                updateProgress: function(e) {
                    if (void 0 === e) {
                        let t = this.rtlTranslate ? -1 : 1;
                        e = this && this.translate && this.translate * t || 0
                    }
                    let t = this.params,
                        i = this.maxTranslate() - this.minTranslate(),
                        {
                            progress: s,
                            isBeginning: r,
                            isEnd: a,
                            progressLoop: l
                        } = this,
                        n = r,
                        o = a;
                    if (0 === i) s = 0, r = !0, a = !0;
                    else {
                        s = (e - this.minTranslate()) / i;
                        let t = 1 > Math.abs(e - this.minTranslate()),
                            l = 1 > Math.abs(e - this.maxTranslate());
                        r = t || s <= 0, a = l || s >= 1, t && (s = 0), l && (s = 1)
                    }
                    if (t.loop) {
                        let t = this.getSlideIndexByData(0),
                            i = this.getSlideIndexByData(this.slides.length - 1),
                            s = this.slidesGrid[t],
                            r = this.slidesGrid[i],
                            a = this.slidesGrid[this.slidesGrid.length - 1],
                            n = Math.abs(e);
                        (l = n >= s ? (n - s) / a : (n + a - r) / a) > 1 && (l -= 1)
                    }
                    Object.assign(this, {
                        progress: s,
                        progressLoop: l,
                        isBeginning: r,
                        isEnd: a
                    }), (t.watchSlidesProgress || t.centeredSlides && t.autoHeight) && this.updateSlidesProgress(e), r && !n && this.emit("reachBeginning toEdge"), a && !o && this.emit("reachEnd toEdge"), (n && !r || o && !a) && this.emit("fromEdge"), this.emit("progress", s)
                },
                updateSlidesClasses: function() {
                    let e, t, i, {
                            slides: s,
                            params: r,
                            slidesEl: a,
                            activeIndex: l
                        } = this,
                        n = this.virtual && r.virtual.enabled,
                        o = this.grid && r.grid && r.grid.rows > 1,
                        d = e => P(a, `.${r.slideClass}${e}, swiper-slide${e}`)[0];
                    if (n)
                        if (r.loop) {
                            let t = l - this.virtual.slidesBefore;
                            t < 0 && (t = this.virtual.slides.length + t), t >= this.virtual.slides.length && (t -= this.virtual.slides.length), e = d(`[data-swiper-slide-index="${t}"]`)
                        } else e = d(`[data-swiper-slide-index="${l}"]`);
                    else o ? (e = s.find(e => e.column === l), i = s.find(e => e.column === l + 1), t = s.find(e => e.column === l - 1)) : e = s[l];
                    e && !o && (i = function(e, t) {
                        let i = [];
                        for (; e.nextElementSibling;) {
                            let s = e.nextElementSibling;
                            t ? s.matches(t) && i.push(s) : i.push(s), e = s
                        }
                        return i
                    }(e, `.${r.slideClass}, swiper-slide`)[0], r.loop && !i && (i = s[0]), t = function(e, t) {
                        let i = [];
                        for (; e.previousElementSibling;) {
                            let s = e.previousElementSibling;
                            t ? s.matches(t) && i.push(s) : i.push(s), e = s
                        }
                        return i
                    }(e, `.${r.slideClass}, swiper-slide`)[0], r.loop), s.forEach(s => {
                        W(s, s === e, r.slideActiveClass), W(s, s === i, r.slideNextClass), W(s, s === t, r.slidePrevClass)
                    }), this.emitSlidesClasses()
                },
                updateActiveIndex: function(e) {
                    let t, i, s = this,
                        r = s.rtlTranslate ? s.translate : -s.translate,
                        {
                            snapGrid: a,
                            params: l,
                            activeIndex: n,
                            realIndex: o,
                            snapIndex: d
                        } = s,
                        c = e,
                        p = e => {
                            let t = e - s.virtual.slidesBefore;
                            return t < 0 && (t = s.virtual.slides.length + t), t >= s.virtual.slides.length && (t -= s.virtual.slides.length), t
                        };
                    if (void 0 === c && (c = function(e) {
                            let t, {
                                    slidesGrid: i,
                                    params: s
                                } = e,
                                r = e.rtlTranslate ? e.translate : -e.translate;
                            for (let e = 0; e < i.length; e += 1) void 0 !== i[e + 1] ? r >= i[e] && r < i[e + 1] - (i[e + 1] - i[e]) / 2 ? t = e : r >= i[e] && r < i[e + 1] && (t = e + 1) : r >= i[e] && (t = e);
                            return s.normalizeSlideIndex && (t < 0 || void 0 === t) && (t = 0), t
                        }(s)), a.indexOf(r) >= 0) t = a.indexOf(r);
                    else {
                        let e = Math.min(l.slidesPerGroupSkip, c);
                        t = e + Math.floor((c - e) / l.slidesPerGroup)
                    }
                    if (t >= a.length && (t = a.length - 1), c === n && !s.params.loop) {
                        t !== d && (s.snapIndex = t, s.emit("snapIndexChange"));
                        return
                    }
                    if (c === n && s.params.loop && s.virtual && s.params.virtual.enabled) {
                        s.realIndex = p(c);
                        return
                    }
                    let u = s.grid && l.grid && l.grid.rows > 1;
                    if (s.virtual && l.virtual.enabled) i = l.loop ? p(c) : c;
                    else if (u) {
                        let e = s.slides.find(e => e.column === c),
                            t = parseInt(e.getAttribute("data-swiper-slide-index"), 10);
                        Number.isNaN(t) && (t = Math.max(s.slides.indexOf(e), 0)), i = Math.floor(t / l.grid.rows)
                    } else if (s.slides[c]) {
                        let e = s.slides[c].getAttribute("data-swiper-slide-index");
                        i = e ? parseInt(e, 10) : c
                    } else i = c;
                    Object.assign(s, {
                        previousSnapIndex: d,
                        snapIndex: t,
                        previousRealIndex: o,
                        realIndex: i,
                        previousIndex: n,
                        activeIndex: c
                    }), s.initialized && U(s), s.emit("activeIndexChange"), s.emit("snapIndexChange"), (s.initialized || s.params.runCallbacksOnInit) && (o !== i && s.emit("realIndexChange"), s.emit("slideChange"))
                },
                updateClickedSlide: function(e, t) {
                    let i, s = this.params,
                        r = e.closest(`.${s.slideClass}, swiper-slide`);
                    !r && this.isElement && t && t.length > 1 && t.includes(e) && [...t.slice(t.indexOf(e) + 1, t.length)].forEach(e => {
                        !r && e.matches && e.matches(`.${s.slideClass}, swiper-slide`) && (r = e)
                    });
                    let a = !1;
                    if (r) {
                        for (let e = 0; e < this.slides.length; e += 1)
                            if (this.slides[e] === r) {
                                a = !0, i = e;
                                break
                            }
                    }
                    if (r && a) this.clickedSlide = r, this.virtual && this.params.virtual.enabled ? this.clickedIndex = parseInt(r.getAttribute("data-swiper-slide-index"), 10) : this.clickedIndex = i;
                    else {
                        this.clickedSlide = void 0, this.clickedIndex = void 0;
                        return
                    }
                    s.slideToClickedSlide && void 0 !== this.clickedIndex && this.clickedIndex !== this.activeIndex && this.slideToClickedSlide()
                }
            },
            translate: {
                getTranslate: function(e = this.isHorizontal() ? "x" : "y") {
                    let {
                        params: t,
                        rtlTranslate: i,
                        translate: s,
                        wrapperEl: r
                    } = this;
                    if (t.virtualTranslate) return i ? -s : s;
                    if (t.cssMode) return s;
                    let a = function(e, t = "x") {
                        let i, s, r, a, l, n = w(),
                            o = ((l = w()).getComputedStyle && (a = l.getComputedStyle(e, null)), !a && e.currentStyle && (a = e.currentStyle), a || (a = e.style), a);
                        return n.WebKitCSSMatrix ? ((s = o.transform || o.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new n.WebKitCSSMatrix("none" === s ? "" : s)) : i = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = n.WebKitCSSMatrix ? r.m41 : 16 === i.length ? parseFloat(i[12]) : parseFloat(i[4])), "y" === t && (s = n.WebKitCSSMatrix ? r.m42 : 16 === i.length ? parseFloat(i[13]) : parseFloat(i[5])), s || 0
                    }(r, e);
                    return a += this.cssOverflowAdjustment(), i && (a = -a), a || 0
                },
                setTranslate: function(e, t) {
                    let {
                        rtlTranslate: i,
                        params: s,
                        wrapperEl: r,
                        progress: a
                    } = this, l = 0, n = 0;
                    this.isHorizontal() ? l = i ? -e : e : n = e, s.roundLengths && (l = Math.floor(l), n = Math.floor(n)), this.previousTranslate = this.translate, this.translate = this.isHorizontal() ? l : n, s.cssMode ? r[this.isHorizontal() ? "scrollLeft" : "scrollTop"] = this.isHorizontal() ? -l : -n : s.virtualTranslate || (this.isHorizontal() ? l -= this.cssOverflowAdjustment() : n -= this.cssOverflowAdjustment(), r.style.transform = `translate3d(${l}px, ${n}px, 0px)`);
                    let o = this.maxTranslate() - this.minTranslate();
                    (0 === o ? 0 : (e - this.minTranslate()) / o) !== a && this.updateProgress(e), this.emit("setTranslate", this.translate, t)
                },
                minTranslate: function() {
                    return -this.snapGrid[0]
                },
                maxTranslate: function() {
                    return -this.snapGrid[this.snapGrid.length - 1]
                },
                translateTo: function(e = 0, t = this.params.speed, i = !0, s = !0, r) {
                    let a, l = this,
                        {
                            params: n,
                            wrapperEl: o
                        } = l;
                    if (l.animating && n.preventInteractionOnTransition) return !1;
                    let d = l.minTranslate(),
                        c = l.maxTranslate();
                    if (a = s && e > d ? d : s && e < c ? c : e, l.updateProgress(a), n.cssMode) {
                        let e = l.isHorizontal();
                        if (0 === t) o[e ? "scrollLeft" : "scrollTop"] = -a;
                        else {
                            if (!l.support.smoothScroll) return C({
                                swiper: l,
                                targetPosition: -a,
                                side: e ? "left" : "top"
                            }), !0;
                            o.scrollTo({
                                [e ? "left" : "top"]: -a,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    return 0 === t ? (l.setTransition(0), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionEnd"))) : (l.setTransition(t), l.setTranslate(a), i && (l.emit("beforeTransitionStart", t, r), l.emit("transitionStart")), l.animating || (l.animating = !0, l.onTranslateToWrapperTransitionEnd || (l.onTranslateToWrapperTransitionEnd = function(e) {
                        !l || l.destroyed || e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onTranslateToWrapperTransitionEnd), l.onTranslateToWrapperTransitionEnd = null, delete l.onTranslateToWrapperTransitionEnd, l.animating = !1, i && l.emit("transitionEnd"))
                    }), l.wrapperEl.addEventListener("transitionend", l.onTranslateToWrapperTransitionEnd))), !0
                }
            },
            transition: {
                setTransition: function(e, t) {
                    this.params.cssMode || (this.wrapperEl.style.transitionDuration = `${e}ms`, this.wrapperEl.style.transitionDelay = 0 === e ? "0ms" : ""), this.emit("setTransition", e, t)
                },
                transitionStart: function(e = !0, t) {
                    let {
                        params: i
                    } = this;
                    i.cssMode || (i.autoHeight && this.updateAutoHeight(), K({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "Start"
                    }))
                },
                transitionEnd: function(e = !0, t) {
                    let {
                        params: i
                    } = this;
                    this.animating = !1, i.cssMode || (this.setTransition(0), K({
                        swiper: this,
                        runCallbacks: e,
                        direction: t,
                        step: "End"
                    }))
                }
            },
            slide: {
                slideTo: function(e = 0, t, i = !0, s, r) {
                    let a;
                    "string" == typeof e && (e = parseInt(e, 10));
                    let l = this,
                        n = e;
                    n < 0 && (n = 0);
                    let {
                        params: o,
                        snapGrid: d,
                        slidesGrid: c,
                        previousIndex: p,
                        activeIndex: u,
                        rtlTranslate: h,
                        wrapperEl: m,
                        enabled: f
                    } = l;
                    if (!f && !s && !r || l.destroyed || l.animating && o.preventInteractionOnTransition) return !1;
                    void 0 === t && (t = l.params.speed);
                    let g = Math.min(l.params.slidesPerGroupSkip, n),
                        v = g + Math.floor((n - g) / l.params.slidesPerGroup);
                    v >= d.length && (v = d.length - 1);
                    let w = -d[v];
                    if (o.normalizeSlideIndex)
                        for (let e = 0; e < c.length; e += 1) {
                            let t = -Math.floor(100 * w),
                                i = Math.floor(100 * c[e]),
                                s = Math.floor(100 * c[e + 1]);
                            void 0 !== c[e + 1] ? t >= i && t < s - (s - i) / 2 ? n = e : t >= i && t < s && (n = e + 1) : t >= i && (n = e)
                        }
                    if (l.initialized && n !== u && (!l.allowSlideNext && (h ? w > l.translate && w > l.minTranslate() : w < l.translate && w < l.minTranslate()) || !l.allowSlidePrev && w > l.translate && w > l.maxTranslate() && (u || 0) !== n)) return !1;
                    n !== (p || 0) && i && l.emit("beforeSlideChangeStart"), l.updateProgress(w), a = n > u ? "next" : n < u ? "prev" : "reset";
                    let b = l.virtual && l.params.virtual.enabled;
                    if (!(b && r) && (h && -w === l.translate || !h && w === l.translate)) return l.updateActiveIndex(n), o.autoHeight && l.updateAutoHeight(), l.updateSlidesClasses(), "slide" !== o.effect && l.setTranslate(w), "reset" !== a && (l.transitionStart(i, a), l.transitionEnd(i, a)), !1;
                    if (o.cssMode) {
                        let e = l.isHorizontal(),
                            i = h ? w : -w;
                        if (0 === t) b && (l.wrapperEl.style.scrollSnapType = "none", l._immediateVirtual = !0), b && !l._cssModeVirtualInitialSet && l.params.initialSlide > 0 ? (l._cssModeVirtualInitialSet = !0, requestAnimationFrame(() => {
                            m[e ? "scrollLeft" : "scrollTop"] = i
                        })) : m[e ? "scrollLeft" : "scrollTop"] = i, b && requestAnimationFrame(() => {
                            l.wrapperEl.style.scrollSnapType = "", l._immediateVirtual = !1
                        });
                        else {
                            if (!l.support.smoothScroll) return C({
                                swiper: l,
                                targetPosition: i,
                                side: e ? "left" : "top"
                            }), !0;
                            m.scrollTo({
                                [e ? "left" : "top"]: i,
                                behavior: "smooth"
                            })
                        }
                        return !0
                    }
                    let y = R().isSafari;
                    return b && !r && y && l.isElement && l.virtual.update(!1, !1, n), l.setTransition(t), l.setTranslate(w), l.updateActiveIndex(n), l.updateSlidesClasses(), l.emit("beforeTransitionStart", t, s), l.transitionStart(i, a), 0 === t ? l.transitionEnd(i, a) : l.animating || (l.animating = !0, l.onSlideToWrapperTransitionEnd || (l.onSlideToWrapperTransitionEnd = function(e) {
                        !l || l.destroyed || e.target === this && (l.wrapperEl.removeEventListener("transitionend", l.onSlideToWrapperTransitionEnd), l.onSlideToWrapperTransitionEnd = null, delete l.onSlideToWrapperTransitionEnd, l.transitionEnd(i, a))
                    }), l.wrapperEl.addEventListener("transitionend", l.onSlideToWrapperTransitionEnd)), !0
                },
                slideToLoop: function(e = 0, t, i = !0, s) {
                    "string" == typeof e && (e = parseInt(e, 10));
                    let r = this;
                    if (r.destroyed) return;
                    void 0 === t && (t = r.params.speed);
                    let a = r.grid && r.params.grid && r.params.grid.rows > 1,
                        l = e;
                    if (r.params.loop)
                        if (r.virtual && r.params.virtual.enabled) l += r.virtual.slidesBefore;
                        else {
                            let e;
                            if (a) {
                                let t = l * r.params.grid.rows;
                                e = r.slides.find(e => +e.getAttribute("data-swiper-slide-index") === t).column
                            } else e = r.getSlideIndexByData(l);
                            let t = a ? Math.ceil(r.slides.length / r.params.grid.rows) : r.slides.length,
                                {
                                    centeredSlides: i,
                                    slidesOffsetBefore: n,
                                    slidesOffsetAfter: o
                                } = r.params,
                                d = i || !!n || !!o,
                                c = r.params.slidesPerView;
                            "auto" === c ? c = r.slidesPerViewDynamic() : (c = Math.ceil(parseFloat(r.params.slidesPerView, 10)), d && c % 2 == 0 && (c += 1));
                            let p = t - e < c;
                            if (d && (p = p || e < Math.ceil(c / 2)), s && d && "auto" !== r.params.slidesPerView && !a && (p = !1), p) {
                                let i = d ? e < r.activeIndex ? "prev" : "next" : e - r.activeIndex - 1 < r.params.slidesPerView ? "next" : "prev";
                                r.loopFix({
                                    direction: i,
                                    slideTo: !0,
                                    activeSlideIndex: "next" === i ? e + 1 : e - t + 1,
                                    slideRealIndex: "next" === i ? r.realIndex : void 0
                                })
                            }
                            if (a) {
                                let e = l * r.params.grid.rows;
                                l = r.slides.find(t => +t.getAttribute("data-swiper-slide-index") === e).column
                            } else l = r.getSlideIndexByData(l)
                        }
                    return requestAnimationFrame(() => {
                        r.slideTo(l, t, i, s)
                    }), r
                },
                slideNext: function(e, t = !0, i) {
                    let s = this,
                        {
                            enabled: r,
                            params: a,
                            animating: l
                        } = s;
                    if (!r || s.destroyed) return s;
                    void 0 === e && (e = s.params.speed);
                    let n = a.slidesPerGroup;
                    "auto" === a.slidesPerView && 1 === a.slidesPerGroup && a.slidesPerGroupAuto && (n = Math.max(s.slidesPerViewDynamic("current", !0), 1));
                    let o = s.activeIndex < a.slidesPerGroupSkip ? 1 : n,
                        d = s.virtual && a.virtual.enabled;
                    if (a.loop) {
                        if (l && !d && a.loopPreventsSliding) return !1;
                        if (s.loopFix({
                                direction: "next"
                            }), s._clientLeft = s.wrapperEl.clientLeft, s.activeIndex === s.slides.length - 1 && a.cssMode) return requestAnimationFrame(() => {
                            s.slideTo(s.activeIndex + o, e, t, i)
                        }), !0
                    }
                    return a.rewind && s.isEnd ? s.slideTo(0, e, t, i) : s.slideTo(s.activeIndex + o, e, t, i)
                },
                slidePrev: function(e, t = !0, i) {
                    let s = this,
                        {
                            params: r,
                            snapGrid: a,
                            slidesGrid: l,
                            rtlTranslate: n,
                            enabled: o,
                            animating: d
                        } = s;
                    if (!o || s.destroyed) return s;
                    void 0 === e && (e = s.params.speed);
                    let c = s.virtual && r.virtual.enabled;
                    if (r.loop) {
                        if (d && !c && r.loopPreventsSliding) return !1;
                        s.loopFix({
                            direction: "prev"
                        }), s._clientLeft = s.wrapperEl.clientLeft
                    }

                    function p(e) {
                        return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                    }
                    let u = p(n ? s.translate : -s.translate),
                        h = a.map(e => p(e)),
                        m = r.freeMode && r.freeMode.enabled,
                        f = a[h.indexOf(u) - 1];
                    if (void 0 === f && (r.cssMode || m)) {
                        let e;
                        a.forEach((t, i) => {
                            u >= t && (e = i)
                        }), void 0 !== e && (f = m ? a[e] : a[e > 0 ? e - 1 : e])
                    }
                    let g = 0;
                    if (void 0 !== f && ((g = l.indexOf(f)) < 0 && (g = s.activeIndex - 1), "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (g = Math.max(g = g - s.slidesPerViewDynamic("previous", !0) + 1, 0))), r.rewind && s.isBeginning) {
                        let r = s.params.virtual && s.params.virtual.enabled && s.virtual ? s.virtual.slides.length - 1 : s.slides.length - 1;
                        return s.slideTo(r, e, t, i)
                    }
                    return r.loop && 0 === s.activeIndex && r.cssMode ? (requestAnimationFrame(() => {
                        s.slideTo(g, e, t, i)
                    }), !0) : s.slideTo(g, e, t, i)
                },
                slideReset: function(e, t = !0, i) {
                    if (!this.destroyed) return void 0 === e && (e = this.params.speed), this.slideTo(this.activeIndex, e, t, i)
                },
                slideToClosest: function(e, t = !0, i, s = .5) {
                    if (this.destroyed) return;
                    void 0 === e && (e = this.params.speed);
                    let r = this.activeIndex,
                        a = Math.min(this.params.slidesPerGroupSkip, r),
                        l = a + Math.floor((r - a) / this.params.slidesPerGroup),
                        n = this.rtlTranslate ? this.translate : -this.translate;
                    if (n >= this.snapGrid[l]) {
                        let e = this.snapGrid[l];
                        n - e > (this.snapGrid[l + 1] - e) * s && (r += this.params.slidesPerGroup)
                    } else {
                        let e = this.snapGrid[l - 1];
                        n - e <= (this.snapGrid[l] - e) * s && (r -= this.params.slidesPerGroup)
                    }
                    return r = Math.min(r = Math.max(r, 0), this.slidesGrid.length - 1), this.slideTo(r, e, t, i)
                },
                slideToClickedSlide: function() {
                    let e, t = this;
                    if (t.destroyed) return;
                    let {
                        params: i,
                        slidesEl: s
                    } = t, r = "auto" === i.slidesPerView ? t.slidesPerViewDynamic() : i.slidesPerView, a = t.getSlideIndexWhenGrid(t.clickedIndex), l = t.isElement ? "swiper-slide" : `.${i.slideClass}`, n = t.grid && t.params.grid && t.params.grid.rows > 1;
                    if (i.loop) {
                        if (t.animating) return;
                        e = parseInt(t.clickedSlide.getAttribute("data-swiper-slide-index"), 10), i.centeredSlides ? t.slideToLoop(e) : a > (n ? (t.slides.length - r) / 2 - (t.params.grid.rows - 1) : t.slides.length - r) ? (t.loopFix(), a = t.getSlideIndex(P(s, `${l}[data-swiper-slide-index="${e}"]`)[0]), y(() => {
                            t.slideTo(a)
                        })) : t.slideTo(a)
                    } else t.slideTo(a)
                }
            },
            loop: {
                loopCreate: function(e, t) {
                    let i, s = this,
                        {
                            params: r,
                            slidesEl: a
                        } = s;
                    if (!r.loop || s.virtual && s.params.virtual.enabled) return;
                    let l = s.grid && r.grid && r.grid.rows > 1;
                    r.loopAddBlankSlides && (r.slidesPerGroup > 1 || l) && ((i = P(a, `.${r.slideBlankClass}`)).forEach(e => {
                        e.remove()
                    }), i.length > 0 && (s.recalcSlides(), s.updateSlides()));
                    let n = r.slidesPerGroup * (l ? r.grid.rows : 1),
                        o = s.slides.length % n != 0,
                        d = l && s.slides.length % r.grid.rows != 0,
                        c = e => {
                            for (let t = 0; t < e; t += 1) {
                                let e = s.isElement ? k("swiper-slide", [r.slideBlankClass]) : k("div", [r.slideClass, r.slideBlankClass]);
                                s.slidesEl.append(e)
                            }
                        };
                    o ? r.loopAddBlankSlides ? (c(n - s.slides.length % n), s.recalcSlides(), s.updateSlides()) : L("Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)") : d && (r.loopAddBlankSlides ? (c(r.grid.rows - s.slides.length % r.grid.rows), s.recalcSlides(), s.updateSlides()) : L("Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)")), P(a, `.${r.slideClass}, swiper-slide`).forEach((e, t) => {
                        e.setAttribute("data-swiper-slide-index", t)
                    });
                    let p = r.centeredSlides || !!r.slidesOffsetBefore || !!r.slidesOffsetAfter;
                    s.loopFix({
                        slideRealIndex: e,
                        direction: p ? void 0 : "next",
                        initial: t
                    })
                },
                loopFix: function({
                    slideRealIndex: e,
                    slideTo: t = !0,
                    direction: i,
                    setTranslate: s,
                    activeSlideIndex: r,
                    initial: a,
                    byController: l,
                    byMousewheel: n
                } = {}) {
                    let o = this;
                    if (!o.params.loop) return;
                    o.emit("beforeLoopFix");
                    let {
                        slides: d,
                        allowSlidePrev: c,
                        allowSlideNext: p,
                        slidesEl: u,
                        params: h
                    } = o, {
                        centeredSlides: m,
                        slidesOffsetBefore: f,
                        slidesOffsetAfter: g,
                        initialSlide: v
                    } = h, w = m || !!f || !!g;
                    if (o.allowSlidePrev = !0, o.allowSlideNext = !0, o.virtual && h.virtual.enabled) {
                        t && (w || 0 !== o.snapIndex ? w && o.snapIndex < h.slidesPerView ? o.slideTo(o.virtual.slides.length + o.snapIndex, 0, !1, !0) : o.snapIndex === o.snapGrid.length - 1 && o.slideTo(o.virtual.slidesBefore, 0, !1, !0) : o.slideTo(o.virtual.slides.length, 0, !1, !0)), o.allowSlidePrev = c, o.allowSlideNext = p, o.emit("loopFix");
                        return
                    }
                    let b = h.slidesPerView;
                    "auto" === b ? b = o.slidesPerViewDynamic() : (b = Math.ceil(parseFloat(h.slidesPerView, 10)), w && b % 2 == 0 && (b += 1));
                    let y = h.slidesPerGroupAuto ? b : h.slidesPerGroup,
                        x = w ? Math.max(y, Math.ceil(b / 2)) : y;
                    x % y != 0 && (x += y - x % y), o.loopedSlides = x += h.loopAdditionalSlides;
                    let S = o.grid && h.grid && h.grid.rows > 1;
                    d.length < b + x || "cards" === o.params.effect && d.length < b + 2 * x ? L("Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters") : S && "row" === h.grid.fill && L("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");
                    let E = [],
                        T = [],
                        C = S ? Math.ceil(d.length / h.grid.rows) : d.length,
                        M = a && C - v < b && !w,
                        P = M ? v : o.activeIndex;
                    void 0 === r ? r = o.getSlideIndex(d.find(e => e.classList.contains(h.slideActiveClass))) : P = r;
                    let k = "next" === i || !i,
                        O = "prev" === i || !i,
                        I = 0,
                        _ = 0,
                        A = (S ? d[r].column : r) + (w && void 0 === s ? -b / 2 + .5 : 0);
                    if (A < x) {
                        I = Math.max(x - A, y);
                        for (let e = 0; e < x - A; e += 1) {
                            let t = e - Math.floor(e / C) * C;
                            if (S) {
                                let e = C - t - 1;
                                for (let t = d.length - 1; t >= 0; t -= 1) d[t].column === e && E.push(t)
                            } else E.push(C - t - 1)
                        }
                    } else if (A + b > C - x) {
                        _ = Math.max(A - (C - 2 * x), y), M && (_ = Math.max(_, b - C + v + 1));
                        for (let e = 0; e < _; e += 1) {
                            let t = e - Math.floor(e / C) * C;
                            S ? d.forEach((e, i) => {
                                e.column === t && T.push(i)
                            }) : T.push(t)
                        }
                    }
                    if (o.__preventObserver__ = !0, requestAnimationFrame(() => {
                            o.__preventObserver__ = !1
                        }), "cards" === o.params.effect && d.length < b + 2 * x && (T.includes(r) && T.splice(T.indexOf(r), 1), E.includes(r) && E.splice(E.indexOf(r), 1)), O && E.forEach(e => {
                            d[e].swiperLoopMoveDOM = !0, u.prepend(d[e]), d[e].swiperLoopMoveDOM = !1
                        }), k && T.forEach(e => {
                            d[e].swiperLoopMoveDOM = !0, u.append(d[e]), d[e].swiperLoopMoveDOM = !1
                        }), o.recalcSlides(), "auto" === h.slidesPerView ? o.updateSlides() : S && (E.length > 0 && O || T.length > 0 && k) && o.slides.forEach((e, t) => {
                            o.grid.updateSlide(t, e, o.slides)
                        }), h.watchSlidesProgress && o.updateSlidesOffset(), t) {
                        if (E.length > 0 && O) {
                            if (void 0 === e) {
                                let e = o.slidesGrid[P],
                                    t = o.slidesGrid[P + I] - e;
                                n ? o.setTranslate(o.translate - t) : (o.slideTo(P + Math.ceil(I), 0, !1, !0), s && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                            } else if (s) {
                                let e = S ? E.length / h.grid.rows : E.length;
                                o.slideTo(o.activeIndex + e, 0, !1, !0), o.touchEventsData.currentTranslate = o.translate
                            }
                        } else if (T.length > 0 && k)
                            if (void 0 === e) {
                                let e = o.slidesGrid[P],
                                    t = o.slidesGrid[P - _] - e;
                                n ? o.setTranslate(o.translate - t) : (o.slideTo(P - _, 0, !1, !0), s && (o.touchEventsData.startTranslate = o.touchEventsData.startTranslate - t, o.touchEventsData.currentTranslate = o.touchEventsData.currentTranslate - t))
                            } else {
                                let e = S ? T.length / h.grid.rows : T.length;
                                o.slideTo(o.activeIndex - e, 0, !1, !0)
                            }
                    }
                    if (o.allowSlidePrev = c, o.allowSlideNext = p, o.controller && o.controller.control && !l) {
                        let a = {
                            slideRealIndex: e,
                            direction: i,
                            setTranslate: s,
                            activeSlideIndex: r,
                            byController: !0
                        };
                        Array.isArray(o.controller.control) ? o.controller.control.forEach(e => {
                            !e.destroyed && e.params.loop && e.loopFix({ ...a,
                                slideTo: e.params.slidesPerView === h.slidesPerView && t
                            })
                        }) : o.controller.control instanceof o.constructor && o.controller.control.params.loop && o.controller.control.loopFix({ ...a,
                            slideTo: o.controller.control.params.slidesPerView === h.slidesPerView && t
                        })
                    }
                    o.emit("loopFix")
                },
                loopDestroy: function() {
                    let {
                        params: e,
                        slidesEl: t
                    } = this;
                    if (!e.loop || !t || this.virtual && this.params.virtual.enabled) return;
                    this.recalcSlides();
                    let i = [];
                    this.slides.forEach(e => {
                        i[void 0 === e.swiperSlideIndex ? +e.getAttribute("data-swiper-slide-index") : e.swiperSlideIndex] = e
                    }), this.slides.forEach(e => {
                        e.removeAttribute("data-swiper-slide-index")
                    }), i.forEach(e => {
                        t.append(e)
                    }), this.recalcSlides(), this.slideTo(this.realIndex, 0)
                }
            },
            grabCursor: {
                setGrabCursor: function(e) {
                    let t = this;
                    if (!t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                    let i = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                    t.isElement && (t.__preventObserver__ = !0), i.style.cursor = "move", i.style.cursor = e ? "grabbing" : "grab", t.isElement && requestAnimationFrame(() => {
                        t.__preventObserver__ = !1
                    })
                },
                unsetGrabCursor: function() {
                    let e = this;
                    e.params.watchOverflow && e.isLocked || e.params.cssMode || (e.isElement && (e.__preventObserver__ = !0), e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "", e.isElement && requestAnimationFrame(() => {
                        e.__preventObserver__ = !1
                    }))
                }
            },
            events: {
                attachEvents: function() {
                    let {
                        params: e
                    } = this;
                    this.onTouchStart = J.bind(this), this.onTouchMove = Q.bind(this), this.onTouchEnd = ee.bind(this), this.onDocumentTouchStart = ea.bind(this), e.cssMode && (this.onScroll = es.bind(this)), this.onClick = ei.bind(this), this.onLoad = er.bind(this), el(this, "on")
                },
                detachEvents: function() {
                    el(this, "off")
                }
            },
            breakpoints: {
                setBreakpoint: function() {
                    let e = this,
                        {
                            realIndex: t,
                            initialized: i,
                            params: s,
                            el: r
                        } = e,
                        a = s.breakpoints;
                    if (!a || a && 0 === Object.keys(a).length) return;
                    let l = g(),
                        n = "window" !== s.breakpointsBase && s.breakpointsBase ? "container" : s.breakpointsBase,
                        o = ["window", "container"].includes(s.breakpointsBase) || !s.breakpointsBase ? e.el : l.querySelector(s.breakpointsBase),
                        d = e.getBreakpoint(a, n, o);
                    if (!d || e.currentBreakpoint === d) return;
                    let c = (d in a ? a[d] : void 0) || e.originalParams,
                        p = en(e, s),
                        u = en(e, c),
                        h = e.params.grabCursor,
                        m = c.grabCursor,
                        f = s.enabled;
                    p && !u ? (r.classList.remove(`${s.containerModifierClass}grid`, `${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !p && u && (r.classList.add(`${s.containerModifierClass}grid`), (c.grid.fill && "column" === c.grid.fill || !c.grid.fill && "column" === s.grid.fill) && r.classList.add(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), h && !m ? e.unsetGrabCursor() : !h && m && e.setGrabCursor(), ["navigation", "pagination", "scrollbar"].forEach(t => {
                        if (void 0 === c[t]) return;
                        let i = s[t] && s[t].enabled,
                            r = c[t] && c[t].enabled;
                        i && !r && e[t].disable(), !i && r && e[t].enable()
                    });
                    let v = c.direction && c.direction !== s.direction,
                        w = s.loop && (c.slidesPerView !== s.slidesPerView || v),
                        b = s.loop;
                    v && i && e.changeDirection(), E(e.params, c);
                    let y = e.params.enabled,
                        x = e.params.loop;
                    Object.assign(e, {
                        allowTouchMove: e.params.allowTouchMove,
                        allowSlideNext: e.params.allowSlideNext,
                        allowSlidePrev: e.params.allowSlidePrev
                    }), f && !y ? e.disable() : !f && y && e.enable(), e.currentBreakpoint = d, e.emit("_beforeBreakpoint", c), i && (w ? (e.loopDestroy(), e.loopCreate(t), e.updateSlides()) : !b && x ? (e.loopCreate(t), e.updateSlides()) : b && !x && e.loopDestroy()), e.emit("breakpoint", c)
                },
                getBreakpoint: function(e, t = "window", i) {
                    if (!e || "container" === t && !i) return;
                    let s = !1,
                        r = w(),
                        a = "window" === t ? r.innerHeight : i.clientHeight,
                        l = Object.keys(e).map(e => "string" == typeof e && 0 === e.indexOf("@") ? {
                            value: a * parseFloat(e.substr(1)),
                            point: e
                        } : {
                            value: e,
                            point: e
                        });
                    l.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                    for (let e = 0; e < l.length; e += 1) {
                        let {
                            point: a,
                            value: n
                        } = l[e];
                        "window" === t ? r.matchMedia(`(min-width: ${n}px)`).matches && (s = a) : n <= i.clientWidth && (s = a)
                    }
                    return s || "max"
                }
            },
            checkOverflow: {
                checkOverflow: function() {
                    let {
                        isLocked: e,
                        params: t
                    } = this, {
                        slidesOffsetBefore: i
                    } = t;
                    if (i) {
                        let e = this.slides.length - 1,
                            t = this.slidesGrid[e] + this.slidesSizesGrid[e] + 2 * i;
                        this.isLocked = this.size > t
                    } else this.isLocked = 1 === this.snapGrid.length;
                    !0 === t.allowSlideNext && (this.allowSlideNext = !this.isLocked), !0 === t.allowSlidePrev && (this.allowSlidePrev = !this.isLocked), e && e !== this.isLocked && (this.isEnd = !1), e !== this.isLocked && this.emit(this.isLocked ? "lock" : "unlock")
                }
            },
            classes: {
                addClasses: function() {
                    var e, t;
                    let i, {
                            classNames: s,
                            params: r,
                            rtl: a,
                            el: l,
                            device: n
                        } = this,
                        o = (e = ["initialized", r.direction, {
                            "free-mode": this.params.freeMode && r.freeMode.enabled
                        }, {
                            autoheight: r.autoHeight
                        }, {
                            rtl: a
                        }, {
                            grid: r.grid && r.grid.rows > 1
                        }, {
                            "grid-column": r.grid && r.grid.rows > 1 && "column" === r.grid.fill
                        }, {
                            android: n.android
                        }, {
                            ios: n.ios
                        }, {
                            "css-mode": r.cssMode
                        }, {
                            centered: r.cssMode && r.centeredSlides
                        }, {
                            "watch-progress": r.watchSlidesProgress
                        }], t = r.containerModifierClass, i = [], e.forEach(e => {
                            "object" == typeof e ? Object.keys(e).forEach(s => {
                                e[s] && i.push(t + s)
                            }) : "string" == typeof e && i.push(t + e)
                        }), i);
                    s.push(...o), l.classList.add(...s), this.emitContainerClasses()
                },
                removeClasses: function() {
                    let {
                        el: e,
                        classNames: t
                    } = this;
                    e && "string" != typeof e && (e.classList.remove(...t), this.emitContainerClasses())
                }
            }
        },
        ec = {};
    class ep {
        constructor(...e) {
            let t, i;
            1 === e.length && e[0].constructor && "Object" === Object.prototype.toString.call(e[0]).slice(8, -1) ? i = e[0] : [t, i] = e, i || (i = {}), i = E({}, i), t && !i.el && (i.el = t);
            const s = g();
            if (i.el && "string" == typeof i.el && s.querySelectorAll(i.el).length > 1) {
                const e = [];
                return s.querySelectorAll(i.el).forEach(t => {
                    let s = E({}, i, {
                        el: t
                    });
                    e.push(new ep(s))
                }), e
            }
            const r = this;
            r.__swiper__ = !0, r.support = F(), r.device = H({
                userAgent: i.userAgent
            }), r.browser = R(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [...r.__modules__], i.modules && Array.isArray(i.modules) && i.modules.forEach(e => {
                "function" == typeof e && 0 > r.modules.indexOf(e) && r.modules.push(e)
            });
            const a = {};
            r.modules.forEach(e => {
                var t;
                e({
                    params: i,
                    swiper: r,
                    extendParams: (t = i, function(e = {}) {
                        let i = Object.keys(e)[0],
                            s = e[i];
                        "object" != typeof s || null === s || (!0 === t[i] && (t[i] = {
                            enabled: !0
                        }), "navigation" === i && t[i] && t[i].enabled && !t[i].prevEl && !t[i].nextEl && (t[i].auto = !0), ["pagination", "scrollbar"].indexOf(i) >= 0 && t[i] && t[i].enabled && !t[i].el && (t[i].auto = !0), i in t && "enabled" in s && ("object" != typeof t[i] || "enabled" in t[i] || (t[i].enabled = !0), t[i] || (t[i] = {
                            enabled: !1
                        }))), E(a, e)
                    }),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                })
            });
            const l = E({}, eo, a);
            return r.params = E({}, l, ec, i), r.originalParams = E({}, r.params), r.passedParams = E({}, i), r.params && r.params.on && Object.keys(r.params.on).forEach(e => {
                r.on(e, r.params.on[e])
            }), r.params && r.params.onAny && r.onAny(r.params.onAny), Object.assign(r, {
                enabled: r.params.enabled,
                el: t,
                classNames: [],
                slides: [],
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: () => "horizontal" === r.params.direction,
                isVertical: () => "vertical" === r.params.direction,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                cssOverflowAdjustment() {
                    return 8388608 * Math.trunc(this.translate / 8388608)
                },
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: 0,
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    startMoving: void 0,
                    pointerId: null,
                    touchId: null
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r
        }
        getDirectionLabel(e) {
            return this.isHorizontal() ? e : ({
                width: "height",
                "margin-top": "margin-left",
                "margin-bottom ": "margin-right",
                "margin-left": "margin-top",
                "margin-right": "margin-bottom",
                "padding-left": "padding-top",
                "padding-right": "padding-bottom",
                marginRight: "marginBottom"
            })[e]
        }
        getSlideIndex(e) {
            let {
                slidesEl: t,
                params: i
            } = this, s = I(P(t, `.${i.slideClass}, swiper-slide`)[0]);
            return I(e) - s
        }
        getSlideIndexByData(e) {
            return this.getSlideIndex(this.slides.find(t => +t.getAttribute("data-swiper-slide-index") === e))
        }
        getSlideIndexWhenGrid(e) {
            return this.grid && this.params.grid && this.params.grid.rows > 1 && ("column" === this.params.grid.fill ? e = Math.floor(e / this.params.grid.rows) : "row" === this.params.grid.fill && (e %= Math.ceil(this.slides.length / this.params.grid.rows))), e
        }
        recalcSlides() {
            let {
                slidesEl: e,
                params: t
            } = this;
            this.slides = P(e, `.${t.slideClass}, swiper-slide`)
        }
        enable() {
            this.enabled || (this.enabled = !0, this.params.grabCursor && this.setGrabCursor(), this.emit("enable"))
        }
        disable() {
            this.enabled && (this.enabled = !1, this.params.grabCursor && this.unsetGrabCursor(), this.emit("disable"))
        }
        setProgress(e, t) {
            e = Math.min(Math.max(e, 0), 1);
            let i = this.minTranslate(),
                s = (this.maxTranslate() - i) * e + i;
            this.translateTo(s, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
        }
        emitContainerClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el) return;
            let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
            e.emit("_containerClasses", t.join(" "))
        }
        getSlideClasses(e) {
            let t = this;
            return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
        }
        emitSlidesClasses() {
            let e = this;
            if (!e.params._emitClasses || !e.el) return;
            let t = [];
            e.slides.forEach(i => {
                let s = e.getSlideClasses(i);
                t.push({
                    slideEl: i,
                    classNames: s
                }), e.emit("_slideClass", i, s)
            }), e.emit("_slideClasses", t)
        }
        slidesPerViewDynamic(e = "current", t = !1) {
            let {
                params: i,
                slides: s,
                slidesGrid: r,
                slidesSizesGrid: a,
                size: l,
                activeIndex: n
            } = this, o = 1;
            if ("number" == typeof i.slidesPerView) return i.slidesPerView;
            if (i.centeredSlides) {
                let e, t = s[n] ? Math.ceil(s[n].swiperSlideSize) : 0;
                for (let i = n + 1; i < s.length; i += 1) s[i] && !e && (t += Math.ceil(s[i].swiperSlideSize), o += 1, t > l && (e = !0));
                for (let i = n - 1; i >= 0; i -= 1) s[i] && !e && (t += s[i].swiperSlideSize, o += 1, t > l && (e = !0))
            } else if ("current" === e)
                for (let e = n + 1; e < s.length; e += 1)(t ? r[e] + a[e] - r[n] < l : r[e] - r[n] < l) && (o += 1);
            else
                for (let e = n - 1; e >= 0; e -= 1) r[n] - r[e] < l && (o += 1);
            return o
        }
        update() {
            let e, t = this;
            if (!t || t.destroyed) return;
            let {
                snapGrid: i,
                params: s
            } = t;

            function r() {
                let e = Math.min(Math.max(t.rtlTranslate ? -1 * t.translate : t.translate, t.maxTranslate()), t.minTranslate());
                t.setTranslate(e), t.updateActiveIndex(), t.updateSlidesClasses()
            }
            if (s.breakpoints && t.setBreakpoint(), [...t.el.querySelectorAll('[loading="lazy"]')].forEach(e => {
                    e.complete && X(t, e)
                }), t.updateSize(), t.updateSlides(), t.updateProgress(), t.updateSlidesClasses(), s.freeMode && s.freeMode.enabled && !s.cssMode) r(), s.autoHeight && t.updateAutoHeight();
            else {
                if (("auto" === s.slidesPerView || s.slidesPerView > 1) && t.isEnd && !s.centeredSlides) {
                    let i = t.virtual && s.virtual.enabled ? t.virtual.slides : t.slides;
                    e = t.slideTo(i.length - 1, 0, !1, !0)
                } else e = t.slideTo(t.activeIndex, 0, !1, !0);
                e || r()
            }
            s.watchOverflow && i !== t.snapGrid && t.checkOverflow(), t.emit("update")
        }
        changeDirection(e, t = !0) {
            let i = this.params.direction;
            return e || (e = "horizontal" === i ? "vertical" : "horizontal"), e === i || "horizontal" !== e && "vertical" !== e || (this.el.classList.remove(`${this.params.containerModifierClass}${i}`), this.el.classList.add(`${this.params.containerModifierClass}${e}`), this.emitContainerClasses(), this.params.direction = e, this.slides.forEach(t => {
                "vertical" === e ? t.style.width = "" : t.style.height = ""
            }), this.emit("changeDirection"), t && this.update()), this
        }
        changeLanguageDirection(e) {
            (!this.rtl || "rtl" !== e) && (this.rtl || "ltr" !== e) && (this.rtl = "rtl" === e, this.rtlTranslate = "horizontal" === this.params.direction && this.rtl, this.rtl ? (this.el.classList.add(`${this.params.containerModifierClass}rtl`), this.el.dir = "rtl") : (this.el.classList.remove(`${this.params.containerModifierClass}rtl`), this.el.dir = "ltr"), this.update())
        }
        mount(e) {
            let t = this;
            if (t.mounted) return !0;
            let i = e || t.params.el;
            if ("string" == typeof i && (i = document.querySelector(i)), !i) return !1;
            i.swiper = t, i.parentNode && i.parentNode.host && i.parentNode.host.nodeName === t.params.swiperElementNodeName.toUpperCase() && (t.isElement = !0);
            let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                r = i && i.shadowRoot && i.shadowRoot.querySelector ? i.shadowRoot.querySelector(s()) : P(i, s())[0];
            return !r && t.params.createElements && (r = k("div", t.params.wrapperClass), i.append(r), P(i, `.${t.params.slideClass}`).forEach(e => {
                r.append(e)
            })), Object.assign(t, {
                el: i,
                wrapperEl: r,
                slidesEl: t.isElement && !i.parentNode.host.slideSlots ? i.parentNode.host : r,
                hostEl: t.isElement ? i.parentNode.host : i,
                mounted: !0,
                rtl: "rtl" === i.dir.toLowerCase() || "rtl" === O(i, "direction"),
                rtlTranslate: "horizontal" === t.params.direction && ("rtl" === i.dir.toLowerCase() || "rtl" === O(i, "direction")),
                wrongRTL: "-webkit-box" === O(r, "display")
            }), !0
        }
        init(e) {
            let t = this;
            if (t.initialized || !1 === t.mount(e)) return t;
            t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.loop && t.virtual && t.params.virtual.enabled ? t.slideTo(t.params.initialSlide + t.virtual.slidesBefore, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.params.loop && t.loopCreate(void 0, !0), t.attachEvents();
            let i = [...t.el.querySelectorAll('[loading="lazy"]')];
            return t.isElement && i.push(...t.hostEl.querySelectorAll('[loading="lazy"]')), i.forEach(e => {
                e.complete ? X(t, e) : e.addEventListener("load", e => {
                    X(t, e.target)
                })
            }), U(t), t.initialized = !0, U(t), t.emit("init"), t.emit("afterInit"), t
        }
        destroy(e = !0, t = !0) {
            let i = this,
                {
                    params: s,
                    el: r,
                    wrapperEl: a,
                    slides: l
                } = i;
            if (void 0 === i.params || i.destroyed) return null;
            (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), s.loop && i.loopDestroy(), t && (i.removeClasses(), r && "string" != typeof r && r.removeAttribute("style"), a && a.removeAttribute("style"), l && l.length && l.forEach(e => {
                e.classList.remove(s.slideVisibleClass, s.slideFullyVisibleClass, s.slideActiveClass, s.slideNextClass, s.slidePrevClass), e.removeAttribute("style"), e.removeAttribute("data-swiper-slide-index")
            })), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                i.off(e)
            }), !1 !== e) && (i.el && "string" != typeof i.el && (i.el.swiper = null), Object.keys(i).forEach(e => {
                try {
                    i[e] = null
                } catch (e) {}
                try {
                    delete i[e]
                } catch (e) {}
            }));
            return i.destroyed = !0, null
        }
        static extendDefaults(e) {
            E(ec, e)
        }
        static get extendedDefaults() {
            return ec
        }
        static get defaults() {
            return eo
        }
        static installModule(e) {
            ep.prototype.__modules__ || (ep.prototype.__modules__ = []);
            let t = ep.prototype.__modules__;
            "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
        }
        static use(e) {
            return Array.isArray(e) ? e.forEach(e => ep.installModule(e)) : ep.installModule(e), ep
        }
    }
    Object.keys(ed).forEach(e => {
        Object.keys(ed[e]).forEach(t => {
            ep.prototype[t] = ed[e][t]
        })
    }), ep.use([function({
        swiper: e,
        on: t,
        emit: i
    }) {
        let s = w(),
            r = null,
            a = null,
            l = () => {
                e && !e.destroyed && e.initialized && (i("beforeResize"), i("resize"))
            },
            n = () => {
                e && !e.destroyed && e.initialized && i("orientationchange")
            };
        t("init", () => {
            e.params.resizeObserver && void 0 !== s.ResizeObserver ? e && !e.destroyed && e.initialized && (r = new ResizeObserver(t => {
                a = s.requestAnimationFrame(() => {
                    let {
                        width: i,
                        height: s
                    } = e, r = i, a = s;
                    t.forEach(({
                        contentBoxSize: t,
                        contentRect: i,
                        target: s
                    }) => {
                        s && s !== e.el || (r = i ? i.width : (t[0] || t).inlineSize, a = i ? i.height : (t[0] || t).blockSize)
                    }), (r !== i || a !== s) && l()
                })
            })).observe(e.el) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", n))
        }), t("destroy", () => {
            a && s.cancelAnimationFrame(a), r && r.unobserve && e.el && (r.unobserve(e.el), r = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", n)
        })
    }, function({
        swiper: e,
        extendParams: t,
        on: i,
        emit: s
    }) {
        let r = [],
            a = w(),
            l = (t, i = {}) => {
                let l = new(a.MutationObserver || a.WebkitMutationObserver)(t => {
                    if (e.__preventObserver__) return;
                    if (1 === t.length) return void s("observerUpdate", t[0]);
                    let i = function() {
                        s("observerUpdate", t[0])
                    };
                    a.requestAnimationFrame ? a.requestAnimationFrame(i) : a.setTimeout(i, 0)
                });
                l.observe(t, {
                    attributes: void 0 === i.attributes || i.attributes,
                    childList: e.isElement || (void 0 === i.childList || i).childList,
                    characterData: void 0 === i.characterData || i.characterData
                }), r.push(l)
            };
        t({
            observer: !1,
            observeParents: !1,
            observeSlideChildren: !1
        }), i("init", () => {
            if (e.params.observer) {
                if (e.params.observeParents) {
                    let t = _(e.hostEl);
                    for (let e = 0; e < t.length; e += 1) l(t[e])
                }
                l(e.hostEl, {
                    childList: e.params.observeSlideChildren
                }), l(e.wrapperEl, {
                    attributes: !1
                })
            }
        }), i("destroy", () => {
            r.forEach(e => {
                e.disconnect()
            }), r.splice(0, r.length)
        })
    }]);
    let eu = ["eventsPrefix", "injectStyles", "injectStylesUrls", "modules", "init", "_direction", "oneWayMovement", "swiperElementNodeName", "touchEventsTarget", "initialSlide", "_speed", "cssMode", "updateOnWindowResize", "resizeObserver", "nested", "focusableElements", "_enabled", "_width", "_height", "preventInteractionOnTransition", "userAgent", "url", "_edgeSwipeDetection", "_edgeSwipeThreshold", "_freeMode", "_autoHeight", "setWrapperSize", "virtualTranslate", "_effect", "breakpoints", "breakpointsBase", "_spaceBetween", "_slidesPerView", "maxBackfaceHiddenSlides", "_grid", "_slidesPerGroup", "_slidesPerGroupSkip", "_slidesPerGroupAuto", "_centeredSlides", "_centeredSlidesBounds", "_slidesOffsetBefore", "_slidesOffsetAfter", "normalizeSlideIndex", "_centerInsufficientSlides", "_snapToSlideEdge", "_watchOverflow", "roundLengths", "touchRatio", "touchAngle", "simulateTouch", "_shortSwipes", "_longSwipes", "longSwipesRatio", "longSwipesMs", "_followFinger", "allowTouchMove", "_threshold", "touchMoveStopPropagation", "touchStartPreventDefault", "touchStartForcePreventDefault", "touchReleaseOnEdges", "uniqueNavElements", "_resistance", "_resistanceRatio", "_watchSlidesProgress", "_grabCursor", "preventClicks", "preventClicksPropagation", "_slideToClickedSlide", "_loop", "loopAdditionalSlides", "loopAddBlankSlides", "loopPreventsSliding", "_rewind", "_allowSlidePrev", "_allowSlideNext", "_swipeHandler", "_noSwiping", "noSwipingClass", "noSwipingSelector", "passiveListeners", "containerModifierClass", "slideClass", "slideActiveClass", "slideVisibleClass", "slideFullyVisibleClass", "slideNextClass", "slidePrevClass", "slideBlankClass", "wrapperClass", "lazyPreloaderClass", "lazyPreloadPrevNext", "runCallbacksOnInit", "observer", "observeParents", "observeSlideChildren", "a11y", "_autoplay", "_controller", "coverflowEffect", "cubeEffect", "fadeEffect", "flipEffect", "creativeEffect", "cardsEffect", "hashNavigation", "history", "keyboard", "mousewheel", "_navigation", "_pagination", "parallax", "_scrollbar", "_thumbs", "virtual", "zoom", "control"];

    function eh(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1) && !e.__swiper__
    }

    function em(e, t) {
        let i = ["__proto__", "constructor", "prototype"];
        Object.keys(t).filter(e => 0 > i.indexOf(e)).forEach(i => {
            void 0 === e[i] ? e[i] = t[i] : eh(t[i]) && eh(e[i]) && Object.keys(t[i]).length > 0 ? t[i].__swiper__ ? e[i] = t[i] : em(e[i], t[i]) : e[i] = t[i]
        })
    }

    function ef(e = {}) {
        return e.navigation && void 0 === e.navigation.nextEl && void 0 === e.navigation.prevEl
    }

    function eg(e = {}) {
        return e.pagination && void 0 === e.pagination.el
    }

    function ev(e = {}) {
        return e.scrollbar && void 0 === e.scrollbar.el
    }

    function ew(e = "") {
        let t = e.split(" ").map(e => e.trim()).filter(e => !!e),
            i = [];
        return t.forEach(e => {
            0 > i.indexOf(e) && i.push(e)
        }), i.join(" ")
    }

    function eb() {
        return (eb = Object.assign.bind()).apply(this, arguments)
    }

    function ey(e) {
        return e.type && e.type.displayName && e.type.displayName.includes("SwiperSlide")
    }

    function ex(e, t) {
        return "u" < typeof window ? (0, l.useEffect)(e, t) : (0, l.useLayoutEffect)(e, t)
    }
    let eS = (0, l.createContext)(null),
        eE = (0, l.createContext)(null),
        eT = (0, l.forwardRef)(({
            className: e,
            tag: t = "div",
            wrapperTag: i = "div",
            children: s,
            onSwiper: r,
            ...a
        } = {}, n) => {
            let o, d, c = !1,
                [p, u] = (0, l.useState)("swiper"),
                [h, m] = (0, l.useState)(null),
                [f, g] = (0, l.useState)(!1),
                v = (0, l.useRef)(!1),
                w = (0, l.useRef)(null),
                b = (0, l.useRef)(null),
                y = (0, l.useRef)(null),
                x = (0, l.useRef)(null),
                S = (0, l.useRef)(null),
                E = (0, l.useRef)(null),
                T = (0, l.useRef)(null),
                C = (0, l.useRef)(null),
                {
                    params: M,
                    passedParams: P,
                    rest: L,
                    events: k
                } = function(e = {}, t = !0) {
                    let i = {
                            on: {}
                        },
                        s = {},
                        r = {};
                    em(i, eo), i._emitClasses = !0, i.init = !1;
                    let a = {},
                        l = eu.map(e => e.replace(/_/, ""));
                    return Object.keys(Object.assign({}, e)).forEach(n => {
                        void 0 !== e[n] && (l.indexOf(n) >= 0 ? eh(e[n]) ? (i[n] = {}, r[n] = {}, em(i[n], e[n]), em(r[n], e[n])) : (i[n] = e[n], r[n] = e[n]) : 0 === n.search(/on[A-Z]/) && "function" == typeof e[n] ? t ? s[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : i.on[`${n[2].toLowerCase()}${n.substr(3)}`] = e[n] : a[n] = e[n])
                    }), ["navigation", "pagination", "scrollbar"].forEach(e => {
                        !0 === i[e] && (i[e] = {}), !1 === i[e] && delete i[e]
                    }), {
                        params: i,
                        passedParams: r,
                        rest: a,
                        events: s
                    }
                }(a),
                {
                    slides: O,
                    slots: I
                } = (o = [], d = {
                    "container-start": [],
                    "container-end": [],
                    "wrapper-start": [],
                    "wrapper-end": []
                }, l.default.Children.toArray(s).forEach(e => {
                    if (ey(e)) o.push(e);
                    else if (e.props && e.props.slot && d[e.props.slot]) d[e.props.slot].push(e);
                    else if (e.props && e.props.children) {
                        let t = function e(t) {
                            let i = [];
                            return l.default.Children.toArray(t).forEach(t => {
                                ey(t) ? i.push(t) : t.props && t.props.children && e(t.props.children).forEach(e => i.push(e))
                            }), i
                        }(e.props.children);
                        t.length > 0 ? t.forEach(e => o.push(e)) : d["container-end"].push(e)
                    } else d["container-end"].push(e)
                }), {
                    slides: o,
                    slots: d
                }),
                _ = () => {
                    g(!f)
                };
            Object.assign(M.on, {
                _containerClasses(e, t) {
                    u(t)
                }
            });
            let A = () => {
                Object.assign(M.on, k), c = !0;
                let e = { ...M
                };
                if (delete e.wrapperClass, b.current = new ep(e), b.current.virtual && b.current.params.virtual.enabled) {
                    b.current.virtual.slides = O;
                    let e = {
                        cache: !1,
                        slides: O,
                        renderExternal: m,
                        renderExternalUpdate: !1
                    };
                    em(b.current.params.virtual, e), em(b.current.originalParams.virtual, e)
                }
            };
            return w.current || A(), b.current && b.current.on("_beforeBreakpoint", _), (0, l.useEffect)(() => () => {
                b.current && b.current.off("_beforeBreakpoint", _)
            }), (0, l.useEffect)(() => {
                !v.current && b.current && (b.current.emitSlidesClasses(), v.current = !0)
            }), ex(() => {
                if (n && (n.current = w.current), w.current) return b.current.destroyed && A(), ! function({
                    el: e,
                    nextEl: t,
                    prevEl: i,
                    paginationEl: s,
                    scrollbarEl: r,
                    swiper: a
                }, l) {
                    ef(l) && t && i && (a.params.navigation.nextEl = t, a.originalParams.navigation.nextEl = t, a.params.navigation.prevEl = i, a.originalParams.navigation.prevEl = i), eg(l) && s && (a.params.pagination.el = s, a.originalParams.pagination.el = s), ev(l) && r && (a.params.scrollbar.el = r, a.originalParams.scrollbar.el = r), a.init(e)
                }({
                    el: w.current,
                    nextEl: S.current,
                    prevEl: E.current,
                    paginationEl: T.current,
                    scrollbarEl: C.current,
                    swiper: b.current
                }, M), r && !b.current.destroyed && r(b.current), () => {
                    b.current && !b.current.destroyed && b.current.destroy(!0, !1)
                }
            }, []), ex(() => {
                !c && k && b.current && Object.keys(k).forEach(e => {
                    b.current.on(e, k[e])
                });
                let e = function(e, t, i, s, r) {
                    let a = [];
                    if (!t) return a;
                    let l = e => {
                        0 > a.indexOf(e) && a.push(e)
                    };
                    if (i && s) {
                        let e = s.map(r),
                            t = i.map(r);
                        e.join("") !== t.join("") && l("children"), s.length !== i.length && l("children")
                    }
                    return eu.filter(e => "_" === e[0]).map(e => e.replace(/_/, "")).forEach(i => {
                        if (i in e && i in t)
                            if (eh(e[i]) && eh(t[i])) {
                                let s = Object.keys(e[i]),
                                    r = Object.keys(t[i]);
                                s.length !== r.length ? l(i) : (s.forEach(s => {
                                    e[i][s] !== t[i][s] && l(i)
                                }), r.forEach(s => {
                                    e[i][s] !== t[i][s] && l(i)
                                }))
                            } else e[i] !== t[i] && l(i)
                    }), a
                }(P, y.current, O, x.current, e => e.key);
                return y.current = P, x.current = O, e.length && b.current && !b.current.destroyed && function({
                    swiper: e,
                    slides: t,
                    passedParams: i,
                    changedParams: s,
                    nextEl: r,
                    prevEl: a,
                    scrollbarEl: l,
                    paginationEl: n
                }) {
                    let o, d, c, p, u, h, m, f, g = s.filter(e => "children" !== e && "direction" !== e && "wrapperClass" !== e),
                        {
                            params: v,
                            pagination: w,
                            navigation: b,
                            scrollbar: y,
                            virtual: x,
                            thumbs: S
                        } = e;
                    s.includes("thumbs") && i.thumbs && i.thumbs.swiper && !i.thumbs.swiper.destroyed && v.thumbs && (!v.thumbs.swiper || v.thumbs.swiper.destroyed) && (o = !0), s.includes("controller") && i.controller && i.controller.control && v.controller && !v.controller.control && (d = !0), s.includes("pagination") && i.pagination && (i.pagination.el || n) && (v.pagination || !1 === v.pagination) && w && !w.el && (c = !0), s.includes("scrollbar") && i.scrollbar && (i.scrollbar.el || l) && (v.scrollbar || !1 === v.scrollbar) && y && !y.el && (p = !0), s.includes("navigation") && i.navigation && (i.navigation.prevEl || a) && (i.navigation.nextEl || r) && (v.navigation || !1 === v.navigation) && b && !b.prevEl && !b.nextEl && (u = !0);
                    let E = t => {
                        e[t] && (e[t].destroy(), "navigation" === t ? (e.isElement && (e[t].prevEl.remove(), e[t].nextEl.remove()), v[t].prevEl = void 0, v[t].nextEl = void 0, e[t].prevEl = void 0, e[t].nextEl = void 0) : (e.isElement && e[t].el.remove(), v[t].el = void 0, e[t].el = void 0))
                    };
                    s.includes("loop") && e.isElement && (v.loop && !i.loop ? h = !0 : !v.loop && i.loop ? m = !0 : f = !0), g.forEach(e => {
                        if (eh(v[e]) && eh(i[e])) Object.assign(v[e], i[e]), ("navigation" === e || "pagination" === e || "scrollbar" === e) && "enabled" in i[e] && !i[e].enabled && E(e);
                        else {
                            let t = i[e];
                            (!0 === t || !1 === t) && ("navigation" === e || "pagination" === e || "scrollbar" === e) ? !1 === t && E(e): v[e] = i[e]
                        }
                    }), g.includes("controller") && !d && e.controller && e.controller.control && v.controller && v.controller.control && (e.controller.control = v.controller.control), s.includes("children") && t && x && v.virtual.enabled ? (x.slides = t, x.update(!0)) : s.includes("virtual") && x && v.virtual.enabled && (t && (x.slides = t), x.update(!0)), s.includes("children") && t && v.loop && (f = !0), o && S.init() && S.update(!0), d && (e.controller.control = v.controller.control), c && (e.isElement && (!n || "string" == typeof n) && ((n = document.createElement("div")).classList.add("swiper-pagination"), n.part.add("pagination"), e.el.appendChild(n)), n && (v.pagination.el = n), w.init(), w.render(), w.update()), p && (e.isElement && (!l || "string" == typeof l) && ((l = document.createElement("div")).classList.add("swiper-scrollbar"), l.part.add("scrollbar"), e.el.appendChild(l)), l && (v.scrollbar.el = l), y.init(), y.updateSize(), y.setTranslate()), u && (e.isElement && (r && "string" != typeof r || ((r = document.createElement("div")).classList.add("swiper-button-next"), N(r, e.navigation.arrowSvg), r.part.add("button-next"), e.el.appendChild(r)), a && "string" != typeof a || ((a = document.createElement("div")).classList.add("swiper-button-prev"), N(a, e.navigation.arrowSvg), a.part.add("button-prev"), e.el.appendChild(a))), r && (v.navigation.nextEl = r), a && (v.navigation.prevEl = a), b.init(), b.update()), s.includes("allowSlideNext") && (e.allowSlideNext = i.allowSlideNext), s.includes("allowSlidePrev") && (e.allowSlidePrev = i.allowSlidePrev), s.includes("direction") && e.changeDirection(i.direction, !1), (h || f) && e.loopDestroy(), (m || f) && e.loopCreate(), e.update()
                }({
                    swiper: b.current,
                    slides: O,
                    passedParams: P,
                    changedParams: e,
                    nextEl: S.current,
                    prevEl: E.current,
                    scrollbarEl: C.current,
                    paginationEl: T.current
                }), () => {
                    k && b.current && Object.keys(k).forEach(e => {
                        b.current.off(e, k[e])
                    })
                }
            }), ex(() => {
                var e;
                (e = b.current) && !e.destroyed && e.params.virtual && (!e.params.virtual || e.params.virtual.enabled) && (e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.emit("_virtualUpdated"), e.parallax && e.params.parallax && e.params.parallax.enabled && e.parallax.setTranslate())
            }, [h]), l.default.createElement(t, eb({
                ref: w,
                className: ew(`${p}${e?` ${e}`:""}`)
            }, L), l.default.createElement(eE.Provider, {
                value: b.current
            }, I["container-start"], l.default.createElement(i, {
                className: function(e = "") {
                    return e ? e.includes("swiper-wrapper") ? e : `swiper-wrapper ${e}` : "swiper-wrapper"
                }(M.wrapperClass)
            }, I["wrapper-start"], M.virtual ? function(e, t, i) {
                if (!i) return null;
                let s = e => {
                        let i = e;
                        return e < 0 ? i = t.length + e : i >= t.length && (i -= t.length), i
                    },
                    r = e.isHorizontal() ? {
                        [e.rtlTranslate ? "right" : "left"]: `${i.offset}px`
                    } : {
                        top: `${i.offset}px`
                    },
                    {
                        from: a,
                        to: n
                    } = i,
                    o = e.params.loop ? -t.length : 0,
                    d = e.params.loop ? 2 * t.length : t.length,
                    c = [];
                for (let e = o; e < d; e += 1) e >= a && e <= n && c.push(t[s(e)]);
                return c.map((t, i) => l.default.cloneElement(t, {
                    swiper: e,
                    style: r,
                    key: t.props.virtualIndex || t.key || `slide-${i}`
                }))
            }(b.current, O, h) : O.map((e, t) => l.default.cloneElement(e, {
                swiper: b.current,
                swiperSlideIndex: t
            })), I["wrapper-end"]), ef(M) && l.default.createElement(l.default.Fragment, null, l.default.createElement("div", {
                ref: E,
                className: "swiper-button-prev"
            }), l.default.createElement("div", {
                ref: S,
                className: "swiper-button-next"
            })), ev(M) && l.default.createElement("div", {
                ref: C,
                className: "swiper-scrollbar"
            }), eg(M) && l.default.createElement("div", {
                ref: T,
                className: "swiper-pagination"
            }), I["container-end"]))
        });
    eT.displayName = "Swiper";
    let eC = (0, l.forwardRef)(({
        tag: e = "div",
        children: t,
        className: i = "",
        swiper: s,
        zoom: r,
        lazy: a,
        virtualIndex: n,
        swiperSlideIndex: o,
        ...d
    } = {}, c) => {
        let p = (0, l.useRef)(null),
            [u, h] = (0, l.useState)("swiper-slide"),
            [m, f] = (0, l.useState)(!1);

        function g(e, t, i) {
            t === p.current && h(i)
        }
        ex(() => {
            if (void 0 !== o && (p.current.swiperSlideIndex = o), c && (c.current = p.current), p.current && s) {
                if (s.destroyed) {
                    "swiper-slide" !== u && h("swiper-slide");
                    return
                }
                return s.on("_slideClass", g), () => {
                    s && s.off("_slideClass", g)
                }
            }
        }), ex(() => {
            s && p.current && !s.destroyed && h(s.getSlideClasses(p.current))
        }, [s]);
        let v = {
                isActive: u.indexOf("swiper-slide-active") >= 0,
                isVisible: u.indexOf("swiper-slide-visible") >= 0,
                isFullyVisible: u.indexOf("swiper-slide-fully-visible") >= 0,
                isPrev: u.indexOf("swiper-slide-prev") >= 0,
                isNext: u.indexOf("swiper-slide-next") >= 0
            },
            w = () => "function" == typeof t ? t(v) : t;
        return l.default.createElement(e, eb({
            ref: p,
            className: ew(`${u}${i?` ${i}`:""}`),
            "data-swiper-slide-index": n,
            onLoad: () => {
                f(!0)
            }
        }, d), r && l.default.createElement(eS.Provider, {
            value: v
        }, l.default.createElement("div", {
            className: "swiper-zoom-container",
            "data-swiper-zoom": "number" == typeof r ? r : void 0
        }, w(), a && !m && l.default.createElement("div", {
            className: "swiper-lazy-preloader",
            ref: e => {
                e && (e.lazyPreloaderManaged = !0)
            }
        }))), !r && l.default.createElement(eS.Provider, {
            value: v
        }, w(), a && !m && l.default.createElement("div", {
            className: "swiper-lazy-preloader",
            ref: e => {
                e && (e.lazyPreloaderManaged = !0)
            }
        })))
    });
    eC.displayName = "SwiperSlide";
    var eM = e.i(42163),
        eP = e.i(89970),
        eL = e.i(83495);
    eP.default.registerPlugin(eL.ScrollTrigger);
    let ek = () => (0, r.jsx)("svg", {
            width: "14",
            height: "6",
            viewBox: "0 0 14 6",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-3.5 h-1.5",
            children: (0, r.jsx)("path", {
                d: "M3.66 5.58C3.48667 5.18 3.30667 4.82667 3.12 4.52C2.93333 4.2 2.74667 3.92667 2.56 3.7H13.94V2.62H2.56C2.74667 2.38 2.93333 2.10667 3.12 1.8C3.30667 1.48 3.48667 1.12667 3.66 0.739999H2.72C1.88 1.71333 0.993333 2.43333 0.0599988 2.9V3.42C0.993333 3.87333 1.88 4.59333 2.72 5.58H3.66Z",
                fill: "#434343"
            })
        }),
        eO = () => (0, r.jsx)("svg", {
            width: "14",
            height: "6",
            viewBox: "0 0 14 6",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-3.5 h-1.5",
            children: (0, r.jsx)("path", {
                d: "M10.34 5.58C10.5133 5.18 10.6933 4.82667 10.88 4.52C11.0667 4.2 11.2533 3.92667 11.44 3.7H0.0600002V2.62H11.44C11.2533 2.38 11.0667 2.10667 10.88 1.8C10.6933 1.48 10.5133 1.12667 10.34 0.739999H11.28C12.12 1.71333 13.0067 2.43333 13.94 2.9V3.42C13.0067 3.87333 12.12 4.59333 11.28 5.58H10.34Z",
                fill: "#434343"
            })
        });
    e.s(["default", 0, function({
        customClass: e,
        swiperOptions: t = {},
        showBottomLine: i = !1
    }) {
        let s = (0, l.useRef)(null),
            [h, m] = (0, l.useState)(0),
            [f, g] = (0, l.useState)(null),
            v = () => {
                g(null), window.dispatchEvent(new Event("trionn-modal:close"))
            },
            w = (0, l.useCallback)(e => {
                m(e.realIndex)
            }, []),
            y = (0, l.useCallback)(e => {
                s.current ? .slideToLoop(e)
            }, []);
        return (0, r.jsxs)("section", {
            id: "testimonials",
            className: "relative z-20 min-h-dvh bg-[linear-gradient(0deg,#C3C3C3_0%,#FFFFFF_100%)] overflow-hidden",
            children: [(0, r.jsxs)("div", {
                className: "tr__container min-h-dvh py-20 lg:py-37.5",
                children: [(0, r.jsxs)("div", {
                    className: "grid grid-cols-12 gap-6",
                    children: [(0, r.jsx)(c.BlurTextReveal, {
                        as: "h2",
                        text: "Client stories",
                        animationType: "chars",
                        stagger: .05,
                        className: "text-dark-font col-span-12 sm:col-span-6 lg:col-span-5 lg:col-start-2"
                    }), (0, r.jsx)("div", {
                        className: "col-span-12 sm:col-span-6 lg:col-span-5 flex flex-col justify-end",
                        children: (0, r.jsx)(p.FadeInOnScroll, {
                            delay: .3,
                            children: (0, r.jsxs)("p", {
                                className: "small text-dark-font",
                                children: ["Great work is built through ", (0, r.jsx)("br", {}), "partnership. Here's what ", (0, r.jsx)("br", {}), "our clients say."]
                            })
                        })
                    })]
                }), (0, r.jsx)("div", {
                    className: "grid grid-cols-12 gap-6",
                    children: (0, r.jsx)(d.default, {
                        customClass: "my-10 lg:my-20 col-span-12 lg:col-span-10! lg:col-start-2!",
                        lineClass: "bg-grey-line/15 left-1/2! -translate-x-1/2",
                        plusClass: "col-span-12 mx-auto",
                        iconColor: "#272727"
                    })
                }), (0, r.jsxs)("div", {
                    className: "w-full relative grid grid-cols-12 gap-6 ",
                    children: [(0, r.jsxs)("div", {
                        className: "flex flex-col justify-between col-span-12 md:col-span-6 lg:col-span-5 lg:col-start-2 order-2 md:order-1",
                        children: [(0, r.jsx)("div", {
                            className: "testimonial-company-list flex-col gap-4 hidden md:flex",
                            children: eM.TestimonialsData.map((e, t) => (0, r.jsxs)("button", {
                                type: "button",
                                onClick: () => y(t),
                                "aria-current": h === t ? "true" : void 0,
                                "aria-label": `Show testimonial from ${e.companyName}`,
                                className: `title flex gap-4 items-center text-left transition-all duration-500 ease-in-out text-dark-font bg-transparent border-0 p-0 cursor-pointer ${h===t?"opacity-100":"opacity-30 hover:opacity-100"}`,
                                children: [e.companyName, (0, r.jsx)("span", {
                                    className: `icon shrink-0 transition-opacity duration-500 ${h===t?"opacity-100":"opacity-0"}`,
                                    "aria-hidden": !0,
                                    children: (0, r.jsx)("svg", {
                                        width: "10",
                                        height: "9",
                                        viewBox: "0 0 10 9",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        className: "w-2.5 h-2.5",
                                        children: (0, r.jsx)("path", {
                                            d: "M5.47399 8.65203V6.55203L8.32999 3.75203V4.90003L5.47399 2.10003V2.74181e-05L9.32399 3.83603V4.81603L5.47399 8.65203ZM-6.57886e-06 5.11003V3.54203H8.60999V5.11003H-6.57886e-06Z",
                                            fill: "currentColor"
                                        })
                                    })
                                })]
                            }, e.companyName))
                        }), (0, r.jsxs)("div", {
                            className: "flex",
                            children: [(0, r.jsxs)("div", {
                                className: "js-testimonials-prev custom-arrow left cursor-pointer select-none",
                                children: [(0, r.jsx)("div", {
                                    className: "arrow-icon first",
                                    children: (0, r.jsx)(ek, {})
                                }), (0, r.jsx)("div", {
                                    className: "arrow-icon second",
                                    children: (0, r.jsx)(ek, {})
                                })]
                            }), (0, r.jsxs)("div", {
                                className: "js-testimonials-next custom-arrow right -ml-px cursor-pointer select-none",
                                children: [(0, r.jsx)("div", {
                                    className: "arrow-icon first",
                                    children: (0, r.jsx)(eO, {})
                                }), (0, r.jsx)("div", {
                                    className: "arrow-icon second",
                                    children: (0, r.jsx)(eO, {})
                                })]
                            })]
                        })]
                    }), (0, r.jsxs)("div", {
                        className: "col-span-12 md:col-span-6 lg:col-span-5 order-1 md:order-2 mb-10 md:mb-0",
                        children: [(0, r.jsx)(eT, { ...t,
                            modules: [B, V, b, j],
                            effect: "fade",
                            fadeEffect: {
                                crossFade: !0
                            },
                            speed: 600,
                            autoplay: {
                                delay: 5e3,
                                disableOnInteraction: !1,
                                pauseOnMouseEnter: !0
                            },
                            loop: !0,
                            onSlideChange: w,
                            onSwiper: e => {
                                s.current = e
                            },
                            navigation: {
                                prevEl: ".js-testimonials-prev",
                                nextEl: ".js-testimonials-next"
                            },
                            className: `swiper-row mx-0! md:max-w-203 ${e||""}`,
                            children: eM.TestimonialsData.map((e, t) => (0, r.jsx)(eC, {
                                className: "testimonial-slide h-auto! text-dark-font",
                                children: (0, r.jsxs)("div", {
                                    className: "testimonial-item gap-x-6 h-full",
                                    children: [(0, r.jsx)("span", {
                                        className: "block md:hidden title mb-6",
                                        children: e.companyName
                                    }), (0, r.jsxs)("div", {
                                        className: "flex flex-col justify-between",
                                        children: [(0, r.jsx)("h3", {
                                            className: "mb-10 md:mb-20",
                                            children: e.quoteMessage
                                        }), (0, r.jsxs)("div", {
                                            className: "client-info flex justify-between items-end",
                                            children: [(0, r.jsxs)("div", {
                                                className: "left-block flex items-end",
                                                children: [(0, r.jsx)("div", {
                                                    className: "w-14 h-14 md:w-20 md:h-20 overflow-hidden rounded-sm relative transition-all duration-300 ease-in-out mr-4 md:mr-6",
                                                    children: (0, r.jsx)(a.default, {
                                                        src: e.clientImage,
                                                        alt: e.companyName,
                                                        width: 80,
                                                        height: 80,
                                                        className: "absolute w-full h-full object-cover object-center top-0 left-0"
                                                    })
                                                }), (0, r.jsxs)("div", {
                                                    className: "flex flex-col",
                                                    children: [(0, r.jsx)("p", {
                                                        className: "md:mb-1 small",
                                                        children: e.clientName
                                                    }), (0, r.jsx)("p", {
                                                        className: "opacity-60 small",
                                                        children: e.clientDeg
                                                    })]
                                                })]
                                            }), e.videoURL && (0, r.jsx)("div", {
                                                className: "right-block transition-all duration-300 ease-in-out",
                                                children: (0, r.jsxs)("button", {
                                                    type: "button",
                                                    onClick: () => {
                                                        g(e.videoURL), window.dispatchEvent(new Event("trionn-modal:open"))
                                                    },
                                                    className: "flex items-center button-text uppercase text-dark-font bg-transparent border-0 p-0 cursor-pointer",
                                                    children: ["▷ ", (0, r.jsx)(u.HoverBlur, {
                                                        children: "Listen to him!"
                                                    })]
                                                })
                                            })]
                                        })]
                                    })]
                                })
                            }, t))
                        }), (0, r.jsx)("div", {
                            className: "mt-10 md:mt-25",
                            children: (0, r.jsx)(o.ContactCTA, {
                                text: "become a client"
                            })
                        })]
                    })]
                })]
            }), f && (0, n.createPortal)((0, r.jsx)("div", {
                className: "fixed inset-0 z-9999 flex items-center justify-center bg-black/80",
                onClick: v,
                children: (0, r.jsxs)("div", {
                    className: "relative w-full max-w-4xl mx-6 aspect-video",
                    onClick: e => e.stopPropagation(),
                    children: [(0, r.jsx)("button", {
                        type: "button",
                        onClick: v,
                        className: "absolute -top-10 right-0 text-white text-sm uppercase tracking-widest bg-transparent border-0 cursor-pointer",
                        children: "Close ✕"
                    }), (0, r.jsx)("iframe", {
                        src: f,
                        className: "w-full h-full",
                        allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                        allowFullScreen: !0
                    })]
                })
            }), document.body), i && (0, r.jsx)("div", {
                className: "tr__container z-0",
                children: (0, r.jsx)(d.default, {
                    lineClass: "bg-grey-line/15 left-1/2! -translate-x-1/2",
                    plusClass: "col-span-12 mx-auto",
                    iconColor: "#272727"
                })
            })]
        })
    }], 30133)
}]);