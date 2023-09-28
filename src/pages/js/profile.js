const menuOpt = document.querySelectorAll('.profile-menu_opt');


// TODO: Corrigir bug do svg fill
//[...menuOpt].forEach(element => {
//    element.addEventListener('click', e => {

//        if(e.currentTarget.getAttribute('action') == 'out'){
//            logOut()
//        }

//        const svg = e.currentTarget.childNodes[1].childNodes[1]
//        const paths = svg.querySelectorAll('path');

//        paths.forEach(path => {
//            path.style.fill = '#54BAB1'; // Substitua 'sua_cor_aqui' pela cor desejada.
//        });
//    })
//});

function logOut(){
    window.location.replace(`${window.location.origin}/src/pages/login.html`)
}

