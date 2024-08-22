// Função para obter parâmetros da URL
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

// Preenche o campo 'assunto' e rola até ele se o parâmetro 'assunto' estiver presente na URL
document.addEventListener('DOMContentLoaded', function () {
    const assunto = getQueryParam('assunto');
    if (assunto) {
        const assuntoInput = document.getElementById('assunto');
        assuntoInput.value = decodeURIComponent(assunto);
        // Rola a página até o campo 'assunto'
        assuntoInput.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
});