var btnPageAdd = document.getElementById('btnPageAdd');
var btnPageSearch = document.getElementById('btnPageSearch');

var divPageAdd = document.getElementById('add-page');
var divPageSearch = document.getElementById('search-page');

btnPageAdd.addEventListener("click",showAddPage);
btnPageSearch.addEventListener("click",showSearchPage);

function showAddPage(){
    divPageAdd.style.display = "block";
    divPageSearch.style.display = "none";
}

function showSearchPage(){
    divPageAdd.style.display = "none";
    divPageSearch.style.display = "block";
}