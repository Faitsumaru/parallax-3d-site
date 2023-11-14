"use strict";

document.addEventListener('mousemove', function (e) {
  Object.assign(document.documentElement, {
    style: "\n            --move-x: ".concat((e.clientX - window.innerWidth / 2) * -.005, "deg;\n            --move-y: ").concat((e.clientY - window.innerHeight / 2) * -.01, "deg;\n        ")
  });
});
var layer1 = document.querySelector('.layer-1');
var layer2 = document.querySelector('.layer-2');
var layer4 = document.querySelector('.layer-4');
var layer5 = document.querySelector('.layer-5');
var layer6 = document.querySelector('.layer-6');
var titleTheme = document.getElementById('title-theme');
var layers = document.querySelectorAll('.layers__item');
var rainEff = document.getElementById('rain-script-effect');
var weatherSand = document.getElementById('weather-sand');
var weatherRain = document.getElementById('weather-rain'); //theme switcher

var switchBtn = document.querySelector('.btn-switch');
switchBtn.addEventListener('click', function () {
  switchBtn.classList.toggle('switch-active');
  layers.forEach(function (elem) {
    elem.style.transition = "1s ease-in";
  });

  if (switchBtn.classList.contains('switch-active')) {
    titleTheme.innerText = 'Desert';
    weatherRain.style.display = 'none';
    weatherSand.style.display = 'block';
    var sandEff = document.createElement('script');
    sandEff.setAttribute('src', 'libs/sand.js');
    sandEff.className = 'sand-script-effect';
    document.head.appendChild(sandEff);
    document.head.removeChild(sandEff);
    layer1.style.backgroundImage = 'url(img/bg_2/layer-1.jpg)';
    layer2.style.backgroundImage = 'url(img/bg_2/layer-2.png)';
    layer5.style.backgroundImage = 'url(img/bg_2/layer-5.png)';
    layer6.style.backgroundImage = 'url(img/bg_2/layer-6.png)';
  } else {
    titleTheme.innerText = 'Forest'; // weatherEffect.className = 'rain'
    // scriptEffect.src = 'libs/rain.js'
    // scriptEffect.setAttribute('src', 'libs/rain.js')

    weatherSand.style.display = 'none';
    weatherRain.style.display = 'block';
    layer1.style.backgroundImage = 'url(img/bg_1/layer-1.jpg)';
    layer2.style.backgroundImage = 'url(img/bg_1/layer-2.png)';
    layer5.style.backgroundImage = 'url(img/bg_1/layer-5.png)';
    layer6.style.backgroundImage = 'url(img/bg_1/layer-6.png)';
  }
});