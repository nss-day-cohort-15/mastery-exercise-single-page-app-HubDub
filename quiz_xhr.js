console.log("Quizxhr.JS is on deck");

function populatePage (inventory) {
  console.log("populatePage is here");
  var inventoryPost = document.getElementById("carsGoHere");
  console.log("inventory", inventory);
  inventory.forEach (function(car) {
    inventoryPost.innerHTML += `<div class="col-sm-4 myCars ${car.id}" style="border:${car.color} solid 1px"><p class>Make: ${car.make}</p><p>Model: ${car.model}</p><p>Year: ${car.year}</p><p>Price: ${car.price}</p><p>Color: ${car.color}</p><p>Purchased: ${car.purchased}</p><p id="description">Description: ${car.description}</p></div>`
    // console.log(car.color); used this to figure out how to push object color into HTML for border
  })
   // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents();
}

function changeStuffOnPage (cl) {
  console.log("changestuffonpage is here")
  document.getElementById("textInputField").removeAttribute("disabled");
  document.getElementById("textInputButton").removeAttribute("disabled");
  cl.removeAttribute("style");  //cl and event.currentTarget are the same because we've passed ECT as the argument to changeSOP
  event.currentTarget.classList.add("bigBorder");
  // var addDescription = event.currentTarget.children[6];
  // console.log(addDescription);
  // document.getElementById("textInputField").addEventListener("keydown", function(evt) {
  //   console.log(evt.target.value);
  //   // document.getElementById("textInputField").value = "";
  //   console.log(addDescription);

  //   addDescription.innerHTML += evt.key; //I can't believe it but it works
  //   // var eventKey = evt.key
  //   // console.log(eventKey);
  //   //output.innerHTML = event.target.value;
  //   //binding
  //   // CarLot.activateEvents(cl);

  // })
};

CarLot.loadInventory(populatePage);

