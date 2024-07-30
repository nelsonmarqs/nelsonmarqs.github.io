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