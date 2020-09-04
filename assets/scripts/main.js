(function() {
  function init () {
    console.log('init');
  }

  window.addEventListener('load', function () {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('../../sw.js');
    }

    if (document.readyState === 'complete') {
      init();
    }
  });
}());
