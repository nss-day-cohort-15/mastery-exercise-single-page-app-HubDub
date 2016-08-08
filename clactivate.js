console.log("carlot.activate.js is on deck")

var CarLot = (function (cl) {

  var addDescription = null;

  cl.activateEvents = function () {
    console.log("activate events is on deck"); //we're getting here
    var carDivClick = document.querySelectorAll(".myCars"); //cars
    var myInputField = document.getElementById("textInputField")
    console.log(carDivClick) //it finds the four car elements
    // var carTarget
    // for(i = 0; i > carDivClick.length; i++) {
    //   carDivClick[i].addEventListener("click", function(evt) {
    //since there are four items that have this class, it lists all of them as an array, so we need to loop through the cars adding a listener to each. for some reason the above for loop did not work (it would not log a click event but the below one did.
    myInputField.addEventListener("keydown", function(evt) {
    console.log(evt.target.value);
    // document.getElementById("textInputField").value = "";
    console.log(addDescription);
    addDescription.innerHTML += evt.key;

  })

    for (var i = carDivClick.length - 1; i >= 0; i--) {
      carDivClick[i].addEventListener("click", function(evt) {
      console.log(evt);
      console.log(evt.currentTarget);
      // carTarget = event.currentTarget
      // console.log(carTarget)
      cl.resetToOriginal(event.currentTarget)
      myInputField.value = ""
      addDescription = event.currentTarget.children[6];
      changeStuffOnPage(event.currentTarget)
      })
    }
    document.querySelector("#textInputButton").addEventListener("click", function (evt) {
      console.log("button works but it doesn't do anything");
    });
  }
  return (cl)
}(CarLot));

// carlot || {}  //could use this?