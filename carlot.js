console.log("carlot.js is on deck")

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




