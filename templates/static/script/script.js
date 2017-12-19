window.onload = function() {
    
//    sidenav
    let sidenav = document.getElementsByClassName("sidenav");
    let sidenavOpenBtn = document.getElementsByClassName("sidenavOpenBtn");
    let sidenavCloseBtn = document.getElementsByClassName("sidenavCloseBtn");
    
    sidenavOpenBtn[0].onclick = function() {
        sidenav[0].classList.add("sidenav-active");
    }
    sidenavCloseBtn[0].onclick = function() {
        sidenav[0].classList.remove("sidenav-active");
    }
    
//    stickynav
    let stickyNav = document.getElementsByClassName("stickyNav");
    let stickyNavList = document.getElementsByClassName("stickyNavList");
    stickyNav[0].onclick = function() {
        stickyNavList[0].classList.toggle("stickyNavList-active");
    }
}