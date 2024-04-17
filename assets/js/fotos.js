const fotorod = document.querySelector("#rod");

var swap3 = 'assets/img/rod.jpeg';
var swap4 = 'assets/img/rod 2.jpeg';

fotorod.addEventListener('mouseover', () => {
        fotorod.setAttribute('src', swap4)
});

fotorod.addEventListener('mouseout', () => {
        fotorod.setAttribute('src', swap3)
});