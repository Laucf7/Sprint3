// If you have time, you can move this variable "products" to a json or js file and load the data in this js. It will look more professional
var products = [
    {
        id: 1,
        name: 'Cooking oil',
        price: 10.5,
        type: 'grocery',
        offer: {
            number: 3,
            percent: 4.5
        }
    },
    {
        id: 2,
        name: 'Pasta',
        price: 6.25,
        type: 'grocery'
    },
    {
        id: 3,
        name: 'Instant cupcake mixture',
        price: 5,
        type: 'grocery',
        offer: {
            number: 10,
            percent: 33
        }
    },
    {
        id: 4,
        name: 'All-in-one',
        price: 260,
        type: 'beauty'
    },
    {
        id: 5,
        name: 'Zero Make-up Kit',
        price: 20.5,
        type: 'beauty'
    },
    {
        id: 6,
        name: 'Lip Tints',
        price: 12.75,
        type: 'beauty'
    },
    {
        id: 7,
        name: 'Lawn Dress',
        price: 15,
        type: 'clothes'
    },
    {
        id: 8,
        name: 'Lawn-Chiffon Combo',
        price: 19.99,
        type: 'clothes'
    },
    {
        id: 9,
        name: 'Toddler Frock',
        price: 9.99,
        type: 'clothes'
    }
]
// Array with products (objects) added directly with push(). Products in this array are repeated.
var cartList = [];

// Improved version of cartList. Cart is an array of products (objects), but each one has a quantity field to define its quantity, so these products are not repeated.
var cart = [];

var total = 0;


// Exercise 1
function buy(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
    for (let i = 0; i < products.length; i++) {
        if (id === products[i].id) {
            // Clonar!!! Hemos clonado el array de productos a un nuevo array, para que no nos modifique el array original de productos
            let newProduct = {...products[i]};
            cartList.push(newProduct);
        }
    }
    console.log('New list:', cartList);
}

// Exercise 2
function cleanCart() {
    cartList.splice(0);
    cart.splice(0);
    total = 0;
    

    document.getElementById('count_product').innerHTML = cartList.length;

    document.getElementById('cart_list').innerHTML = "";

    document.getElementById('total_price').innerHTML = "0";

    //console.log('splice', cartList);

    /*let tableBody = document.querySelector('tbody#cart_list');
    tableBody.innerHTML = "";
    let totalPrice = document.querySelector('span#total_price');
    totalPrice.innerHTML = "";
    */


}

// Exercise 3
function calculateTotal() {
    // Calculate total price of the cart using the "cartList" array

    for (let i = 0; i < cart.length; i++) {
        if (cart[i].subtotalWithDiscount == undefined) {
            total += cart[i].subtotal;
        } else {
            total += cart[i].subtotalWithDiscount;
        }

    }
    console.log()
    console.log('El total del carrito es:' + total.toFixed(2));


}

// Exercise 4
function generateCart() {
    // Using the "cartlist" array that contains all the items in the shopping cart, 
    // generate the "cart" array that does not contain repeated items, instead each item of this array "cart" shows the quantity of product.

    let itemFound;

    cartList.forEach((item) => {
        itemFound = cart.find((product) => product.id === item.id);
        if (itemFound == undefined) {
            item.quantity = 1;
            cart.push(item);
        } else {
            itemFound.quantity++;
        }
    })
    console.log('Cart:', cart);
}

// Exercise 5

function applyPromotionsCart() {
    // Apply promotions to each item in the array "cart"

    cart.forEach((item) => {
        item.subtotal = item.price * item.quantity;
        if (item.offer != undefined) {
            if (item.quantity >= item.offer.number) {
                item.subtotalWithDiscount = Math.floor(
                    item.subtotal - (item.subtotal * item.offer.percent) / 100
                );
            }
        }
    });
    console.log("discount", cart)

}


// Exercise 6
// Fill the shopping cart modal manipulating the shopping cart dom
function printCart() {
    generateCart();
    applyPromotionsCart();
    calculateTotal();
    printItems();
    printTotal();
};

function printItems() {
    let totalProductPrice;
    let tableBody = document.querySelector('tbody#cart_list'); //aqui llamamos a la tabla
    let tableRow; // variable para guardar la nueva info de la tabla
    tableBody.innerHTML = ""; //aquí vaciamos la tabla 

    cart.forEach((item) => {
        tableRow = document.createElement('tr'); //aquí miramos si cogemos el precio normal o el valor con descuento

        if (item.subtotalWithDiscount != undefined) {
            totalProductPrice = item.subtotalWithDiscount;
        } else {
            totalProductPrice = item.subtotal;
        }

        //ahora indicamos que valores ha de coger la tabla
        tableRow.innerHTML = `
                <th scope="row">${item.name}</th>
				<td>$${item.price}</td>
				<td>${item.quantity}</td>
				<td>$${totalProductPrice}</td>
    `;
        tableBody.appendChild(tableRow); //esto nos permite subir la información

    });

};

function printTotal() {
    document.getElementById('total_price').innerHTML = total; //aquí imprimimos el precio total del carrito
};


// ** Nivell II **

// Exercise 8
function addToCart(id) {
    // Refactor previous code in order to simplify it 
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cart array or update its quantity in case it has been added previously.
}

// Exercise 9
function removeFromCart(id) {
    // 1. Loop for to the array products to get the item to add to cart
    // 2. Add found product to the cartList array
}

function open_modal() {
    console.log("Open Modal");
    printCart();
}