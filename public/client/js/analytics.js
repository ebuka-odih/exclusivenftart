window.dataLayer = window.dataLayer || [];
function gtag() { dataLayer.push(arguments); }
gtag('js', new Date());

gtag('config', window.GA_TRACKING_ID, {
  page_path: window.location.pathname,
});

gtag({
  'gtm.start':
new Date().getTime(),
  event: 'gtm.js',
});

// Hotjar
(function (h, o, t, j, a, r) {
  h.hj = h.hj || function () { (h.hj.q = h.hj.q || []).push(arguments); };
  h._hjSettings = { hjid: 2922888, hjsv: 6 };
  a = o.getElementsByTagName('head')[0];
  r = o.createElement('script'); r.async = 1;
  r.src = t + h._hjSettings.hjid + j + h._hjSettings.hjsv;
  a.appendChild(r);
}(window, document, 'https://static.hotjar.com/c/hotjar-', '.js?sv='));

!(function () {
  const analytics = window.analytics = window.analytics || []; if (!analytics.initialize) {
    if (analytics.invoked)window.console && console.error && console.error('Segment snippet included twice.'); else {
      analytics.invoked = !0; analytics.methods = ['trackSubmit', 'trackClick', 'trackLink', 'trackForm', 'pageview', 'identify', 'reset', 'group', 'track', 'ready', 'alias', 'debug', 'page', 'once', 'off', 'on', 'addSourceMiddleware', 'addIntegrationMiddleware', 'setAnonymousId', 'addDestinationMiddleware']; analytics.factory = function (e) { return function () { const t = Array.prototype.slice.call(arguments); t.unshift(e); analytics.push(t); return analytics; }; }; for (let e = 0; e < analytics.methods.length; e++) { const key = analytics.methods[e]; analytics[key] = analytics.factory(key); }analytics.load = function (key, e) { const t = document.createElement('script'); t.type = 'text/javascript'; t.async = !0; t.src = `https://cdn.segment.com/analytics.js/v1/${key}/analytics.min.js`; const n = document.getElementsByTagName('script')[0]; n.parentNode.insertBefore(t, n); analytics._loadOptions = e; }; analytics._writeKey = 'pIUYJPVT4ENPtdatWUq9P5CJcEBNO29T'; analytics.SNIPPET_VERSION = '4.15.3';
      analytics.load('pIUYJPVT4ENPtdatWUq9P5CJcEBNO29T');
      analytics.page();
    }
  }
}());
