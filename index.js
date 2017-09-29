var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  cart.push({[itemName]: getRandomInt(1,100)});
  console.log(`${itemName} has been added to your cart.`);

  return cart;
}

function viewCart() {
  const length = cart.length;

  if (length == 0) {
    console.log("Your shopping cart is empty.");
  } else if (length == 1) {

  } else {
    const itemsAndPrices = [];

    for (var i = 0; i < (cart.length - 1); i++) {
      const itemName = Object.keys(cart[i])[0];

      console.log(itemName);

      itemsAndPrices.push(`${itemName} at ${cart[itemName]}`);
    }

    console.log(`In your cart, you have ${itemsAndPrices.join(", ")}`);
  }
}

function total() {
  // write your code here
}

function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {
  // write your code here
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

viewCart();
addToCart("Apples");
addToCart("Pears");
viewCart();
