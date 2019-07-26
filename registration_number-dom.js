var enterText = document.querySelector("#enter");
var addBtnElem = document.querySelector(".addBtn");
var placesElem = document.querySelector(".places");
var showBtnElem = document.querySelector(".showBtn");
var displayRegElem = document.querySelector("#displayReg");




function addItems(){

    var ul = document.getElementById("diplayReg");
    var  enter = document.getElementById("enter");
    var  li = document.createElement("li");
    li.setAttribute('id',enter.value);
    li.appendChild(document.createTextNode(enter.value))
    ul.appendChild(li);
}

// addBtnElem.addEventListener('click', addItems)

