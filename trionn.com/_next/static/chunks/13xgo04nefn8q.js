(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 68152, e => {
    "use strict";
    var t = e.i(43476);
    e.i(48062);
    var l = e.i(11846);
    e.i(52819);
    var s = e.i(54090),
        a = e.i(70221);
    e.i(83390);
    var r = e.i(90782),
        n = e.i(84148),
        i = e.i(19442),
        o = e.i(71645),
        c = e.i(89970),
        d = e.i(91092),
        u = e.i(75324);
    c.default.registerPlugin(u.SplitText);
    let m = o.default.memo(({
        text: e,
        stagger: l,
        delay: s
    }) => (0, t.jsx)(d.default, {
        className: "inline-block",
        as: "span",
        text: e,
        animationType: "chars",
        stagger: l,
        once: !0,
        delay: s
    }), () => !0);
    m.displayName = "StaticPrefix";
    let f = ({
        as: e = "h1",
        texts: l,
        interval: s = 3e3,
        className: a = "",
        prefix: r,
        suffix: n,
        stagger: i = .05,
        delay: f = 2
    }) => {
        let [x, p] = (0, o.useState)(0), h = (0, o.useRef)(null), g = e => new u.SplitText(e.querySelector(".words-wrapper"), {
            type: "chars,words,lines",
            aria: "none",
            smartWrap: !0,
            wordsClass: "words",
            charsClass: "chars",
            linesClass: "lines"
        });
        return (0, t.jsxs)(e, {
            className: `${a}`,
            children: [r && (0, t.jsx)(m, {
                text: r,
                stagger: i,
                delay: f
            }), " ", (0, t.jsx)("span", {
                ref: h,
                className: "inline-block",
                children: (0, t.jsx)(d.default, {
                    className: "words-wrapper inline-block",
                    as: "span",
                    text: l[x],
                    animationType: "chars",
                    stagger: i,
                    once: !0,
                    delay: 0 === x ? f : 0,
                    onCompleteAnimation: () => {
                        if (!h.current || l.length <= 1) return;
                        let e = h.current,
                            t = c.default.timeline({
                                repeat: -1,
                                repeatDelay: s / 1e3 - .6
                            });
                        t.to(g(e).chars, {
                            autoAlpha: 0,
                            filter: "blur(12px)",
                            ease: "power2.in",
                            stagger: {
                                each: i,
                                from: "random"
                            },
                            onComplete: () => {
                                c.default.to(g(e).chars, {
                                    autoAlpha: 0,
                                    filter: "blur(12px)",
                                    ease: "power2.in",
                                    stagger: {
                                        each: i,
                                        from: "random"
                                    },
                                    onComplete: () => {
                                        p(e => (e + 1) % l.length), t.kill()
                                    }
                                })
                            }
                        }).to(g(e).chars, {
                            autoAlpha: 1,
                            filter: "blur(0px)",
                            ease: "power2.out",
                            stagger: {
                                each: i,
                                from: "random"
                            }
                        })
                    }
                }, x)
            }), n && (0, t.jsxs)("span", {
                className: "",
                children: [" ", n]
            })]
        })
    };
    e.i(11303);
    var x = e.i(62749),
        p = e.i(65747),
        h = e.i(83495),
        g = e.i(36894),
        b = e.i(42163);
    c.default.registerPlugin(h.ScrollTrigger), e.s(["default", 0, function() {
        let e = (0, o.useRef)(null),
            d = (0, o.useRef)(null),
            u = (0, x.useTransitionReady)();
        return (0, p.useGSAP)(() => {
            let t;
            if (!e.current) return;
            let l = (window.requestIdleCallback || setTimeout)(() => {
                c.default.set(e.current, {
                    autoAlpha: 1
                }), t = h.ScrollTrigger.create({
                    trigger: e.current,
                    start: "top center",
                    onEnter: () => c.default.to(e.current, {
                        autoAlpha: 0,
                        duration: .3
                    }),
                    onLeaveBack: () => c.default.to(e.current, {
                        autoAlpha: 1,
                        duration: .3
                    })
                })
            });
            return () => {
                (window.cancelIdleCallback || clearTimeout)(l), t ? .kill()
            }
        }, []), (0, p.useGSAP)(() => {
            let e;
            if (!d.current || !u) return;
            let t = (window.requestIdleCallback || setTimeout)(() => {
                c.default.set(d.current, {
                    autoAlpha: 0,
                    filter: "blur(12px)"
                }), e = c.default.to(d.current, {
                    autoAlpha: 1,
                    filter: "blur(0px)",
                    duration: .8,
                    ease: "power2.out",
                    scrollTrigger: {
                        trigger: d.current,
                        start: "top 90%"
                    }
                })
            });
            return () => {
                (window.cancelIdleCallback || clearTimeout)(t), e ? .kill()
            }
        }, [u]), (0, t.jsxs)("div", {
            className: "text-light-font relative mix-blend-difference",
            id: "sticky-wrap",
            children: [(0, t.jsx)("section", {
                className: "main-banner relative min-h-dvh pt-25 lg:pt-30 pb-14 flex w-full ",
                children: (0, t.jsxs)("div", {
                    className: "tr__container relative flex flex-col justify-between w-full gap-10",
                    children: [(0, t.jsxs)("div", {
                        className: "banner-top-block flex flex-col w-full items-start",
                        children: [(0, t.jsx)("div", {
                            className: "grid grid-cols-12 gap-6 mb-10 w-full -ml-1 md:-ml-1.5",
                            children: (0, t.jsxs)("div", {
                                className: "banner-title-block w-full flex flex-col items-start col-span-12 lg:col-span-8",
                                id: "s1-headline",
                                children: [(0, t.jsx)(r.BlurTextReveal, {
                                    as: "h1",
                                    text: "Designed to",
                                    animationType: "chars",
                                    stagger: .08,
                                    className: "z-2",
                                    delay: 1.2
                                }), (0, t.jsx)(f, {
                                    stagger: .08,
                                    prefix: "mean",
                                    delay: 1.2,
                                    texts: ["something.", "depth.", "impact.", "purpose.", "intention."],
                                    className: "z-2"
                                })]
                            })
                        }), (0, t.jsx)("div", {
                            id: "s1-cta",
                            ref: d,
                            style: {
                                visibility: "hidden",
                                willChange: "filter, opacity"
                            },
                            children: (0, t.jsxs)(i.FadeInOnScroll, {
                                delay: 1.2,
                                className: "flex gap-6 flex-wrap",
                                children: [(0, t.jsx)(s.ContactCTA, {
                                    text: "Discuss Your Project",
                                    customClass: "min-w-63",
                                    styleVars: {
                                        buttonWrapperColor: "#D8D8D8"
                                    }
                                }), (0, t.jsx)(l.WordShiftButton, {
                                    text: "Book a 30-minute call",
                                    href: b.bookACallUrl,
                                    target: "_blank",
                                    customClass: "min-w-63",
                                    styleVars: {
                                        buttonWrapperColor: "#D8D8D8"
                                    }
                                })]
                            })
                        })]
                    }), (0, t.jsxs)("div", {
                        className: "banner-text-block grid grid-cols-12 gap-10 w-full",
                        children: [(0, t.jsx)("div", {
                            id: "s1-scroll",
                            className: "col-span-4 flex items-end justify-start opacity-50 pointer-events-none banner-scroll",
                            children: (0, t.jsx)(g.default, {
                                delay: 1.2
                            })
                        }), (0, t.jsxs)("div", {
                            ref: e,
                            className: "col-span-12 lg:col-span-4 hidden lg:flex flex-col text-center items-center justify-end",
                            id: "s1-stats",
                            children: [(0, t.jsx)(r.BlurTextReveal, {
                                as: "span",
                                html: 'hold to&nbsp;<img src="/images/blast-icon.svg" alt="blast" class="w-6 h-8 mx-0.5 inline-block middle"/>&nbsp;blast',
                                animationType: "words",
                                stagger: .05,
                                className: "title blast-icon",
                                start: "top bottom",
                                delay: 1.2
                            }), (0, t.jsx)(r.BlurTextReveal, {
                                as: "span",
                                text: "Dare ⚡ to touch the lines.",
                                animationType: "words",
                                stagger: .05,
                                className: "title block -mt-1.5",
                                start: "top bottom",
                                delay: 1.2
                            })]
                        }), (0, t.jsx)("div", {
                            className: "col-span-8 lg:col-span-4 flex justify-end lg:col-start-9",
                            children: (0, t.jsxs)("div", {
                                className: "flex flex-col max-w-65 gap-6 w-full",
                                children: [(0, t.jsx)("div", {
                                    id: "s1-box",
                                    children: (0, t.jsxs)(i.FadeInOnScroll, {
                                        delay: 1.2,
                                        className: "flex border border-[#2F323B] overflow-hidden rounded-sm min-h-18 text-light-font title",
                                        children: [(0, t.jsxs)("div", {
                                            className: "flex flex-col justify-center items-center min-w-26 border-r border-[#2F323B] text-center gap-2 p-4",
                                            children: [(0, t.jsxs)("svg", {
                                                width: "43",
                                                height: "27",
                                                viewBox: "0 0 43 27",
                                                fill: "none",
                                                xmlns: "http://www.w3.org/2000/svg",
                                                className: "w-10 h-6",
                                                children: [(0, t.jsx)("mask", {
                                                    id: "path-1-inside-1_12348_492",
                                                    fill: "white",
                                                    children: (0, t.jsx)("path", {
                                                        d: "M22.0098 0.00488281C33.425 0.18638 42.5948 5.94967 42.9004 13.1299C42.964 13.2463 43 13.3704 43 13.5C42.9856 13.5991 42.9515 13.6943 42.9033 13.7861C42.6622 21.1215 33.1713 26.9999 21.4551 27C9.58671 27 0 20.9681 0 13.5C7.01302e-06 6.03191 9.58672 0 21.4551 0L22.0098 0.00488281ZM15.2822 14.6484C15.6586 20.8749 19.0438 24.7598 21.4551 24.7598C23.8663 24.7596 27.2505 20.8747 27.627 14.6484H15.2822ZM3.65332 14.6484C4.35225 18.9618 8.94408 22.5637 15.1729 24.04C13.1002 21.666 11.9316 18.1611 11.7217 14.6484H3.65332ZM31.1875 14.6484C30.9775 18.1613 29.8092 21.666 27.7363 24.04C33.9652 22.5638 38.5569 18.9618 39.2559 14.6484H31.1875ZM15.1729 2.95898C8.94443 4.43513 4.35279 8.03764 3.65332 12.3506H11.7217C11.9318 8.83797 13.1 5.33279 15.1729 2.95898ZM21.4551 2.24023C19.044 2.24023 15.6589 6.12472 15.2822 12.3506H27.627C27.2502 6.12487 23.8662 2.24039 21.4551 2.24023ZM27.7363 2.95898C29.8093 5.33278 30.9773 8.83781 31.1875 12.3506H39.2559C38.5564 8.03762 33.9648 4.43511 27.7363 2.95898Z"
                                                    })
                                                }), (0, t.jsx)("path", {
                                                    d: "M22.0098 0.00488281C33.425 0.18638 42.5948 5.94967 42.9004 13.1299C42.964 13.2463 43 13.3704 43 13.5C42.9856 13.5991 42.9515 13.6943 42.9033 13.7861C42.6622 21.1215 33.1713 26.9999 21.4551 27C9.58671 27 0 20.9681 0 13.5C7.01302e-06 6.03191 9.58672 0 21.4551 0L22.0098 0.00488281ZM15.2822 14.6484C15.6586 20.8749 19.0438 24.7598 21.4551 24.7598C23.8663 24.7596 27.2505 20.8747 27.627 14.6484H15.2822ZM3.65332 14.6484C4.35225 18.9618 8.94408 22.5637 15.1729 24.04C13.1002 21.666 11.9316 18.1611 11.7217 14.6484H3.65332ZM31.1875 14.6484C30.9775 18.1613 29.8092 21.666 27.7363 24.04C33.9652 22.5638 38.5569 18.9618 39.2559 14.6484H31.1875ZM15.1729 2.95898C8.94443 4.43513 4.35279 8.03764 3.65332 12.3506H11.7217C11.9318 8.83797 13.1 5.33279 15.1729 2.95898ZM21.4551 2.24023C19.044 2.24023 15.6589 6.12472 15.2822 12.3506H27.627C27.2502 6.12487 23.8662 2.24039 21.4551 2.24023ZM27.7363 2.95898C29.8093 5.33278 30.9773 8.83781 31.1875 12.3506H39.2559C38.5564 8.03762 33.9648 4.43511 27.7363 2.95898Z",
                                                    fill: "#D8D8D8"
                                                }), (0, t.jsx)("path", {
                                                    d: "M22.0098 0.00488281L22.0177 -0.495067L22.0142 -0.495098L22.0098 0.00488281ZM42.9004 13.1299L42.4008 13.1511L42.4058 13.2674L42.4615 13.3695L42.9004 13.1299ZM43 13.5L43.4948 13.5717L43.5 13.5361V13.5H43ZM42.9033 13.7861L42.4605 13.554L42.4073 13.6553L42.4036 13.7697L42.9033 13.7861ZM21.4551 27V27.5H21.4551L21.4551 27ZM0 13.5H-0.5V13.5H0ZM21.4551 0L21.4595 -0.5H21.4551V0ZM15.2822 14.6484V14.1484H14.7511L14.7831 14.6786L15.2822 14.6484ZM21.4551 24.7598V25.2598H21.4551L21.4551 24.7598ZM27.627 14.6484L28.126 14.6786L28.1581 14.1484H27.627V14.6484ZM3.65332 14.6484V14.1484H3.06578L3.15976 14.7284L3.65332 14.6484ZM15.1729 24.04L15.0575 24.5266L16.5755 24.8863L15.5495 23.7112L15.1729 24.04ZM11.7217 14.6484L12.2208 14.6186L12.1927 14.1484H11.7217V14.6484ZM31.1875 14.6484V14.1484H30.7165L30.6884 14.6186L31.1875 14.6484ZM27.7363 24.04L27.3597 23.7112L26.3336 24.8863L27.8516 24.5266L27.7363 24.04ZM39.2559 14.6484L39.7494 14.7284L39.8434 14.1484H39.2559V14.6484ZM15.1729 2.95898L15.5495 3.28785L16.5757 2.11267L15.0575 2.47246L15.1729 2.95898ZM3.65332 12.3506L3.15977 12.2705L3.0657 12.8506H3.65332V12.3506ZM11.7217 12.3506V12.8506H12.1927L12.2208 12.3804L11.7217 12.3506ZM21.4551 2.24023L21.4551 1.74023H21.4551V2.24023ZM15.2822 12.3506L14.7831 12.3204L14.7511 12.8506H15.2822V12.3506ZM27.627 12.3506V12.8506H28.1581L28.126 12.3204L27.627 12.3506ZM27.7363 2.95898L27.8516 2.47246L26.3334 2.11265L27.3597 3.28787L27.7363 2.95898ZM31.1875 12.3506L30.6884 12.3804L30.7165 12.8506H31.1875V12.3506ZM39.2559 12.3506V12.8506H39.8435L39.7494 12.2705L39.2559 12.3506ZM22.0098 0.00488281L22.0018 0.50482C27.6327 0.594349 32.6866 2.0611 36.3552 4.36623C40.0298 6.67514 42.2575 9.7821 42.4008 13.1511L42.9004 13.1299L43.3999 13.1086C43.2377 9.29745 40.7277 5.93266 36.8872 3.5195C33.0407 1.10255 27.802 -0.403086 22.0177 -0.495054L22.0098 0.00488281ZM42.9004 13.1299L42.4615 13.3695C42.4911 13.4237 42.5 13.4661 42.5 13.5H43H43.5C43.5 13.2748 43.4368 13.069 43.3392 12.8903L42.9004 13.1299ZM43 13.5L42.5052 13.4283C42.5005 13.4604 42.488 13.5015 42.4605 13.554L42.9033 13.7861L43.3462 14.0183C43.415 13.887 43.4708 13.7377 43.4948 13.5717L43 13.5ZM42.9033 13.7861L42.4036 13.7697C42.2905 17.2108 40.0035 20.3834 36.2198 22.7183C32.4428 25.049 27.235 26.4999 21.4551 26.5L21.4551 27L21.4551 27.5C27.3914 27.4999 32.7871 26.0116 36.7449 23.5693C40.696 21.1311 43.275 17.6967 43.403 13.8026L42.9033 13.7861ZM21.4551 27V26.5C15.5999 26.5 10.3317 25.0111 6.54318 22.6273C2.74841 20.2396 0.5 17.0016 0.5 13.5H0H-0.5C-0.5 17.4665 2.04495 20.9785 6.01062 23.4737C9.98255 25.9729 15.4419 27.5 21.4551 27.5V27ZM0 13.5H0.5C0.500003 9.99841 2.74842 6.76039 6.54319 4.37266C10.3317 1.98888 15.5999 0.5 21.4551 0.5V0V-0.5C15.4419 -0.5 9.98256 1.02708 6.01063 3.52627C2.04495 6.02153 -0.499996 9.5335 -0.5 13.5H0ZM21.4551 0L21.4507 0.499981L22.0054 0.504863L22.0098 0.00488281L22.0142 -0.495098L21.4595 -0.499981L21.4551 0ZM15.2822 14.6484L14.7831 14.6786C14.9763 17.8736 15.9425 20.4902 17.1927 22.321C18.4225 24.1218 20.0027 25.2598 21.4551 25.2598V24.7598V24.2598C20.4962 24.2598 19.1782 23.4552 18.0185 21.757C16.8792 20.0888 15.9646 17.6497 15.7813 14.6183L15.2822 14.6484ZM21.4551 24.7598L21.4551 25.2598C22.9075 25.2597 24.4874 24.1217 25.717 22.3208C26.967 20.4901 27.9329 17.8735 28.126 14.6786L27.627 14.6484L27.1279 14.6183C26.9446 17.6496 26.0302 20.0887 24.8911 21.757C23.7317 23.4552 22.4139 24.2597 21.455 24.2598L21.4551 24.7598ZM27.627 14.6484V14.1484H15.2822V14.6484V15.1484H27.627V14.6484ZM3.65332 14.6484L3.15976 14.7284C3.90731 19.3418 8.75496 23.0328 15.0575 24.5266L15.1729 24.04L15.2882 23.5535C9.1332 22.0947 4.7972 18.5818 4.14688 14.5685L3.65332 14.6484ZM15.1729 24.04L15.5495 23.7112C13.569 21.4427 12.4262 18.0543 12.2208 14.6186L11.7217 14.6484L11.2226 14.6783C11.4371 18.2679 12.6313 21.8893 14.7962 24.3689L15.1729 24.04ZM11.7217 14.6484V14.1484H3.65332V14.6484V15.1484H11.7217V14.6484ZM31.1875 14.6484L30.6884 14.6186C30.483 18.0545 29.3404 21.4427 27.3597 23.7112L27.7363 24.04L28.113 24.3689C30.278 21.8893 31.472 18.268 31.6866 14.6783L31.1875 14.6484ZM27.7363 24.04L27.8516 24.5266C34.1543 23.0328 39.0019 19.3418 39.7494 14.7284L39.2559 14.6484L38.7623 14.5685C38.112 18.5818 33.776 22.0947 27.621 23.5535L27.7363 24.04ZM39.2559 14.6484V14.1484H31.1875V14.6484V15.1484H39.2559V14.6484ZM15.1729 2.95898L15.0575 2.47246C8.75524 3.96612 3.90788 7.65766 3.15977 12.2705L3.65332 12.3506L4.14687 12.4306C4.7977 8.41762 9.13362 4.90415 15.2882 3.44551L15.1729 2.95898ZM3.65332 12.3506V12.8506H11.7217V12.3506V11.8506H3.65332V12.3506ZM11.7217 12.3506L12.2208 12.3804C12.4263 8.94472 13.5689 5.55607 15.5495 3.28785L15.1729 2.95898L14.7962 2.63012C12.6312 5.10951 11.4373 8.73122 11.2226 12.3207L11.7217 12.3506ZM21.4551 2.24023V1.74023C20.0028 1.74023 18.4226 2.87804 17.1929 4.67872C15.9426 6.50931 14.9764 9.12565 14.7831 12.3204L15.2822 12.3506L15.7813 12.3808C15.9647 9.34966 16.8794 6.91082 18.0186 5.2427C19.1783 3.54467 20.4963 2.74023 21.4551 2.74023V2.24023ZM15.2822 12.3506V12.8506H27.627V12.3506V11.8506H15.2822V12.3506ZM27.627 12.3506L28.126 12.3204C27.9327 9.12575 26.9668 6.50946 25.7168 4.67887C24.4873 2.87819 22.9074 1.74033 21.4551 1.74023L21.4551 2.24023L21.455 2.74023C22.4138 2.7403 23.7315 3.54475 24.891 5.24277C26.03 6.91089 26.9445 9.34971 27.1279 12.3808L27.627 12.3506ZM27.7363 2.95898L27.3597 3.28787C29.3405 5.55606 30.4828 8.94454 30.6884 12.3804L31.1875 12.3506L31.6866 12.3207C31.4718 8.73108 30.2782 5.1095 28.1129 2.6301L27.7363 2.95898ZM31.1875 12.3506V12.8506H39.2559V12.3506V11.8506H31.1875V12.3506ZM39.2559 12.3506L39.7494 12.2705C39.0013 7.65764 34.154 3.9661 27.8516 2.47246L27.7363 2.95898L27.621 3.44551C33.7756 4.90412 38.1115 8.41759 38.7623 12.4306L39.2559 12.3506Z",
                                                    fill: "#0C0C0C",
                                                    mask: "url(#path-1-inside-1_12348_492)"
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
                                }), (0, t.jsx)("div", {
                                    id: "s1-sub",
                                    children: (0, t.jsx)(i.FadeInOnScroll, {
                                        delay: 1.5,
                                        start: "top bottom",
                                        children: (0, t.jsx)("p", {
                                            className: "text-justify",
                                            children: "Websites, AI products, brands, and systems built for clarity, scale and impact."
                                        })
                                    })
                                })]
                            })
                        })]
                    })]
                })
            }), (0, t.jsx)("section", {
                className: "home-about  relative z-3 pt-20 lg:pt-37.5 pb-20 min-h-dvh flex flex-col justify-center",
                children: (0, t.jsx)("div", {
                    className: "tr__container relative w-full",
                    children: (0, t.jsxs)("div", {
                        className: "about-top-block flex flex-col justify-between",
                        id: "s2-text",
                        children: [(0, t.jsxs)("div", {
                            className: "about-title-block grid grid-cols-12 gap-6",
                            children: [(0, t.jsx)("div", {
                                className: "col-span-12 md:col-span-1",
                                children: (0, t.jsx)(r.BlurTextReveal, {
                                    as: "span",
                                    text: "about",
                                    animationType: "words",
                                    stagger: .05,
                                    className: "title mt-4 block"
                                })
                            }), (0, t.jsx)("div", {
                                className: "col-span-12 md:col-span-11",
                                children: (0, t.jsx)(n.FadeOnScroll, {
                                    as: "h2",
                                    html: "<span class='w-1/12 inline-block'></span><span class='pl-3 inline!'><span>Trionn is an independent digital studio crafting meaningful brand experiences through strategy, design, and technology.</span></span>",
                                    className: ""
                                })
                            })]
                        }), (0, t.jsx)(a.default, {
                            customClass: "mt-20 lg:mt-25 mb-20 lg:mb-20",
                            lineClass: "lg:col-start-2 bg-[#2F323B]",
                            plusClass: "col-start-4 sm:col-start-7 lg:col-start-9 -translate-x-1/2!",
                            iconColor: "#D8D8D8"
                        }), (0, t.jsxs)("div", {
                            className: "about-subtitle-block grid grid-cols-12 gap-6",
                            children: [(0, t.jsx)("div", {
                                className: "col-span-9 col-start-4 sm:col-span-6 lg:col-span-3 lg:col-start-2 max-w-60 lg:max-w-64 4xl:max-w-57",
                                children: (0, t.jsx)(r.BlurTextReveal, {
                                    as: "span",
                                    text: "We design for longevity clarity first, craft always, built to scale.",
                                    animationType: "words",
                                    stagger: .05,
                                    className: "title block"
                                })
                            }), (0, t.jsxs)(i.FadeInOnScroll, {
                                delay: .3,
                                className: "col-span-9 col-start-4 sm:col-span-6 lg:col-span-3 lg:col-start-9 flex flex-col ",
                                children: [(0, t.jsx)("p", {
                                    className: "mb-10 lg:mb-20 md:max-w-100 ",
                                    children: "Our mission is to make technology feel human by designing digital products that are intuitive, purposeful, and meaningful to people."
                                }), (0, t.jsx)(l.WordShiftButton, {
                                    text: "more about us",
                                    href: "/about",
                                    styleVars: {
                                        buttonWrapperColor: "#D8D8D8"
                                    }
                                })]
                            })]
                        })]
                    })
                })
            })]
        })
    }], 68152)
}, 72959, e => {
    "use strict";
    var t = e.i(43476),
        l = e.i(81371);
    e.i(83390);
    var s = e.i(90782),
        a = e.i(65747),
        r = e.i(89970),
        n = e.i(83495),
        i = e.i(71645);
    e.i(11303);
    var o = e.i(62749);
    r.default.registerPlugin(n.ScrollTrigger);
    let c = (0, t.jsxs)("svg", {
        width: "40",
        height: "40",
        viewBox: "0 0 40 40",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        className: "mx-10 lg:mx-16 w-6 lg:w-8 h-6 lg:h-8 mt-2",
        children: [(0, t.jsx)("line", {
            x1: "20.2256",
            y1: "-2.18557e-08",
            x2: "20.2256",
            y2: "40",
            stroke: "#D8D8D8"
        }), (0, t.jsx)("line", {
            x1: "40",
            y1: "20.226",
            x2: "-4.37114e-08",
            y2: "20.226",
            stroke: "#D8D8D8"
        })]
    });
    e.s(["default", 0, function() {
        let e = (0, i.useRef)(null),
            d = (0, i.useRef)([]),
            [u, m] = (0, i.useState)(!1),
            f = (0, o.useTransitionReady)();
        return (0, a.useGSAP)(() => {
            if (!f) return;
            let t = d.current,
                l = r.default.timeline({
                    scrollTrigger: {
                        trigger: e.current,
                        start: "top top",
                        end: n.ScrollTrigger.isTouch ? "+=150%" : "+=200%",
                        pin: !0,
                        anticipatePin: 1,
                        scrub: .6,
                        markers: !1,
                        pinSpacing: !0,
                        onUpdate(e) {
                            let t = e.progress >= .5;
                            m(e => e === t ? e : t)
                        }
                    },
                    defaults: {
                        ease: "none"
                    }
                }),
                s = document.getElementById("keyfacts-section"),
                a = () => {
                    s && e.current && r.default.set(s, {
                        marginTop: -e.current.offsetHeight
                    })
                };
            a(), n.ScrollTrigger.addEventListener("refreshInit", a);
            l.addLabel("stripes_start");
            for (let e = 0; e < 5; e++) {
                let s = .3 * (4 - e) / 4 * 1,
                    a = s + .3;
                l.to(t[e], {
                    scaleY: 1,
                    duration: a - s,
                    ease: "none"
                }, `stripes_start+=${s}`)
            }
            l.to({}, {
                duration: .1
            });
            let i = l.scrollTrigger,
                o = () => i ? .refresh(),
                c = requestAnimationFrame(o),
                u = () => {
                    o(), requestAnimationFrame(o)
                };
            "complete" === document.readyState ? requestAnimationFrame(o) : window.addEventListener("load", u, {
                once: !0
            });
            let x = 0,
                p = new ResizeObserver(() => {
                    cancelAnimationFrame(x), x = requestAnimationFrame(o)
                });
            return e.current && p.observe(e.current), () => {
                n.ScrollTrigger.removeEventListener("refreshInit", a), cancelAnimationFrame(c), cancelAnimationFrame(x), window.removeEventListener("load", u), p.disconnect(), i ? .kill()
            }
        }, [f]), (0, t.jsxs)("section", {
            ref: e,
            id: "vision-section",
            className: "relative min-h-dvh h-dvh lg:h-auto lg:min-h-dvh overflow-visible ",
            children: [(0, t.jsxs)("div", {
                id: "s3-text",
                className: "relative z-20 w-full min-h-dvh flex flex-col justify-between bg-transparent text-left overflow-hidden items-center py-50 lg:py-37.5 text-light-font mix-blend-difference",
                children: [(0, t.jsx)("div", {
                    className: "tr__container w-full grid grid-cols-12 gap-x-6",
                    children: (0, t.jsx)(s.BlurTextReveal, {
                        as: "span",
                        html: "Focused vision. <br/>Measured execution.",
                        animationType: "words",
                        stagger: .05,
                        className: "title z-3 lg:col-start-2 col-span-12 lg:col-span-11"
                    })
                }), (0, t.jsx)("div", {
                    className: "relative z-3 flex-col flex justify-center items-start pointer-events-none py-20",
                    children: (0, t.jsx)(l.default, {
                        gap: 0,
                        speed: .8,
                        paused: u,
                        children: (0, t.jsxs)("div", {
                            className: "uppercase mrquee-text flex items-center",
                            children: [(0, t.jsx)("span", {
                                className: "marquee-text-item",
                                children: "Inspire"
                            }), c, (0, t.jsx)("span", {
                                className: "marquee-text-item",
                                children: "innovate"
                            }), c, (0, t.jsx)("span", {
                                className: "marquee-text-item",
                                children: "Impact"
                            }), c]
                        })
                    })
                }), (0, t.jsx)("div", {
                    className: "tr__container w-full grid grid-cols-12 gap-x-6 pb-10",
                    children: (0, t.jsx)(s.BlurTextReveal, {
                        as: "span",
                        text: "✦ From idea to outcome.",
                        animationType: "words",
                        stagger: .05,
                        className: "title z-3 col-span-12 text-center"
                    })
                })]
            }), (0, t.jsx)("div", {
                className: "stripes-container absolute inset-0 pointer-events-none flex flex-col w-full h-dvh z-30",
                children: Array.from({
                    length: 5
                }).map((e, l) => (0, t.jsx)("div", {
                    ref: e => {
                        d.current[l] = e
                    },
                    className: "stripe-item flex-1 w-full h-full",
                    style: {
                        backgroundColor: "#D2D2D2",
                        willChange: "transform",
                        transform: "scaleY(0)",
                        transformOrigin: "bottom",
                        marginTop: l > 0 ? "-1px" : void 0,
                        paddingBottom: "1px"
                    }
                }, l))
            })]
        })
    }])
}, 67198, e => {
    "use strict";
    var t, l, s = e.i(43476),
        a = e.i(70221),
        r = e.i(81371),
        n = e.i(71645),
        i = e.i(89970),
        o = e.i(65747),
        c = Object.defineProperty,
        d = new Map,
        u = new WeakMap,
        m = 0;

    function f({
        value: e,
        duration: l = 2,
        className: a = "",
        trigger: r = !1,
        syncPlayCount: c
    }) {
        let x = (0, n.useRef)(null),
            p = (0, n.useRef)([]),
            h = (0, n.useRef)(null),
            [g, b] = (0, n.useState)(0),
            v = (0, n.useRef)(!1),
            j = (0, n.useRef)(!1),
            w = (0, n.useRef)(!1),
            {
                ref: y,
                inView: L
            } = function({
                threshold: e,
                delay: l,
                trackVisibility: s,
                rootMargin: a,
                root: r,
                triggerOnce: i,
                skip: o,
                initialInView: c,
                fallbackInView: f,
                onChange: x
            } = {}) {
                var p;
                let [h, g] = n.useState(null), b = n.useRef(x), v = n.useRef(c), [j, w] = n.useState({
                    inView: !!c,
                    entry: void 0
                });
                b.current = x, n.useEffect(() => {
                    let n;
                    if (void 0 === v.current && (v.current = c), !o && h) return n = function(e, l, s = {}, a = t) {
                        if (void 0 === window.IntersectionObserver && void 0 !== a) {
                            let t = e.getBoundingClientRect();
                            return l(a, {
                                isIntersecting: a,
                                target: e,
                                intersectionRatio: "number" == typeof s.threshold ? s.threshold : 0,
                                time: 0,
                                boundingClientRect: t,
                                intersectionRect: t,
                                rootBounds: t
                            }), () => {}
                        }
                        let {
                            id: r,
                            observer: n,
                            elements: i
                        } = function(e) {
                            let t = Object.keys(e).sort().filter(t => void 0 !== e[t]).map(t => {
                                    var l;
                                    return `${t}_${"root"===t?!(l=e.root)?"0":(u.has(l)||(m+=1,u.set(l,m.toString())),u.get(l)):e[t]}`
                                }).toString(),
                                l = d.get(t);
                            if (!l) {
                                let s, a = new Map,
                                    r = new IntersectionObserver(t => {
                                        t.forEach(t => {
                                            var l;
                                            let r = t.isIntersecting && s.some(e => t.intersectionRatio >= e);
                                            e.trackVisibility && void 0 === t.isVisible && (t.isVisible = r), [...null != (l = a.get(t.target)) ? l : []].forEach(e => {
                                                e(r, t)
                                            })
                                        })
                                    }, e);
                                s = r.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0]), l = {
                                    id: t,
                                    observer: r,
                                    elements: a
                                }, d.set(t, l)
                            }
                            return l
                        }(s), o = i.get(e) || [];
                        return i.has(e) || i.set(e, o), o.push(l), n.observe(e),
                            function() {
                                o.splice(o.indexOf(l), 1), 0 === o.length && (i.delete(e), n.unobserve(e)), 0 === i.size && (n.disconnect(), d.delete(r))
                            }
                    }(h, (e, t) => {
                        let l = v.current;
                        v.current = e, (void 0 !== l || e) && (w({
                            inView: e,
                            entry: t
                        }), b.current && b.current(e, t), t.isIntersecting && i && n && (n(), n = void 0))
                    }, {
                        root: r,
                        rootMargin: a,
                        threshold: e,
                        trackVisibility: s,
                        delay: l
                    }, f), () => {
                        n && n()
                    }
                }, [Array.isArray(e) ? e.toString() : e, h, r, a, i, o, s, f, l]);
                let y = null == (p = j.entry) ? void 0 : p.target,
                    L = n.useRef(void 0);
                h || !y || i || o || L.current === y || (L.current = y, w({
                    inView: !!c,
                    entry: void 0
                }), v.current = c);
                let C = [g, j.inView, j.entry];
                return C.ref = C[0], C.inView = C[1], C.entry = C[2], C
            }({
                threshold: .5,
                triggerOnce: !0
            }),
            C = Array.from({
                length: 10
            }, (e, t) => t),
            N = String(e),
            k = N.split("").map(e => /\d/.test(e) ? {
                type: "digit",
                value: Number(e)
            } : {
                type: "static",
                value: e
            });
        (0, n.useLayoutEffect)(() => {
            let e = h.current;
            if (!e) return;
            let t = () => {
                let t = e.offsetHeight;
                t > 0 && b(e => Math.abs(e - t) > .5 ? t : e)
            };
            t();
            let l = !1,
                s = document.fonts;
            s ? .ready && s.ready.then(() => {
                l || t()
            });
            let a = new ResizeObserver(() => t());
            a.observe(e), window.addEventListener("resize", t);
            let r = requestAnimationFrame(t);
            return () => {
                l = !0, a.disconnect(), cancelAnimationFrame(r), window.removeEventListener("resize", t)
            }
        }, []);
        let {
            contextSafe: M
        } = (0, o.useGSAP)({
            scope: x
        }), Z = M(() => {
            let e = 0;
            k.forEach((t, s) => {
                if ("digit" !== t.type) return;
                let a = p.current[s];
                a && (i.default.killTweensOf(a), i.default.set(a, {
                    y: 0
                }), i.default.to(a, {
                    y: -t.value * g,
                    duration: l,
                    delay: .1 * e,
                    ease: "power3.inOut"
                }), e++)
            })
        });
        return (0, n.useEffect)(() => {
            if (!g || !(void 0 !== c && j.current || void 0 === c && v.current)) return;
            let e = 0;
            k.forEach((t, l) => {
                if ("digit" !== t.type) return;
                let s = p.current[l];
                s && (i.default.killTweensOf(s), i.default.set(s, {
                    y: -t.value * g
                }), e++)
            })
        }, [g]), (0, n.useEffect)(() => {
            if (g) {
                if (void 0 !== c) {
                    if (j.current) {
                        w.current = r;
                        return
                    }
                    c > 0 && (j.current = !0, Z()), w.current = r;
                    return
                }
                L && !v.current && (Z(), v.current = !0), r && !w.current && Z(), w.current = r
            }
        }, [L, r, g, N, c, Z]), (0, s.jsxs)("span", {
            className: "relative inline-flex",
            ref: e => {
                x.current = e, y(e)
            },
            children: [(0, s.jsx)("span", {
                ref: h,
                className: `pointer-events-none absolute inline-block tabular-nums opacity-0 ${a}`,
                "aria-hidden": "true",
                children: "0"
            }), (0, s.jsx)("span", {
                className: `pr-2 whitespace-nowrap tabular-nums ${a} ${g>0?"invisible":"visible"}`,
                children: N
            }), g > 0 && (0, s.jsx)("div", {
                className: `absolute inset-0 flex justify-center overflow-hidden ${a}`,
                style: {
                    height: g
                },
                children: k.map((e, t) => "static" === e.type ? (0, s.jsx)("span", {
                    className: "inline-flex items-center justify-center tabular-nums",
                    style: {
                        height: g
                    },
                    children: e.value
                }, t) : (0, s.jsx)("div", {
                    className: "flex flex-col",
                    ref: e => {
                        p.current[t] = e
                    },
                    children: C.map(e => (0, s.jsx)("span", {
                        className: "inline-flex items-center justify-center tabular-nums",
                        style: {
                            height: g
                        },
                        children: e
                    }, e))
                }, t))
            })]
        })
    }
    n.Component, null != (null != (l = "useInsertionEffect" in n ? n.useInsertionEffect : void 0) ? l : n.useLayoutEffect) || n.useEffect, e.i(83390);
    var x = e.i(90782),
        p = e.i(19442),
        h = e.i(42163),
        g = e.i(83495),
        b = e.i(57688);
    e.i(11303);
    var v = e.i(62749);

    function j() {
        let e = (0, n.useRef)(null);
        return (0, o.useGSAP)(() => {
            if (!e.current) return;
            let t = i.default.utils.toArray(e.current.querySelectorAll("[data-img]"));
            if (!t.length) return;
            i.default.set(t, {
                opacity: 0
            }), i.default.set(t[0], {
                opacity: 1
            });
            let l = i.default.timeline({
                repeat: -1
            });
            t.forEach((e, s) => {
                let a = (s + 1) % t.length,
                    r = t[a];
                l.to(e, {
                    opacity: 0,
                    duration: 1.2,
                    ease: "power1.inOut"
                }, "+=2").to(r, {
                    opacity: 1,
                    duration: 1.2,
                    ease: "power1.inOut"
                }, "<")
            })
        }, {
            scope: e
        }), (0, s.jsxs)("div", {
            ref: e,
            "data-kf-card": !0,
            className: "featured-card shrink-0 w-[85vw] md:w-[380px] lg:w-full max-w-99 max-md:h-[50svh] max-md:max-h-110 max-md:min-h-[300px] md:h-122 rounded-lg bg-black text-light-font overflow-hidden relative  transition-colors duration-500 will-change-transform backface-hidden transform-3d",
            children: [(0, s.jsx)("video", {
                autoPlay: !0,
                src: "/video/awards-card-video.mp4",
                muted: !0,
                playsInline: !0,
                loop: !0,
                preload: "auto",
                className: "absolute inset-0 w-full h-full object-cover hidden md:block"
            }), (0, s.jsx)("video", {
                autoPlay: !0,
                src: "/video/awards-card-video_m.mp4",
                muted: !0,
                playsInline: !0,
                loop: !0,
                preload: "auto",
                className: "absolute inset-0 w-full h-full object-cover md:hidden"
            }), (0, s.jsxs)("div", {
                className: "relative z-2 h-full p-8 lg:p-10 flex flex-col justify-between",
                children: [(0, s.jsx)("span", {
                    className: "text-light-font title block",
                    children: "Featured & Awards"
                }), (0, s.jsxs)("div", {
                    children: [(0, s.jsx)("div", {
                        className: "relative w-4/12 h-12 flex items-end justify-end mb-2 awards-logo-list",
                        children: ["/images/awwwards.svg", "/images/ccda.svg", "/images/thefwa.svg", "/images/csswinner.svg", "/images/adesignaward.svg", "/images/gsap.svg"].map((e, t) => (0, s.jsx)(b.default, {
                            src: e,
                            className: "absolute mt-auto w-auto! max-w-30 max-h-20 object-contain",
                            "data-img": !0,
                            fill: !0,
                            alt: `Awards logo ${t}`
                        }, t))
                    }), (0, s.jsxs)("div", {
                        className: "flex justify-between items-center gap-x-6",
                        children: [(0, s.jsx)("p", {
                            className: "small opacity-80 w-9/12",
                            children: "Featured on top design platforms worldwide."
                        }), (0, s.jsxs)("span", {
                            className: "flex items-start tabular-nums text-light-font number-small",
                            children: [(0, s.jsx)(f, {
                                value: "50",
                                className: "max-h-12",
                                duration: 1.55
                            }), (0, s.jsx)("span", {
                                className: "text-[2rem] xl:text-3xl leading-none xl:leading-none -tracking-[0.06em] -ml-1",
                                children: "+"
                            })]
                        })]
                    })]
                })]
            })]
        })
    }

    function w() {
        return (0, s.jsxs)("div", {
            "data-kf-card": !0,
            className: "project-card relative shrink-0 w-[85vw] md:w-[380px] lg:w-full max-w-99 max-md:h-[50svh] max-md:max-h-110 max-md:min-h-[300px] md:h-122 rounded-lg bg-cream p-8 lg:p-10 flex flex-col justify-between overflow-hidden   transition-colors duration-500 text-center will-change-transform backface-hidden transform-3d",
            children: [(0, s.jsx)("span", {
                className: "title block text-dark-font",
                children: "projects completed"
            }), (0, s.jsxs)("div", {
                className: "flex flex-col items-center justify-center flex-1 relative",
                children: [(0, s.jsx)("div", {
                    className: "w-50 h-50 rounded-full bg-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                }), (0, s.jsx)("div", {
                    className: "relative z-2 flex items-center",
                    children: (0, s.jsxs)("span", {
                        className: "flex items-start tabular-nums text-dark-font number-small",
                        children: [(0, s.jsx)(f, {
                            value: "1.5K",
                            className: "max-h-12",
                            duration: 1.85
                        }), (0, s.jsx)("span", {
                            className: "text-[2rem] xl:text-3xl leading-none xl:leading-none -tracking-[0.06em] -ml-1",
                            children: "+"
                        })]
                    })
                })]
            }), (0, s.jsxs)("p", {
                className: "small text-dark-font opacity-80",
                children: ["90% of our clients seek our ", (0, s.jsx)("br", {}), "services for a second project."]
            })]
        })
    }

    function y() {
        let e = (0, n.useRef)(null),
            t = (0, n.useRef)(null),
            l = (0, n.useRef)(null);
        return (0, s.jsx)("div", {
            ref: l,
            "data-kf-card": !0,
            onMouseEnter: () => {
                for (let l of [e.current, t.current]) l && (l.currentTime = 0, l.play().catch(() => {}))
            },
            onMouseLeave: () => {
                for (let l of [e.current, t.current]) l && (l.pause(), l.currentTime = 0)
            },
            className: "team-card shrink-0 w-[85vw] md:w-[380px] lg:w-full max-w-99 max-md:h-[50svh] max-md:max-h-110 max-md:min-h-[300px] md:h-122 rounded-lg bg-[#2F3135] text-light-font overflow-hidden relative  transition-colors duration-500 will-change-transform backface-hidden transform-3d",
            children: (0, s.jsxs)("div", {
                className: "relative z-3 h-full p-8 lg:p-10 flex flex-col justify-between",
                children: [(0, s.jsx)("span", {
                    className: "title block text-right",
                    children: "our team members"
                }), (0, s.jsxs)("div", {
                    className: "team-video overflow-hidden max-lg:py-4 lg:py-10 max-lg:flex-1 rounded-sm",
                    children: [(0, s.jsx)("video", {
                        ref: e,
                        src: "/video/team/rushi.mp4#t=0.1",
                        muted: !0,
                        playsInline: !0,
                        preload: "auto",
                        disableRemotePlayback: !0,
                        className: "w-full h-full object-cover object-top rounded-sm scale-101 hidden md:block"
                    }), (0, s.jsx)("video", {
                        ref: t,
                        src: "/video/team/rushi_m.mp4#t=0.1",
                        muted: !0,
                        playsInline: !0,
                        preload: "auto",
                        disableRemotePlayback: !0,
                        className: "w-full h-full object-cover object-top rounded-sm scale-101 md:hidden"
                    })]
                }), (0, s.jsxs)("div", {
                    className: "flex items-end justify-between",
                    children: [(0, s.jsxs)("p", {
                        className: "small text-light-font/60",
                        children: ["Different skills. ", (0, s.jsx)("br", {}), "One standard."]
                    }), (0, s.jsxs)("span", {
                        className: "flex items-start tabular-nums text-light-font number-small",
                        children: [(0, s.jsx)(f, {
                            value: "20",
                            className: "max-h-12",
                            duration: 1.55
                        }), (0, s.jsx)("span", {
                            className: "text-[2rem] xl:text-3xl leading-none xl:leading-none -tracking-[0.06em] -ml-1",
                            children: "+"
                        })]
                    })]
                })]
            })
        })
    }
    i.default.registerPlugin(g.ScrollTrigger), e.s(["default", 0, function() {
        let e = (0, n.useRef)(null),
            t = (0, v.useTransitionReady)();
        return (0, o.useGSAP)(() => {
            if (!t) return;
            let l = e.current;
            if (!l) return;
            let s = i.default.utils.toArray(l.querySelectorAll("[data-kf-card]"));
            if (3 !== s.length) return;
            let a = l.querySelector(".key-card-list");
            i.default.set(s, {
                autoAlpha: 0,
                force3D: !0
            });
            let r = i.default.matchMedia();
            r.add("(min-width: 768px)", () => {
                i.default.set(s, {
                    rotateX: -92,
                    transformOrigin: "center top"
                }), i.default.timeline({
                    scrollTrigger: {
                        id: "keyfacts-cards-desktop",
                        trigger: l,
                        start: "top center",
                        end: "top top",
                        scrub: 2,
                        markers: !1
                    }
                }).to(s, {
                    rotateX: 0,
                    autoAlpha: 1,
                    stagger: {
                        each: .6,
                        from: "start"
                    },
                    ease: "none",
                    force3D: !0,
                    duration: 2.65,
                    overwrite: !0
                })
            }), r.add("(max-width: 767px)", () => {
                if (!a) return;
                i.default.set(a, {
                    x: 0
                }), i.default.set(s, {
                    rotateX: 0,
                    autoAlpha: 1
                });
                let e = i.default.timeline({
                    scrollTrigger: {
                        id: "keyfacts-cards-mobile-pin",
                        trigger: l,
                        pin: !0,
                        start: "top top",
                        end: "bottom top",
                        anticipatePin: 1,
                        scrub: 2,
                        markers: !1
                    }
                });
                e.to(s[0], {
                    autoAlpha: 1,
                    ease: "power2.out",
                    force3D: !0,
                    duration: .15
                }, 0), e.to(a, {
                    x: () => (() => {
                        let e = s[s.length - 1];
                        if (!e) return 0;
                        let t = a.getBoundingClientRect(),
                            l = e.getBoundingClientRect(),
                            r = l.left - t.left + l.width / 2,
                            n = .04 * window.innerWidth;
                        return -(r - window.innerWidth / 2 + n)
                    })(),
                    ease: "none"
                }, 0), s.forEach((t, l) => {
                    let a = s.length > 1 ? l / (s.length - 1) : 0;
                    l > 0 && e.to(t, {
                        autoAlpha: 1,
                        ease: "power2.out",
                        force3D: !0,
                        duration: .15
                    }, Math.max(0, a - .075))
                })
            })
        }, {
            scope: e,
            dependencies: [t]
        }), (0, s.jsx)("section", {
            id: "keyfacts-section",
            className: "pt-25 pb-20 lg:pb-40 bg-[linear-gradient(0deg,#FFFFFF_0%,#D2D2D2_100%)] relative z-20 min-h-dvh max-md:overflow-hidden",
            ref: e,
            children: (0, s.jsxs)("div", {
                children: [(0, s.jsxs)("div", {
                    className: "tr__container",
                    children: [(0, s.jsxs)("div", {
                        className: "title-block flex flex-col items-center mb-10 lg:mb-20 gap-6 text-center",
                        children: [(0, s.jsx)(x.BlurTextReveal, {
                            as: "h2",
                            text: "Key facts",
                            animationType: "chars",
                            stagger: .05,
                            className: "text-dark-font block"
                        }), (0, s.jsx)(p.FadeInOnScroll, {
                            delay: .3,
                            children: (0, s.jsxs)("p", {
                                className: "text-dark-font small",
                                children: ["A snapshot of our ", (0, s.jsx)("br", {}), "experience and impact."]
                            })
                        })]
                    }), (0, s.jsxs)("div", {
                        className: "key-card-list perspective-[1400] flex gap-6 justify-start md:justify-center md:flex-wrap lg:flex-nowrap transform-3d max-lg:px-[8.66vw] ",
                        children: [(0, s.jsx)(j, {}, Number(t) + 1), (0, s.jsx)(w, {}, Number(t) + 2), (0, s.jsx)(y, {}, Number(t) + 3)]
                    }), (0, s.jsxs)("div", {
                        className: "partners-block mt-20 lg:mt-30 flex flex-col gap-10",
                        children: [(0, s.jsx)(x.BlurTextReveal, {
                            as: "span",
                            text: "Our business partners",
                            animationType: "words",
                            stagger: .05,
                            className: "text-black title text-center block"
                        }), (0, s.jsx)("div", {
                            className: "partners-list hidden lg:flex justify-center -mx-4 lg:-mx-10",
                            children: h.partnersLogo.map((e, t) => (0, s.jsx)("div", {
                                className: "px-6 lg:px-10 border-r border-grey-light/15 flex justify-center items-center last:border-0",
                                children: (0, s.jsx)(b.default, {
                                    src: e.logo,
                                    width: 108,
                                    height: 50,
                                    className: `h-auto ${e.widthClass}`,
                                    alt: `Partners logo ${t}`
                                })
                            }, t))
                        }), (0, s.jsx)(r.default, {
                            gap: 0,
                            className: "-mx-10 block w-auto! lg:hidden",
                            children: (0, s.jsx)("div", {
                                className: "flex flex-wrap",
                                children: h.partnersLogo.map((e, t) => (0, s.jsx)("div", {
                                    className: "px-10 border-r border-grey-light/15 flex justify-center items-center",
                                    children: (0, s.jsx)(b.default, {
                                        src: e.logo,
                                        width: 108,
                                        height: 50,
                                        className: `h-auto ${e.widthClass}`,
                                        alt: `Partners logo ${t}`
                                    })
                                }, t))
                            })
                        })]
                    })]
                }), (0, s.jsx)("div", {
                    className: "js-kf-line-wrap tr__container absolute bottom-0 max-md:translate-y-0 translate-y-1/2 left-0 right-0 z-0 max-md:px-4",
                    children: (0, s.jsx)(a.default, {
                        lineClass: "bg-grey-line/15 left-1/2! -translate-x-1/2",
                        plusClass: "col-span-12 mx-auto",
                        iconColor: "#272727"
                    })
                })]
            })
        })
    }], 67198)
}, 67585, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), Object.defineProperty(l, "BailoutToCSR", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let s = e.r(32061);

    function a({
        reason: e,
        children: t
    }) {
        if ("u" < typeof window) throw Object.defineProperty(new s.BailoutToCSRError(e), "__NEXT_ERROR_CODE", {
            value: "E394",
            enumerable: !1,
            configurable: !0
        });
        return t
    }
}, 9885, (e, t, l) => {
    "use strict";

    function s(e) {
        return e.split("/").map(e => encodeURIComponent(e)).join("/")
    }
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), Object.defineProperty(l, "encodeURIPath", {
        enumerable: !0,
        get: function() {
            return s
        }
    })
}, 52157, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), Object.defineProperty(l, "PreloadChunks", {
        enumerable: !0,
        get: function() {
            return o
        }
    });
    let s = e.r(43476),
        a = e.r(74080),
        r = e.r(63599),
        n = e.r(9885),
        i = e.r(43369);

    function o({
        moduleIds: e
    }) {
        if ("u" > typeof window) return null;
        let t = r.workAsyncStorage.getStore();
        if (void 0 === t) return null;
        let l = [];
        if (t.reactLoadableManifest && e) {
            let s = t.reactLoadableManifest;
            for (let t of e) {
                if (!s[t]) continue;
                let e = s[t].files;
                l.push(...e)
            }
        }
        if (0 === l.length) return null;
        let c = (0, i.getAssetTokenQuery)();
        return (0, s.jsx)(s.Fragment, {
            children: l.map(e => {
                let l = `${t.assetPrefix}/_next/${(0,n.encodeURIPath)(e)}${c}`;
                return e.endsWith(".css") ? (0, s.jsx)("link", {
                    precedence: "dynamic",
                    href: l,
                    rel: "stylesheet",
                    as: "style",
                    nonce: t.nonce
                }, e) : ((0, a.preload)(l, {
                    as: "script",
                    fetchPriority: "low",
                    nonce: t.nonce
                }), null)
            })
        })
    }
}, 69093, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), Object.defineProperty(l, "default", {
        enumerable: !0,
        get: function() {
            return c
        }
    });
    let s = e.r(43476),
        a = e.r(71645),
        r = e.r(67585),
        n = e.r(52157);

    function i(e) {
        return {
            default: e && "default" in e ? e.default : e
        }
    }
    let o = {
            loader: () => Promise.resolve(i(() => null)),
            loading: null,
            ssr: !0
        },
        c = function(e) {
            let t = { ...o,
                    ...e
                },
                l = (0, a.lazy)(() => t.loader().then(i)),
                c = t.loading;

            function d(e) {
                let i = c ? (0, s.jsx)(c, {
                        isLoading: !0,
                        pastDelay: !0,
                        error: null
                    }) : null,
                    o = !t.ssr || !!t.loading,
                    d = o ? a.Suspense : a.Fragment,
                    u = t.ssr ? (0, s.jsxs)(s.Fragment, {
                        children: ["u" < typeof window ? (0, s.jsx)(n.PreloadChunks, {
                            moduleIds: t.modules
                        }) : null, (0, s.jsx)(l, { ...e
                        })]
                    }) : (0, s.jsx)(r.BailoutToCSR, {
                        reason: "next/dynamic",
                        children: (0, s.jsx)(l, { ...e
                        })
                    });
                return (0, s.jsx)(d, { ...o ? {
                        fallback: i
                    } : {},
                    children: u
                })
            }
            return d.displayName = "LoadableComponent", d
        }
}, 70703, (e, t, l) => {
    "use strict";
    Object.defineProperty(l, "__esModule", {
        value: !0
    }), Object.defineProperty(l, "default", {
        enumerable: !0,
        get: function() {
            return a
        }
    });
    let s = e.r(55682)._(e.r(69093));

    function a(e, t) {
        let l = {};
        "function" == typeof e && (l.loader = e);
        let a = { ...l,
            ...t
        };
        return (0, s.default)({ ...a,
            modules: a.loadableGenerated ? .modules
        })
    }("function" == typeof l.default || "object" == typeof l.default && null !== l.default) && void 0 === l.default.__esModule && (Object.defineProperty(l.default, "__esModule", {
        value: !0
    }), Object.assign(l.default, l), t.exports = l.default)
}, 19770, e => {
    "use strict";
    var t = e.i(70703);
    let l = (0, t.default)(() => e.A(88790), {
            loadableGenerated: {
                modules: [99060]
            },
            ssr: !1,
            loading: () => null
        }),
        s = (0, t.default)(() => e.A(96906), {
            loadableGenerated: {
                modules: [55427]
            },
            ssr: !1
        }),
        a = (0, t.default)(() => e.A(33954), {
            loadableGenerated: {
                modules: [53101]
            },
            ssr: !1
        }),
        r = (0, t.default)(() => e.A(73141), {
            loadableGenerated: {
                modules: [3214]
            },
            ssr: !1
        });
    e.s(["DribbleSectionDynamic", 0, l, "TestimonialsDynamic", 0, s, "TrionnSymbolAnimationDynamic", 0, a, "WorkServicesSequenceDynamic", 0, r])
}]);