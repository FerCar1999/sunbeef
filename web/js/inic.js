$(document).ready(function() {
    $('.sidenav').sidenav();
});

function empresa() {
    $('html,body').animate({
        scrollTop: $("#empresa").offset().top - 60
    }, 'slow');
    //$('.sidenav').sidenav('close');
}

function equipo() {
    $('html,body').animate({
        scrollTop: $("#equipo").offset().top - 60
    }, 'slow');
    //$('.sidenav').sidenav('close');
}

function producto() {
    $('html,body').animate({
        scrollTop: $("#producto").offset().top - 60
    }, 'slow');
    //$('.sidenav').sidenav('close');
}

function contacto() {
    $('html,body').animate({
        scrollTop: $("#contacto").offset().top - 60
    }, 'slow');
    //$('.sidenav').sidenav('close');
}