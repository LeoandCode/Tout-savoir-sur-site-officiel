let menu = document.getElementById('menu');
let ul = document.getElementsByTagName('ul')
menu.addEventListener('click', function () {
    if (ul[0].classList.contains('hidden')) ul[0].classList.remove('hidden');
    else ul[0].classList.add('hidden')
})
ul.addEventListener
