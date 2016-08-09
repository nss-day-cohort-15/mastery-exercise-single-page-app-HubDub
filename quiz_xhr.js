console.log("Quizxhr.JS is on deck");

function populatePage (inventory) {
  console.log("populatePage is here");
  var inventoryPost = document.getElementById("carsGoHere");
  console.log("inventory", inventory);
  inventory.forEach (function(car) {
    inventoryPost.innerHTML += `<div class="col-sm-4 myCars ${car.id}" style="border-color:${car.color}"><p class>Make: ${car.make}</p><p>Model: ${car.model}</p><p>Year: ${car.year}</p><p>Price: ${car.price}</p><p>Color: ${car.color}</p><p>Purchased: ${car.purchased}</p><p id="description">Description: ${car.description}</p></div>`
  })
  CarLot.activateEvents();
}


CarLot.loadInventory(populatePage);