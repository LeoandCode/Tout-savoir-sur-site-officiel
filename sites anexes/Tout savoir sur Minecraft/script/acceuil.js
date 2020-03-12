let menu = document.getElementById('menu');
let nav = document.getElementsByTagName('nav')
menu.addEventListener('click', function () {
    if (nav[0].classList.contains('hidden')) nav[0].classList.remove('hidden');
    else nav[0].classList.add('hidden')
})
nav.addEventListener
