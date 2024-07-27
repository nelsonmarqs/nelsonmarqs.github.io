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