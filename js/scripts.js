

var sessionData = {};

var personFormsHtml;
// var xhr= new XMLHttpRequest();
// xhr.open('GET', 'personForms.html', true);
// xhr.onreadystatechange= function() {
//     if (this.readyState!==4) return;
//     if (this.status!==200) return; // or whatever error handling you want
//     personFormsHtml = this.responseText;
// };
// xhr.send();
// $("#main_block").load("personForms.html");
fetch("personForms.html").then(response => {
    // var result = response.text();
    // return result;
    return response.text();
}).then(text => personFormsHtml = text)
;


function addNewPerson() {
    var mainBlockElem = document.getElementById("main_block");
    // mainBlockElem.appendChild();
    // $("#main_block").load("personForms.html");
    // $(document).l
    mainBlockElem.innerHTML += personFormsHtml;
}

// var but;
function addFixedItem(elem) {
    // console.log(elem);
    var parent = elem.closest('form');
    var itemData = parent.getElementsByClassName('item-data')[0];
    var itemName = parent.getElementsByClassName('item-name')[0];
    var itemPrice = parent.getElementsByClassName('item-price')[0];
    itemData.innerHTML += itemName.value + " --> "+ itemPrice.value +"<br/>";
}


function clearData() {
    var itemNameList = document.getElementsByClassName('item-name');
    var itemNamePrice = document.getElementsByClassName('item-price');
    for(let i = 0; i < itemNameList.length; ++i) {
        itemNameList[i].value = "";
        itemNamePrice[i].value = "";
    }
}


function loadData() {

}

function saveData(dataName) {
    
}

