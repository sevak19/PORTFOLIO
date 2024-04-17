const fotoPerfil = document.querySelector(".foto-perfil")
const nome = document.querySelector(".nome")
const usuario = document.querySelector(".usuario")
const seguidores = document.querySelector(".seguidores")
const emailIcon = document.querySelector("#email");


console.log(usuario);

window.addEventListener("load", async () => {
    const res = await fetch("https://api.github.com/users/sevak19")
    const data = await res.json()

    console.log(data);

    fotoPerfil.setAttribute("src", data.avatar_url)
    nome.innerText = data.name
    usuario.innerText = data.login
    seguidores.innerText = data.followers
})
var swap1 = 'ph-envelope-simple';
var swap2 = 'ph-envelope-simple-open';

emailIcon.addEventListener('mouseover', () => {
        emailIcon.classList.replace(swap1, swap2);
});

emailIcon.addEventListener('mouseout', () => {
        emailIcon.classList.replace(swap2, swap1);
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const headerOffset = document.getElementById('header').offsetHeight;
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            const targetOffset = targetElement.offsetTop - headerOffset;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    });
});

document.addEventListener( 'DOMContentLoaded', function() {
    var splide = new Splide( '.splide', {
        type   : 'loop',
        perPage: 3,
        perMove: 1,
        padding: "3rem"
    } );
    splide.mount();
} );