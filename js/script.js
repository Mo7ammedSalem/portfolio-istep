let barsIcon = document.getElementById("bars-icon");
barsIcon.onclick = function () {
    document.getElementById("menu-phone").style.opacity = "1";
    document.getElementById("menu-phone").style.pointerEvents = "auto";
}

// close nav bar
let closeNavPhone = document.getElementById("close-nav-phone");
closeNavPhone.onclick = function () {
    document.getElementById("menu-phone").style.opacity = "0";
    document.getElementById("menu-phone").style.pointerEvents = "none";
}
