window.onload = function() {
    let categories = document.getElementsByClassName("categories");
    
    for(let i = 0; i< categories.length; i++) {
        let categoryName = categories[i].getElementsByClassName("categoryName");
        categories[i].id = "category-"+categoryName[0].innerHTML;
    }
}