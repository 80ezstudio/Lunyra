// This is a dated notice, not a live price feed. Google Play is authoritative.
// Hide it after the advertised UK dates, including on a page left open overnight.
(function () {
  const notice = document.getElementById('october-sale');
  if (!notice) return;

  function refresh() {
    const ukDate = new Intl.DateTimeFormat('en-CA', {
      timeZone: 'Europe/London', year: 'numeric', month: '2-digit', day: '2-digit'
    }).format(new Date());
    notice.hidden = ukDate >= '2026-10-08';
  }

  refresh();
  setInterval(refresh, 60000);
  document.addEventListener('visibilitychange', refresh);
})();
