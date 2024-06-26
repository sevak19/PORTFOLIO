document.addEventListener('DOMContentLoaded', carregarInformacoesRepositorio);


function obterParametroURL(nome) {
    const parametros = new URLSearchParams(window.location.search);
    return parametros.get(nome);
}

function carregarInformacoesRepositorio() {

    const nomeRepositorio = obterParametroURL('name');

    
    if (!nomeRepositorio) return;

    
    const url = `https://api.github.com/repos/sevak19/${nomeRepositorio}`;


    fetch(url)
        .then(response => response.json())
        .then(data => {
            console.log(data.bio);
            document.getElementById('titulo').innerHTML = `
            Repositório: ${data.name}`
            document.getElementById('descricao').textContent = data.description;
            document.getElementById('dataCriacao').textContent = data.created_at;
            document.getElementById('linguagem').textContent = data.language;
            document.getElementById('linkAcesso').innerHTML = `
            <a href="${data.html_url}" target="_blank">${data.html_url}</a>`;
            document.getElementById('simbolos').innerHTML = `
            <i class="ph-bold ph-star"></i> ${data.stargazers_count}
            <i class="ph ph-user"></i> ${data.forks_count}`
        })
        .catch(error => console.error('Erro ao carregar informações do repositório:', error));
}
