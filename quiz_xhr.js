console.log("Quizxhr.JS is here");

function populatePage (inventory) {
  console.log("populatePage is here");
  var inventoryPost = document.getElementById("carsGoHere");
  console.log("inventory", inventory);
  inventory.forEach (function(car) {
    inventoryPost.innerHTML += `<div class="col-sm-3 ${car.id}" style="border:${car.color} solid 1px"><p class>Make: ${car.make}</p><p>Model: ${car.model}</p><p>Year: ${car.year}</p><p>Price: ${car.price}</p><p>Color: ${car.color}</p><p>Purchased: ${car.purchased}</p><p id="description">Description: ${car.description}</p></div>`
    // console.log(car.color); used this to figure out how to push object color into HTML for border
  })
   // Now that the DOM is loaded, establish all the event listeners needed
  CarLot.activateEvents(changeStuffOnPage);
}

CarLot.loadInventory(populatePage);

