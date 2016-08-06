console.log("carlot.js is here")

var CarLot = (function () {
  var inventory = [];
  console.log(inventory);
  return {
    //this makes the inventory available if I need to get it for a different function outside the iife
    getInventory: function () {
      return inventory
    },
    //this loads the cars from the json file and send it to populate
    loadInventory: function (callback) {
      console.log("loadInventory starts");
      var inventoryLoader = new XMLHttpRequest();
      console.log("opened request");

      inventoryLoader.open("GET","inventory.json");
      console.log("ran GET");
      inventoryLoader.addEventListener("load", function(evt) {
        inventory = JSON.parse(evt.target.responseText).cars;
        console.log("hey", inventory);
        callback(inventory);
      })
    inventoryLoader.send()
    }
  };
}());

var CarLot = (function (cl) {
  cl.activateEvents = function (callback) {
      console.log("activate events is on deck"); //we're getting here
      var carDivClick = document.querySelectorAll(".col-sm-3"); //cars
      console.log(carDivClick) //it finds the four car elements
      // var carTarget
      // for(i = 0; i > carDivClick.length; i++) {
      //   carDivClick[i].addEventListener("click", function(evt) {
      //since there are four items that have this class, it lists all of them as an array, so we need to loop through the cars adding a listener to each. for some reason the above for loop did not work (it would not log a click event but the below one did.
      for (var i = carDivClick.length - 1; i >= 0; i--) {
        carDivClick[i].addEventListener("click", function(evt) {
        console.log(evt);
        console.log(event.currentTarget);
        // carTarget = event.currentTarget
        // console.log(carTarget)
        changeStuffOnPage(event.currentTarget)
        })
      }
      var buttonClicked = document.querySelector("#textInputButton"); //button
      console.log(buttonClicked)  //it finds the button

  }
  return (cl)
}(CarLot));

// carlot || {}  //could use this?

function changeStuffOnPage (cl) {
  console.log("changestuffonpage is here")
  document.getElementById("textInputField").removeAttribute("disabled");
  document.getElementById("textInputButton").removeAttribute("disabled");
  event.currentTarget.removeAttribute("style");
  event.currentTarget.classList.add("bigBorder");
  var addDescription = event.currentTarget.children[6];
  console.log(addDescription);
  document.getElementById("textInputField").addEventListener("keydown", function(evt) {
    console.log(evt.target.value);
    // document.getElementById("textInputField").value = "";
    console.log(addDescription);

    addDescription.innerHTML += evt.key; //I can't believe it but it works
    // var eventKey = evt.key
    // console.log(eventKey);
    //output.innerHTML = event.target.value;
    //binding

  })
};