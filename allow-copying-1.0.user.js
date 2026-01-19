// ==UserScript==
// @name         Lyrics Translate - Disable Copy Protection
// @namespace    https://github.com/NikoboiNFTB/LyricsTranslate-Tweaks
// @version      1.0
// @description  Restores normal copy behavior for full song lyrics.
// @match        https://lyricstranslate.com/*
// @grant        none
// ==/UserScript==

(function () {
  'use strict';

  document.addEventListener(
    'copy',
    function (e) {
      e.stopImmediatePropagation();
    },
    true
  );

  document.addEventListener('copy', function (e) {
    const selection = window.getSelection().toString();
    if (selection) {
      e.clipboardData.setData('text/plain', selection);
      e.preventDefault();
    }
  });
})();
