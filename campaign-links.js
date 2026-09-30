/* Preserve public campaign labels on the journey to Google Play.
 * No cookies, identifiers, analytics requests or browser storage.
 * Only short campaign labels are accepted: never email addresses or arbitrary URLs.
 */
(function () {
  'use strict';
  var allowedKeys = ['utm_source', 'utm_medium', 'utm_campaign', 'utm_content'];
  var incoming = new URLSearchParams(window.location.search);
  var campaign = new URLSearchParams();
  allowedKeys.forEach(function (key) {
    var value = incoming.get(key);
    if (value && /^[a-z0-9_-]{1,64}$/i.test(value)) campaign.set(key, value);
  });
  document.querySelectorAll('a[href]').forEach(function (link) {
    var url;
    try { url = new URL(link.href, window.location.href); } catch (_) { return; }
    if (url.origin === 'https://play.google.com' &&
        url.pathname === '/store/apps/details' &&
        url.searchParams.get('id') === 'com.eightyezstudio.lunyra') {
      var referrer = new URLSearchParams(url.searchParams.get('referrer') || '');
      allowedKeys.forEach(function (key) {
        if (campaign.has(key)) referrer.set(key, campaign.get(key));
        // Play Console reads direct UTM labels; Install Referrer carries the same labels.
        if (referrer.has(key)) url.searchParams.set(key, referrer.get(key));
      });
      url.searchParams.set('referrer', referrer.toString());
      link.href = url.href;
    } else if (campaign.has('utm_source') && url.origin === window.location.origin &&
               url.pathname.startsWith('/Lunyra/') &&
               /\/$|\.html$/.test(url.pathname) &&
               url.pathname !== window.location.pathname) {
      allowedKeys.forEach(function (key) {
        if (campaign.has(key)) url.searchParams.set(key, campaign.get(key));
      });
      link.href = url.href;
    }
  });
})();
