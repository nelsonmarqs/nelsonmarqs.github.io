// Auto Click Na Barra de Busca
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se a URL contém o fragmento "#pesquisar"
    if (window.location.hash === '#pesquisar') {
        // Seleciona o campo de entrada de pesquisa
        var searchInput = document.getElementById('search-input');
        
        // Simula um clique no campo de entrada de pesquisa
        if (searchInput) {
            // Adiciona um pequeno atraso antes de clicar
            setTimeout(function() {
                searchInput.focus(); // Foca o campo de entrada
                searchInput.click(); // Simula um clique para garantir a ativação do teclado
            }, 100); // 100ms de atraso para garantir que o DOM esteja pronto
        }
    }
});

// Função de Busca
function search() {
    var searchTerm = getSearchTerm().toLowerCase();
    var searchResultsContainer = document.querySelector('.search-resultado');
    var searchCards = document.querySelectorAll('.search-cards');
    var anyMatch = false;

    // Mostra a área de resultados
    searchResultsContainer.style.display = 'flex'; // Garante que a área de resultados está visível

    searchCards.forEach(function(card) {
        var cardContent = card.textContent.toLowerCase();
        var displayStyle = cardContent.includes(searchTerm) ? 'flex' : 'none';
        card.style.display = displayStyle;
        if (displayStyle === 'flex') {
            anyMatch = true;
        }
    });

    // Exibe ou oculta a mensagem de erro
    toggleSearchError(!anyMatch);
}

// Obtém o termo de pesquisa
function getSearchTerm() {
    return document.getElementById('search-input').value.trim();
}

// Oculta todos os cartões de pesquisa
function hideAllSearchCards() {
    document.querySelectorAll('.search-cards').forEach(function(card) {
        card.style.display = 'none';
    });
}

// Exibe ou oculta a mensagem de erro
function toggleSearchError(hasError) {
    var errorElement = document.getElementById('search-cards-error');
    errorElement.style.display = hasError ? 'block' : 'none';
}

// Adiciona evento ao botão de busca
document.getElementById('search-enviar').addEventListener('click', search);

// Adiciona evento ao campo de entrada para ocultar resultados ao limpar
document.getElementById('search-input').addEventListener('input', function() {
    if (getSearchTerm() === '') {
        hideAllSearchCards();
        document.querySelector('.search-resultado').style.display = 'none'; // Oculta a área de resultados
    }
});

// Adiciona evento ao campo de entrada para buscar ao pressionar Enter
document.getElementById('search-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        search();
    }
});