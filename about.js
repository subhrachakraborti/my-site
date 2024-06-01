var fsData = {
    "sfs": "",
    "revision": 243005034550,
    "domain": "subhrachakraborti",
    "appName": "site-dyhsrdke",
    "maxReso": 768,
    "isMigrating": false,
    "fs": ".wsecdn1.websitecdn.com"
};
window.dataLayer = window.dataLayer || [];

{
    function gtag() {
        dataLayer.push(arguments);
    }
    gtag('js', new Date());

    var gaConfig = {
        'groups': 'builder'

    };
    gtag('config', 'G-6D0WQE4DLB', gaConfig);
}

(function() {
    var header = document.querySelector("#bb-header");
    var headerPaddings = 32;

    if (header) {
        document.addEventListener('scroll', function() {
            if (header.classList.contains('scrolled')) {
                if (window.scrollY < 100 - headerPaddings) {
                    header.classList.remove("scrolled");
                }
            } else {
                if (window.scrollY > 100) {
                    header.classList.add("scrolled");
                }
            }
        }, false);
    }
})();

(function() {
    let nav = document.querySelector(".bb-desktop-nav");
    if (!nav) {
        nav = document.querySelector(".nav-menu nav");
    }
    const currSlug = location.pathname;
    const currPageAnchor = nav.querySelector('a[href="' + currSlug + '"]');
    const header = document.querySelector("#bb-header");

    let lastAnchor = currPageAnchor;

    document.addEventListener('scroll', function() {
        if (!window.isScrollToSection) {
            let headerOffsetHeight = 0;

            headerOffsetHeight = header.offsetHeight;

            let matchFound = false;
            document.querySelectorAll("#bb-mc .bb-section").forEach((section, index) => {
                let anchor;
                let top = section.offsetTop;
                let bottom = section.offsetTop + section.offsetHeight;

                if (index > 0) {
                    top = section.offsetTop - headerOffsetHeight - section.offsetHeight * 0.3;
                    bottom = section.offsetTop + section.offsetHeight * 0.7;
                }

                if (window.scrollY >= top && window.scrollY <= bottom) {
                    let sectionID = section.id.replace("bb-section-", "");
                    anchor = nav.querySelector('a[data-anchor="' + sectionID + '"]');
                    matchFound = true;
                    if (!anchor) {
                        anchor = lastAnchor;
                    } else {
                        lastAnchor = anchor;
                    }
                } else if (!matchFound) {
                    anchor = lastAnchor;
                }

                if (anchor) {
                    nav.querySelector("a.active").classList.remove("active");
                    anchor.classList.add("active");
                }
            });
        }
    });
})();

! function(e) {
    var n;
    if ("function" == typeof define && define.amd && (define(e), n = !0), "object" == typeof exports && (module.exports = e(), n = !0), !n) {
        var t = window.Cookies,
            o = window.Cookies = e();
        o.noConflict = function() {
            return window.Cookies = t, o
        }
    }
}(function() {
    function f() {
        for (var e = 0, n = {}; e < arguments.length; e++) {
            var t = arguments[e];
            for (var o in t) n[o] = t[o]
        }
        return n
    }

    function a(e) {
        return e.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent)
    }
    return function e(u) {
        function c() {}

        function t(e, n, t) {
            if ("undefined" != typeof document) {
                "number" == typeof(t = f({
                    path: "/"
                }, c.defaults, t)).expires && (t.expires = new Date(1 * new Date + 864e5 * t.expires)), t.expires = t.expires ? t.expires.toUTCString() : "";
                try {
                    var o = JSON.stringify(n);
                    /^[\{\[]/.test(o) && (n = o)
                } catch (e) {}
                n = u.write ? u.write(n, e) : encodeURIComponent(String(n)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), e = encodeURIComponent(String(e)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
                var r = "";
                for (var i in t) t[i] && (r += "; " + i, !0 !== t[i] && (r += "=" + t[i].split(";")[0]));
                return document.cookie = e + "=" + n + r
            }
        }

        function n(e, n) {
            if ("undefined" != typeof document) {
                for (var t = {}, o = document.cookie ? document.cookie.split("; ") : [], r = 0; r < o.length; r++) {
                    var i = o[r].split("="),
                        c = i.slice(1).join("=");
                    n || '"' !== c.charAt(0) || (c = c.slice(1, -1));
                    try {
                        var f = a(i[0]);
                        if (c = (u.read || u)(c, f) || a(c), n) try {
                            c = JSON.parse(c)
                        } catch (e) {}
                        if (t[f] = c, e === f) break
                    } catch (e) {}
                }
                return e ? t[e] : t
            }
        }
        return c.set = t, c.get = function(e) {
            return n(e, !1)
        }, c.getJSON = function(e) {
            return n(e, !0)
        }, c.remove = function(e, n) {
            t(e, "", f(n, {
                expires: -1
            }))
        }, c.defaults = {}, c.withConverter = e, c
    }(function() {})
});
if (typeof Cookies != 'undefined') {
    Cookies.set('nocache', null);
}

window.addEventListener('lazybeforeunveil', ({
    target
}) => {
    if (target.dataset.iframesrc) {
        target.src = target.dataset.iframesrc;
    }
});

(function() {
    var script = document.createElement('script');
    script.src = 'https://unpkg.com/web-vitals/dist/web-vitals.base.iife.js';
    script.onload = function() {
        function gaCWV({
            name,
            delta,
            value,
            id
        }) {
            if (typeof gtag != 'undefined') {
                gtag('event', name, {
                    value: delta,
                    metric_id: id,
                    metric_value: value,
                    metric_delta: delta,
                    send_to: 'builder'
                });
            }
        }

        if (typeof webVitals != 'undefined') {
            webVitals.getCLS(gaCWV);
            webVitals.getFID(gaCWV);
            webVitals.getLCP(gaCWV);
            webVitals.getFCP(gaCWV);
            webVitals.getTTFB(gaCWV);
        }
    }
    document.head.appendChild(script);
}())

var tracked = {};
document.querySelectorAll('.bb-side-banner a, .bb-bottom-banner a').forEach(function(el) {
    el.addEventListener('click', function() {
        var eventCategory = el.classList.contains('link1') ? 'Side' : 'Bottom';

        if (!tracked[eventCategory]) {
            gtag('event', 'clickFreeBanner', {
                eventCategory: eventCategory,
                eventAction: 'clickFreeBanner',
                eventLabel: "subhrachakraborti.website3.me",
                'send_to': 'builder'
            });
            tracked[eventCategory] = true;
        }
    }, false);
})