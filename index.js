
var increaseButtons = document.querySelectorAll('.increase');
increaseButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var quantityElement = this.parentElement.querySelector('.quantity');
    var quantity = parseInt(quantityElement.textContent);
    quantityElement.textContent = quantity + 1;
    updateTotalPrice();
  });
});


var decreaseButtons = document.querySelectorAll('.decrease');

decreaseButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    var quantityElement = this.parentElement.querySelector('.quantity');
    var quantity = parseInt(quantityElement.textContent);
    if (quantity > 1) {
      quantityElement.textContent = quantity - 1;
      updateTotalPrice();
    }
  });
});


var deleteButtons = document.querySelectorAll('.delete');

