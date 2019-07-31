var enterText = document.querySelector(".enter");
var addBtnElem = document.querySelector(".addBtn");
var placesElem = document.querySelector(".places");
var showBtnElem = document.querySelector(".showBtn");
// var displayRegElem = document.querySelector("#displayReg");
var currentDiv = document.getElementById("displayReg");


// if (localStorage['reg'] !== undefined){
//     var nameStored = JSON.parse(localStorage['reg']); 
// }
// else {
//     nameStored = {};
// }

var registration = FactoryRegistration();

function addItems() {

    if (enterText.value != "") {
        registration.addList(enterText.value);
        var newDiv = document.createElement("li");
        var newContent = document.createTextNode(registration.getOnlyOne());


        newDiv.appendChild(newContent);
        //    console.log(newDiv)
        currentDiv.appendChild(newDiv)
        enterText.value = "";
    }

}

    function showTown() {
        var liElem = document.querySelectorAll("li");
        //var regi = currentDiv.innerHTML;
        var radioElem = document.querySelector("input[name='myPlace']:checked")
        if (radioElem) {
            radioElem.value
        }
        for (var i = 0; i < liElem.length; i++) {
          var regi =  liElem[i].innerHTML;
        if (radioElem.value === "All") {
            liElem[i].style.display = "block";
        }
        else if (regi.startsWith(radioElem.value)) {
            liElem[i].style.display = "block";
        }
        else {
            liElem[i].style.display = "none";
        }
    }

    }

showBtnElem.addEventListener('click', showTown)
addBtnElem.addEventListener('click', addItems)





// var ul = document.getElementById("diplayReg");
    // var  enter = document.getElementById("enter");
    // var  li = document.createElement("li");
    // li.setAttribute('id',enter.value);
    // li.appendChild(document.createTextNode(enter.value))
    // ul.appendChild(li);
