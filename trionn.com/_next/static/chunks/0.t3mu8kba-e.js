(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 68479, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645),
        n = e.i(57688),
        a = e.i(18566);
    e.i(11303);
    var s = e.i(31462);
    e.i(83390);
    var o = e.i(34470),
        l = e.i(42163);

    function i() {
        let e = (0, a.usePathname)(),
            r = {
                "/": "Home",
                "/about": "About",
                "/work": "Our Work",
                "/services": "Services",
                "/trionn-story": "Trionn Name Story"
            };
        return (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
                className: "menu-wrapper",
                children: (0, t.jsx)("ul", {
                    className: "flex flex-col md:flex-row items-center justify-end gap-2 md:gap-x-6",
                    children: l.menu.map((n, a) => {
                        let l = e === n.url;
                        return (0, t.jsx)("li", {
                            className: "menu-item",
                            children: (0, t.jsx)(s.TransitionLink, {
                                className: `menu block uppercase text-white ${l?"active":""}`,
                                href: n.url,
                                transitionLabel: n.title || r[n.url],
                                children: (0, t.jsx)(o.HoverBlur, {
                                    children: n.title
                                })
                            })
                        }, a)
                    })
                })
            })
        })
    }
    var c = e.i(42936),
        d = e.i(10830);

    function u() {
        let {
            soundEnabled: e,
            toggleSound: r
        } = (0, c.useSiteSound)();
        return (0, t.jsx)("button", {
            type: "button",
            id: "sound-toggle",
            onClick: () => {
                e || (0, d.primeRoboticSpeech)(), r()
            },
            title: e ? "Mute sound" : "Enable sound",
            "aria-pressed": e ? "true" : "false",
            "aria-label": e ? "Mute sound" : "Enable sound",
            className: "flex h-8 w-8 shrink-0 cursor-pointer items-center justify-center bg-[#D9D9D9]/10 transition-all hover:bg-[#D9D9D9]/20 text-white rounded-full z-30 ease-in-out duration-500",
            suppressHydrationWarning: !0,
            children: e ? (0, t.jsx)(h, {}) : (0, t.jsx)(p, {})
        })
    }

    function h() {
        return (0, t.jsxs)("svg", {
            width: "16",
            height: "14",
            viewBox: "0 0 16 14",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-4 h-3.5",
            children: [(0, t.jsx)("path", {
                d: "M13.7223 1.45716C13.5773 1.31116 13.3425 1.31116 13.1975 1.45716C13.0526 1.60326 13.0526 1.84007 13.1975 1.98617C14.5261 3.32546 15.2578 5.10621 15.2578 7.00034C15.2578 8.89447 14.5261 10.6752 13.1975 12.0145C13.0526 12.1606 13.0526 12.3974 13.1975 12.5435C13.27 12.6165 13.365 12.6531 13.4599 12.6531C13.5548 12.6531 13.6498 12.6165 13.7223 12.5435C15.1909 11.0629 15.9998 9.09428 15.9998 7.00034C15.9998 4.90641 15.1909 2.9378 13.7223 1.45716Z",
                fill: "currentColor"
            }), (0, t.jsx)("path", {
                d: "M12.1651 4.03432C12.0203 3.88832 11.7853 3.88826 11.6404 4.03437C11.4955 4.18042 11.4955 4.41723 11.6404 4.56333C12.2848 5.21289 12.6396 6.07801 12.6396 6.99943C12.6396 7.92084 12.2848 8.78596 11.6404 9.43552C11.4955 9.58162 11.4955 9.81842 11.6404 9.96448C11.7129 10.0375 11.8078 10.0741 11.9028 10.0741C11.9977 10.0741 12.0927 10.0375 12.1651 9.96453C12.9496 9.17367 13.3817 8.12065 13.3817 6.99943C13.3817 5.8782 12.9496 4.82519 12.1651 4.03432Z",
                fill: "currentColor"
            }), (0, t.jsx)("path", {
                d: "M9.40909 0.0603026C9.20504 -0.0396761 8.96751 -0.0139545 8.78915 0.127196C8.7891 0.127248 8.7891 0.127247 8.7891 0.127247L4.5934 3.45119L4.38994 3.61238V6.99429C4.38994 7.20824 4.21789 7.38169 4.00566 7.38169C3.79344 7.38169 3.62139 7.20824 3.62139 6.99429V3.62231H1.05146C0.471695 3.62231 0 4.09784 0 4.68233V9.3176C0 9.90214 0.471695 10.3777 1.05146 10.3777H3.95735H4.37739L4.59339 10.5488L7.27858 12.676V10.051C7.27858 9.83708 7.45063 9.66364 7.66285 9.66364C7.87508 9.66364 8.04712 9.83708 8.04712 10.051V13.2849L8.78909 13.8727C8.89536 13.9568 9.02259 14 9.15127 14C9.23859 14 9.32658 13.9801 9.40904 13.9397C9.61307 13.8398 9.73984 13.6356 9.73984 13.4069V0.593075C9.73984 0.36442 9.61313 0.16023 9.40909 0.0603026Z",
                fill: "currentColor"
            })]
        })
    }

    function p() {
        return (0, t.jsxs)("svg", {
            width: "16",
            height: "15",
            viewBox: "0 0 16 15",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            className: "w-4 h-3.5",
            children: [(0, t.jsxs)("g", {
                opacity: "0.4",
                children: [(0, t.jsx)("path", {
                    d: "M13.7223 1.45716C13.5773 1.31116 13.3425 1.31116 13.1975 1.45716C13.0526 1.60326 13.0526 1.84007 13.1975 1.98617C14.5261 3.32546 15.2578 5.10621 15.2578 7.00034C15.2578 8.89447 14.5261 10.6752 13.1975 12.0145C13.0526 12.1606 13.0526 12.3974 13.1975 12.5435C13.27 12.6165 13.365 12.6531 13.4599 12.6531C13.5548 12.6531 13.6498 12.6165 13.7223 12.5435C15.1909 11.0629 15.9998 9.09428 15.9998 7.00034C15.9998 4.90641 15.1909 2.9378 13.7223 1.45716Z",
                    fill: "currentColor"
                }), (0, t.jsx)("path", {
                    d: "M12.1651 4.03432C12.0203 3.88832 11.7853 3.88826 11.6404 4.03437C11.4955 4.18042 11.4955 4.41723 11.6404 4.56333C12.2848 5.21289 12.6396 6.07801 12.6396 6.99943C12.6396 7.92084 12.2848 8.78596 11.6404 9.43552C11.4955 9.58162 11.4955 9.81842 11.6404 9.96448C11.7129 10.0375 11.8078 10.0741 11.9028 10.0741C11.9977 10.0741 12.0927 10.0375 12.1651 9.96453C12.9496 9.17367 13.3817 8.12065 13.3817 6.99943C13.3817 5.8782 12.9496 4.82519 12.1651 4.03432Z",
                    fill: "currentColor"
                }), (0, t.jsx)("path", {
                    d: "M9.40909 0.0603026C9.20504 -0.0396761 8.96751 -0.0139545 8.78915 0.127196C8.7891 0.127248 8.7891 0.127247 8.7891 0.127247L4.5934 3.45119L4.38994 3.61238V6.99429C4.38994 7.20824 4.21789 7.38169 4.00566 7.38169C3.79344 7.38169 3.62139 7.20824 3.62139 6.99429V3.62231H1.05146C0.471695 3.62231 0 4.09784 0 4.68233V9.3176C0 9.90214 0.471695 10.3777 1.05146 10.3777H3.95735H4.37739L4.59339 10.5488L7.27858 12.676V10.051C7.27858 9.83708 7.45063 9.66364 7.66285 9.66364C7.87508 9.66364 8.04712 9.83708 8.04712 10.051V13.2849L8.78909 13.8727C8.89536 13.9568 9.02259 14 9.15127 14C9.23859 14 9.32658 13.9801 9.40904 13.9397C9.61307 13.8398 9.73984 13.6356 9.73984 13.4069V0.593075C9.73984 0.36442 9.61313 0.16023 9.40909 0.0603026Z",
                    fill: "currentColor"
                })]
            }), (0, t.jsx)("line", {
                x1: "15",
                y1: "0.707595",
                x2: "1.70711",
                y2: "14.0005",
                stroke: "currentColor",
                strokeOpacity: "0.6",
                strokeLinecap: "round"
            })]
        })
    }
    var f = e.i(89970),
        m = e.i(65747),
        D = e.i(70221),
        x = e.i(22016);
    e.i(52819);
    var v = e.i(36497);

    function g(e) {
        let t = e.trim();
        return t.endsWith(".") ? t : `${t}.`
    }
    f.default.registerPlugin(m.useGSAP), e.s(["default", 0, function({
        data: e
    }) {
        let [c, d] = (0, r.useState)(!1);
        (0, a.usePathname)();
        let {
            open: h
        } = (0, v.useContactPopup)(), p = (0, r.useRef)(null), w = (0, r.useRef)(null), k = (0, r.useRef)(null), M = (0, r.useRef)(null), y = (0, r.useRef)(null), b = (0, r.useRef)(null), H = (0, r.useRef)(null), j = (0, r.useRef)(null), C = (0, r.useRef)(null), T = (0, r.useRef)(null);
        (0, m.useGSAP)(() => {
            let e = f.default.matchMedia();
            return [y.current, b.current, H.current, j.current].forEach(e => {
                if (!e) return;
                let t = e.getTotalLength();
                f.default.set(e, {
                    strokeDasharray: t,
                    strokeDashoffset: 0
                })
            }), [H.current, j.current].forEach(e => {
                if (!e) return;
                let t = e.getTotalLength();
                f.default.set(e, {
                    strokeDashoffset: t
                })
            }), e.add("(min-width: 768px)", () => {
                C.current = f.default.timeline({
                    paused: !0
                }).to(k.current, {
                    autoAlpha: 1,
                    duration: 0
                }, 0).fromTo(w.current, {
                    clipPath: "circle(0% at 95% 5%)",
                    scale: .9,
                    rotation: 2,
                    autoAlpha: 0
                }, {
                    clipPath: "circle(150% at 0% 5%)",
                    scale: 1,
                    rotation: 0,
                    duration: 1.2,
                    autoAlpha: 1,
                    ease: "expo.inOut"
                }, 0).fromTo(".desktop-menu-inner .menu-item", {
                    y: 20,
                    autoAlpha: 0
                }, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .8,
                    stagger: .1,
                    ease: "power2.out"
                }, "<0.6").fromTo(".desktop-menu-inner .bottom-stagger-item", {
                    y: 20,
                    autoAlpha: 0
                }, {
                    y: 0,
                    autoAlpha: 1,
                    duration: .5,
                    stagger: .08,
                    ease: "power2.out"
                }, "<0.6")
            }), e.add("(max-width: 767px)", () => {
                C.current = f.default.timeline({
                    paused: !0
                }).to(y.current, {
                    duration: .3,
                    strokeDashoffset: (e, t) => t.getTotalLength(),
                    ease: "power2.inOut"
                }, 0).to(b.current, {
                    duration: .3,
                    strokeDashoffset: (e, t) => t.getTotalLength(),
                    ease: "power2.inOut"
                }, .05).set([H.current, j.current], {
                    opacity: 1
                }, .2).to(H.current, {
                    duration: .3,
                    strokeDashoffset: 0,
                    ease: "power2.out"
                }, .2).to(j.current, {
                    duration: .3,
                    strokeDashoffset: 0,
                    ease: "power2.out"
                }, .25).fromTo(M.current, {
                    x: "100%"
                }, {
                    duration: .8,
                    x: "0%",
                    ease: "expo.inOut"
                }, 0).fromTo(".mobile-menu-inner .menu-item", {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .8,
                    stagger: .1,
                    ease: "power2.out"
                }, .4).fromTo(".mobile-menu-inner .header-menu-line .line", {
                    width: "0%"
                }, {
                    duration: .8,
                    width: "100%",
                    ease: "expo.out"
                }, "<0.4").fromTo(".mobile-menu-inner .bottom-stagger-item", {
                    y: 20,
                    opacity: 0
                }, {
                    y: 0,
                    opacity: 1,
                    duration: .5,
                    stagger: .05,
                    ease: "power2.out"
                }, "<0.2")
            }), () => {
                e.revert()
            }
        }, {
            scope: p
        });
        let L = () => {
            d(e => {
                let t = !e;
                return t ? C.current ? .timeScale(1).play() : C.current ? .timeScale(1.75).reverse(), t
            })
        };
        return (0, r.useEffect)(() => () => {
            T.current && clearTimeout(T.current)
        }, []), (0, r.useEffect)(() => {
            let e = 0,
                t = () => {
                    Math.abs(window.scrollY - e) > 50 && (d(!1), C.current ? .timeScale(1.75).reverse())
                },
                r = () => {
                    c && (d(!1), C.current ? .timeScale(1.75).reverse())
                },
                n = e => {
                    let t = e.target;
                    if (t.closest("#sound-toggle") && c) {
                        d(!1), C.current ? .timeScale(1.75).reverse();
                        return
                    }
                    if (window.innerWidth >= 768) {
                        let e = w.current && !w.current.contains(t),
                            r = t.closest(".main-toggle");
                        c && e && !r && (d(!1), C.current ? .timeScale(1.75).reverse())
                    }
                };
            c ? (window.innerWidth < 768 ? document.body.style.overflow = "hidden" : (e = window.scrollY, window.addEventListener("scroll", t)), window.addEventListener("mousedown", n)) : document.body.style.overflow = "";
            let a = () => {
                    c && (d(!1), C.current ? .timeScale(1.75).reverse())
                },
                s = () => {
                    c && (d(!1), C.current ? .timeScale(1.75).reverse())
                };
            return c && window.addEventListener("resize", a), window.addEventListener("trionn-transition:start", s), window.addEventListener("trionn-blast:start", r), () => {
                document.body.style.overflow = "", window.removeEventListener("resize", a), window.removeEventListener("scroll", t), window.removeEventListener("mousedown", n), window.removeEventListener("trionn-blast:start", r), window.removeEventListener("trionn-transition:start", s)
            }
        }, [c]), (0, t.jsxs)("div", {
            ref: p,
            children: [(0, t.jsx)("div", {
                ref: M,
                "data-lenis-prevent": "true",
                className: "fixed top-0 right-0 w-full h-dvh bg-[#000000] z-40 overflow-y-auto overscroll-contain md:hidden",
                style: {
                    transform: "translateX(100%)"
                },
                children: (0, t.jsxs)("div", {
                    className: "mobile-menu-inner flex flex-col items-center justify-between gap-20 min-h-full w-full pb-20 px-6 pt-40",
                    children: [(0, t.jsx)(i, {}), (0, t.jsx)("div", {
                        className: "bottom-stagger-item",
                        children: (0, t.jsx)(s.TransitionLink, {
                            href: "/trionn-story",
                            transitionLabel: "Trionn Name Story",
                            className: "transition-all duration-300 title pt-1.5 pb-2 px-4 rounded-full border border-light-font/50 group hover:border-light-font relative z-50",
                            children: (0, t.jsx)(o.HoverBlur, {
                                children: "✦ The TRIONN name Story"
                            })
                        })
                    }), (0, t.jsx)(D.default, {
                        customClass: "header-menu-line w-full",
                        disableScrollTrigger: !0,
                        lineClass: "bg-[#2F323B] left-1/2! -translate-x-1/2",
                        plusClass: "col-span-12 mx-auto",
                        iconColor: "#D8D8D8"
                    }), (0, t.jsxs)("div", {
                        className: "flex flex-col items-center gap-20",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col",
                            children: [(0, t.jsx)("span", {
                                className: "bottom-stagger-item mb-6 text-light-font/50 title block text-center",
                                children: "Business enquiry"
                            }), l.enquiry.map((e, r) => (0, t.jsxs)("p", {
                                className: "bottom-stagger-item flex gap-2 mb-2 last:mb-0 justify-center",
                                children: [(0, t.jsx)("span", {
                                    className: "shrink-0 uppercase text-light-font/50",
                                    children: g(e.label)
                                }), (0, t.jsx)(x.default, {
                                    className: "relative z-3 block text-light-font",
                                    href: e.url,
                                    onClick: () => {
                                        c && (d(!1), C.current ? .timeScale(1.75).reverse())
                                    },
                                    children: (0, t.jsx)(o.HoverBlur, {
                                        children: e.title
                                    })
                                })]
                            }, r))]
                        }), (0, t.jsx)("div", {
                            className: "flex flex-col gap-10 text-center",
                            children: (0, t.jsxs)("div", {
                                className: "bottom-stagger-item flex border border-[#2F323B] overflow-hidden rounded-sm min-h-18 text-light-font title",
                                children: [(0, t.jsxs)("div", {
                                    className: "flex flex-col justify-center items-center min-w-26 border-r border-[#2F323B] text-center gap-2 p-4",
                                    children: [(0, t.jsxs)("svg", {
                                        width: "43",
                                        height: "27",
                                        viewBox: "0 0 43 27",
                                        fill: "none",
                                        xmlns: "http://www.w3.org/2000/svg",
                                        children: [(0, t.jsx)("mask", {
                                            id: "path-1-inside-1_12348_492_mobile",
                                            fill: "white",
                                            children: (0, t.jsx)("path", {
                                                d: "M22.0098 0.00488281C33.425 0.18638 42.5948 5.94967 42.9004 13.1299C42.964 13.2463 43 13.3704 43 13.5C42.9856 13.5991 42.9515 13.6943 42.9033 13.7861C42.6622 21.1215 33.1713 26.9999 21.4551 27C9.58671 27 0 20.9681 0 13.5C7.01302e-06 6.03191 9.58672 0 21.4551 0L22.0098 0.00488281ZM15.2822 14.6484C15.6586 20.8749 19.0438 24.7598 21.4551 24.7598C23.8663 24.7596 27.2505 20.8747 27.627 14.6484H15.2822ZM3.65332 14.6484C4.35225 18.9618 8.94408 22.5637 15.1729 24.04C13.1002 21.666 11.9316 18.1611 11.7217 14.6484H3.65332ZM31.1875 14.6484C30.9775 18.1613 29.8092 21.666 27.7363 24.04C33.9652 22.5638 38.5569 18.9618 39.2559 14.6484H31.1875ZM15.1729 2.95898C8.94443 4.43513 4.35279 8.03764 3.65332 12.3506H11.7217C11.9318 8.83797 13.1 5.33279 15.1729 2.95898ZM21.4551 2.24023C19.044 2.24023 15.6589 6.12472 15.2822 12.3506H27.627C27.2502 6.12487 23.8662 2.24039 21.4551 2.24023ZM27.7363 2.95898C29.8093 5.33278 30.9773 8.83781 31.1875 12.3506H39.2559C38.5564 8.03762 33.9648 4.43511 27.7363 2.95898Z"
                                            })
                                        }), (0, t.jsx)("path", {
                                            d: "M22.0098 0.00488281C33.425 0.18638 42.5948 5.94967 42.9004 13.1299C42.964 13.2463 43 13.3704 43 13.5C42.9856 13.5991 42.9515 13.6943 42.9033 13.7861C42.6622 21.1215 33.1713 26.9999 21.4551 27C9.58671 27 0 20.9681 0 13.5C7.01302e-06 6.03191 9.58672 0 21.4551 0L22.0098 0.00488281ZM15.2822 14.6484C15.6586 20.8749 19.0438 24.7598 21.4551 24.7598C23.8663 24.7596 27.2505 20.8747 27.627 14.6484H15.2822ZM3.65332 14.6484C4.35225 18.9618 8.94408 22.5637 15.1729 24.04C13.1002 21.666 11.9316 18.1611 11.7217 14.6484H3.65332ZM31.1875 14.6484C30.9775 18.1613 29.8092 21.666 27.7363 24.04C33.9652 22.5638 38.5569 18.9618 39.2559 14.6484H31.1875ZM15.1729 2.95898C8.94443 4.43513 4.35279 8.03764 3.65332 12.3506H11.7217C11.9318 8.83797 13.1 5.33279 15.1729 2.95898ZM21.4551 2.24023C19.044 2.24023 15.6589 6.12472 15.2822 12.3506H27.627C27.2502 6.12487 23.8662 2.24039 21.4551 2.24023ZM27.7363 2.95898C29.8093 5.33278 30.9773 8.83781 31.1875 12.3506H39.2559C38.5564 8.03762 33.9648 4.43511 27.7363 2.95898Z",
                                            fill: "#D8D8D8",
                                            mask: "url(#path-1-inside-1_12348_492_mobile)"
                                        })]
                                    }), (0, t.jsx)("span", {
                                        className: "text-sm leading-3.5 -tracking-[0.02em] uppercase block",
                                        children: "Est. 2012"
                                    })]
                                }), (0, t.jsx)("div", {
                                    className: "p-4 flex flex-col justify-center items-center",
                                    children: (0, t.jsxs)("span", {
                                        className: "text-sm leading-3.5 -tracking-[0.02em] uppercase block",
                                        children: ["14+ years shaping ", (0, t.jsx)("br", {}), "digital direction."]
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }), " ", (0, t.jsx)("div", {
                ref: k,
                className: "menu-wrapper invisible fixed top-0 right-0 z-40 h-full w-full justify-end p-4 opacity-0 hidden md:flex pointer-events-none",
                children: (0, t.jsx)("div", {
                    ref: w,
                    id: "desktopMenuRef",
                    "data-lenis-prevent": "true",
                    className: "menu-block relative z-5 flex w-full max-w-110 items-start overflow-y-auto overscroll-contain max-h-full rounded-lg bg-white text-dark-font pointer-events-auto border-cream border",
                    style: {
                        clipPath: "circle(0% at 95% 5%)",
                        opacity: 0,
                        visibility: "hidden"
                    },
                    children: (0, t.jsxs)("div", {
                        className: "desktop-menu-inner flex flex-col min-h-full w-full justify-between pt-20 pb-10 px-8 gap-20",
                        children: [(0, t.jsxs)("div", {
                            className: "flex flex-col items-start w-full my-auto",
                            children: [(0, t.jsx)("ul", {
                                className: "flex flex-col gap-2 items-start w-full group/menu",
                                onMouseLeave: () => {
                                    let e = p.current ? .querySelectorAll(".desktop-menu-inner .menu-item");
                                    e && e.forEach(e => {
                                        f.default.to(e, {
                                            opacity: 1,
                                            duration: .45,
                                            ease: "power3.out",
                                            overwrite: "auto"
                                        })
                                    })
                                },
                                children: l.menu.map((e, r) => (e.url, (0, t.jsx)("li", {
                                    className: "menu-item flex justify-between items-center w-full",
                                    onMouseEnter: e => {
                                        var t;
                                        let r;
                                        return t = e.currentTarget, void((r = p.current ? .querySelectorAll(".desktop-menu-inner .menu-item")) && r.forEach(e => {
                                            let r = e === t;
                                            f.default.to(e, {
                                                opacity: r ? 1 : .4,
                                                duration: .45,
                                                ease: "power3.out",
                                                overwrite: "auto"
                                            })
                                        }))
                                    },
                                    children: (0, t.jsxs)(s.TransitionLink, {
                                        href: e.url,
                                        transitionLabel: e.title,
                                        className: "group flex justify-between items-center w-full",
                                        onClick: () => {
                                            d(!1), C.current ? .timeScale(1.75).reverse()
                                        },
                                        children: [(0, t.jsx)(o.HoverBlur, {
                                            className: `h3 transition-all duration-300 block
                          `,
                                            children: e.title
                                        }), (0, t.jsx)("span", {
                                            className: "menu-arrow opacity-0 translate-x-0 group-hover:opacity-100 group-hover:translate-x-2 transition-all duration-300 ease-in-out will-change-[transform,opacity] delay-300 pt-1.5",
                                            children: (0, t.jsx)("svg", {
                                                width: "10",
                                                height: "9",
                                                viewBox: "0 0 10 9",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-2.5 h-2.5",
                                                children: (0, t.jsx)("path", {
                                                    d: "M5.47372 8.652V6.552L8.32972 3.752V4.9L5.47372 2.1V-3.09944e-06L9.32372 3.836V4.816L5.47372 8.652ZM-0.000281237 5.11V3.542H8.60972V5.11H-0.000281237Z",
                                                    fill: "currentColor"
                                                })
                                            })
                                        })]
                                    })
                                }, r)))
                            }), (0, t.jsx)("div", {
                                className: "bottom-stagger-item w-full pt-10",
                                children: (0, t.jsx)(s.TransitionLink, {
                                    href: "/trionn-story",
                                    transitionLabel: "Trionn Name Story",
                                    className: "transition-all duration-300 title pt-1.5 pb-2 px-4 rounded-full border border-light-font group hover:border-dark-font relative z-50",
                                    children: (0, t.jsx)(o.HoverBlur, {
                                        children: "✦ The TRIONN name Story"
                                    })
                                })
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "flex gap-14 flex-col",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-col items-start gap-4",
                                children: [(0, t.jsx)("span", {
                                    className: "bottom-stagger-item text-dark-font/50 title block text-center",
                                    children: "Business Enquiry"
                                }), (0, t.jsx)("div", {
                                    className: "flex flex-col gap-2",
                                    children: l.enquiry.map((e, r) => (0, t.jsxs)("p", {
                                        className: "bottom-stagger-item flex gap-2",
                                        children: [(0, t.jsx)("span", {
                                            className: "w-6 uppercase text-dark-font/50",
                                            children: g(e.label)
                                        }), (0, t.jsx)(x.default, {
                                            className: "text-dark-font transition relative z-3",
                                            href: e.url,
                                            onClick: () => {
                                                d(!1), C.current ? .timeScale(1.75).reverse()
                                            },
                                            children: (0, t.jsx)(o.HoverBlur, {
                                                className: "text-dark-font!",
                                                children: e.title
                                            })
                                        })]
                                    }, r))
                                })]
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col items-start gap-4",
                                children: [(0, t.jsx)("span", {
                                    className: "text-dark-font/50 title block text-center bottom-stagger-item",
                                    children: "Social"
                                }), (0, t.jsx)("div", {
                                    className: "grid grid-cols-2 gap-x-6 gap-y-1 text-sm font-medium w-full",
                                    children: l.social.map((e, r) => (0, t.jsx)("p", {
                                        className: "bottom-stagger-item",
                                        children: (0, t.jsx)(x.default, {
                                            className: "relative z-3 block text-dark-font",
                                            href: e.url,
                                            target: "_blank",
                                            children: (0, t.jsx)(o.HoverBlur, {
                                                className: "text-dark-font!",
                                                children: e.title
                                            })
                                        })
                                    }, r))
                                })]
                            })]
                        })]
                    })
                })
            }), (0, t.jsx)("header", {
                id: "nav",
                className: "site-header fixed top-0 left-0 w-full z-99 flex justify-between items-center py-6 md:py-10 transition-all duration-300 ease-in-out mix-blend-difference",
                children: (0, t.jsxs)("div", {
                    className: "tr__container w-full flex items-center justify-between px-4 md:px-8 mx-auto",
                    children: [(0, t.jsx)(s.TransitionLink, {
                        className: "logo relative z-50 ",
                        href: "/",
                        transitionLabel: "Home",
                        children: (0, t.jsx)(n.default, {
                            src: e.logo,
                            className: "w-30 h-auto",
                            alt: "Trionn",
                            width: 94,
                            height: 25,
                            loading: "eager",
                            fetchPriority: "high"
                        })
                    }), (0, t.jsxs)("div", {
                        className: "flex items-center gap-2",
                        children: [(0, t.jsx)(u, {}), (0, t.jsx)("button", {
                            type: "button",
                            onClick: () => {
                                if (!c) return void h();
                                d(!1);
                                let e = C.current;
                                e ? .timeScale(1.75).reverse(), T.current && clearTimeout(T.current), T.current = setTimeout(h, e ? e.time() / 1.75 * 1e3 : 0)
                            },
                            className: "transition-all duration-300 title pt-1.5 pb-2 px-4 rounded-full bg-white border border-white group hover:bg-white/80 hover:border-white/80 relative z-50 cursor-pointer",
                            children: (0, t.jsx)(o.HoverBlur, {
                                className: "text-[#000000]!",
                                children: "let's talk"
                            })
                        }), (0, t.jsx)("div", {
                            className: "hidden md:block",
                            children: (0, t.jsxs)("div", {
                                className: "main-toggle relative title flex items-center cursor-pointer z-50 pt-1.5 pb-2 px-4 rounded-full border transition-all duration-300 border-white hover:border-white/60 group",
                                onClick: L,
                                children: [(0, t.jsx)("span", {
                                    className: "mr-2 title",
                                    children: (0, t.jsx)(o.HoverBlur, {
                                        children: "Menu"
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "main__humburger relative z-30 flex h-3 min-w-3 items-center justify-center mt-0.5",
                                    children: [(0, t.jsx)("span", {
                                        className: `h-px w-3 bg-current transition-all duration-500 absolute ${c?"rotate-45 translate-y-0":"-translate-y-0.5 group-hover:translate-y-0.5"}`
                                    }), (0, t.jsx)("span", {
                                        className: `h-px w-3 bg-current transition-all duration-500 absolute ${c?"-rotate-45 translate-y-0":"translate-y-0.5 group-hover:-translate-y-0.5"}`
                                    })]
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            className: "menu-toggle relative flex items-center md:hidden cursor-pointer z-50 rounded-full border transition-all duration-300 border-white hover:border-white/60",
                            onClick: L,
                            children: (0, t.jsx)("div", {
                                className: "nav__humburger relative z-30 flex h-8 max-h-8 min-w-12 items-center justify-center text-white",
                                children: (0, t.jsxs)("svg", {
                                    viewBox: "0 0 40 40",
                                    width: "24",
                                    height: "28",
                                    className: "w-6 h-6",
                                    children: [(0, t.jsx)("path", {
                                        ref: y,
                                        d: "M0 16 H40",
                                        stroke: "currentColor",
                                        strokeWidth: "1",
                                        strokeLinecap: "round"
                                    }), (0, t.jsx)("path", {
                                        ref: b,
                                        d: "M0 25 H40",
                                        stroke: "currentColor",
                                        strokeWidth: "1",
                                        strokeLinecap: "round"
                                    }), (0, t.jsx)("path", {
                                        ref: H,
                                        d: "M6.5 6.5 L33.5 33.5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.25",
                                        style: {
                                            opacity: 0
                                        },
                                        strokeLinecap: "butt"
                                    }), (0, t.jsx)("path", {
                                        ref: j,
                                        d: "M33.5 6.5 L6.5 33.5",
                                        stroke: "currentColor",
                                        strokeWidth: "1.25",
                                        style: {
                                            opacity: 0
                                        },
                                        strokeLinecap: "butt"
                                    })]
                                })
                            })
                        })]
                    })]
                })
            })]
        })
    }], 68479)
}, 1401, e => {
    "use strict";
    var t = e.i(43476);
    e.i(52819);
    var r = e.i(54090);
    e.i(48062);
    var n = e.i(11846),
        a = e.i(71645);
    let s = (0, a.createContext)(null);

    function o() {
        let e = (0, a.useContext)(s);
        if (!e) throw Error("useFooterAtmosphere must be used within FooterAtmosphereProvider");
        return e
    }

    function l({
        children: e
    }) {
        let r = (0, a.useRef)(0),
            n = (0, a.useRef)(null),
            o = (0, a.useRef)(null),
            i = (0, a.useCallback)(e => {
                r.current = Math.min(1, r.current + e)
            }, []),
            c = (0, a.useCallback)(e => {
                n.current = e
            }, []),
            d = (0, a.useCallback)(e => {
                if (o.current) return o.current;
                try {
                    let t = e.createAnalyser();
                    return t.fftSize = 64, t.connect(e.destination), o.current = t, t
                } catch {
                    return null
                }
            }, []),
            u = (0, a.useMemo)(() => ({
                pulseSmoke: i,
                setAudioContext: c,
                getSmokeAnalyser: d,
                audioContextRef: n,
                smokePulseRef: r
            }), [i, c, d]);
        return (0, t.jsx)(s.Provider, {
            value: u,
            children: e
        })
    }
    var i = e.i(71871),
        c = e.i(65747);

    function d({
        className: e = ""
    }) {
        let r = (0, a.useRef)(null),
            n = (0, a.useRef)(null),
            {
                smokePulseRef: s,
                getSmokeAnalyser: l,
                audioContextRef: u
            } = o(),
            h = (0, a.useRef)(null),
            p = (0, a.useRef)(null);
        return (0, c.useGSAP)(() => {
            let e = n.current,
                t = r.current;
            if (!e || !t) return;
            let a = e.getContext("webgl", {
                alpha: !0,
                premultipliedAlpha: !1,
                antialias: !1
            });
            if (!a) return;
            p.current = a;
            let o = `
    precision highp float;
    uniform float T;
    uniform float M;
    uniform float H;
    uniform vec2  R;

    float hash(vec2 p){
      if (R.x < 768.0) {
        p = fract(p * vec2(0.3183099, 0.3678794));
        return fract(sin(p.x * 12.9898 + p.y * 78.233) * 43.75854);
      } else {
        p = fract(p * vec2(127.34, 311.7));
        p += dot(p, p + 19.19);
        return fract(p.x * p.y);
      }
    }
    float vnoise(vec2 p){
      vec2 i=floor(p), f=fract(p), u=f*f*(3.-2.*f);
      if (R.x < 768.0) {
        i = mod(i, 100.0);
      }
      return mix(
        mix(hash(i),           hash(i+vec2(1,0)), u.x),
        mix(hash(i+vec2(0,1)), hash(i+vec2(1,1)), u.x), u.y);
    }
    float fbm(vec2 p){
      float v=0., a=.5;
      for(int i=0;i<3;i++){
        v += a * vnoise(p);
        p  = p * 2.1 + vec2(3.7, 8.3);
        a *= 0.5;
      }
      return v;
    }

    void main(){
      vec2 uv = gl_FragCoord.xy / R;
      float y = uv.y;
      float aspect = R.x / R.y;

      float vMask = 1.0 - smoothstep(0.0, 1.0, y);
      vMask = pow(vMask, 0.22);
      vMask *= 1.0 - smoothstep(0.95, 1.0, y);
      if(vMask < 0.002){ gl_FragColor = vec4(0.); return; }

      float rise  = T * 0.07;

      float LOOP  = 32.0;
      float mA    = mod(M, LOOP);
      float mB    = mod(M + LOOP * 0.5, LOOP);
      float blend = abs(mod(M, LOOP) / LOOP - 0.5) * 2.0;

      vec2 q, q2;
      if (R.x < 768.0) {
        float qY = (R.y - gl_FragCoord.y) / 88.88;
        q   = vec2(gl_FragCoord.x / 133.33, qY + rise);
        q2  = vec2(gl_FragCoord.x / 153.84, qY * 0.8444 + rise * 0.6);
      } else {
        q   = vec2(uv.x * aspect * 3.0, (1.0 - y) * 4.5 + rise);
        q2  = vec2(uv.x * aspect * 2.6, (1.0 - y) * 3.8 + rise * 0.6);
      }

      vec2 w1a = vec2(fbm(q2 + vec2(0.0, mA*0.15)), fbm(q2 + vec2(4.3, 2.7+mA*0.10)));
      float fA = fbm(q + 1.4*w1a + vec2(0.0, mA*0.06));

      vec2 w1b = vec2(fbm(q2 + vec2(7.3, mB*0.15)), fbm(q2 + vec2(1.8, 5.4+mB*0.10)));
      float fB = fbm(q + 1.4*w1b + vec2(3.7, mB*0.06));

      float f = mix(fA, fB, blend);

      f = max(0.0, f - 0.36);
      f = smoothstep(0.0, 0.36, f);
      f = pow(f, 0.85);

      // Pulse: visible lift without washing the whole footer (medium baseline fog)
      float hoverGlow = H * 0.42;
      f = clamp(f + H * 0.14, 0.0, 1.0);

      float baseFog = smoothstep(0.35, 0.0, y) * 0.14
                    + smoothstep(0.18, 0.0, y) * 0.11;

      float alpha = (f + baseFog + hoverGlow * vMask) * vMask * 0.94;
      alpha = clamp(alpha, 0.0, 0.82);

      vec3 charcoal = vec3(0.02, 0.03, 0.05);
      vec3 ashGrey  = vec3(0.12, 0.14, 0.18);
      vec3 lightGrey= vec3(0.28, 0.31, 0.36);
      vec3 hoverTint = vec3(0.35, 0.38, 0.44);
      vec3 col = mix(charcoal, ashGrey,   pow(f, 1.0));
          col  = mix(col,      lightGrey, pow(f, 2.2));
          col  = mix(col,      hoverTint, H * 0.55 * f);

      gl_FragColor = vec4(col * alpha, alpha);
    }
  `;

            function c(e, t, r) {
                let n = e.createShader(t);
                return e.shaderSource(n, r), e.compileShader(n), e.getShaderParameter(n, e.COMPILE_STATUS) || console.error("[FooterFog]", e.getShaderInfoLog(n)), n
            }
            let d = a.createProgram(),
                f = c(a, a.VERTEX_SHADER, "attribute vec2 p; void main(){ gl_Position=vec4(p,0.,1.); }"),
                m = c(a, a.FRAGMENT_SHADER, o);
            a.attachShader(d, f), a.attachShader(d, m), a.linkProgram(d), a.getProgramParameter(d, a.LINK_STATUS) || console.error("[FooterFog] link", a.getProgramInfoLog(d));
            let D = a.createBuffer();
            a.bindBuffer(a.ARRAY_BUFFER, D), a.bufferData(a.ARRAY_BUFFER, new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]), a.STATIC_DRAW);
            let x = a.getAttribLocation(d, "p");
            a.enableVertexAttribArray(x), a.vertexAttribPointer(x, 2, a.FLOAT, !1, 0, 0);
            let v = a.getUniformLocation(d, "T"),
                g = a.getUniformLocation(d, "R"),
                w = a.getUniformLocation(d, "M"),
                k = a.getUniformLocation(d, "H");
            a.enable(a.BLEND), a.blendFunc(a.ONE, a.ONE_MINUS_SRC_ALPHA), a.clearColor(0, 0, 0, 0), a.useProgram(d);
            let M = 0,
                y = 0,
                b = 0,
                H = performance.now(),
                j = null,
                C = null,
                T = performance.now();

            function L() {
                let e = r.current,
                    t = n.current;
                if (!e || !t) return;
                let a = Math.max(1, e.clientWidth),
                    s = Math.max(1, e.clientHeight);
                t.width = a, t.height = s, p.current && p.current.viewport(0, 0, a, s)
            }
            let N = new ResizeObserver(() => L());
            N.observe(t), L();
            let A = (0, i.getCanvasManager)(),
                E = A.register(function() {
                    if (!p.current) return;
                    let e = n.current;
                    if (!e) return;
                    let t = p.current,
                        r = performance.now(),
                        a = Math.min((r - H) / 1e3, .05);
                    H = r;
                    let o = u.current;
                    if (o && !j && (j = l(o)) && (C = new Uint8Array(j.frequencyBinCount)), j && C) {
                        j.getByteFrequencyData(C);
                        let e = 0,
                            t = Math.floor(.5 * C.length);
                        for (let r = 2; r < t; r++) e += C[r];
                        let r = e / (255 * t),
                            n = r > M ? .3 : .03;
                        M += (r - M) * (1 - Math.pow(1 - n, 60 * a))
                    }
                    let i = s.current,
                        c = Math.min(i, 1);
                    i > 0 && (s.current = i * Math.pow(.9, 60 * a));
                    let d = c > b ? .25 : .04;
                    b += (c - b) * (1 - Math.pow(1 - d, 60 * a)), y += (4 + 16 * M + 2.8 * c) * a, t.clear(t.COLOR_BUFFER_BIT), t.uniform1f(v, (r - T) * .001), t.uniform2f(g, e.width, e.height), t.uniform1f(w, y), t.uniform1f(k, Math.min(b, 1)), t.drawArrays(t.TRIANGLES, 0, 6)
                }, !1);
            h.current = E;
            let S = new IntersectionObserver(([e]) => A.setActive(E, e.isIntersecting), {
                root: null,
                threshold: 0,
                rootMargin: "160px 0px"
            });
            return S.observe(t), () => {
                A.unregister(E), h.current = null, S.disconnect(), N.disconnect(), a.detachShader(d, f), a.detachShader(d, m), a.deleteShader(f), a.deleteShader(m), a.deleteProgram(d), a.deleteBuffer(D), p.current = null
            }
        }, [l, s, u]), (0, t.jsx)("div", {
            ref: r,
            className: `pointer-events-none absolute inset-0 z-5 overflow-hidden ${e}`,
            "aria-hidden": !0,
            children: (0, t.jsx)("canvas", {
                ref: n,
                className: "block h-full w-full",
                style: {
                    width: "100%",
                    height: "100%"
                }
            })
        })
    }
    var u = e.i(89970),
        h = e.i(42936);
    let p = `<svg viewBox="0 0 1728 441" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMax meet">
<path d="M589.056 212.315H330.526" stroke="#D8D8D8"/>
<path d="M1022.87 212.315H1100.96" stroke="#D8D8D8"/>
<path d="M714.35 212.315H792.444" stroke="#D8D8D8"/>
<path d="M1558.04 212.315H1479.4" stroke="#D8D8D8"/>
<path d="M1438.71 212.315H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 212.315H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 212.315H1114.95" stroke="#D8D8D8"/>
<path d="M1310.34 212.315H1231.74" stroke="#D8D8D8"/>
<path d="M700.754 212.315H624.926" stroke="#D8D8D8"/>
<path d="M216.582 212.315H140.754" stroke="#D8D8D8"/>
<path d="M524.908 406H595.796" stroke="#D8D8D8"/>
<path d="M336.375 406H400.504" stroke="#D8D8D8"/>
<path d="M978.982 406H836.875" stroke="#D8D8D8"/>
<path d="M1607.56 406H1682.07" stroke="#D8D8D8"/>
<path d="M1185.56 406H1120.16" stroke="#D8D8D8"/>
<path d="M1433.09 406H1360.5" stroke="#D8D8D8"/>
<path d="M694.904 406H630.775" stroke="#D8D8D8"/>
<path d="M210.713 406H146.604" stroke="#D8D8D8"/>
<path d="M512.977 192.947H599.689" stroke="#D8D8D8"/>
<path d="M330.526 192.947H406.702" stroke="#D8D8D8"/>
<path d="M1020.41 192.947H1099.01" stroke="#D8D8D8"/>
<path d="M716.307 192.947H794.904" stroke="#D8D8D8"/>
<path d="M1545.27 192.947H1466.56" stroke="#D8D8D8"/>
<path d="M1441.75 192.947H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 192.947H1686.32" stroke="#D8D8D8"/>
<path d="M1193.54 192.947H1114.95" stroke="#D8D8D8"/>
<path d="M1297.55 192.947H1218.9" stroke="#D8D8D8"/>
<path d="M700.754 192.947H624.926" stroke="#D8D8D8"/>
<path d="M216.582 192.947H140.754" stroke="#D8D8D8"/>
<path d="M512.647 386.632H599.824" stroke="#D8D8D8"/>
<path d="M330.526 386.632H406.354" stroke="#D8D8D8"/>
<path d="M1016.98 386.632H798.874" stroke="#D8D8D8"/>
<path d="M1594.49 386.632H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 386.632H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 386.632H1347.08" stroke="#D8D8D8"/>
<path d="M700.754 386.632H624.926" stroke="#D8D8D8"/>
<path d="M216.582 386.632H140.754" stroke="#D8D8D8"/>
<path d="M526.709 173.579H606.023" stroke="#D8D8D8"/>
<path d="M330.526 173.579H406.354" stroke="#D8D8D8"/>
<path d="M1015.18 173.579H1095.15" stroke="#D8D8D8"/>
<path d="M720.161 173.579H800.133" stroke="#D8D8D8"/>
<path d="M1532.51 173.579H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 173.579H1686.32" stroke="#D8D8D8"/>
<path d="M1284.77 173.579H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 173.579H624.926" stroke="#D8D8D8"/>
<path d="M216.582 173.579H140.754" stroke="#D8D8D8"/>
<path d="M501.685 367.263H588.417" stroke="#D8D8D8"/>
<path d="M330.526 367.263H406.354" stroke="#D8D8D8"/>
<path d="M1041.68 367.263H774.063" stroke="#D8D8D8"/>
<path d="M1581.69 367.263H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 367.263H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 367.263H1334.26" stroke="#D8D8D8"/>
<path d="M700.754 367.263H624.926" stroke="#D8D8D8"/>
<path d="M216.582 367.263H140.754" stroke="#D8D8D8"/>
<path d="M530.757 154.211H608.734" stroke="#D8D8D8"/>
<path d="M330.526 154.211H406.354" stroke="#D8D8D8"/>
<path d="M1006.37 154.211H1089.07" stroke="#D8D8D8"/>
<path d="M726.243 154.211H808.965" stroke="#D8D8D8"/>
<path d="M1519.75 154.211H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 154.211H1686.32" stroke="#D8D8D8"/>
<path d="M1271.97 154.211H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 154.211H624.926" stroke="#D8D8D8"/>
<path d="M216.582 154.211H140.754" stroke="#D8D8D8"/>
<path d="M490.723 347.895H576.99" stroke="#D8D8D8"/>
<path d="M330.526 347.895H406.354" stroke="#D8D8D8"/>
<path d="M936.545 347.895H1059.57" stroke="#D8D8D8"/>
<path d="M756.012 347.895H879.195" stroke="#D8D8D8"/>
<path d="M1568.9 347.895H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 347.895H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 347.895H1321.43" stroke="#D8D8D8"/>
<path d="M700.754 347.895H624.926" stroke="#D8D8D8"/>
<path d="M216.582 347.895H140.754" stroke="#D8D8D8"/>
<path d="M529.672 134.842H608.327" stroke="#D8D8D8"/>
<path d="M330.526 134.842H406.354" stroke="#D8D8D8"/>
<path d="M992.655 134.842H1080.47" stroke="#D8D8D8"/>
<path d="M734.842 134.842H822.659" stroke="#D8D8D8"/>
<path d="M1506.98 134.842H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 134.842H1686.32" stroke="#D8D8D8"/>
<path d="M1259.18 134.842H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 134.842H624.926" stroke="#D8D8D8"/>
<path d="M216.582 134.842H140.754" stroke="#D8D8D8"/>
<path d="M479.76 328.526H565.562" stroke="#D8D8D8"/>
<path d="M330.526 328.526H406.354" stroke="#D8D8D8"/>
<path d="M978.439 328.526H1073.09" stroke="#D8D8D8"/>
<path d="M742.279 328.526H836.875" stroke="#D8D8D8"/>
<path d="M1556.12 328.526H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 328.526H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 328.526H1308.63" stroke="#D8D8D8"/>
<path d="M700.754 328.526H624.926" stroke="#D8D8D8"/>
<path d="M216.582 328.526H140.754" stroke="#D8D8D8"/>
<path d="M521.693 115.474H604.764" stroke="#D8D8D8"/>
<path d="M330.526 115.474H406.354" stroke="#D8D8D8"/>
<path d="M969.394 115.474H1069.14" stroke="#D8D8D8"/>
<path d="M746.289 115.474H845.92" stroke="#D8D8D8"/>
<path d="M1494.22 115.474H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 115.474H1686.32" stroke="#D8D8D8"/>
<path d="M1246.4 115.474H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 115.474H624.926" stroke="#D8D8D8"/>
<path d="M216.582 115.474H140.754" stroke="#D8D8D8"/>
<path d="M468.798 309.158H554.135" stroke="#D8D8D8"/>
<path d="M330.526 309.158H406.354" stroke="#D8D8D8"/>
<path d="M997.497 309.158H1083.51" stroke="#D8D8D8"/>
<path d="M731.802 309.158H817.817" stroke="#D8D8D8"/>
<path d="M1543.34 309.158H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 309.158H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 309.158H1295.81" stroke="#D8D8D8"/>
<path d="M700.754 309.158H624.926" stroke="#D8D8D8"/>
<path d="M216.582 309.158H140.754" stroke="#D8D8D8"/>
<path d="M490.567 96.1055H597.326" stroke="#D8D8D8"/>
<path d="M330.526 96.1055H414.159" stroke="#D8D8D8"/>
<path d="M1054.56 96.1055H761.067" stroke="#D8D8D8"/>
<path d="M1481.46 96.1055H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 96.1055H1686.32" stroke="#D8D8D8"/>
<path d="M1233.62 96.1055H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 96.1055H624.926" stroke="#D8D8D8"/>
<path d="M222.064 96.1055H135.254" stroke="#D8D8D8"/>
<path d="M457.835 289.789H542.707" stroke="#D8D8D8"/>
<path d="M330.526 289.789H406.354" stroke="#D8D8D8"/>
<path d="M1009.39 289.789H1091.2" stroke="#D8D8D8"/>
<path d="M724.112 289.789H805.905" stroke="#D8D8D8"/>
<path d="M1530.54 289.789H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 289.789H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 289.789H1282.99" stroke="#D8D8D8"/>
<path d="M700.754 289.789H624.926" stroke="#D8D8D8"/>
<path d="M216.582 289.789H140.754" stroke="#D8D8D8"/>
<path d="M585.163 76.7373H330.526" stroke="#D8D8D8"/>
<path d="M1035.03 76.7373H780.726" stroke="#D8D8D8"/>
<path d="M1468.69 76.7373H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 76.7373H1686.32" stroke="#D8D8D8"/>
<path d="M1220.82 76.7373H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 76.7373H624.926" stroke="#D8D8D8"/>
<path d="M317.317 76.7373H40" stroke="#D8D8D8"/>
<path d="M446.872 270.421H531.744" stroke="#D8D8D8"/>
<path d="M330.526 270.421H408.078" stroke="#D8D8D8"/>
<path d="M1016.98 270.421H1096.51" stroke="#D8D8D8"/>
<path d="M718.806 270.421H798.332" stroke="#D8D8D8"/>
<path d="M1517.75 270.421H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 270.421H1114.95" stroke="#D8D8D8"/>
<path d="M1438.3 270.421H1270.19" stroke="#D8D8D8"/>
<path d="M700.754 270.421H624.926" stroke="#D8D8D8"/>
<path d="M216.582 270.421H140.754" stroke="#D8D8D8"/>
<path d="M564.729 57.3682H330.526" stroke="#D8D8D8"/>
<path d="M1007.51 57.3682H808.346" stroke="#D8D8D8"/>
<path d="M1455.93 57.3682H1362.86" stroke="#D8D8D8"/>
<path d="M1610.47 57.3682H1686.32" stroke="#D8D8D8"/>
<path d="M1208.03 57.3682H1114.95" stroke="#D8D8D8"/>
<path d="M700.754 57.3682H624.926" stroke="#D8D8D8"/>
<path d="M317.317 57.3682H40" stroke="#D8D8D8"/>
<path d="M539.279 251.053H330.526" stroke="#D8D8D8"/>
<path d="M1021.34 251.053H1099.76" stroke="#D8D8D8"/>
<path d="M715.551 251.053H793.974" stroke="#D8D8D8"/>
<path d="M1190.77 251.053H1114.95" stroke="#D8D8D8"/>
<path d="M1336.41 251.053H1257.36" stroke="#D8D8D8"/>
<path d="M1438.3 251.053H1357.58" stroke="#D8D8D8"/>
<path d="M700.754 251.053H624.926" stroke="#D8D8D8"/>
<path d="M216.582 251.053H140.754" stroke="#D8D8D8"/>
<path d="M524.404 38H333.219" stroke="#D8D8D8"/>
<path d="M961.181 38H854.945" stroke="#D8D8D8"/>
<path d="M1443.16 38H1365.56" stroke="#D8D8D8"/>
<path d="M1613.16 38H1683.62" stroke="#D8D8D8"/>
<path d="M1195.25 38H1117.64" stroke="#D8D8D8"/>
<path d="M698.081 38H627.619" stroke="#D8D8D8"/>
<path d="M314.625 38H42.6924" stroke="#D8D8D8"/>
<path d="M571.644 231.685H330.526" stroke="#D8D8D8"/>
<path d="M1023.14 231.685H1101.2" stroke="#D8D8D8"/>
<path d="M714.118 231.685H792.172" stroke="#D8D8D8"/>
<path d="M1570.8 231.685H1492.19" stroke="#D8D8D8"/>
<path d="M1610.47 231.685H1686.32" stroke="#D8D8D8"/>
<path d="M1190.77 231.685H1114.95" stroke="#D8D8D8"/>
<path d="M1323.12 231.685H1244.54" stroke="#D8D8D8"/>
<path d="M1438.3 231.685H1362.48" stroke="#D8D8D8"/>
<path d="M700.754 231.685H624.926" stroke="#D8D8D8"/>
<path d="M216.582 231.685H140.754" stroke="#D8D8D8"/>
<path d="M1583.51 250.994H1504.47" stroke="#D8D8D8"/>
<path d="M1686.32 250.994H1604.68" stroke="#D8D8D8"/>
</svg>
`,
        f = [196, 220, 247, 294, 330, 392, 440, 494],
        m = null;

    function D({
        strokeWidth: e = .6,
        hoverAmp: r = 7,
        clickAmp: n = 11,
        className: s = ""
    }) {
        let l = (0, a.useRef)(null),
            c = (0, a.useRef)(null),
            d = (0, a.useRef)(null),
            {
                pulseSmoke: x,
                setAudioContext: v,
                getSmokeAnalyser: g
            } = o(),
            {
                soundEnabled: w
            } = (0, h.useSiteSound)();
        (0, a.useEffect)(() => {
            let e = d.current;
            e && (w ? e.resume().catch(() => {}) : e.suspend().catch(() => {}))
        }, [w]);
        let k = (e, t) => {
                let r = (() => {
                    if (!d.current) {
                        let e = window.AudioContext || window.webkitAudioContext;
                        if (!e) return null;
                        d.current = new e, v(d.current)
                    }
                    return d.current
                })();
                if (!r || !w || "running" !== r.state) return;
                let n = .015 + .07 * (t = Math.max(0, Math.min(1, t))),
                    a = .1 + .05 * t,
                    s = 1.6 + .7 * t,
                    o = r.currentTime,
                    l = r.createGain();
                l.gain.setValueAtTime(1e-4, o), l.gain.exponentialRampToValueAtTime(n, o + a), l.gain.exponentialRampToValueAtTime(.82 * n, o + a + .22), l.gain.exponentialRampToValueAtTime(1e-4, o + s + 1.2);
                let i = r.createOscillator(),
                    c = r.createGain();
                i.type = "sine", i.frequency.setValueAtTime(4.9, o), c.gain.setValueAtTime(.18 + .25 * t, o), i.connect(c);
                let u = r.createOscillator();
                u.type = "sine", u.frequency.setValueAtTime(e, o), c.connect(u.frequency);
                let h = r.createOscillator();
                h.type = "sine", h.frequency.setValueAtTime(2 * e, o);
                let p = r.createOscillator();
                p.type = "sine", p.frequency.setValueAtTime(3 * e, o);
                let f = r.createGain();
                f.gain.setValueAtTime(1, o);
                let D = r.createGain();
                D.gain.setValueAtTime(.1, o);
                let x = r.createGain();
                x.gain.setValueAtTime(.03, o), u.connect(f), h.connect(D), p.connect(x), f.connect(l), D.connect(l), x.connect(l);
                let k = r.createBiquadFilter();
                k.type = "lowpass", k.frequency.setValueAtTime(1800 + 800 * t, o);
                let M = r.createBiquadFilter();
                M.type = "highpass", M.frequency.setValueAtTime(120, o);
                let y = r.createBiquadFilter();
                y.type = "peaking", y.frequency.setValueAtTime(700, o), y.Q.setValueAtTime(.8, o), y.gain.setValueAtTime(1.2, o);
                let b = r.createDelay(1);
                b.delayTime.setValueAtTime(.14, o);
                let H = r.createGain();
                H.gain.setValueAtTime(0, o), H.gain.linearRampToValueAtTime(.32 + .12 * t, o + .05);
                let j = r.createBiquadFilter();
                j.type = "lowpass", j.frequency.setValueAtTime(1600, o);
                let C = r.createGain();
                C.gain.setValueAtTime(.1 + .1 * t, o), l.connect(M), M.connect(k), k.connect(y), y.connect(r.destination), y.connect(b), b.connect(j), j.connect(H), H.connect(b), j.connect(C), C.connect(r.destination);
                let T = g(r);
                if (T) try {
                    l.connect(T)
                } catch {}
                let L = (e => {
                        if (m && m.sampleRate === e.sampleRate) return m;
                        let t = Math.max(1, Math.floor(.1 * e.sampleRate)),
                            r = e.createBuffer(1, t, e.sampleRate),
                            n = r.getChannelData(0);
                        for (let e = 0; e < t; e++) n[e] = (2 * Math.random() - 1) * .04 * (1 - e / t);
                        return m = r, r
                    })(r),
                    N = r.createBufferSource();
                N.buffer = L;
                let A = r.createBiquadFilter();
                A.type = "lowpass", A.frequency.setValueAtTime(2200, o);
                let E = r.createGain();
                E.gain.setValueAtTime(1e-4, o), E.gain.exponentialRampToValueAtTime(.018 + .02 * t, o + .03), E.gain.exponentialRampToValueAtTime(1e-4, o + .14), N.connect(A), A.connect(E), E.connect(l), u.start(o), h.start(o), p.start(o), i.start(o), N.start(o);
                let S = o + s + 1.2 + .06;
                u.stop(S), h.stop(S), p.stop(S), i.stop(S), N.stop(o + .1)
            },
            M = (e, t, r, n, a, s, o) => {
                let l = r - e,
                    i = n - t,
                    c = Math.hypot(l, i) || 1,
                    d = -(i / c),
                    u = l / c,
                    h = `M ${e.toFixed(3)} ${t.toFixed(3)}`;
                for (let r = 1; r <= 26; r++) {
                    let n = r / 26,
                        c = Math.sin(Math.PI * n),
                        p = Math.sin(2 * Math.PI * (o * n) + s),
                        f = e + l * n + d * p * a * c,
                        m = t + i * n + u * p * a * c;
                    h += ` L ${f.toFixed(3)} ${m.toFixed(3)}`
                }
                return h
            };
        return (0, a.useEffect)(() => {
            let t = l.current;
            if (!t) return;
            t.innerHTML = p;
            let a = t.querySelector("svg");
            if (!a) return;
            a.setAttribute("width", "100%"), a.removeAttribute("height"), a.style.display = "block", a.style.width = "100%", a.style.height = "auto", a.style.flexShrink = "0";
            let s = Array.from(a.querySelectorAll("path")),
                o = [],
                d = e => {
                    let t = e.getAttribute("stroke"),
                        r = getComputedStyle(e).stroke;
                    return t && "none" !== t || r && "none" !== r
                },
                h = e => {
                    let t, r;
                    try {
                        let t = e.getTotalLength();
                        if (isFinite(t) && t > 0) {
                            let r = e.getPointAtLength(0),
                                n = e.getPointAtLength(t);
                            return {
                                x1: r.x,
                                y1: r.y,
                                x2: n.x,
                                y2: n.y
                            }
                        }
                    } catch {}
                    return (r = (t = (e.getAttribute("d") || "").replace(/,/g, " ").trim()).match(/^M\s*([-\d.]+)\s*([-\d.]+)\s*H\s*([-\d.]+)\s*$/i)) ? {
                        x1: +r[1],
                        y1: +r[2],
                        x2: +r[3],
                        y2: +r[2]
                    } : (r = t.match(/^M\s*([-\d.]+)\s*([-\d.]+)\s*V\s*([-\d.]+)\s*$/i)) ? {
                        x1: +r[1],
                        y1: +r[2],
                        x2: +r[1],
                        y2: +r[3]
                    } : (r = t.match(/^M\s*([-\d.]+)\s*([-\d.]+)\s*L\s*([-\d.]+)\s*([-\d.]+)\s*$/i)) ? {
                        x1: +r[1],
                        y1: +r[2],
                        x2: +r[3],
                        y2: +r[4]
                    } : null
                };
            for (let t of s) {
                if (!d(t)) continue;
                let a = h(t);
                if (!a) continue;
                t.style.fill = "none", t.style.strokeLinecap = t.getAttribute("strokeLinecap") || "round", t.style.vectorEffect = t.getAttribute("vector-effect") || "non-scaling-stroke", t.style.strokeWidth = `${e}`, t.classList.add("tw-cursor-pointer");
                let l = o.length,
                    i = 0 === l ? 0 : Math.pow(l / Math.max(1, s.length - 1), 1.25),
                    c = {
                        x1: a.x1,
                        y1: a.y1,
                        x2: a.x2,
                        y2: a.y2,
                        amp: 0,
                        phase: 0,
                        speed: 0,
                        cycles: 2.2,
                        note: f[l % f.length] * (l % 2 ? 1 : .5),
                        intensity: i,
                        lastPlayed: 0
                    };
                t.setAttribute("d", M(c.x1, c.y1, c.x2, c.y2, 0, 0, c.cycles));
                let p = () => {
                        let e = performance.now(),
                            t = e - c.lastPlayed > 100;
                        c.amp = r, c.speed = 18, u.default.killTweensOf(c), u.default.to(c, {
                            amp: 0,
                            duration: .9,
                            ease: "expo.out"
                        }), u.default.to(c, {
                            speed: 0,
                            duration: .9,
                            ease: "expo.out"
                        }), t && (c.lastPlayed = e, k(c.note, c.intensity), x(.4))
                    },
                    m = () => {
                        let e = performance.now(),
                            t = e - c.lastPlayed > 100;
                        c.amp = n, c.speed = 26, u.default.killTweensOf(c), u.default.to(c, {
                            amp: 0,
                            duration: 1.1,
                            ease: "expo.out"
                        }), u.default.to(c, {
                            speed: 0,
                            duration: 1.1,
                            ease: "expo.out"
                        }), t && (c.lastPlayed = e, k(1.01 * c.note, Math.min(1, c.intensity + .12)), x(.9))
                    };
                t.addEventListener("mouseenter", p), t.addEventListener("click", m);
                let D = t.cloneNode(!0);
                D.setAttribute("stroke", "transparent"), D.style.strokeWidth = `${Math.max(12,18*e)}`, D.setAttribute("pointer-events", "stroke");
                let v = () => D.setAttribute("d", t.getAttribute("d") || "");
                v(), new MutationObserver(v).observe(t, {
                    attributes: !0,
                    attributeFilter: ["d"]
                }), D.addEventListener("mouseenter", () => t.dispatchEvent(new Event("mouseenter", {
                    bubbles: !0
                }))), D.addEventListener("click", () => t.dispatchEvent(new Event("click", {
                    bubbles: !0
                }))), t.parentNode ? .insertBefore(D, t.nextSibling), o.push({
                    el: t,
                    state: c
                })
            }
            let m = 0,
                D = (0, i.getCanvasManager)(),
                v = D.register(e => {
                    let t = m ? Math.min((e - m) / 1e3, .05) : 0;
                    for (let r of (m = e, o)) {
                        let e = r.state;
                        (e.amp > .02 || e.speed > .02) && (e.phase += e.speed * t, r.el.setAttribute("d", M(e.x1, e.y1, e.x2, e.y2, e.amp, e.phase, e.cycles)))
                    }
                }, !1),
                g = new IntersectionObserver(([e]) => D.setActive(v, e.isIntersecting), {
                    root: null,
                    threshold: 0,
                    rootMargin: "80px 0px"
                }),
                w = c.current;
            return w && g.observe(w), () => {
                D.unregister(v), g.disconnect(), t.innerHTML = ""
            }
        }, [e, r, n, w]), (0, t.jsx)(t.Fragment, {
            children: (0, t.jsx)("div", {
                ref: c,
                className: `relative z-2 flex w-full min-w-0 flex-col items-stretch justify-end overflow-x-clip pb-4 ${s}`,
                children: (0, t.jsx)("div", {
                    className: "flex w-full min-w-0 flex-col justify-end mix-blend-difference",
                    children: (0, t.jsx)("div", {
                        className: "w-[101%] max-w-none -ml-[0.5%] min-w-0 [&_svg]:max-h-none",
                        ref: l
                    })
                })
            })
        })
    }
    e.i(83390);
    var x = e.i(90782),
        v = e.i(22016),
        g = e.i(34470),
        w = e.i(42163);
    e.i(11303);
    var k = e.i(62749),
        M = e.i(18566);
    let y = ["/trionn-story"];

    function b() {
        let [e, r] = (0, a.useState)("--:--");
        return (0, a.useEffect)(() => {
            let e = () => {
                let e = new Date;
                r(new Intl.DateTimeFormat("en-GB", {
                    timeZone: "Asia/Kolkata",
                    hour: "2-digit",
                    minute: "2-digit",
                    hour12: !1
                }).format(e).replace(/\u202f/g, " "))
            };
            e();
            let t = setInterval(e, 1e3);
            return () => clearInterval(t)
        }, []), (0, t.jsxs)("span", {
            className: "title text-light-font/50 inline-block ml-auto",
            children: ["IST → ", e]
        })
    }

    function GitHubProfileModal({
        onClose: e
    }) {
        let [r, n] = (0, a.useState)(null), [l, o] = (0, a.useState)(""), [s, c] = (0, a.useState)(!0);
        (0, a.useEffect)(() => {
            let t = !1,
                r = document.body.style.overflow,
                a = t => {
                    "Escape" === t.key && e()
                };
            return document.body.style.overflow = "hidden", document.addEventListener("keydown", a), fetch("/api/github-profile").then(e => {
                if (!e.ok) throw Error("Unable to load GitHub profile");
                return e.json()
            }).then(e => {
                t || n(e)
            }).catch(e => {
                t || o(e.message || "Unable to load GitHub profile")
            }).finally(() => {
                t || c(!1)
            }), () => {
                t = !0, document.body.style.overflow = r, document.removeEventListener("keydown", a)
            }
        }, [e]);
        let d = r ? .profile,
            h = r ? .repositories || [],
            f = r ? .contributions ? .days || [],
            p = r ? .contributions ? .total || 0;
        return (0, t.jsx)("div", {
            className: "github-modal-backdrop",
            onMouseDown: t => {
                t.target === t.currentTarget && e()
            },
            children: (0, t.jsxs)("section", {
                className: "github-modal-panel",
                role: "dialog",
                "aria-modal": "true",
                "aria-labelledby": "github-profile-title",
                children: [(0, t.jsxs)("header", {
                    className: "github-modal-header",
                    children: [(0, t.jsxs)("div", {
                        children: [(0, t.jsx)("span", {
                            className: "github-modal-eyebrow github-modal-muted",
                            children: "Developer profile"
                        }), (0, t.jsx)("h2", {
                            id: "github-profile-title",
                            children: "Muhammed Anshif"
                        })]
                    }), (0, t.jsx)("button", {
                        type: "button",
                        className: "github-modal-close",
                        onClick: e,
                        autoFocus: !0,
                        "aria-label": "Close developer profile",
                        children: "×"
                    })]
                }), s ? (0, t.jsx)("div", {
                    className: "github-modal-status",
                    role: "status",
                    children: "Loading GitHub profile…"
                }) : l ? (0, t.jsx)("div", {
                    className: "github-modal-status",
                    role: "alert",
                    children: l
                }) : d ? (0, t.jsxs)(t.Fragment, {
                    children: [(0, t.jsxs)("div", {
                        className: "github-modal-content",
                        children: [(0, t.jsxs)("aside", {
                            className: "github-modal-profile",
                            children: [(0, t.jsx)("img", {
                                className: "github-modal-avatar",
                                src: d.avatarUrl,
                                alt: `${d.name} GitHub avatar`,
                                width: 116,
                                height: 116
                            }), (0, t.jsxs)("div", {
                                children: [(0, t.jsx)("h3", {
                                    children: d.name
                                }), (0, t.jsxs)("p", {
                                    className: "github-modal-muted",
                                    children: ["@", d.login]
                                })]
                            }), d.bio && (0, t.jsx)("p", {
                                className: "github-modal-muted",
                                children: d.bio
                            }), d.location && (0, t.jsx)("p", {
                                className: "github-modal-label github-modal-muted",
                                children: d.location
                            }), (0, t.jsx)("div", {
                                className: "github-modal-stats",
                                children: [
                                    ["Repos", d.publicRepositories],
                                    ["Followers", d.followers],
                                    ["Following", d.following]
                                ].map(e => (0, t.jsxs)("div", {
                                    className: "github-modal-stat",
                                    children: [(0, t.jsx)("strong", {
                                        children: e[1]
                                    }), (0, t.jsx)("span", {
                                        className: "github-modal-label github-modal-muted",
                                        children: e[0]
                                    })]
                                }, e[0]))
                            })]
                        }), (0, t.jsxs)("div", {
                            children: [(0, t.jsxs)("h3", {
                                children: [p.toLocaleString(), " contributions in the last year"]
                            }), (0, t.jsxs)("div", {
                                className: "github-calendar-shell",
                                children: [(0, t.jsx)("div", {
                                    className: "github-calendar-scroll",
                                    children: (0, t.jsx)("div", {
                                        className: "github-calendar-grid",
                                        role: "img",
                                        "aria-label": `${p.toLocaleString()} GitHub contributions in the last year`,
                                        children: f.map(e => (0, t.jsx)("span", {
                                            className: "github-calendar-day",
                                            "data-level": e.level,
                                            title: `${e.date} · contribution level ${e.level}`
                                        }, e.date))
                                    })
                                }), (0, t.jsxs)("div", {
                                    className: "github-calendar-footer github-modal-label",
                                    children: [(0, t.jsx)("span", {
                                        children: "Last 12 months"
                                    }), (0, t.jsxs)("div", {
                                        className: "github-calendar-legend",
                                        "aria-label": "Contribution intensity",
                                        children: [(0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {}), (0, t.jsx)("span", {})]
                                    })]
                                })]
                            })]
                        })]
                    }), h.length > 0 && (0, t.jsxs)("section", {
                        className: "github-modal-section",
                        children: [(0, t.jsx)("h3", {
                            children: "Recently updated repositories"
                        }), (0, t.jsx)("div", {
                            className: "github-modal-repositories",
                            children: h.map(e => (0, t.jsxs)("article", {
                                className: "github-modal-repository",
                                children: [(0, t.jsx)("h4", {
                                    children: e.name
                                }), (0, t.jsx)("p", {
                                    children: e.description || "Public GitHub repository."
                                }), (0, t.jsxs)("div", {
                                    className: "github-modal-repo-meta",
                                    children: [(0, t.jsx)("span", {
                                        children: e.language || "Code"
                                    }), (0, t.jsxs)("span", {
                                        children: ["★ ", e.stars]
                                    }), (0, t.jsxs)("span", {
                                        children: ["Forks ", e.forks]
                                    })]
                                })]
                            }, e.name))
                        })]
                    })]
                }) : null]
            })
        })
    }
    e.s(["default", 0, function() {
        let e = (0, k.useTransitionReady)(),
            [profileOpen, setProfileOpen] = (0, a.useState)(!1),
            footerPath = (0, M.usePathname)();
        return y.includes(footerPath) ? null : (0, t.jsx)(l, {
            children: e && (0, t.jsxs)(t.Fragment, {
                children: [(0, t.jsxs)("footer", {
                id: "site-footer",
                className: "site-footer relative z-2 flex min-h-dvh flex-col overflow-hidden bg-[#040508] text-light-font",
                children: [(0, t.jsx)(d, {}), (0, t.jsx)("div", {
                    className: "relative z-20 flex w-full min-h-0 flex-1",
                    children: (0, t.jsxs)("div", {
                        className: "tr__container flex w-full flex-col pt-25 pb-6 md:pb-20 md:pt-37.5",
                        children: [(0, t.jsxs)("div", {
                            className: "grid w-full grid-cols-12 gap-10 md:gap-x-12 lg:gap-y-0 lg:mb-20",
                            children: [(0, t.jsx)("div", {
                                className: "flex flex-col justify-between gap-6 col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8",
                                children: (0, t.jsxs)("div", {
                                    children: [(0, t.jsx)(x.BlurTextReveal, {
                                        as: "span",
                                        html: "Let&apos;s build work that inspires.",
                                        animationType: "words",
                                        stagger: .05,
                                        className: "title mb-4 text-light-font block"
                                    }), (0, t.jsxs)("h2", {
                                        className: "big max-w-200 text-light-font -ml-1 md:-ml-1.5",
                                        children: ["Ready to build ", (0, t.jsx)("br", {}), "something bold?"]
                                    })]
                                })
                            }), (0, t.jsxs)("div", {
                                className: "flex flex-col w-full justify-between col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4",
                                children: [(0, t.jsx)("div", {
                                    className: "mb-8 w-full hidden md:flex md:items-end ml-auto text-right",
                                    children: (0, t.jsx)(b, {})
                                }), (0, t.jsxs)("div", {
                                    className: "flex gap-6 flex-wrap",
                                    children: [(0, t.jsx)(r.ContactCTA, {
                                        text: "Discuss Your Project",
                                        customClass: "min-w-63",
                                        styleVars: {
                                            buttonWrapperColor: "#D8D8D8"
                                        }
                                    }), (0, t.jsx)(n.WordShiftButton, {
                                        text: "Book a 30-minute call",
                                        href: w.bookACallUrl,
                                        target: "_blank",
                                        customClass: "min-w-63",
                                        styleVars: {
                                            buttonWrapperColor: "#D8D8D8"
                                        }
                                    })]
                                })]
                            })]
                        }), (0, t.jsxs)("div", {
                            className: "grid w-full grid-cols-12 gap-10 lg:gap-x-12 lg:gap-y-0 my-auto",
                            children: [(0, t.jsxs)("div", {
                                className: "flex flex-col justify-between gap-6 col-span-12 md:col-span-6 lg:col-span-7 xl:col-span-8 order-2 md:order-1",
                                children: [(0, t.jsxs)("div", {
                                    className: "block",
                                    children: [(0, t.jsxs)("span", {
                                        className: "title block text-light-font/50",
                                        children: ["©TRIONN® ", new Date().getFullYear()]
                                    }), (0, t.jsxs)("span", {
                                        className: "title block mt-2 text-light-font/50",
                                        children: ["Developed by ", (0, t.jsx)("button", {
                                            type: "button",
                                            className: "github-credit-button",
                                            onClick: () => setProfileOpen(!0),
                                            children: "Muhammed Anshif"
                                        })]
                                    })]
                                }), (0, t.jsx)(x.BlurTextReveal, {
                                    as: "span",
                                    html: 'sound on&nbsp;<img src="/images/footer-sound.svg" alt="blast" class="w-6 h-6 mx-0.5 inline-block middle"/>&nbsp;Hover the lines.',
                                    animationType: "words",
                                    stagger: .05,
                                    className: "title footer-sound-icon hidden md:block"
                                })]
                            }), (0, t.jsx)("div", {
                                className: "flex flex-col w-full justify-between col-span-12 md:col-span-6 lg:col-span-5 xl:col-span-4 order-1 md:order-2",
                                children: (0, t.jsxs)("div", {
                                    className: "flex columns-1 sm:columns-2 flex-wrap justify-between gap-10",
                                    children: [(0, t.jsxs)("div", {
                                        className: "flex flex-col",
                                        children: [(0, t.jsx)("span", {
                                            className: "mb-6 text-light-font/50 title block",
                                            children: "Business enquiry"
                                        }), w.enquiry.map((e, r) => {
                                            let n;
                                            return (0, t.jsxs)("p", {
                                                className: "flex gap-2 mb-2 last:mb-0",
                                                children: [(0, t.jsx)("span", {
                                                    className: "shrink-0 uppercase text-light-font/50",
                                                    children: (n = e.label.trim()).endsWith(".") ? n : `${n}.`
                                                }), (0, t.jsx)(v.default, {
                                                    className: "relative z-3 block text-light-font",
                                                    href: e.url,
                                                    children: (0, t.jsx)(g.HoverBlur, {
                                                        children: e.title
                                                    })
                                                })]
                                            }, r)
                                        })]
                                    }), (0, t.jsxs)("div", {
                                        className: "flex flex-col w-full sm:max-w-52",
                                        children: [(0, t.jsx)("span", {
                                            className: "mb-6 text-light-font/50 title block",
                                            children: "Social"
                                        }), (0, t.jsx)("div", {
                                            className: "flex columns-2 flex-wrap justify-between gap-x-4 gap-y-2",
                                            children: w.social.map((e, r) => (0, t.jsx)("p", {
                                                className: "w-full max-w-[calc(50%-1rem)]",
                                                children: (0, t.jsx)(v.default, {
                                                    className: "relative z-3 block text-light-font",
                                                    href: e.url,
                                                    target: "_blank",
                                                    children: (0, t.jsx)(g.HoverBlur, {
                                                        children: e.title
                                                    })
                                                })
                                            }, r))
                                        })]
                                    })]
                                })
                            })]
                        })]
                    })
                }), (0, t.jsx)(D, {
                    className: "w-full"
                })]
            }), profileOpen && (0, t.jsx)(GitHubProfileModal, {
                onClose: () => setProfileOpen(!1)
            })]
        })
        })
    }], 1401)
}, 23319, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(71645);
    e.i(83390);
    var n = e.i(34470);
    let a = "cookie-consent";
    e.s(["default", 0, function() {
        let [e, s] = (0, r.useState)(!1), [o, l] = (0, r.useState)(!1);
        (0, r.useEffect)(() => {
            let e;
            ((e = document.cookie.split("; ").find(e => e.startsWith(`${a}=`))) ? decodeURIComponent(e.split("=")[1]) : null) || s(!0)
        }, []);
        let i = e => {
            let t;
            t = new Date(Date.now() + 24 * ("accepted" === e ? 20 : 1) * 36e5), document.cookie = `${a}=${encodeURIComponent(e)}; expires=${t.toUTCString()}; path=/; SameSite=Lax`, l(!0), setTimeout(() => {
                s(!1)
            }, 500)
        };
        return e ? (0, t.jsx)("div", {
            className: `fixed bottom-6 md:bottom-30 left-0 right-0 z-20 w-full px-6 md:px-20 md:mix-blend-difference flex flex-col items-center 
        transition-all duration-500 ease-in-out
        ${o?"opacity-0 pointer-events-none":"opacity-100 pointer-events-auto"}`,
            children: (0, t.jsxs)("div", {
                className: "p-6 md:p-4 border border-[#24262E] text-light-font rounded-sm flex flex-wrap items-center justify-between gap-x-6 gap-y-4 w-full md:max-w-max title max-md:bg-[#24262E]",
                children: [(0, t.jsxs)("span", {
                    className: "text-sm leading-3.5 -tracking-[0.02em] uppercase opacity-70 max-md:max-w-50",
                    children: ["We use cookies to ", (0, t.jsx)("br", {
                        className: "md:hidden"
                    }), "enhance your experience."]
                }), (0, t.jsxs)("span", {
                    className: "flex items-center gap-2",
                    children: [(0, t.jsx)("button", {
                        onClick: () => i("declined"),
                        className: "text-sm leading-3.5 -tracking-[0.02em] uppercase cursor-pointer border-0 p-0 bg-transparent",
                        children: (0, t.jsx)(n.HoverBlur, {
                            children: "Decline"
                        })
                    }), (0, t.jsx)("button", {
                        onClick: () => i("accepted"),
                        className: "text-sm leading-3.5 -tracking-[0.02em] uppercase cursor-pointer border-0 p-0 bg-transparent",
                        children: (0, t.jsx)(n.HoverBlur, {
                            children: "Accept"
                        })
                    })]
                })]
            })
        }) : null
    }])
}, 4173, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(89970),
        n = e.i(83495),
        a = e.i(55667),
        s = e.i(18566),
        o = e.i(71645),
        l = e.i(53477);
    r.default.registerPlugin(n.ScrollTrigger), e.s(["default", 0, function({
        children: e
    }) {
        let i = (0, o.useRef)(null),
            c = (0, o.useRef)(!1),
            d = (0, s.usePathname)(),
            {
                isLoaderComplete: u,
                phase: h
            } = (0, l.useTransition)(),
            [p, f] = (0, o.useState)(0);
        (0, o.useEffect)(() => {
            let e = "ontouchstart" in window || navigator.maxTouchPoints > 0,
                t = window.innerWidth,
                r = window.innerHeight,
                n = null,
                a = () => {
                    null !== n && clearTimeout(n), n = setTimeout(() => {
                        let n = window.innerWidth !== t,
                            a = !e && window.innerHeight !== r;
                        (n || a) && (t = window.innerWidth, r = window.innerHeight, i.current ? .lenis && i.current.lenis.scrollTo(0, {
                            immediate: !0
                        }), window.scrollTo(0, 0), f(e => e + 1))
                    }, 200)
                };
            return window.addEventListener("resize", a), () => {
                null !== n && clearTimeout(n), window.removeEventListener("resize", a)
            }
        }, []), (0, o.useLayoutEffect)(() => {
            "scrollRestoration" in window.history && (window.history.scrollRestoration = "manual")
        }, []), (0, o.useLayoutEffect)(() => {
            let e = e => {
                ("keydown" !== e.type || [" ", "ArrowUp", "ArrowDown", "ArrowLeft", "ArrowRight", "PageUp", "PageDown", "Home", "End"].includes(e.key)) && e.cancelable && e.preventDefault()
            };
            return u && "idle" === h ? (document.documentElement.style.overflow = "", document.body.style.overflow = "", i.current ? .lenis && (i.current.lenis.start(), i.current.lenis.scrollTo(0, {
                immediate: !0
            })), window.scrollTo(0, 0)) : (document.documentElement.style.overflow = "hidden", document.body.style.overflow = "hidden", i.current ? .lenis ? .stop(), window.addEventListener("wheel", e, {
                passive: !1
            }), window.addEventListener("touchmove", e, {
                passive: !1
            }), window.addEventListener("keydown", e, {
                passive: !1
            })), () => {
                window.removeEventListener("wheel", e), window.removeEventListener("touchmove", e), window.removeEventListener("keydown", e)
            }
        }, [u, h]), (0, o.useEffect)(() => {
            let e = i.current ? .lenis;
            e && (u && "idle" === h ? e.start() : e.stop())
        }, [u, h]), (0, o.useEffect)(() => {
            let e = e => {
                let {
                    target: t,
                    offset: r
                } = e.detail ? ? {};
                if (!t) return;
                let n = document.querySelector(t);
                if (!n) return;
                let a = i.current ? .lenis;
                a ? a.scrollTo(n, {
                    offset: r ? ? 0,
                    duration: 1.4
                }) : n.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                })
            };
            return window.addEventListener("trionn-scroll-to", e), () => window.removeEventListener("trionn-scroll-to", e)
        }, []), (0, o.useLayoutEffect)(() => {
            i.current ? .lenis && i.current.lenis.scrollTo(0, {
                immediate: !0
            }), window.scrollTo(0, 0)
        }, [d]), (0, o.useEffect)(() => {
            let e = () => {
                    i.current ? .lenis && (i.current.lenis.start(), document.documentElement.style.overflow = "", n.ScrollTrigger.refresh())
                },
                t = () => {
                    i.current ? .lenis && (i.current.lenis.stop(), document.documentElement.style.overflow = "hidden")
                };
            return window.addEventListener("trionn-loader:complete", e), window.addEventListener("trionn-transition:complete", e), window.addEventListener("trionn-transition:start", t), window.addEventListener("trionn-transition:belts-closed", t), window.addEventListener("trionn-modal:open", t), window.addEventListener("trionn-modal:close", e), "complete" === document.readyState && "true" === document.documentElement.dataset.trionnLoaderComplete && e(), () => {
                window.removeEventListener("trionn-loader:complete", e), window.removeEventListener("trionn-transition:complete", e), window.removeEventListener("trionn-transition:start", t), window.removeEventListener("trionn-transition:belts-closed", t), window.removeEventListener("trionn-modal:open", t), window.removeEventListener("trionn-modal:close", e)
            }
        }, []), (0, o.useEffect)(() => {
            let e = () => {
                i.current ? .lenis && i.current.lenis.scrollTo(0, {
                    immediate: !0
                }), window.scrollTo(0, 0)
            };
            return window.addEventListener("beforeunload", e), () => {
                window.removeEventListener("beforeunload", e)
            }
        }, []), (0, o.useEffect)(() => {
            let e = e => {
                    "Space" !== e.code || (() => {
                        let e = document.activeElement;
                        if (!e) return !1;
                        let t = e.tagName;
                        return "INPUT" === t || "TEXTAREA" === t || e.isContentEditable
                    })() || (e.preventDefault(), c.current = !0)
                },
                t = e => {
                    "Space" === e.code && (c.current = !1)
                };
            window.addEventListener("keydown", e), window.addEventListener("keyup", t);
            let a = i.current ? .lenis;
            a ? .on("scroll", n.ScrollTrigger.update);
            let s = e => {
                if (i.current ? .lenis ? .raf(1e3 * e), c.current && i.current ? .lenis) {
                    let e = i.current.lenis.scroll;
                    i.current.lenis.scrollTo(e + 15, {
                        immediate: !0
                    })
                }
            };
            r.default.ticker.add(s), r.default.ticker.lagSmoothing(500, 33);
            let o = () => {
                if ("visible" !== document.visibilityState) return;
                let e = i.current ? .lenis;
                e && (e.scrollTo(e.scroll, {
                    immediate: !0,
                    force: !0
                }), n.ScrollTrigger.update())
            };
            return document.addEventListener("visibilitychange", o), () => {
                i.current ? .lenis ? .off("scroll", n.ScrollTrigger.update), r.default.ticker.remove(s), document.removeEventListener("visibilitychange", o), window.removeEventListener("keydown", e), window.removeEventListener("keyup", t)
            }
        }, []);
        let m = "ontouchstart" in window || navigator.maxTouchPoints > 0,
            D = "u" > typeof navigator && /Mac|iPhone|iPad|iPod/.test(navigator.platform),
            x = m ? {
                easing: e => 1 - Math.pow(1 - e, 3),
                autoRaf: !1,
                duration: 1.05,
                smoothWheel: !0,
                smoothTouch: !1,
                wheelMultiplier: .6,
                touchMultiplier: 1.2,
                syncTouch: !0,
                lerp: .105,
                stopped: !u
            } : {
                easing: e => 1 - Math.pow(1 - e, 3),
                autoRaf: !1,
                duration: 1.05,
                lerp: .105,
                direction: "vertical",
                smooth: !0,
                smoothTouch: !1,
                smoothWheel: !0,
                wheelMultiplier: D ? .6 : .85,
                touchMultiplier: 1.1,
                syncTouch: !0,
                infinite: !1,
                stopped: !u
            };
        return (0, t.jsx)(a.ReactLenis, {
            root: !0,
            options: x,
            ref: i,
            children: e
        }, p)
    }])
}, 8341, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        cancelIdleCallback: function() {
            return o
        },
        requestIdleCallback: function() {
            return s
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let s = "u" > typeof self && self.requestIdleCallback && self.requestIdleCallback.bind(window) || function(e) {
            let t = Date.now();
            return self.setTimeout(function() {
                e({
                    didTimeout: !1,
                    timeRemaining: function() {
                        return Math.max(0, 50 - (Date.now() - t))
                    }
                })
            }, 1)
        },
        o = "u" > typeof self && self.cancelIdleCallback && self.cancelIdleCallback.bind(window) || function(e) {
            return clearTimeout(e)
        };
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}, 79520, (e, t, r) => {
    "use strict";
    Object.defineProperty(r, "__esModule", {
        value: !0
    });
    var n = {
        default: function() {
            return g
        },
        handleClientScriptLoad: function() {
            return D
        },
        initScriptLoader: function() {
            return x
        }
    };
    for (var a in n) Object.defineProperty(r, a, {
        enumerable: !0,
        get: n[a]
    });
    let s = e.r(55682),
        o = e.r(90809),
        l = e.r(43476),
        i = s._(e.r(74080)),
        c = o._(e.r(71645)),
        d = e.r(42732),
        u = e.r(22737),
        h = e.r(8341),
        p = new Map,
        f = new Set,
        m = e => {
            let {
                src: t,
                id: r,
                onLoad: n = () => {},
                onReady: a = null,
                dangerouslySetInnerHTML: s,
                children: o = "",
                strategy: l = "afterInteractive",
                onError: c,
                stylesheets: d
            } = e, h = r || t;
            if (h && f.has(h)) return;
            if (p.has(t)) {
                f.add(h), p.get(t).then(n, c);
                return
            }
            let m = () => {
                    a && a(), f.add(h)
                },
                D = document.createElement("script"),
                x = new Promise((e, t) => {
                    D.addEventListener("load", function(t) {
                        e(), n && n.call(this, t), m()
                    }), D.addEventListener("error", function(e) {
                        t(e)
                    })
                }).catch(function(e) {
                    c && c(e)
                });
            s ? (D.innerHTML = s.__html || "", m()) : o ? (D.textContent = "string" == typeof o ? o : Array.isArray(o) ? o.join("") : "", m()) : t && (D.src = t, p.set(t, x)), (0, u.setAttributesFromProps)(D, e), "worker" === l && D.setAttribute("type", "text/partytown"), D.setAttribute("data-nscript", l), d && (e => {
                if (i.default.preinit) return e.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                });
                if ("u" > typeof window) {
                    let t = document.head;
                    e.forEach(e => {
                        let r = document.createElement("link");
                        r.type = "text/css", r.rel = "stylesheet", r.href = e, t.appendChild(r)
                    })
                }
            })(d), document.body.appendChild(D)
        };

    function D(e) {
        let {
            strategy: t = "afterInteractive"
        } = e;
        "lazyOnload" === t ? window.addEventListener("load", () => {
            (0, h.requestIdleCallback)(() => m(e))
        }) : m(e)
    }

    function x(e) {
        e.forEach(D), [...document.querySelectorAll('[data-nscript="beforeInteractive"]'), ...document.querySelectorAll('[data-nscript="beforePageRender"]')].forEach(e => {
            let t = e.id || e.getAttribute("src");
            f.add(t)
        })
    }

    function v(e) {
        let {
            id: t,
            src: r = "",
            onLoad: n = () => {},
            onReady: a = null,
            strategy: s = "afterInteractive",
            onError: o,
            stylesheets: u,
            ...p
        } = e, {
            updateScripts: D,
            scripts: x,
            getIsSsr: v,
            appDir: g,
            nonce: w
        } = (0, c.useContext)(d.HeadManagerContext);
        w = p.nonce || w;
        let k = (0, c.useRef)(!1);
        (0, c.useEffect)(() => {
            let e = t || r;
            k.current || (a && e && f.has(e) && a(), k.current = !0)
        }, [a, t, r]);
        let M = (0, c.useRef)(!1);
        if ((0, c.useEffect)(() => {
                if (!M.current) {
                    if ("afterInteractive" === s) m(e);
                    else "lazyOnload" === s && ("complete" === document.readyState ? (0, h.requestIdleCallback)(() => m(e)) : window.addEventListener("load", () => {
                        (0, h.requestIdleCallback)(() => m(e))
                    }));
                    M.current = !0
                }
            }, [e, s]), ("beforeInteractive" === s || "worker" === s) && (D ? (x[s] = (x[s] || []).concat([{
                id: t,
                src: r,
                onLoad: n,
                onReady: a,
                onError: o,
                ...p,
                nonce: w
            }]), D(x)) : v && v() ? f.add(t || r) : v && !v() && m({ ...e,
                nonce: w
            })), g) {
            if (u && u.forEach(e => {
                    i.default.preinit(e, {
                        as: "style"
                    })
                }), "beforeInteractive" === s)
                if (!r) return p.dangerouslySetInnerHTML && (p.children = p.dangerouslySetInnerHTML.__html, delete p.dangerouslySetInnerHTML), (0, l.jsx)("script", {
                    nonce: w,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([0,{...p,id:t}])})`
                    }
                });
                else return i.default.preload(r, p.integrity ? {
                    as: "script",
                    integrity: p.integrity,
                    nonce: w,
                    crossOrigin: p.crossOrigin
                } : {
                    as: "script",
                    nonce: w,
                    crossOrigin: p.crossOrigin
                }), (0, l.jsx)("script", {
                    nonce: w,
                    dangerouslySetInnerHTML: {
                        __html: `(self.__next_s=self.__next_s||[]).push(${JSON.stringify([r,{...p,id:t}])})`
                    }
                });
            "afterInteractive" === s && r && i.default.preload(r, p.integrity ? {
                as: "script",
                integrity: p.integrity,
                nonce: w,
                crossOrigin: p.crossOrigin
            } : {
                as: "script",
                nonce: w,
                crossOrigin: p.crossOrigin
            })
        }
        return null
    }
    Object.defineProperty(v, "__nextScript", {
        value: !0
    });
    let g = v;
    ("function" == typeof r.default || "object" == typeof r.default && null !== r.default) && void 0 === r.default.__esModule && (Object.defineProperty(r.default, "__esModule", {
        value: !0
    }), Object.assign(r.default, r), t.exports = r.default)
}]);
