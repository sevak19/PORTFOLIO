window.addEventListener("load", () => {
    if(window.location.hash) {
        const headerOffset = document.getElementById('header').offsetHeight;
        const targetElement = document.getElementById(window.location.hash.substring(1));
        
        if (targetElement) {
            const targetOffset = targetElement.offsetTop - headerOffset;
            window.scrollTo({
                top: targetOffset,
                behavior: 'instant'
            });
        }
    }
})

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
                behavior: 'instant'
            });
        }
    });
});