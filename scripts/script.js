var btnPageAdd = document.getElementById('btnPageAdd');
var btnPageSearch = document.getElementById('btnPageSearch');
var btnFormSubmit = document.getElementById('btnFormSubmit');

var divPageAdd = document.getElementById('add-page');
var divPageSearch = document.getElementById('search-page');
var divPageOutput = document.getElementById('output-page');

btnPageAdd.addEventListener("click",showAddPage);
btnPageSearch.addEventListener("click",showSearchPage);
btnFormSubmit.addEventListener("click",showOuputPage);

function showAddPage(){
    divPageAdd.style.display = "block";
    divPageSearch.style.display = "none";
    divPageOutput.style.display = "none";
}

function showSearchPage(){
    divPageAdd.style.display = "none";
    divPageSearch.style.display = "block";
    divPageOutput.style.display = "none";
}

function showOuputPage(){
    divPageAdd.style.display = "none";
    divPageSearch.style.display = "none";
    divPageOutput.style.display = "block";
}

