"use strict";

document.addEventListener('mousemove', function (e) {
  Object.assign(document.documentElement, {
    style: "\n            --move-x: ".concat((e.clientX - window.innerWidth / 2) * -.005, "deg;\n            --move-y: ").concat((e.clientY - window.innerHeight / 2) * -.01, "deg;\n        ")
  });
});