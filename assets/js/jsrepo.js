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