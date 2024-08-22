// HTML Post
function fecharPostTag() {
    document.getElementById("post-tag-container").style.display = "none";
    document.getElementById("post-tag").style.display = "none";
}

function toggleDropdown() {
    var dropdown = document.querySelector('.dropdown');
    var postTag = document.getElementById('post-tag');
    var dropbtn = document.querySelector('.dropbtn');

    dropdown.classList.toggle('active');

    if (dropdown.classList.contains('active')) {
        postTag.style.height = '450px';
        dropbtn.style.borderRadius = '6px 6px 0px 0px';
    } else {
        postTag.style.height = '126px';
        dropbtn.style.borderRadius = '6px';
    }
}

window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.querySelectorAll('.dropdown');
        dropdowns.forEach(function (dropdown) {
            if (dropdown.classList.contains('active')) {
                dropdown.classList.remove('active');
                var postTag = document.getElementById('post-tag');
                var dropbtn = document.querySelector('.dropbtn');
                postTag.style.height = '126px';
                dropbtn.style.borderRadius = '6px';
            }
        });
    }
}

$(document).ready(function () {
    $(".post-filter img").click(function () {
        $("#post-tag-container, #post-tag").css("display", "block");
    });

    $(".post-tag-x").click(function () {
        $("#post-tag-container, #post-tag").css("display", "none");
    });

    $(".dropdown-content div").click(function () {
        $("#post-tag-container, #post-tag").css("display", "none");
    });
});

jQuery(function ($) {
    var $els = $('.post-area .post-cards').hide();
    var $curr;

    function filterPosts(hash) {
        $('.slist').removeClass('selected');

        //Mostrar Todos
        if (hash === '#mostrar-todos' || !hash) {
            $('#ele0').addClass('selected');
            $els.hide();
            $els.slice(0, 12).show();
            $curr = $els;
            updatePostTitle('Tags e Postagens');

        //Comportamento
        } else if (hash === '#Comportamento') {
            $('#Comportamento').addClass('selected');
            $curr = $els.filter('.Comportamento').hide();
            $curr.slice(0, 12).show();
            $els.not($curr).hide();
            updatePostTitle('Comportamento');

        //Filmes e TV
        } else if (hash === '#Filmes-e-TV') {
            $('#Filmes-e-TV').addClass('selected');
            $curr = $els.filter('.Filmes-e-TV').hide();
            $curr.slice(0, 12).show();
            $els.not($curr).hide();
            updatePostTitle('Filmes e TV');
        
        //Música
        } else if (hash === '#Musica') {
            $('#Musica').addClass('selected');
            $curr = $els.filter('.Musica').hide();
            $curr.slice(0, 12).show();
            $els.not($curr).hide();
            updatePostTitle('Música');
        
        //Drogas
        } else if (hash === '#Drogas') {
            $('#Drogas').addClass('selected');
            $curr = $els.filter('.Drogas').hide();
            $curr.slice(0, 12).show();
            $els.not($curr).hide();
            updatePostTitle('Drogas');
        
        //Games
        } else if (hash === '#Games') {
            $('#Games').addClass('selected');
            $curr = $els.filter('.Games').hide();
            $curr.slice(0, 12).show();
            $els.not($curr).hide();
            updatePostTitle('Games');
        
        //Política
        } else if (hash === '#Politica') {
            $('#Politica').addClass('selected');
            $curr = $els.filter('.Politica').hide();
            $curr.slice(0, 12).show();
            $els.not($curr).hide();
            updatePostTitle('Política');
        
        }

        toggleLoadMoreButton();
    }

    function updatePostTitle(newTitle) {
        var postTitle = document.querySelector('.post-title h1');
        if (postTitle) {
            postTitle.textContent = newTitle;
        }
    }

    function toggleLoadMoreButton() {
        if ($curr.filter(':hidden').length === 0) {
            $('.load-more').hide();
        } else {
            $('.load-more').show();
        }
    }

    $('.slist a').on('click', function (event) {
        event.preventDefault();
        var hash = $(this).attr('href');
        filterPosts(hash);
    });

    $('.load-more').click(function () {
        $curr.filter(':hidden').slice(0, $curr.length).show();
        toggleLoadMoreButton();
    });

    filterPosts(window.location.hash);

    $(window).on('hashchange', function () {
        filterPosts(window.location.hash);
    });
});