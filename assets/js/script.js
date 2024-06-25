const fotoPerfil = document.querySelector(".foto-perfil")
const nome = document.querySelector(".nome")
const usuario = document.querySelector(".usuario")
const seguidores = document.querySelector(".seguidores")
const localizacao = document.querySelector(".localizacao")
const bio = document.querySelector(".bio")
const emailIcon = document.querySelector("#email");

window.addEventListener("load", async () => {
    const res = await fetch("https://api.github.com/users/sevak19")
    const data = await res.json()

    console.log(data);

    fotoPerfil.setAttribute("src", data.avatar_url)
    nome.innerText = data.name
    usuario.innerText = data.login
    seguidores.innerText = data.followers
    localizacao.innerText = data.location
    bio.innerText = data.bio

    if(window.location.hash) {
        const headerOffset = document.getElementById('header').offsetHeight;
        const targetElement = document.getElementById(window.location.hash.substring(1));
        
        if (targetElement) {
            const targetOffset = targetElement.offsetTop - headerOffset;
            window.scrollTo({
                top: targetOffset,
                behavior: 'smooth'
            });
        }
    }

    const reposRes = await fetch(data.repos_url); // repos_url contém a URL dos repositórios do usuário
    const reposData = await reposRes.json();

    const reposContainer = document.getElementById('repos');
    reposContainer.innerHTML = '';

    reposData.forEach(repo => {
        reposContainer.innerHTML += `
            <a class="a-repositorios" href="${repo.html_url}">
                <div class="repositorio">
                    <p class="titulos-repositorios">${repo.name}</p>
                    <p>${repo.description}</p>
                    <p class="simbolos">
                        <i class="ph-bold ph-star"></i> ${repo.stargazers_count}
                        <i class="ph ph-user"></i> ${repo.forks_count}
                    </p>
                </div>
            </a>
        `;
    });

    fetch('https://00e59e00-7b9f-4be9-b861-712a500adeaa-00-2twmogeleue20.kirk.replit.dev/conteudosugerido')
        .then(response => response.json())
        .then(data => {
            const carrosselConteudo = document.getElementById('carousel-conteudo');
            data.forEach((conteudosugerido, index) => {
                const activeClass = index === 0 ? 'active' : '';
                carrosselConteudo.innerHTML += `
                    <div class="carousel-item ${activeClass}">
                        <img src="${conteudosugerido.url}" class="d-block w-100" alt="...">
                    </div>`;
    });
})
    fetch('https://00e59e00-7b9f-4be9-b861-712a500adeaa-00-2twmogeleue20.kirk.replit.dev/colegas')
            .then(response => response.json())
            .then(data => {
            const carrosselColegas = document.getElementById('colegas');
            data.forEach((colegas) => {
                console.log(colegas.url);
                console.log(colegas.nome);
                carrosselColegas.innerHTML += `
                    <li class="splide__slide">
                        <img src="${colegas.url}" alt="">
                        <div class="d-none d-md-block">
                            <h5>${colegas.nome}</h5>
                        </div>
                    </li>`;
                });
            })
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