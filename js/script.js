// Pre Loading
$(window).on('load', function () {
    $('#preloader .inner').fadeOut();
    $('#preloader').delay(10).fadeOut('slow'); 
    $('body').delay(10).css({'overflow': 'visible'});
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

// Story
setTimeout(function() {
    document.getElementById("tutorial").style.display = "none";
}, 4000); // 4000 milissegundos = 4 segundos

class SlideStories {
    constructor() {
        this.active = 0;
        this.timeout = null;
        this.slides = document.querySelectorAll('.storyy-slide div');
        this.bullets = document.querySelectorAll('.storyy-bullets-b a');
        this.prevButton = document.querySelector('.storyy-b-l');
        this.nextButton = document.querySelector('.storyy-b-r');
        this.storyySlide = document.querySelector('.storyy-slide');

        this.init();
    }

    init() {
        this.updateSlides();
        this.prevButton.addEventListener('click', () => {
            this.prev();
            this.resetAutoSlide();
        });
        this.nextButton.addEventListener('click', () => {
            this.next();
            this.resetAutoSlide();
        });
        this.prevButton.addEventListener('touchstart', () => {
            this.pauseAutoSlide();
        });
        this.nextButton.addEventListener('touchstart', () => {
            this.pauseAutoSlide();
        });
        this.prevButton.addEventListener('touchend', () => {
            this.resumeAutoSlide();
        });
        this.nextButton.addEventListener('touchend', () => {
            this.resumeAutoSlide();
        });
        this.prevButton.addEventListener('mouseover', () => {
            this.pauseAutoSlide();
        });
        this.nextButton.addEventListener('mouseover', () => {
            this.pauseAutoSlide();
        });
        this.prevButton.addEventListener('mouseout', () => {
            this.resumeAutoSlide();
        });
        this.nextButton.addEventListener('mouseout', () => {
            this.resumeAutoSlide();
        });
        this.storyySlide.addEventListener('mouseover', () => {
            this.resumeAutoSlide();
        });
        this.storyySlide.addEventListener('mouseout', () => {
            this.pauseAutoSlide();
        });
        this.autoSlide();
    }

    updateSlides() {
        this.slides.forEach((slide, index) => {
            slide.style.display = index === this.active ? 'flex' : 'none';
        });
        this.bullets.forEach((bullet, index) => {
            bullet.style.background = index === this.active ? 'gray' : 'white';
        });

        // Desativar botão de voltar quando estiver no primeiro slide
        this.prevButton.disabled = this.active === 0;

        // Desativar botão de próximo quando estiver no último slide
        this.nextButton.disabled = this.active === this.slides.length - 1;
    }

    prev() {
        if (this.active > 0) {
            this.active--;
        }
        this.updateSlides();
    }

    next() {
        if (this.active < this.slides.length - 1) {
            this.active++;
        }
        this.updateSlides();
    }

    autoSlide() {
        if (this.active < this.slides.length - 1) {
            this.timeout = setTimeout(() => {
                this.next();
                this.autoSlide();
            }, 20000); // Tempo de troca automático (20 segundos)
        }
    }

    resetAutoSlide() {
        clearTimeout(this.timeout);
        this.autoSlide();
    }

    pauseAutoSlide() {
        clearTimeout(this.timeout);
    }

    resumeAutoSlide() {
        this.autoSlide();
    }
}

document.addEventListener('DOMContentLoaded', () => new SlideStories());

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

// Espera até que o documento esteja completamente carregado
document.addEventListener('DOMContentLoaded', function() {
    // Verifica se há um hash na URL e se é o que desejamos
    if (window.location.hash === '#newsletter') {
        // Define a posição desejada para o scroll (364px do topo)
        var scrollPosition = 890;
                    
        // Define a animação de scroll suave para a posição desejada
        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'  // Scroll suave
        });
    }
});