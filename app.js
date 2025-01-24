document.querySelectorAll('.curso').forEach(curso => {
    const instrumento = curso.querySelector('span').textContent.toLowerCase();
    curso.style.setProperty('--bg-image', `url('./assets/img/instrumentos/${instrumento}.jpg')`);
});

// Initial load animation
window.addEventListener('DOMContentLoaded', () => {
    const heroElements = document.querySelectorAll('.hero__titulo, .hero__subtitulo, .hero__botao, .hero__75anos-imagem');
    heroElements.forEach(elemento => {
        elemento.style.transform = 'scale(1)';
        elemento.style.opacity = '1';
    });
    
    setTimeout(() => {
        initialLoadComplete = true;
    }, 1000);
});

window.addEventListener('scroll', () => {
    const elementos = document.querySelectorAll('.curso, .professor, .cursos__titulo, .cursos__descricao, .professores__titulo, .professores__descricao, .hero__titulo, .hero__subtitulo, .hero__botao, .hero__75anos-imagem, .cursos__imagem');
    
    elementos.forEach(elemento => {
        const elementoTopo = elemento.getBoundingClientRect().top;
        const elementoBase = elemento.getBoundingClientRect().bottom;
        const alturaJanela = window.innerHeight;
        
        if (elementoTopo < alturaJanela - 100 && elementoBase > 0) {
            elemento.style.transform = 'scale(1)';
            elemento.style.opacity = '1';
        } else {
            elemento.style.transform = 'scale(0.8)';
            elemento.style.opacity = '0';
        }
    });
});