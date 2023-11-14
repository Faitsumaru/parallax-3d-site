document.addEventListener('mousemove', e => {
    Object.assign(document.documentElement, {
        style: `
            --move-x: ${(e.clientX - window.innerWidth / 2) * -.005}deg;
            --move-y: ${(e.clientY - window.innerHeight / 2) * -.01}deg;
        `
    })
})


const layer1 = document.querySelector('.layer-1');
const layer2 = document.querySelector('.layer-2');
const layer4 = document.querySelector('.layer-4');
const layer5 = document.querySelector('.layer-5');
const layer6 = document.querySelector('.layer-6');

const titleTheme = document.getElementById('title-theme');

const layers = document.querySelectorAll('.layers__item');


//theme switcher
const switchBtn = document.querySelector('.btn-switch');
switchBtn.addEventListener('click', () => {
    switchBtn.classList.toggle('switch-active');

    layers.forEach((elem) => {
        elem.style.transition = "1s ease-in"
    })

    if (switchBtn.classList.contains('switch-active')) {
        titleTheme.innerText = 'Desert'


        layer1.style.backgroundImage = 'url(img/bg_2/layer-1.jpg)'
        layer2.style.backgroundImage = 'url(img/bg_2/layer-2.png)'
        layer5.style.backgroundImage = 'url(img/bg_2/layer-5.png)'
        layer6.style.backgroundImage = 'url(img/bg_2/layer-6.png)'
    } else {
        titleTheme.innerText = 'Forest'

        
        layer1.style.backgroundImage = 'url(img/bg_1/layer-1.jpg)'
        layer2.style.backgroundImage = 'url(img/bg_1/layer-2.png)'
        layer5.style.backgroundImage = 'url(img/bg_1/layer-5.png)'
        layer6.style.backgroundImage = 'url(img/bg_1/layer-6.png)'
    }

});
