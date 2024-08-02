$( function(e) {
    $("li a[href$='.zip']").after("<img src='imagens/icon_zip.gif'>");
    $("li a[href$='.pdf']").after("<img src='imagens/icon_pdf.gif'>");
    $("ul#listafrutas").append("<li>Morango</li>");
    $("ul#listafrutas").prepend("<li>Mirtilo</li>");
    $("li:first").remove();
    $("li.pessego").remove();
    $("li:last").replaceWith("<li>Banana</li>");
    $("ul").wrapAll("<div style='border:1px solid #CCC'><div>");
});