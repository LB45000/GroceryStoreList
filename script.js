

const groceryItems = [
    { name: 'Apple', category: 'Fruits', price: 1.0, quantity: 6 },
    { name: 'Banana', category: 'Fruits', price: 0.5, quantity: 10 },
    { name: 'Carrot', category: 'Vegetables', price: 0.8, quantity: 8 },
    { name: 'Milk', category: 'Dairy', price: 2.0, quantity: 2 },
    { name: 'Eggs', category: 'Dairy', price: 1.5, quantity: 12 }
];

const groceryList = document.getElementById('groceryList');
const totalCostElement = document.getElementById('totalCost');
const totalQuantityElement = document.getElementById('totalQuantity');

function displayGroceryItems() {
    groceryList.innerHTML = '';
    let totalCost = 0;
    let totalQuantity = 0;

    groceryItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price.toFixed(2)} - ${item.quantity} units`;
        groceryList.appendChild(itemDiv);

        totalCost += item.price * item.quantity;
        totalQuantity += item.quantity;
    });

    totalCostElement.textContent = totalCost.toFixed(2);
    totalQuantityElement.textContent = totalQuantity;
}

function isolateCategory(category) {
    groceryList.innerHTML = '';
    const filteredItems = groceryItems.filter(item => item.category === category);

    filteredItems.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.innerHTML = `<b>${item.name}</b> (${item.category}): $${item.price.toFixed(2)} - ${item.quantity} units`;
        groceryList.appendChild(itemDiv);
    });
}

function showAllCategories() {
    displayGroceryItems();
}

function orderItemsByCost() {
    groceryItems.sort((a, b) => b.price - a.price);
    displayGroceryItems();
}

function addItemPrompt() {
    const name = prompt('Enter item name:');
    const category = prompt('Enter item category:');
    const price = prompt('Enter item price:');
    const quantity = prompt('Enter item quantity:');

    if (!name || !category || !price || !quantity) {
        alert('Please enter all information for the item.');
        return;
    }

    const priceValue = parseFloat(price);
    const quantityValue = parseInt(quantity);

    if (isNaN(priceValue) || isNaN(quantityValue)) {
        alert('Please enter valid numeric values for price and quantity.');
        return;
    }

    const newItem = { name, category, price: priceValue, quantity: quantityValue };
    groceryItems.push(newItem);
    displayGroceryItems();
}

// Call the displayGroceryItems function to initially display items
displayGroceryItems();
