window.onload = function() {
    
//    sidenav
    sidenav = document.getElementsByClassName("sidenav");
    sidenavOpenBtn = document.getElementsByClassName("sidenavOpenBtn");
    sidenavCloseBtn = document.getElementsByClassName("sidenavCloseBtn");
    
    sidenavOpenBtn[0].onclick = function() {
        sidenav[0].classList.add("sidenav-open");
    }
    sidenavCloseBtn[0].onclick = function() {
        sidenav[0].classList.remove("sidenav-open");
    }
}