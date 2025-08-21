var menuBtn = document.getElementById('menu');
var closebtn = document.getElementById('close');
var mobileLinks = document.getElementById('links-mobile');

function openMenu() {
    var menuBtn = document.getElementById('menu');
    var mobileLinks = document.getElementById('links-mobile');
    mobileLinks.style.display = 'block';
}

 function closeMenu() {
        var closeBtn = document.getElementById('close');
        var mobileLinks = document.getElementById('links-mobile');
        mobileLinks.style.display = 'none'
        mobileLinks.style.position = 'fixed'
    }

