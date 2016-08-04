console.log("carlot.js is here")

var CarLot = (function () {
  var inventory = [];
  console.log(inventory);

  return {
    getInventory: function () {

    },
    loadInventory: function (callback) {
      console.log("loadInventory starts");
      var inventoryLoader = new XMLHttpRequest();
      console.log("opened request");

      inventoryLoader.open("GET","inventory.json");
      console.log("ran GET");
      console.log(inventory);
      inventoryLoader.addEventListener("load", function(evt) {
        inventory = JSON.parse(evt.target.responseText).cars;
        console.log("hey", inventory);
        callback(inventory);
      })
    inventoryLoader.send()
    }
  };

})();

