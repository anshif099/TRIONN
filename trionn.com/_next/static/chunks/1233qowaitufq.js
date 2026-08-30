(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push(["object" == typeof document ? document.currentScript : void 0, 40421, e => {
    "use strict";
    var t = e.i(71645);
    e.s(["useTrionnSymbolAudio", 0, function() {
        let e = (0, t.useRef)(null),
            r = (0, t.useRef)(!1),
            n = (0, t.useRef)(!1),
            a = (0, t.useCallback)(() => (e.current || (e.current = new(window.AudioContext || window.webkitAudioContext)), n.current && "suspended" === e.current.state && e.current.resume().catch(() => {}), e.current), []);
        (0, t.useEffect)(() => {
            let t = () => {
                    n.current = !0;
                    let t = e.current;
                    t && "suspended" === t.state && t.resume().catch(() => {})
                },
                r = ["pointerdown", "touchstart", "keydown"];
            return r.forEach(e => window.addEventListener(e, t, {
                once: !0,
                passive: !0
            })), () => {
                r.forEach(e => window.removeEventListener(e, t))
            }
        }, []);
        let o = (0, t.useCallback)((e, t) => {
                let r = a();
                fetch(e).then(e => e.arrayBuffer()).then(e => r.decodeAudioData(e)).then(t).catch(t => console.warn("Audio load error", e, t))
            }, [a]),
            i = (0, t.useRef)(null),
            l = (0, t.useRef)(null),
            s = (0, t.useCallback)(() => {
                if (!r.current || i.current) return;
                let e = a(),
                    t = e.createScriptProcessor(4096, 1, 1),
                    n = 0;
                t.onaudioprocess = e => {
                    let t = e.outputBuffer.getChannelData(0);
                    for (let e = 0; e < 4096; e++) {
                        let r = 2 * Math.random() - 1;
                        t[e] = (n + .02 * r) / 1.02, n = t[e], t[e] *= 3.5
                    }
                };
                let o = e.createBiquadFilter();
                o.type = "lowpass", o.frequency.value = 80;
                let s = e.createGain();
                s.gain.setValueAtTime(0, e.currentTime), s.gain.linearRampToValueAtTime(.18, e.currentTime + .1), t.connect(o), o.connect(s), s.connect(e.destination), i.current = t, l.current = s
            }, [a]),
            c = (0, t.useCallback)(() => {
                let t = e.current;
                l.current && t && (l.current.gain.linearRampToValueAtTime(0, t.currentTime + .15), setTimeout(() => {
                    i.current && (i.current.disconnect(), i.current = null), l.current = null
                }, 200))
            }, []),
            u = (0, t.useRef)(null),
            d = (0, t.useRef)(null),
            h = (0, t.useRef)(null),
            p = (0, t.useCallback)(() => {
                if (!r.current) return;
                let e = e => {
                    let t = a();
                    if (d.current) {
                        try {
                            d.current.stop()
                        } catch (e) {}
                        d.current = null
                    }
                    let r = t.createGain();
                    r.gain.setValueAtTime(.9, t.currentTime);
                    let n = t.createBufferSource();
                    n.buffer = e, n.connect(r), r.connect(t.destination), n.start(), d.current = n, h.current = r, n.onended = () => {
                        d.current = null, h.current = null
                    }
                };
                u.current ? e(u.current) : o("/assets/glass-shatter.mp3", t => {
                    u.current = t, e(t)
                })
            }, [a, o]),
            m = (0, t.useCallback)(() => {
                let t = e.current;
                h.current && t && (h.current.gain.linearRampToValueAtTime(0, t.currentTime + .1), setTimeout(() => {
                    if (d.current) {
                        try {
                            d.current.stop()
                        } catch (e) {}
                        d.current = null
                    }
                    h.current = null
                }, 150))
            }, []),
            f = (0, t.useRef)(null),
            g = (0, t.useCallback)(() => {
                if (!r.current) return;
                let e = e => {
                    let t = a(),
                        r = t.createGain();
                    r.gain.setValueAtTime(.7, t.currentTime);
                    let n = t.createBufferSource();
                    n.buffer = e, n.connect(r), r.connect(t.destination), n.start()
                };
                f.current ? e(f.current) : o("/assets/join-zoom.mp3", t => {
                    f.current = t, e(t)
                })
            }, [a, o]),
            A = (0, t.useRef)(null),
            v = (0, t.useRef)(null),
            w = (0, t.useRef)(null),
            y = (0, t.useRef)(!1),
            b = (0, t.useRef)(!1),
            x = (0, t.useCallback)(() => {
                if (!r.current) return;
                let e = a();
                if (v.current && w.current) {
                    w.current.gain.cancelScheduledValues(e.currentTime), w.current.gain.setValueAtTime(w.current.gain.value, e.currentTime), w.current.gain.linearRampToValueAtTime(.7, e.currentTime + .8);
                    return
                }
                if (y.current) return;
                y.current = !0;
                let t = e => {
                    y.current = !1;
                    let t = a(),
                        r = t.createGain();
                    r.gain.setValueAtTime(0, t.currentTime), r.gain.linearRampToValueAtTime(.7, t.currentTime + .8);
                    let n = t.createBufferSource();
                    n.buffer = e, n.loop = !0, n.connect(r), r.connect(t.destination), n.start(), v.current = n, w.current = r
                };
                A.current ? t(A.current) : o("/assets/woosh-loop.mp3", e => {
                    A.current = e, t(e)
                })
            }, [a, o]),
            M = (0, t.useCallback)(() => {
                let t = e.current;
                if (!w.current || !v.current || !t) return;
                b.current = !1, w.current.gain.cancelScheduledValues(t.currentTime), w.current.gain.setValueAtTime(w.current.gain.value, t.currentTime), w.current.gain.linearRampToValueAtTime(0, t.currentTime + 1.5);
                let r = v.current;
                w.current, v.current = null, w.current = null, setTimeout(() => {
                    try {
                        r.stop()
                    } catch (e) {}
                }, 1600)
            }, []),
            T = (0, t.useCallback)(() => {
                if (!r.current || b.current) return;
                b.current = !0;
                let e = e => {
                    if (!r.current) return;
                    let t = a(),
                        n = () => {
                            if (!r.current) return;
                            let n = t.createGain();
                            n.gain.setValueAtTime(0, t.currentTime), n.gain.linearRampToValueAtTime(.07, t.currentTime + 2);
                            let a = t.createBufferSource();
                            a.buffer = e, a.loop = !0, a.connect(n), n.connect(t.destination), a.start(), v.current = a, w.current = n
                        };
                    "suspended" === t.state ? t.resume().then(n).catch(() => {}) : n()
                };
                A.current ? e(A.current) : o("/assets/woosh-loop.mp3", t => {
                    A.current = t, e(t)
                })
            }, [a, o]),
            S = (0, t.useRef)(null),
            k = (0, t.useRef)(!1),
            C = (0, t.useRef)(null),
            E = (0, t.useRef)(null),
            P = (0, t.useRef)(0),
            R = (0, t.useRef)(!1),
            V = (0, t.useCallback)(() => {
                if (S.current || k.current) return;
                k.current = !0;
                let e = a();
                fetch("/assets/hero-spark.mp3").then(e => e.arrayBuffer()).then(t => e.decodeAudioData(t)).then(e => {
                    S.current = e, k.current = !1
                }).catch(e => {
                    k.current = !1, console.warn("Hero spark audio error (hero-spark.mp3)", e)
                })
            }, [a]),
            L = (0, t.useCallback)(t => {
                let r = e.current,
                    n = C.current,
                    a = E.current;
                if (C.current = null, E.current = null, !n || !r) return;
                let o = null == t ? .035 : t;
                try {
                    a && (a.gain.cancelScheduledValues(r.currentTime), a.gain.setValueAtTime(a.gain.value, r.currentTime), a.gain.linearRampToValueAtTime(1e-4, r.currentTime + o)), setTimeout(() => {
                        try {
                            n.stop()
                        } catch (e) {}
                    }, Math.max(20, 1e3 * o + 20))
                } catch (e) {
                    try {
                        n.stop()
                    } catch (e) {}
                }
            }, []),
            B = (0, t.useCallback)(e => {
                if (R.current = !1, e ? .sound === !1 || !r.current) return !1;
                let t = a();
                if ("suspended" === t.state && t.resume(), !S.current || P.current > 0) return !1;
                L(.015);
                try {
                    let e = t.createBufferSource(),
                        r = t.createGain();
                    return r.gain.setValueAtTime(.16, t.currentTime), e.buffer = S.current, e.playbackRate.value = 1, e.connect(r), r.connect(t.destination), C.current = e, E.current = r, e.start(0), e.onended = () => {
                        C.current === e && (C.current = null, E.current = null)
                    }, P.current = .08, R.current = !0, !0
                } catch (e) {
                    return C.current = null, E.current = null, !1
                }
            }, [a, L]),
            z = (0, t.useCallback)(() => {
                let e = R.current;
                return R.current = !1, e
            }, []),
            X = (0, t.useRef)(null),
            q = (0, t.useRef)(null),
            Y = (0, t.useCallback)(() => {
                try {
                    let e = new(window.AudioContext || window.webkitAudioContext);
                    X.current = e, fetch("/assets/hover-beep.mp3").then(e => e.arrayBuffer()).then(t => e.decodeAudioData(t)).then(e => {
                        q.current = e
                    }).catch(() => {
                        let t = atob("SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//vgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAAFAAAYfABVVVVVVVVVVVVVVVVVVVVVVVVVf39/f39/f39/f39/f39/f39/f3+qqqqqqqqqqqqqqqqqqqqqqqqqqtXV1dXV1dXV1dXV1dXV1dXV1dXV//////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJAZ4AAAAAAAAGHyFxJ9i"),
                            r = new ArrayBuffer(t.length),
                            n = new Uint8Array(r);
                        for (let e = 0; e < t.length; e++) n[e] = t.charCodeAt(e);
                        e.decodeAudioData(r.slice(0)).then(e => {
                            q.current = e
                        })
                    })
                } catch (e) {}
            }, []),
            _ = (0, t.useCallback)(() => {
                if (r.current && q.current && X.current) try {
                    let e = X.current.createBufferSource(),
                        t = X.current.createGain();
                    e.buffer = q.current, e.connect(t), t.connect(X.current.destination), t.gain.setValueAtTime(.7, X.current.currentTime), e.start()
                } catch (e) {}
            }, []),
            I = (0, t.useCallback)(e => {
                r.current = e
            }, []),
            O = (0, t.useCallback)(() => {
                c(), M(), m(), L(.05)
            }, [c, M, m, L]);
        return {
            soundEnabledRef: r,
            setSoundEnabled: I,
            startVibrateSound: s,
            stopVibrateSound: c,
            playExplodeSound: p,
            stopExplodeSound: m,
            playJoinSound: g,
            startWooshSound: x,
            stopWooshSound: M,
            autoStartWoosh: T,
            playSparkSound: B,
            playHoverBeep: _,
            preloadSparkBuffer: V,
            stopSparkSound: L,
            didSparkSoundStart: z,
            initHoverAudio: Y,
            stopAllSounds: O,
            sparkCooldownRef: P,
            wooshGainRef: w,
            audioCtxRef: e,
            hoverAudioCtxRef: X,
            wooshNodeRef: v,
            wooshAutoStartedRef: b
        }
    }])
}, 54377, e => {
    "use strict";
    var t = e.i(43476),
        r = e.i(42936),
        n = e.i(71645),
        a = e.i(32009),
        o = e.i(83495),
        i = e.i(55667),
        l = e.i(40421),
        s = e.i(71871);
    e.i(11303);
    var c = e.i(62749);
    let u = [0xffffff, 8969727, 4500223, 26367, 52479, 0xaaddff, 17612],
        d = [{
            color: 13260,
            maxOpacity: .12
        }, {
            color: 3381759,
            maxOpacity: .25
        }, {
            color: 0x99ddff,
            maxOpacity: .45
        }],
        h = [{
            color: 3379,
            radius: .1375,
            maxOpacity: .025
        }, {
            color: 6758,
            radius: .09,
            maxOpacity: .05
        }, {
            color: 13226,
            radius: .055,
            maxOpacity: .08
        }, {
            color: 21998,
            radius: .03,
            maxOpacity: .13
        }, {
            color: 4500223,
            radius: .01375,
            maxOpacity: .24
        }, {
            color: 0xbbddff,
            radius: .005,
            maxOpacity: .35
        }];

    function p(e) {
        let t = new a.Shape;
        return e(t), t
    }
    var m = e.i(65747);

    function f({
        vibrateElementIds: e = []
    }) {
        let g, A, v, w, y, b = (0, n.useRef)(null),
            x = (0, n.useRef)(null),
            M = (0, n.useRef)(null),
            T = (0, n.useRef)([]),
            S = (0, n.useRef)(!0),
            k = (0, n.useRef)(!1),
            C = (0, n.useRef)(!1),
            E = (0, n.useRef)(!1),
            {
                soundEnabled: P
            } = (0, r.useSiteSound)();
        (0, n.useEffect)(() => {
            k.current = P
        }, [P]), (0, n.useEffect)(() => {
            T.current = e.map(e => document.getElementById(e))
        }, [e]), (0, n.useEffect)(() => {
            let e = document.getElementById("s3-text");
            if (!e) return;
            let t = new IntersectionObserver(([e]) => {
                C.current = e.isIntersecting
            }, {
                threshold: .1
            });
            return t.observe(e), () => t.disconnect()
        }, []);
        let {
            audio: R,
            stateRef: V
        } = (g = (0, l.useTrionnSymbolAudio)(), A = (0, n.useRef)(0), v = (0, n.useRef)(null), (0, i.useLenis)(({
            scroll: e
        }) => {
            A.current = e
        }), w = (0, n.useRef)({
            scrollProgress: 0,
            targetScrollProgress: 0,
            s4Amt: 0,
            targetS4Amt: 0,
            introAmt: 1,
            lastScroll: 0,
            lastNorm: 0,
            s4ty: 100,
            rotX: .3,
            rotY: .4,
            dragging: !1,
            px: 0,
            py: 0,
            isHovered: !1,
            hoverAmt: 0,
            clickBurst: 0,
            vibrateAmt: 0,
            vibratePhase: 0,
            holding: !1,
            holdTime: 0,
            joinPlayed: !1,
            mouseX: 0,
            mouseY: 0,
            mouseScreenX: -9999,
            mouseScreenY: -9999,
            isTouchPointer: !1,
            lineTime: 0,
            weldCooldown: 0,
            touchY: 0,
            scene: null,
            camera: null,
            renderer: null,
            group: null,
            cubeCamera: null,
            cubeRT: null,
            particles: [],
            p1: null,
            p2: null,
            bolts: [],
            lineCanvas: null,
            lctx: null,
            smoothUndrawAmt: 0,
            sparkHoverActive: !1,
            sparkBurstLeft: 0,
            sparkSoundPlayed: !1,
            sparkWasAway: !0,
            lineState: [{
                prog: 0
            }, {
                prog: 0
            }, {
                prog: 0
            }],
            pulses: [{
                line: 0,
                phase: 0,
                speed: 1.4,
                len: .03,
                active: !1,
                rest: .5,
                dir: 1
            }, {
                line: 1,
                phase: 0,
                speed: 1.3,
                len: .03,
                active: !1,
                rest: 2.2,
                dir: 1
            }, {
                line: 2,
                phase: 0,
                speed: 1.35,
                len: .03,
                active: !1,
                rest: 4.1,
                dir: 1
            }],
            envReady: !1,
            clock: null,
            hoveredMesh: null,
            _canvasCleared: !1,
            _vibrateReset: !1,
            _lastTy: -999,
            _lastScrollHintOpacity: "1"
        }), y = (0, c.useTransitionReady)(), (0, n.useEffect)(() => {
            let e, t;
            if (!y) return;
            let r = w.current,
                n = b.current;
            if (!n) return;
            let i = window.innerWidth,
                l = window.innerHeight;

            function c() {
                let e = i < 768;
                return Math.min(window.devicePixelRatio || 1, e ? 1 : 1.5)
            }
            let m = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches,
                f = document.createElement("canvas");
            f.width = i, f.height = l, r.lineCanvas = f, r.lctx = f.getContext("2d");
            let S = new a.CanvasTexture(f);
            S.minFilter = a.LinearFilter, S.magFilter = a.LinearFilter, S.generateMipmaps = !1;
            let k = new a.Scene,
                E = new a.OrthographicCamera(-1, 1, 1, -1, 0, 1),
                P = new a.MeshBasicMaterial({
                    map: S,
                    transparent: !0,
                    depthTest: !1,
                    depthWrite: !1,
                    toneMapped: !1
                }),
                R = new a.Mesh(new a.PlaneGeometry(2, 2), P);
            R.renderOrder = 1e4, k.add(R);
            let V = new a.WebGLRenderer({
                antialias: !0,
                alpha: !1,
                powerPreference: "high-performance"
            });
            V.setSize(i, l), V.setPixelRatio(c()), V.setClearColor(789516, 1), V.toneMapping = a.ACESFilmicToneMapping, V.toneMappingExposure = 1.1, n.appendChild(V.domElement), r.renderer = V;
            let L = new a.Scene;

            function B() {
                let e = i;
                return e > 1440 ? {
                    fov: 42,
                    z: 6,
                    sx: 1,
                    x: 0,
                    y: 0
                } : e >= 1024 ? {
                    fov: 40,
                    z: 6.28,
                    sx: .9,
                    x: 0,
                    y: -.02
                } : e >= 768 ? {
                    fov: 38,
                    z: 7.55,
                    sx: .84,
                    x: 0,
                    y: -.035
                } : {
                    fov: 36,
                    z: 9.35,
                    sx: .74,
                    x: 0,
                    y: -.055
                }
            }
            L.background = new a.Color(789516), r.scene = L;
            let z = B(),
                X = new a.PerspectiveCamera(z.fov, i / l, .1, 200);
            X.position.set(0, 0, z.z), r.camera = X, L.add(new a.AmbientLight(2764864, 2.8));
            let q = new a.DirectionalLight(0xffffff, 1.6);
            q.position.set(4, 5, 4), L.add(q);
            let Y = new a.DirectionalLight(8952234, .8);
            Y.position.set(-4, 1, -2), L.add(Y);
            let _ = new a.DirectionalLight(0xccddee, 1.5);
            _.position.set(0, -3, -5), L.add(_);
            let I = new a.DirectionalLight(8952234, 1);
            I.position.set(-3, 2, 6), L.add(I);
            let O = new a.DirectionalLight(0xaabbcc, 1);
            O.position.set(0, 8, 2), L.add(O);
            let D = new a.DirectionalLight(6715306, 1.2);
            D.position.set(0, 0, -8), L.add(D);
            let G = new a.DirectionalLight(6715306, 1);
            G.position.set(-8, 0, 0), L.add(G);
            let W = new a.DirectionalLight(6715306, 1);
            W.position.set(8, 0, 0), L.add(W);
            let F = new a.DirectionalLight(6715306, 1);
            F.position.set(0, -8, 0), L.add(F);
            let H = new a.PointLight(0xff3300, 12, 22);
            H.position.set(3, -1, 3), L.add(H);
            let U = new a.PointLight(0xff2200, 9, 20);
            U.position.set(-3, 2, -2), L.add(U);
            let j = new a.PointLight(0xff5500, 6, 14);
            j.position.set(0, 4, 3), L.add(j), r.p1 = H, r.p2 = U;
            let $ = new a.BufferGeometry,
                N = new Float32Array(600);
            for (let e = 0; e < 600; e++) N[e] = (Math.random() - .5) * 20;
            $.setAttribute("position", new a.BufferAttribute(N, 3));
            let J = new a.Points($, new a.PointsMaterial({
                color: 0xff3300,
                size: .022,
                transparent: !0,
                opacity: .35
            }));
            J.visible = i >= 768, L.add(J);
            let Z = new a.WebGLCubeRenderTarget(256, {
                    generateMipmaps: !0,
                    minFilter: a.LinearMipmapLinearFilter
                }),
                K = new a.CubeCamera(.1, 100, Z);
            L.add(K), r.cubeCamera = K, r.cubeRT = Z;
            let Q = new a.MeshPhysicalMaterial({
                    color: 3816770,
                    emissive: new a.Color(1712176),
                    emissiveIntensity: .15,
                    metalness: 1,
                    roughness: .08,
                    transmission: .35,
                    ior: 2.4,
                    transparent: !0,
                    opacity: .88,
                    reflectivity: 1,
                    clearcoat: 1,
                    clearcoatRoughness: .05,
                    envMap: Z.texture,
                    envMapIntensity: 3,
                    side: a.DoubleSide
                }),
                ee = {
                    depth: .42,
                    bevelEnabled: !0,
                    bevelThickness: .008,
                    bevelSize: .006,
                    bevelSegments: 1
                },
                et = new a.LineBasicMaterial({
                    color: 3554893,
                    transparent: !0,
                    opacity: .08
                }),
                er = new a.LineBasicMaterial({
                    color: 3554893,
                    transparent: !0,
                    opacity: .05
                }),
                en = new a.Group;
            r.group = en;
            let ea = [];

            function eo() {
                let e = B(),
                    t = ee.depth ? ? .42;
                en.scale.set(e.sx, e.sx, e.sx), en.position.set(e.x, e.y, -t / 2)
            }(t = p(e => {
                e.moveTo(-.140182, -.22392849999999997), e.bezierCurveTo(-.1261855, -.22392849999999997, -.113243, -.2163645, -.10639200000000001, -.204135), e.lineTo(-.013221499999999999, -.038037), e.bezierCurveTo(.001271, -.012198500000000001, -.017406500000000002, .0196695, -.047027, .0196695), e.lineTo(-.4300165, .0196695), e.bezierCurveTo(-.4598385, .0196695, -.478485, .0519715, -.46355850000000004, .07781), e.lineTo(.1073065, 1.065563), e.bezierCurveTo(.114111, 1.0773584999999999, .114235, 1.0918665, .10761650000000002, 1.1037705), e.lineTo(.013516, 1.2732165), e.bezierCurveTo(-.001116, 1.2995355, -.0388585, 1.2998610000000002, -.053909, 1.2737745), e.lineTo(-.7673585, .039029), e.bezierCurveTo(-.774287, .027047500000000002, -.7870900000000001, .0196695, -.8009315, .0196695), e.lineTo(-1.2267785, .0196695), e.bezierCurveTo(-1.2403875, .0196695, -1.2530045, .0125395, -1.2600105000000001, 868e-6), e.lineTo(-1.3597530000000002, -.16523000000000002), e.bezierCurveTo(-1.375253, -.191053, -1.356653, -.22392849999999997, -1.3265365, -.22392849999999997), e.lineTo(-.140182, -.22392849999999997), e.closePath()
            }), [t, p(e => {
                e.moveTo(.655185, .5729575), e.bezierCurveTo(.6482720000000001, .584908, .648241, .5996175, .6551075000000001, .611599), e.lineTo(.8809425000000001, 1.005919), e.bezierCurveTo(.8876850000000001, 1.0176835, .8877780000000001, 1.0321295, .8811905, 1.043987), e.lineTo(.7870280000000001, 1.2135259999999999), e.bezierCurveTo(.772396, 1.239845, .7346535000000001, 1.2401705, .7195875, 1.2140995), e.lineTo(.130789, .1955945), e.bezierCurveTo(.12387600000000001, .183644, .123845, .1689035, .13074249999999998, .156922), e.lineTo(.22904350000000004, -.014322), e.bezierCurveTo(.243939, -.0402845, .281418, -.040269, .2962825, -.0142755), e.lineTo(.47002200000000005, .2892765), e.bezierCurveTo(.4848865, .315239, .522319, .3152855, .5372454999999999, .2893385), e.lineTo(1.107289, -.7013285), e.bezierCurveTo(1.1142175, -.713341, 1.1270205, -.7207500000000001, 1.1408775, -.7207500000000001), e.lineTo(1.335604, -.7207655), e.bezierCurveTo(1.365426, -.720781, 1.384088, -.6884635, 1.369146, -.662625), e.lineTo(.655185, .5729575), e.closePath()
            }), p(e => {
                e.moveTo(.2825805, -.599881), e.bezierCurveTo(.2973675, -.625704, .2787055, -.6578665, .24894550000000001, -.6578665), e.lineTo(-.9001780000000001, -.6578665), e.bezierCurveTo(-.9137715000000001, -.6578665, -.9263885000000001, -.6650119999999999, -.9333945, -.676668), e.lineTo(-1.033137, -.8427815000000001), e.bezierCurveTo(-1.0486525, -.8686045000000001, -1.030037, -.9014645000000001, -.9999205, -.9014645000000001), e.lineTo(.43365899999999996, -.9014645000000001), e.bezierCurveTo(.44756250000000003, -.9014645000000001, .46041200000000004, -.9089200000000001, .4673095, -.92101), e.lineTo(.691486, -1.3134700000000001), e.bezierCurveTo(.6983835, -1.3255445000000001, .7112175, -1.333, .7251365000000001, -1.333), e.lineTo(.9199715, -1.333), e.bezierCurveTo(.9497625000000001, -1.333, .9684090000000001, -1.3007755, .9535755000000001, -1.2749525), e.lineTo(.361491, -.2442025), e.bezierCurveTo(.3545625, -.232159, .3417595, -.22474999999999998, .32788700000000004, -.22474999999999998), e.lineTo(.1348655, -.22474999999999998), e.bezierCurveTo(.10510549999999999, -.22474999999999998, .0864435, -.25691250000000004, .10123050000000001, -.2827355), e.lineTo(.2825805, -.599881), e.closePath()
            })]).forEach((e, t) => (function(e, t) {
                let r = new a.ExtrudeGeometry(e, ee);
                r.computeBoundingBox();
                let n = new a.Vector3;
                r.boundingBox.getCenter(n);
                let o = r.attributes.position.array,
                    i = r.attributes.normal.array,
                    l = o.length / 9,
                    s = {};
                for (let e = 0; e < l; e++) {
                    let t = 9 * e,
                        r = Math.round(10 * i[t]) / 10,
                        n = Math.round(10 * i[t + 1]) / 10,
                        a = Math.round(10 * i[t + 2]) / 10,
                        o = `${r},${n},${a}`;
                    s[o] || (s[o] = {
                        tris: [],
                        nx: r,
                        ny: n,
                        nz: a
                    }), s[o].tris.push(e)
                }
                Object.values(s).forEach(e => {
                    if (!e.tris.length) return;
                    let r = [],
                        l = [],
                        s = 0,
                        c = 0,
                        u = 0;
                    e.tris.forEach(e => {
                        let t = 9 * e;
                        for (let e = 0; e < 9; e++) r.push(o[t + e]), l.push(i[t + e]);
                        s += o[t] + o[t + 3] + o[t + 6], c += o[t + 1] + o[t + 4] + o[t + 7], u += o[t + 2] + o[t + 5] + o[t + 8]
                    });
                    let d = 3 * e.tris.length;
                    s /= d, c /= d, u /= d;
                    let h = new a.BufferGeometry;
                    h.setAttribute("position", new a.BufferAttribute(new Float32Array(r), 3)), h.setAttribute("normal", new a.BufferAttribute(new Float32Array(l), 3));
                    let p = new a.Mesh(h, Q.clone()),
                        m = s - n.x,
                        f = c - n.y,
                        g = u - n.z,
                        A = Math.sqrt(m * m + f * f + g * g) || 1,
                        v = new a.Vector3(m / A * .6 + .4 * e.nx, f / A * .6 + .4 * e.ny, g / A * .6 + .4 * e.nz).normalize(),
                        w = new a.Vector3(Math.random() - .5, Math.random() - .5, Math.random() - .5).normalize(),
                        y = (Math.random() - .5) * .8,
                        b = .25 * Math.random();
                    en.add(p), ea.push({
                        mesh: p,
                        explodeDir: v,
                        spinAxis: w,
                        spinSpeed: y,
                        delay: b,
                        shapeIdx: t
                    })
                });
                let c = new a.EdgesGeometry(r, 8),
                    u = new a.LineSegments(c, et);
                en.add(u), ea.push({
                    mesh: u,
                    explodeDir: new a.Vector3(0, 0, 0),
                    spinAxis: new a.Vector3(0, 1, 0),
                    spinSpeed: 0,
                    delay: 0,
                    shapeIdx: t,
                    isEdge: !0
                });
                let d = new a.LineSegments(c, er);
                d.scale.set(1.004, 1.004, 1.004), en.add(d), ea.push({
                    mesh: d,
                    explodeDir: new a.Vector3(0, 0, 0),
                    spinAxis: new a.Vector3(0, 1, 0),
                    spinSpeed: 0,
                    delay: 0,
                    shapeIdx: t,
                    isEdge: !0
                })
            })(e, t)), r.particles = ea, L.add(en), eo();
            let ei = new a.Vector3,
                el = new a.Vector3,
                es = new a.Vector3,
                ec = new a.Vector3,
                eu = new a.Quaternion,
                ed = new a.Vector3(0, 1, 0);
            for (let e = 0; e < 5; e++) r.bolts.push(function() {
                let e = new Float32Array(30),
                    t = new a.BufferGeometry;
                t.setAttribute("position", new a.BufferAttribute(e, 3)), t.setDrawRange(0, 10);
                let r = new a.LineBasicMaterial({
                        color: 8965375,
                        transparent: !0,
                        opacity: 0,
                        depthTest: !1,
                        depthWrite: !1,
                        blending: a.AdditiveBlending
                    }),
                    n = new a.Line(t, r);
                n.renderOrder = 999, L.add(n);
                let o = d.map(e => {
                        var t;
                        let r, n, o, i;
                        return t = e.color, r = new Float32Array(30), (n = new a.BufferGeometry).setAttribute("position", new a.BufferAttribute(r, 3)), n.setDrawRange(0, 10), o = new a.LineBasicMaterial({
                            color: t,
                            transparent: !0,
                            opacity: 0,
                            depthTest: !1,
                            depthWrite: !1,
                            blending: a.AdditiveBlending
                        }), (i = new a.Line(n, o)).renderOrder = 998, L.add(i), {
                            line: i,
                            pts: r
                        }
                    }),
                    i = h.map(e => (function(e) {
                        let t = new a.MeshBasicMaterial({
                                color: e.color,
                                transparent: !0,
                                opacity: 0,
                                depthTest: !1,
                                depthWrite: !1,
                                blending: a.AdditiveBlending
                            }),
                            r = new a.CylinderGeometry(e.radius, e.radius, 1, 16, 1, !0),
                            n = new a.Group;
                        n.renderOrder = 996, n.visible = !1;
                        let o = [];
                        for (let e = 0; e < 9; e++) {
                            let e = new a.Mesh(r, t);
                            e.renderOrder = 996, e.visible = !1, n.add(e), o.push(e)
                        }
                        return L.add(n), {
                            group: n,
                            segments: o,
                            material: t,
                            layer: e
                        }
                    })(e)),
                    l = new a.PointLight(0xaaccff, 0, 14);
                return L.add(l), {
                    line: n,
                    pts: e,
                    glowLines: o,
                    glowTubes: i,
                    travelLight: l,
                    life: 0,
                    maxLife: 0,
                    active: !1
                }
            }());
            g.preloadSparkBuffer(), g.initHoverAudio();
            let eh = new a.Vector3(-.59, .1, .21),
                ep = new a.Vector3(.28, -.85, .21),
                em = new a.Vector3(.54, .48, .21),
                ef = new a.Vector3;

            function eg(e) {
                ef.copy(e).applyMatrix4(en.matrixWorld);
                let t = ef.z;
                return ef.project(X), {
                    x: (ef.x + 1) / 2 * f.width,
                    y: (-ef.y + 1) / 2 * f.height,
                    worldZ: t
                }
            }

            function eA(e, t, n, a, o, i, l) {
                let s = 2 * n - .5 * e - .5 * o,
                    c = 2 * a - .5 * t - .5 * i,
                    u = [],
                    d = Math.sqrt((o - e) ** 2 + (i - t) ** 2) || 1;
                for (let n = 0; n <= 160; n++) {
                    let a = n / 160,
                        h = 1 - a,
                        p = h * h * e + 2 * h * a * s + a * a * o,
                        m = h * h * t + 2 * h * a * c + a * a * i,
                        f = 2 * (1 - a) * (s - e) + 2 * a * (o - s),
                        g = 2 * (1 - a) * (c - t) + 2 * a * (i - c),
                        A = Math.sqrt(f * f + g * g) || 1,
                        v = -g / A,
                        w = f / A,
                        y = (.75 * Math.sin(.38 * r.lineTime + 2.1 * l + a * Math.PI * 1.1) + .25 * Math.sin(.19 * r.lineTime + .9 * l + a * Math.PI * 1.9)) * Math.sin(a * Math.PI) * (.01 * d);
                    u.push({
                        x: p + v * y,
                        y: m + w * y,
                        t: a
                    })
                }
                return u
            }

            function ev(e, t, r, n, a, o, i, l, s) {
                if (t.length < 2) return;
                let c = t.length,
                    u = Math.floor(c / 2),
                    d = Math.round(c / 2 * a),
                    h = Math.round(c / 2 * o),
                    p = Math.max(0, u - d + h),
                    m = Math.min(c - 1, u + d - h);

                function f(a) {
                    for (let o = 0; o < a.length - 1; o++) {
                        let c = t[a[o]],
                            u = c.x - i,
                            d = c.y - l;
                        e.globalAlpha = r * (1 - .65 * Math.max(0, 1 - Math.sqrt(u * u + d * d) / s)) * n, e.beginPath(), e.moveTo(t[a[o]].x, t[a[o]].y), e.lineTo(t[a[o + 1]].x, t[a[o + 1]].y), e.stroke()
                    }
                }
                if (e.save(), e.lineCap = "round", e.lineJoin = "round", e.lineWidth = .85, e.strokeStyle = "rgba(58,70,88,1)", p < u) {
                    let e = [];
                    for (let t = u; t >= p; t--) e.push(t);
                    f(e)
                }
                if (u < m) {
                    let e = [];
                    for (let t = u; t <= m; t++) e.push(t);
                    f(e)
                }
                e.restore()
            }

            function ew(e, t, r, n, a) {
                if (t.length < 2) return;
                let o = 1.4 * n,
                    i = [];
                for (let e = 0; e < t.length; e++) {
                    let n = r - t[e].t;
                    n >= 0 && n < o && i.push({
                        p: t[e],
                        tRatio: n / o
                    })
                }
                if (!(i.length < 2)) {
                    e.save(), e.lineCap = "round", e.lineJoin = "round";
                    for (let t = 0; t < i.length - 1; t++) {
                        let r, n, o, l = i[t].tRatio,
                            s = Math.pow(1 - l, .5);
                        if (l < .45) r = 255, n = Math.round(130 * (1 - l / .45 * .7)), o = 0;
                        else {
                            let e = Math.min(1, (l - .45) / .55);
                            r = Math.round(140 * (1 - e)), n = Math.round(150 + 50 * (1 - e)), o = 255
                        }
                        e.beginPath(), e.moveTo(i[t].p.x, i[t].p.y), e.lineTo(i[t + 1].p.x, i[t + 1].p.y), e.lineWidth = .8, e.strokeStyle = `rgb(${r},${n},${o})`, e.globalAlpha = .95 * s * a, e.stroke()
                    }
                    e.restore()
                }
            }
            let ey = new a.Raycaster,
                eb = new a.Vector2,
                ex = new a.Vector3(0, 0, 0),
                eM = new a.Clock;
            r.clock = eM;
            let eT = 0,
                eS = (0, s.getCanvasManager)(),
                ek = eS.register(function(e) {
                    let t = eM.getElapsedTime(),
                        n = A.current ? ? window.scrollY;
                    r.lastScroll = n;
                    let o = n / l;
                    r.lastNorm = o, o <= .1 ? r.targetScrollProgress = 0 : o <= 1 ? r.targetScrollProgress = Math.max(0, 1 / .9 * (o - .1)) : o <= 1.2 ? r.targetScrollProgress = 1 : o <= 1.8 ? r.targetScrollProgress = Math.max(0, (1.8 - o) / .6) : r.targetScrollProgress = 0;
                    let i = (1 - Math.max(0, Math.min(1, (o - 2) / .8))) * 100;
                    if (x.current && r._lastTy !== i && (x.current.style.transform = `translateY(${i}vh)`, r._lastTy = i), r.s4ty = i, r.scrollProgress += (r.targetScrollProgress - r.scrollProgress) * .06, r.s4Amt += (r.targetS4Amt - r.s4Amt) * .05, r.targetS4Amt = 0, r.introAmt > .001 ? r.introAmt *= .975 : r.introAmt = 0, M.current) {
                        let e = o > .05 ? "0" : "1";
                        r._lastScrollHintOpacity !== e && (M.current.style.opacity = e, r._lastScrollHintOpacity = e)
                    }
                    if (eb.x = r.mouseX, eb.y = r.mouseY, r.dragging ? (en.rotation.x = r.rotX, en.rotation.y = r.rotY) : (r.rotY += m ? .0015 : .0042, r.rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, r.rotX)), en.rotation.x += (r.rotX + .22 * eb.y - en.rotation.x) * .06, en.rotation.y += (r.rotY + .22 * eb.x - en.rotation.y) * .06), -9999 !== r.mouseScreenX && -9999 !== r.mouseScreenY && r.scrollProgress < .08 && r.clickBurst < .05 && r.introAmt < .08) {
                        ey.setFromCamera(eb, X);
                        let e = ey.intersectObjects(ea.filter(e => !e.isEdge).map(e => e.mesh), !1),
                            t = e.length > 0 ? e[0].object : null;
                        t !== r.hoveredMesh && (t && (t._flash = 1, t._flashActive = !0, g.playHoverBeep()), r.hoveredMesh = t)
                    } else r.hoveredMesh = null;
                    let s = ex.clone().project(X);
                    r.isHovered = 0 > Math.sqrt((eb.x - s.x) ** 2 + (eb.y - s.y) ** 2) && r.scrollProgress < .05, r.hoverAmt += (!!r.isHovered - r.hoverAmt) * (r.isHovered ? .07 : .05);
                    let c = (T.current ? ? []).filter(Boolean);
                    if (r.vibratePhase += 1.1, r.vibrateAmt > .01) {
                        let e = Math.sin(r.vibratePhase) * r.vibrateAmt * 2.5,
                            t = Math.cos(1.3 * r.vibratePhase) * r.vibrateAmt * 1.5;
                        r.holding && r.holdTime < .7 && (c.forEach(r => {
                            r.style.transition = "none", r.style.transform = `translate(${e}px,${t}px)`
                        }), r._vibrateReset = !1)
                    }
                    if (r.clickBurst > .01 && r.holdTime >= .7) {
                        let e = .8 * t;
                        c.forEach((t, n) => {
                            let a = n * (2 * Math.PI / c.length),
                                o = Math.sin(e + a) * r.clickBurst * 25,
                                i = Math.cos(.7 * e + a) * r.clickBurst * 20,
                                l = Math.sin(.5 * e + 1.3 * a) * r.clickBurst * 15,
                                s = Math.sin(e + a) * r.clickBurst * 30,
                                u = Math.cos(.6 * e + a) * r.clickBurst * 20;
                            t.style.transition = "none", t.style.transform = `perspective(600px) translate(${s}px,${u}px) rotateX(${o}deg) rotateY(${i}deg) rotateZ(${l}deg)`
                        })
                    } else r.holding || !(r.clickBurst <= .01) || r._vibrateReset || (c.forEach(e => {
                        e.style.transition = "transform 0.7s cubic-bezier(0.25,0.46,0.45,0.94)", e.style.transform = "perspective(600px) translate(0px,0px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)"
                    }), r._vibrateReset = !0);
                    r.holding ? (r.holdTime += 1 / 60, r.vibrateAmt = 1, r.holdTime < .5 ? r.clickBurst = 0 : (0 === r.clickBurst && (g.stopVibrateSound(), g.playExplodeSound(), g.startWooshSound()), r.vibrateAmt *= .88, r.clickBurst = Math.min(1, r.clickBurst + .02))) : (r.vibrateAmt = Math.max(0, r.vibrateAmt - .08), r.clickBurst = Math.max(0, r.clickBurst - .025));
                    let h = r.scrollProgress < .15 ? r.clickBurst : 0,
                        p = Math.max(r.scrollProgress, r.hoverAmt, h, r.introAmt);
                    ea.forEach(e => {
                        let n = Math.max(0, p - e.delay),
                            a = 5.5 * n,
                            o = e.shapeIdx * (2 * Math.PI / 3),
                            i = .012 * Math.sin(.4 * t + o) * (1 - p),
                            l = .008 * Math.cos(.35 * t + o) * (1 - p),
                            s = .006 * Math.sin(.3 * t + 1.5 * o) * (1 - p),
                            c = .008 * eb.y * Math.cos(o),
                            u = .008 * eb.x * Math.sin(o),
                            d = [
                                [-6, 3, 0],
                                [6, 3, 0],
                                [0, -6, 0]
                            ][e.shapeIdx] || [0, 0, 0],
                            h = .018 * r.vibrateAmt * (1 - r.clickBurst),
                            m = Math.sin(r.vibratePhase + 20 * e.delay) * h,
                            f = Math.cos(1.3 * r.vibratePhase + 2 * e.shapeIdx) * h;
                        e.mesh.position.set(e.explodeDir.x * a * (1 - r.s4Amt) + i * (1 - r.s4Amt) + c + d[0] * r.s4Amt + m, e.explodeDir.y * a * (1 - r.s4Amt) + l * (1 - r.s4Amt) + u + d[1] * r.s4Amt + f, e.explodeDir.z * a * (1 - r.s4Amt) + s * (1 - r.s4Amt) + d[2] * r.s4Amt), e.mesh.rotation.x = e.spinAxis.x * e.spinSpeed * n * Math.PI, e.mesh.rotation.y = e.spinAxis.y * e.spinSpeed * n * Math.PI, e.mesh.rotation.z = e.spinAxis.z * e.spinSpeed * n * Math.PI
                    }), ea.forEach(e => {
                        if (e.isEdge) return;
                        let t = e.mesh;
                        if (!t._flashActive && !t._flash) return;
                        let r = t.material;
                        t._flash = .92 * (t._flash || 0), t._flash < .002 && (t._flash = 0, t._flashActive = !1);
                        let n = t._flash;
                        r.envMapIntensity = 3 + 1.6 * n, r.roughness = Math.max(.02, .08 - .06 * n), r.clearcoatRoughness = Math.max(.01, .05 - .035 * n), r.emissiveIntensity = .15 + .1 * n, r.transmission = .35 + .32 * n, r.opacity = .88 - .16 * n
                    }), r.p1 && (r.p1.position.x = 4 * Math.sin(.6 * t), r.p1.position.y = 2 * Math.cos(.4 * t), r.p1.position.z = 3 * Math.cos(.5 * t) + 2), r.p2 && (r.p2.position.x = 4 * Math.cos(.5 * t), r.p2.position.y = 2 * Math.sin(.7 * t), r.p2.position.z = 3 * Math.sin(.3 * t) - 1), en.visible = !1, r.envReady ? eT++ % 6 == 0 && (r.clickBurst > .01 || r.dragging || r.holding) && K.update(V, L) : (K.update(V, L), r.envReady = !0), en.visible = !0, V.render(L, X);
                    let v = Math.max(0, Math.min(1, (r.lastScroll / l - .08) / .44));
                    r.smoothUndrawAmt += (v - r.smoothUndrawAmt) * .045;
                    let w = r.lineCanvas,
                        y = r.lctx;
                    if (w && y) {
                        let e = r.bolts.some(e => e.active),
                            t = r.smoothUndrawAmt < .995;
                        e || t ? (y.clearRect(0, 0, w.width, w.height), function(e) {
                            let t = r.lctx;
                            if (!t || !f) return;
                            e ? .skipClear || t.clearRect(0, 0, f.width, f.height), r.lineTime += .016;
                            let n = r.lastScroll / l,
                                o = r.smoothUndrawAmt;
                            if (o >= 1) return;
                            let i = o < .95 ? 1 : Math.max(0, 1 - (o - .95) / .05);
                            r.lineState.forEach(e => {
                                o >= 1 ? e.prog = 0 : e.prog < 1 && o < .1 && r.introAmt < .25 && (e.prog = Math.min(1, e.prog + .0205))
                            });
                            let s = eg(eh),
                                c = eg(ep),
                                d = eg(em),
                                h = f.width,
                                p = f.height,
                                m = eg(new a.Vector3(0, 0, 0)),
                                A = .13 * h,
                                v = {
                                    x: 0,
                                    y: +p
                                },
                                w = eA(v.x, v.y - .15 * p, s.x, s.y, h, .2 * p, 1),
                                y = eA(v.x, v.y + .13 * p, d.x, d.y, h, .1 * p, 3),
                                b = eA(v.x, v.y - .07 * p, c.x, c.y, h, -(.065 * p), 2);
                            if (r.weldCooldown -= .016, n < .08 && o < .02 && r.lineState.every(e => e.prog >= .995)) {
                                let e = [w, y, b],
                                    t = null,
                                    n = -1;
                                for (let a = 0; a < e.length; a++) {
                                    let o = function(e) {
                                        let t = r.mouseScreenX,
                                            n = r.mouseScreenY;
                                        for (let r = 0; r < e.length - 1; r++) {
                                            let a = e[r].x,
                                                o = e[r].y,
                                                i = e[r + 1].x,
                                                l = e[r + 1].y,
                                                s = i - a,
                                                c = l - o,
                                                u = s * s + c * c;
                                            if (u < .001) continue;
                                            let d = Math.max(0, Math.min(1, ((t - a) * s + (n - o) * c) / u)),
                                                h = a + d * s - t,
                                                p = o + d * c - n;
                                            if (h * h + p * p < 196) return {
                                                x: a + d * s,
                                                y: o + d * c
                                            }
                                        }
                                        return null
                                    }(e[a]);
                                    if (o) {
                                        t = o, n = a;
                                        break
                                    }
                                }
                                if (null !== t) {
                                    if (!r.sparkHoverActive && r.sparkWasAway && (r.sparkHoverActive = !0, r.sparkBurstLeft = 5 + Math.floor(2 * Math.random()), r.sparkSoundPlayed = !1, r.sparkWasAway = !1), r.weldCooldown <= 0 && r.sparkBurstLeft > 0) {
                                        var x, M, T;

                                        function S(e, t) {
                                            let r = e / h * 2 - 1,
                                                n = new a.Vector3(r, -(t / p * 2) + 1, .5).unproject(X).sub(X.position).normalize();
                                            return X.position.clone().add(n.multiplyScalar(-X.position.z / n.z))
                                        }
                                        let o = S(t.x, t.y),
                                            i = [0, 1, 2].filter(e => e !== n),
                                            l = Math.random() > .5 ? 1 : 2,
                                            s = i.sort(() => Math.random() - .5).slice(0, l),
                                            c = [];
                                        s.forEach(r => {
                                            let n = e[r],
                                                a = 1 / 0,
                                                o = null;
                                            for (let e = 0; e < n.length; e++) {
                                                let r = n[e].x - t.x,
                                                    i = n[e].y - t.y,
                                                    l = r * r + i * i;
                                                l < a && (a = l, o = n[e])
                                            }
                                            o && c.push(S(o.x, o.y))
                                        }), c.length > 0 && (x = o, M = c, T = !r.sparkSoundPlayed, !(r.weldCooldown > 0) && M.length && (r.bolts.forEach(e => {
                                            let t = M[Math.floor(Math.random() * M.length)];
                                            ! function(e, t, r) {
                                                let n = r.x - t.x,
                                                    a = r.y - t.y,
                                                    o = r.z - t.z,
                                                    i = Math.sqrt(n * n + a * a + o * o) || .001;
                                                e.pts[0] = t.x, e.pts[1] = t.y, e.pts[2] = t.z;
                                                let l = -a / i,
                                                    s = n / i,
                                                    c = Math.random() > .5 ? 1 : -1;
                                                for (let r = 1; r <= 9; r++) {
                                                    let u = r / 9,
                                                        d = Math.min(.4 * i, .12) * Math.sin(u * Math.PI),
                                                        h = Math.min(.18 * i, .06) * Math.sin(u * Math.PI) * c;
                                                    e.pts[3 * r] = t.x + n * u + (Math.random() - .5) * d + l * h, e.pts[3 * r + 1] = t.y + a * u + (Math.random() - .5) * d + s * h, e.pts[3 * r + 2] = t.z + o * u + (Math.random() - .5) * d * .3
                                                }
                                                e.pts[27] = r.x, e.pts[28] = r.y, e.pts[29] = r.z, e.line.geometry.attributes.position.array.set(e.pts), e.line.geometry.attributes.position.needsUpdate = !0, e.line.material.color.setHex(u[Math.floor(Math.random() * u.length)]), e.glowLines.forEach(t => {
                                                    t.line.geometry.attributes.position.array.set(e.pts), t.line.geometry.attributes.position.needsUpdate = !0
                                                }), e.glowTubes.forEach(t => (function(e, t) {
                                                    e.group.visible = !0, e.material.opacity = 0;
                                                    for (let r = 0; r < 9; r++) {
                                                        ei.set(t[3 * r], t[3 * r + 1], t[3 * r + 2]), el.set(t[(r + 1) * 3], t[(r + 1) * 3 + 1], t[(r + 1) * 3 + 2]);
                                                        let n = ei.distanceTo(el),
                                                            a = e.segments[r];
                                                        if (n < 1e-4) {
                                                            a.visible = !1;
                                                            continue
                                                        }
                                                        es.copy(ei).lerp(el, .5), ec.copy(el).sub(ei).normalize(), eu.setFromUnitVectors(ed, ec), a.position.copy(es), a.quaternion.copy(eu), a.scale.set(1, n, 1), a.visible = !0
                                                    }
                                                })(t, e.pts)), e.maxLife = .05 + .09 * Math.random(), e.life = e.maxLife, e.active = !0
                                            }(e, x, {
                                                x: t.x + (Math.random() - .5) * .04,
                                                y: t.y + (Math.random() - .5) * .04,
                                                z: t.z + .06 + .08 * Math.random()
                                            })
                                        }), g.playSparkSound({
                                            sound: T
                                        }), r.weldCooldown = .04 + .06 * Math.random(), 1)) && (!r.sparkSoundPlayed && g.didSparkSoundStart() && (r.sparkSoundPlayed = !0), r.sparkBurstLeft--, r.sparkBurstLeft <= 0 && g.stopSparkSound(.05))
                                    }
                                } else r.sparkHoverActive && g.stopSparkSound(.05), r.sparkHoverActive = !1, r.sparkWasAway = !0, r.sparkBurstLeft = 0, r.sparkSoundPlayed = !1
                            } else r.sparkHoverActive && g.stopSparkSound(.05), r.sparkHoverActive = !1, r.sparkWasAway = !0, r.sparkBurstLeft = 0, r.sparkSoundPlayed = !1;
                            ev(t, w, .4, 1, r.lineState[0].prog, o, m.x, m.y, A), ev(t, y, .4, 1, r.lineState[1].prog, o, m.x, m.y, A), ev(t, b, .4, 1, r.lineState[2].prog, o, m.x, m.y, A);
                            let k = [w, y, b];
                            if (r.pulses.forEach((e, n) => {
                                    if (e.active) {
                                        e.phase += e.dir * e.speed * .016, 1 === e.dir && (e.phase = Math.min(e.phase, .5 + e.len)), -1 === e.dir && (e.phase = Math.max(e.phase, .5 - e.len)), (1 === e.dir ? e.phase >= .5 + e.len : e.phase <= .5 - e.len) && (e.active = !1, e.rest = 1.5 + 2.5 * Math.abs(Math.sin(7.3 * r.lineTime + 3.1 * n)));
                                        let a = k[e.line];
                                        if (-1 === e.dir) {
                                            let r = 1 - e.phase;
                                            ew(t, [...a].reverse().map((e, t) => ({ ...e,
                                                t: t / (a.length - 1)
                                            })), r, e.len, 1)
                                        } else ew(t, a, e.phase, e.len, 1)
                                    } else e.rest -= .016, e.rest <= 0 && (e.active = !0, e.dir = Math.random() > .5 ? 1 : -1, e.phase = 1 === e.dir ? -e.len : 1 + e.len)
                                }), i > .01) {
                                let e = performance.now() / 1e3;
                                [{
                                    p: w[Math.floor(w.length / 2)],
                                    seed: 1,
                                    li: 0,
                                    ap: s
                                }, {
                                    p: y[Math.floor(y.length / 2)],
                                    seed: 2.3,
                                    li: 1,
                                    ap: d
                                }, {
                                    p: b[Math.floor(b.length / 2)],
                                    seed: 3.7,
                                    li: 2,
                                    ap: c
                                }].forEach(({
                                    p: n,
                                    seed: a,
                                    li: o,
                                    ap: l
                                }) => {
                                    let s, c = (s = r.pulses[o]).active ? Math.max(0, 1 - (1 === s.dir ? Math.max(0, .5 - (s.phase - s.len)) : Math.max(0, s.phase + s.len - .5)) / .18) : 0,
                                        u = (Math.sin(1.8 * e + 2.1 * a) + 1) / 2,
                                        d = i * Math.max(.15, Math.min(1, 1.5 * l.worldZ + .6));
                                    t.save(), t.globalAlpha = (.65 + .25 * c) * d, t.fillStyle = c > .3 ? "rgba(210,200,190,1)" : "rgba(170,170,170,1)", t.beginPath(), t.arc(n.x, n.y, 1.8 + .6 * c, 0, 2 * Math.PI), t.fill(), t.restore();
                                    let h = 4 + 3 * u + 10 * c,
                                        p = c > .05 ? (.12 + .25 * c) * d : (1 - u) * .18 * d;
                                    t.save(), t.globalAlpha = .18 * p * d, t.strokeStyle = "rgba(180,190,200,1)", t.lineWidth = 1.5, t.beginPath(), t.arc(n.x, n.y, h + 1, 0, 2 * Math.PI), t.stroke(), t.globalAlpha = .6 * p * d, t.strokeStyle = "rgba(170,170,170,1)", t.lineWidth = .6, t.beginPath(), t.arc(n.x, n.y, h, 0, 2 * Math.PI), t.stroke(), t.restore()
                                })
                            }
                        }({
                            skipClear: !0
                        }), S.needsUpdate = !0, V.autoClear = !1, V.clearDepth(), V.render(k, E), V.autoClear = !0, r._canvasCleared = !1) : r._canvasCleared || (y.clearRect(0, 0, w.width, w.height), S.needsUpdate = !0, V.autoClear = !1, V.clearDepth(), V.render(k, E), V.autoClear = !0, r._canvasCleared = !0)
                    }
                    if (g.sparkCooldownRef.current -= .016, r.bolts.forEach(e => {
                            if (!e.active) {
                                e.line.material.opacity = 0, e.glowLines.forEach(e => {
                                    e.line.material.opacity = 0
                                }), e.glowTubes.forEach(e => {
                                    e.group.visible = !1, e.material.opacity = 0
                                }), e.travelLight.intensity = 0;
                                return
                            }
                            if (e.life -= .016, e.life <= 0) {
                                e.active = !1, e.line.material.opacity = 0, e.glowLines.forEach(e => {
                                    e.line.material.opacity = 0
                                }), e.glowTubes.forEach(e => {
                                    e.group.visible = !1, e.material.opacity = 0
                                }), e.travelLight.intensity = 0;
                                return
                            }
                            let t = e.life / e.maxLife,
                                r = .7 + .3 * Math.random();
                            e.line.material.opacity = t * r, e.glowLines.forEach((e, n) => {
                                e.line.material.opacity = d[n].maxOpacity * t * r
                            }), e.glowTubes.forEach(e => {
                                e.group.visible = !0;
                                let n = .9 + .1 * Math.random();
                                e.material.opacity = e.layer.maxOpacity * t * r * n
                            });
                            let n = 3 * Math.floor((1 - t) * 9);
                            e.travelLight.position.set(e.pts[n], e.pts[n + 1], e.pts[n + 2]), e.travelLight.intensity = (12 + 8 * Math.random()) * t
                        }), g.soundEnabledRef.current && g.audioCtxRef.current) {
                        let e = r.s4ty < 80 ? Math.max(0, Math.min(1, (80 - r.s4ty) / 80)) : 0,
                            t = e > 0 ? .07 * (1 - e) : .07 + .93 * Math.max(r.scrollProgress, r.clickBurst);
                        if (g.wooshGainRef.current && g.wooshNodeRef.current) {
                            let e = g.wooshGainRef.current.gain.value;
                            g.wooshGainRef.current.gain.setValueAtTime(e + (t - e) * .05, g.audioCtxRef.current.currentTime)
                        } else t > .01 && g.wooshAutoStartedRef.current && g.autoStartWoosh()
                    }
                }, !0, "trionn-hero");
            v.current = ek;
            let eC = new IntersectionObserver(([e]) => eS.setActive(ek, e.isIntersecting), {
                root: null,
                threshold: 0,
                rootMargin: "0px"
            });
            eC.observe(n);
            let eE = 0,
                eP = e => {
                    !(performance.now() - eE < 500) && (r.mouseX = e.clientX / i * 2 - 1, r.mouseY = -(2 * (e.clientY / l)) + 1, r.mouseScreenX = e.clientX, r.mouseScreenY = e.clientY, r.isTouchPointer = !1, r.dragging && (r.rotY += (e.clientX - r.px) * .025, r.rotX += (e.clientY - r.py) * .025, r.rotX = Math.max(-Math.PI / 2, Math.min(Math.PI / 2, r.rotX)), r.px = e.clientX, r.py = e.clientY))
                };
            window.addEventListener("mousemove", eP);
            let eR = t => {
                    "touch" === t.pointerType && (eE = performance.now(), clearTimeout(e), r.mouseScreenX = t.clientX, r.mouseScreenY = t.clientY, r.mouseX = t.clientX / i * 2 - 1, r.mouseY = -(2 * (t.clientY / l)) + 1, r.isTouchPointer = !0, r.sparkHoverActive = !1)
                },
                eV = t => {
                    "touch" === t.pointerType && (eE = performance.now(), clearTimeout(e), r.mouseScreenX = t.clientX, r.mouseScreenY = t.clientY, r.mouseX = t.clientX / i * 2 - 1, r.mouseY = -(2 * (t.clientY / l)) + 1, r.isTouchPointer = !0)
                },
                eL = t => {
                    "touch" === t.pointerType && (eE = performance.now(), clearTimeout(e), e = setTimeout(() => {
                        r.mouseScreenX = -9999, r.mouseScreenY = -9999
                    }, 150))
                };
            window.addEventListener("pointerdown", eR), window.addEventListener("pointermove", eV), window.addEventListener("pointerup", eL), window.addEventListener("pointercancel", eL), V.domElement.addEventListener("mousedown", e => {
                0 === e.button && (r.dragging = !0, r.px = e.clientX, r.py = e.clientY)
            }), V.domElement.addEventListener("contextmenu", e => e.preventDefault());
            let eB = e => {
                if (0 !== e.button) return;
                let t = e.target,
                    n = !!t.closest("#hero-section"),
                    a = !!t.closest("#keyfacts-section"),
                    o = !!("sound-toggle" === t.id || t.closest("#sound-toggle")),
                    i = !!("A" === t.tagName || t.closest("a")),
                    l = !!("BUTTON" === t.tagName || t.closest("button"));
                !n || a || o || i || l || r.scrollProgress < .15 && !C ? .current && (window.dispatchEvent(new Event("trionn-blast:start")), r.holding = !0, r.holdTime = 0, r.vibrateAmt = 1, r.vibratePhase = 0, r.clickBurst = 0, r.joinPlayed = !1, g.startVibrateSound())
            };
            window.addEventListener("mousedown", eB);
            let ez = () => {
                r.dragging = !1, r.holding = !1, r.vibrateAmt = 0, (T.current ? ? []).filter(Boolean).forEach(e => {
                    e.style.transition = "transform 0.6s cubic-bezier(0.25,0.46,0.45,0.94)", e.style.transform = "translate(0px,0px) rotate(0deg)"
                }), g.stopVibrateSound(), g.stopExplodeSound(), r.clickBurst >= .98 && !r.joinPlayed && (r.joinPlayed = !0, g.playJoinSound())
            };
            window.addEventListener("mouseup", ez);
            let eX = () => {
                g.soundEnabledRef.current && g.autoStartWoosh()
            };
            ["mousedown", "touchstart", "mousemove", "scroll"].forEach(e => {
                document.addEventListener(e, eX, {
                    once: !0
                })
            });
            let eq = 0,
                eY = () => {
                    cancelAnimationFrame(eq), eq = requestAnimationFrame(() => {
                        let e;
                        i = window.innerWidth, l = window.innerHeight, X.aspect = i / l, X.fov = (e = B()).fov, X.position.z = e.z, X.updateProjectionMatrix(), V.setPixelRatio(c()), V.setSize(i, l), f.width = i, f.height = l, S.needsUpdate = !0, eo(), o.ScrollTrigger.refresh(!0)
                    })
                };
            return () => {
                eS.unregister(ek), eC.disconnect(), window.removeEventListener("mousemove", eP), window.removeEventListener("pointerdown", eR), window.removeEventListener("pointermove", eV), window.removeEventListener("pointerup", eL), window.removeEventListener("pointercancel", eL), window.removeEventListener("mousedown", eB), window.removeEventListener("mouseup", ez), window.removeEventListener("resize", eY), cancelAnimationFrame(eq), V.dispose(), n.contains(V.domElement) && n.removeChild(V.domElement), R.geometry.dispose();
                let e = R.material;
                e.map && e.map.dispose(), e.dispose(), S.dispose(), ea.forEach(e => {
                    e.mesh.geometry.dispose(), Array.isArray(e.mesh.material) ? e.mesh.material.forEach(e => e.dispose()) : e.mesh.material.dispose()
                }), r.bolts.forEach(e => {
                    L.remove(e.line), e.line.geometry.dispose(), e.line.material.dispose(), e.glowLines.forEach(e => {
                        L.remove(e.line), e.line.geometry.dispose(), e.line.material.dispose()
                    }), e.glowTubes.forEach(e => {
                        L.remove(e.group);
                        let t = e.segments[0];
                        t && (t.geometry.dispose(), t.material.dispose())
                    }), L.remove(e.travelLight)
                }), r.bolts.length = 0, g.stopAllSounds(), g.audioCtxRef.current ? .close().catch(() => {}), g.audioCtxRef.current = null, g.hoverAudioCtxRef.current ? .close().catch(() => {}), g.hoverAudioCtxRef.current = null
            }
        }, [y]), {
            audio: g,
            stateRef: w,
            setLoopActive: e => {
                null != v.current && (0, s.getCanvasManager)().setActive(v.current, e)
            }
        });
        return (0, n.useEffect)(() => {
            if (!P) {
                R.setSoundEnabled(!1), R.stopAllSounds();
                return
            }
            E.current || (R.setSoundEnabled(!0), R.autoStartWoosh())
        }, [P, R]), (0, m.useGSAP)(() => {
            if (!b.current) return;
            let e = (0, s.getCanvasManager)(),
                t = "hero-scrolltrigger",
                r = b.current;
            o.ScrollTrigger.create({
                trigger: b.current,
                start: "top top",
                end: o.ScrollTrigger.isTouch ? "+=300%" : "+=400%",
                pin: b.current,
                pinSpacing: !1,
                markers: !1,
                anticipatePin: 1,
                onLeave: () => {
                    S.current = !1, r.style.display = "none"
                },
                onEnterBack: () => {
                    S.current = !0, r.style.display = "block"
                },
                onUpdate(r) {
                    let n = (window.innerWidth, .8),
                        a = r.progress >= n;
                    E.current = a, a ? (e.suspend("trionn-hero", t), R.stopAllSounds(), R.setSoundEnabled(!1)) : (e.resume("trionn-hero", t), k.current && (R.setSoundEnabled(!0), R.autoStartWoosh()))
                }
            })
        }, []), (0, t.jsx)("div", {
            children: (0, t.jsx)("div", {
                ref: b,
                id: "trionn-symbol-canvas-wrap",
                className: "absolute inset-0 w-full h-dvh z-0 pointer-events-none"
            })
        })
    }
    e.i(89970).default.registerPlugin(o.ScrollTrigger), e.s(["TrionnSymbolAnimation", 0, f, "default", 0, f], 54377)
}, 53101, e => {
    e.n(e.i(54377))
}]);