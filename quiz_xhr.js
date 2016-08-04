console.log("Quizxhr.JS is here");

function populatePage (inventory) {
  console.log("populatePage is here");
  var inventoryPost = document.getElementById("carsGoHere");
  console.log("inventory", inventory);
  inventory.forEach (function(car) {
    inventoryPost.innerHTML += `<p>Make: ${car.make}</p><p>Model: ${car.model}</p><p>Year: ${car.year}</p><p>Price: ${car.price}</p><p>Color: ${car.color}</p><p>Purchased: ${car.purchased}</p><p>Description: ${car.description}</p>`
  })
   // Now that the DOM is loaded, establish all the event listeners needed
  // CarLot.activateEvents();
}

// Load the inventory and send a callback function to be
// invoked after the process is complete
CarLot.loadInventory(populatePage);