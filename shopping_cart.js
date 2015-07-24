var ShoppingCart = function() {
	this.list = [];
	this.totalcost = 0;
};

ShoppingCart.prototype.addItem = function(fruit, quantity) {
	fruit.quantity = quantity;
	this.list.push([fruit]);
	console.log("Adding " + fruit.quantity + " " + fruit.kind + " to the cart at a price of " + fruit.price);
};

ShoppingCart.prototype.total = function() {
	var totalCost = 0;
	this.list.map(function(element) {
		element.map(function (fruit){
			totalCost += fruit.price * fruit.quantity;
			console.log(fruit);
		});
	});
	this.totalcost = totalCost
	console.log("Total cost of the shopping: " + this.totalcost);
};

ShoppingCart.prototype.discount = function() {
	var totalItems = 0;
	this.list.map(function(element){
		element.map(function(fruit){
			totalItems += fruit.quantity;
		});
	});
	if (totalItems > 5) {
		this.totalcost = this.totalcost * 0.9;
		console.log("As you've bought more than 5 items get a discount\nFinal price: " + this.totalcost);
	}	
};

ShoppingCart.prototype.discount_oranges = function() {
	this.list.map(function(element){
		element.map(function(fruit){
			if (fruit.kind === "orange") {
			numb_of_oranges = fruit.quantity;
			};
		})
	});

	if (numb_of_oranges > 5) {
		oranges_extra_without_discount = numb_of_oranges % 5;
		oranges_with_discount = 5 * parseInt(((numb_of_oranges - oranges_extra_without_discount) / 5) / 2);
	}else oranges_with_discount = 0;
	shoppingCart.addItem(orange_with_discount, oranges_with_discount);
	shoppingCart.remove("orange", oranges_with_discount);
};

ShoppingCart.prototype.discount_apples = function() {
	this.list.map(function(element){
		element.map(function(fruit){
			if (fruit.kind === "apple") {
			numb_of_apples = fruit.quantity;
			};
		})
	});

	if (numb_of_apples >= 2) {
		apples_extra_without_discount = numb_of_apples % 2;
		apples_with_discount = (numb_of_apples - apples_extra_without_discount)/2;
	}else apples_with_discount = 0;

	shoppingCart.addItem(apple_with_discount, apples_with_discount);
	shoppingCart.remove("apple", apples_with_discount);
};

ShoppingCart.prototype.remove = function(kindOfFruit, quantity) {
	this.list.map(function(element){
		element.map(function(fruit){
			if (fruit.kind === kindOfFruit && quantity !== null) {
			fruit.quantity = fruit.quantity - quantity;
			} else if (Function.length < 1) {
				fruit.quantity = 0;
			}
		})
	});
};

var Item = function (fruit, price) {
	this.kind = fruit;
	this.price = price;
}

orange_with_discount = new Item("orange with discount", 2.5)
apple_with_discount = new Item("free apple", 0)
apple = new Item("apple", 10);
orange = new Item("orange", 5);
grapes = new Item("grapes", 15);
banana = new Item("banana", 20);
watermelon = new Item("watermelon", 50);

var shoppingCart = new ShoppingCart();
shoppingCart.addItem(orange, 20);
shoppingCart.addItem(apple, 20);
shoppingCart.addItem(banana,10);
shoppingCart.addItem(watermelon, 1);
shoppingCart.addItem(grapes, 2);

shoppingCart.discount_oranges();
shoppingCart.discount_apples();

shoppingCart.remove("banana", 3);

console.log(shoppingCart.list);

shoppingCart.total();
shoppingCart.discount();
