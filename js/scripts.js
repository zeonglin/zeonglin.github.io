var newPersonHtml = "<div>" +
"<input type=\"text\" name=\"personName\" placeholder=\"name\" size=\"20\" checked>" +
"<input type=\"text\" name=\"item\" placeholder=\"item\" size=\"20\" checked>" +
"</div>"
;

function addNewPerson() {
    var mainBlockElem = document.getElementById("main_block");
    mainBlockElem.innerHTML += newPersonHtml;
}

// var but;
function addFixedItem(elem) {
    // console.log(elem);
    var parent = elem.closest('form');
    var itemData = parent.getElementsByClassName('item-data')[0];
    var itemName = parent.getElementsByClassName('input-name')[0];
    var itemPrice = parent.getElementsByClassName('input-price')[0];
    itemData.innerHTML += itemName.value + " --> "+ itemPrice.value +"<br/>";
}

