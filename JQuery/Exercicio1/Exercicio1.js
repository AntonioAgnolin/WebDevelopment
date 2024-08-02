$(document).ready(function() {
    alert("A página foi carregada com sucesso.");
    alert("Essa página contém " + $("nav a").length + " links");
    $("nav a").css("color","purple").css("display","block");
    $("nav a").css("text-decoration","none");
});