var enterText = document.querySelector(".enter");
var addBtnElem = document.querySelector(".addBtn");
var placesElem = document.querySelector(".places");
var showBtnElem = document.querySelector(".showBtn");
// var displayRegElem = document.querySelector("#displayReg");


var registrations = FactoryRegistration();

// function addItems(){
// if(enterText.value != ""){
//     // var ul = document.getElementById("diplayReg");
    
//     // var  enter = document.getElementById("enter");
//     // var  li = document.createElement("li");
//     // li.setAttribute('id',registrations.addList(enterText.value));
//     //  var li = document.createTextNode(registrations.getOnlyOne())
//     // ul.appendChild(li);

// registrations.addList(enterText.value)
//       // create a new div element 
//   node = document.createElement("li"); 
//   // and give it some content 
// //   registrations.addList(enterText.value)
//   var newContent = document.createTextNode(registrations.getOnlyOne()); 
//   // add the text node to the newly created div
//   node.appendChild(newContent);  

//   // add the newly created element and its content into the DOM 
//   var currentDiv = document.getElementById("displayReg");
//   currentDiv.appendChild(node); 
// //   newDiv.insertBefore(newDiv, currentDiv);
// enterText.value = ""; 
// }


// }
    
function addItems(){
    if(enterText.value != ""){
        registrations.addList(enterText.value)
        // create a new div element 
        var newDiv = document.createElement("li"); 
        // and give it some content 
        var newContent = document.createTextNode(registrations.getOnlyOne()); 
        // add the text node to the newly created div
        newDiv.appendChild(newContent);  
        
        // add the newly created element and its content into the DOM 
        var currentDiv = document.getElementById("diplayReg"); 
        currentDiv.appendChild(newDiv)
        enterText.value = "";
        
    }
    
}

 addBtnElem.addEventListener('click', addItems)

