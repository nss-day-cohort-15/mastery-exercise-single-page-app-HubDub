console.log("Quizxhr.JS is on deck");

function populatePage (inventory) {
  console.log("populatePage is here");
  var inventoryPost = document.getElementById("carsGoHere");
  console.log("inventory", inventory);
  inventory.forEach (function(car) {
    inventoryPost.innerHTML += `<div class="col-sm-4 myCars ${car.id}" style="border:${car.color} solid 5px"><p class>Make: ${car.make}</p><p>Model: ${car.model}</p><p>Year: ${car.year}</p><p>Price: ${car.price}</p><p>Color: ${car.color}</p><p>Purchased: ${car.purchased}</p><p id="description">Description: ${car.description}</p></div>`
  })
  CarLot.activateEvents();
}

function changeStuffOnPage (cl) {
  console.log("changestuffonpage is here")
  var textInputBox = document.getElementById("textInputField");
  textInputBox.removeAttribute("disabled");
  textInputBox.focus();
  document.getElementById("textInputButton").removeAttribute("disabled");
  cl.removeAttribute("style");  //cl and event.currentTarget are the same because we've passed ECT as the argument to changeSOP
  event.currentTarget.classList.add("bigBorder");
};

CarLot.loadInventory(populatePage);