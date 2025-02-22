$(function () {
    
  $("button").click(function () {

$("#segundo").toggle();


});
});
document.querySelector('.navbar-toggler').addEventListener('click', function () {
    var target = document.getElementById('navbarToggleExternalContent');
    if (target.classList.contains('show')) {
        target.focus();
    }
});