// Scroll e Preenchimento de Campos Baseado em Hash
document.addEventListener('DOMContentLoaded', function () {
    const hash = window.location.hash;
    let assuntoValue = "";

    if (hash === '#Direitos-de-Uso') {
        assuntoValue = "Eliminar Postagens que Violam Direitos de Uso";
    } else if (hash === '#Direitos-Autorais') {
        assuntoValue = "Remoção de Conteúdos de Direitos Autorais";
    }

    if (assuntoValue) {
        const scrollPosition = 364;
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'
        });
        document.querySelector('[name="assunto"]').value = assuntoValue;
    }
});