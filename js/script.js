// Carregar HTML externo
$(document).ready(function () {
    $("#menu").load("html/principal/menu.html");
    $("#sub-roda-pe").load("html/principal/sub-roda-pe.html");
    $("#roda-pe").load("html/principal/roda-pe.html");
    $("#stories").load("html/stories/stories.html");
    $("#post").load("html/post/post.html");
});

// Index Newsletter Scroll
document.addEventListener('DOMContentLoaded', function() {
    if (window.location.hash === '#newsletter') {
        var scrollPosition = 890;

        window.scrollTo({
            top: scrollPosition,
            behavior: 'smooth'  // Scroll suave
        });
    }
});