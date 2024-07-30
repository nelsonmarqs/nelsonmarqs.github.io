//Auto Click Na Barra de Busca
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
 
// Search
function search() {
     var searchTerm = getSearchTerm().toLowerCase();
     if (searchTerm !== "") {
         var searchCards = document.querySelectorAll(".search-cards"),
             anyMatch = false;
         searchCards.forEach(function(card) {
             var displayStyle = card.textContent.toLowerCase().includes(searchTerm) ? "block" : "none";
             card.style.display = displayStyle;
             if (displayStyle === "block") {
                 anyMatch = true;
             }
         });
         toggleSearchError(!anyMatch);
     } else {
         hideAllSearchCards();
     }
 }

 function getSearchTerm() {
     return document.getElementById("search-input").value.trim();
 }

 function hideAllSearchCards() {
     document.querySelectorAll(".search-cards").forEach(function(card) {
         card.style.display = "none";
     });
 }

 function toggleSearchError(hasError) {
     var errorElement = document.getElementById("search-cards-error");
     errorElement.style.display = hasError ? "block" : "none";
 }

 document.addEventListener("DOMContentLoaded", function() {
     document.getElementById("search-input").value = "";
 });

 document.getElementById("search-enviar").addEventListener("click", search);

 document.getElementById("search-input").addEventListener("input", function() {
     if (getSearchTerm() === "") {
         hideAllSearchCards();
     }
 });

 document.getElementById("search-input").addEventListener("keypress", function(event) {
     if (event.key === "Enter") {
         event.preventDefault();
         search();
     }
 });