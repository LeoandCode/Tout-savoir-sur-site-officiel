let payme=document.getElementById('payme'); //on cible l'élement payme sur la page HTML//
payme.addEventListener('click',function(){//au clique on afiche le message bonjour//
    alert ('Faites un don pour le développement de la page');
})

let menu=document.getElementById('menu');
let ul=document.getElementsByTagName('ul')
menu.addEventListener('click',function(){
    ul[0].classList.add('hidden')
})
ul.addEventListener