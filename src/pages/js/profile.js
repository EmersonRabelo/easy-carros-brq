const menuOpt = document.querySelectorAll('.profile-menu_opt');

[...menuOpt].forEach(element => {
    element.addEventListener('click', e => {
        const svg = e.currentTarget.childNodes[1].childNodes[1]
        const paths = svg.querySelectorAll('path');

        paths.forEach(path => {
            path.style.fill = '#54BAB1'; // Substitua 'sua_cor_aqui' pela cor desejada.
        });
    })
});