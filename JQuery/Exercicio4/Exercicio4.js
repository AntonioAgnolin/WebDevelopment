$( function(e) {
    $("<li><img src='imagem/foto4.jpg'></li>").insertAfter("li:last-child");
    $("<li><img src='imagem/foto5.jpg'></li>").insertBefore("li:last-child");
    $("<li><img src='imagem/foto6.jpg'></li>").insertBefore("li:first-child");
    $("<li><img src='imagem/foto7.jpg'></li>").insertBefore("li:nth(2)");
    $("a").attr("title","Serra do mar");
    $("a").attr("target","_blank");
    $("a").removeAttr("target");

    jQuery(document).ready(function() {
        console.log("A altura da minha janela é: " + $(window).height() );
        console.log("A altura da minha janela é: " + $(window).width() );

        console.log("A altura da minha janela é: " + $(document).height() );
        console.log("A altura da minha janela é: " + $(document).width() );
    })

    console.log('Posição top do elemento: ' + $('#janela').position().top);
    console.log('Posição left do elemento: ' + $('#janela').position().left);

    $('#janelapequena').offsetParent().css("background-color","#FF0"); 
});