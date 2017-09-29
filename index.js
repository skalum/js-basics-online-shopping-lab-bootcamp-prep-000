var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
  cart.push({[item]: getRandomInt(1,100)});
  console.log(`${item} has been added to your cart.`);

  return cart;
}

function viewCart() {
  if (cart.length == 0) {
    console.log("Your shopping cart is empty.");

    return;
  }
  const itemsAndPrices = [];

  for (var i = 0; i < (cart.length - 1); i++) {
    const item = [cart[i]].keys();

    console.log(item);

    itemsAndPrices.push(`${item} at ${cart[item]}`);
  }

  console.log(`In your cart, you have ${itemsAndPrices.join(", ")}`);
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
