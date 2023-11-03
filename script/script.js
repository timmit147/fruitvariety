const fruits = {
    apple: {
        name: "Apple",
        calories: 52,
        carbohydrates: 14,
        fiber: 2.4,
        vitaminC: 14,
        vitaminA: 1,
        amount: 0,
    },
    banana: {
        name: "Banana",
        calories: 89,
        carbohydrates: 23,
        fiber: 2.6,
        vitaminC: 10,
        vitaminB6: 20,
        amount: 0,
    },
    orange: {
        name: "Orange",
        calories: 43,
        carbohydrates: 8.2,
        fiber: 2.4,
        vitaminC: 89,
        amount: 0,
    },
    grape: {
        name: "Grape",
        calories: 69,
        carbohydrates: 18,
        fiber: 0.9,
        vitaminC: 3.2,
        amount: 0,
    },
    strawberry: {
        name: "Strawberry",
        calories: 32,
        carbohydrates: 7.7,
        fiber: 2,
        vitaminC: 58.8,
        amount: 0,
    },
    pear: {
        name: "Pear",
        calories: 57,
        carbohydrates: 15.5,
        fiber: 3.1,
        vitaminC: 4.2,
        amount: 0,
    },
    pineapple: {
        name: "Pineapple",
        calories: 50,
        carbohydrates: 13.1,
        fiber: 1.4,
        vitaminC: 47.8,
        amount: 0,
    },
    watermelon: {
        name: "Watermelon",
        calories: 30,
        carbohydrates: 7.6,
        fiber: 0.4,
        vitaminC: 8.1,
        amount: 0,
    },
    mango: {
        name: "Mango",
        calories: 60,
        carbohydrates: 15,
        fiber: 1.6,
        vitaminC: 60.1,
        amount: 0,
    },
    kiwi: {
        name: "Kiwi",
        calories: 61,
        carbohydrates: 14.9,
        fiber: 3,
        vitaminC: 92.7,
        amount: 0,
    },
    cherry: {
        name: "Cherry",
        calories: 50,
        carbohydrates: 12.2,
        fiber: 1.6,
        vitaminC: 12,
        amount: 0,
    },
    lemon: {
        name: "Lemon",
        calories: 17,
        carbohydrates: 9.3,
        fiber: 2.8,
        vitaminC: 88.8,
        amount: 0,
    },
    raspberry: {
        name: "Raspberry",
        calories: 52,
        carbohydrates: 11.9,
        fiber: 6.5,
        vitaminC: 26.2,
        amount: 0,
    },
    blueberry: {
        name: "Blueberry",
        calories: 32,
        carbohydrates: 7.7,
        fiber: 2.4,
        vitaminC: 9.7,
        amount: 0,
    },
    blackberry: {
        name: "Blackberry",
        calories: 43,
        carbohydrates: 9,
        fiber: 5.3,
        vitaminC: 23,
        amount: 0,
    },
    peach: {
        name: "Peach",
        calories: 39,
        carbohydrates: 9.5,
        fiber: 1.5,
        vitaminC: 6.6,
        amount: 0,
    },
    plum: {
        name: "Plum",
        calories: 46,
        carbohydrates: 11.4,
        fiber: 1.4,
        vitaminC: 9.5,
        amount: 0,
    },
    apricot: {
        name: "Apricot",
        calories: 48,
        carbohydrates: 11.1,
        fiber: 2,
        vitaminC: 10.1,
        amount: 0,
    },
    pomegranate: {
        name: "Pomegranate",
        calories: 83,
        carbohydrates: 18.7,
        fiber: 4.0,
        vitaminC: 10.2,
        amount: 0,
    },
    guava: {
        name: "Guava",
        calories: 68,
        carbohydrates: 14,
        fiber: 9,
        vitaminC: 228,
        amount: 0,
    }
};


const nutrients = {
    calories: {
        max: 14000,
        min: 7000,
    },
    carbohydrates: {
        max: 350,
        min: 175,
    },
    fiber: {
        max: 50,
        min: 25,
    },
    vitaminC: {
        max: 700,
        min: 35,
    },
    vitaminA: {
        max: 3500,
        min: 175,
    },
    vitaminB6: {
        max: 280,
        min: 14,
    },
};



function showFruits(fruits) {
    const fruitDiv = document.querySelector('.fruits-block');

    for (const fruitName in fruits) {
        if (fruits.hasOwnProperty(fruitName)) {
            const fruit = fruits[fruitName];
            const fruitContainer = document.createElement('div');
            fruitContainer.classList.add('fruit');

            const fruitImage = document.createElement('img');
            fruitImage.src = `images/fruits/${fruit.name.toLowerCase()}.png`;

            const fruitElement = document.createElement('p');
            fruitElement.textContent = fruit.name;

            fruitContainer.appendChild(fruitImage);
            fruitContainer.appendChild(fruitElement);

            fruitContainer.addEventListener('click', function() {
                showFruitDetails(fruit);
            });

            fruitDiv.appendChild(fruitContainer);
        }
    }
}

let selectedFruit = null; // Variable to store the selected fruit


function showFruitDetails(fruit) {
    const detailDiv = document.querySelector('.detail-block');
    detailDiv.innerHTML = '';

    const detailName = document.createElement('h2');
    detailName.textContent = fruit.name;

    const detailList = document.createElement('ul');
    for (const nutrient in fruit) {
        if (nutrient !== 'name') {
            const listItem = document.createElement('li');
            listItem.textContent = `${nutrient}: ${fruit[nutrient]}`;
            detailList.appendChild(listItem);
        }
    }

    detailDiv.appendChild(detailName);
    detailDiv.appendChild(detailList);

    // Set the selected fruit
    selectedFruit = fruit;
    document.getElementById("fruit-amount").value = selectedFruit.amount;
    
}

showFruits(fruits);

// Show details of the first fruit by default
const firstFruitName = Object.keys(fruits)[0];
const firstFruit = fruits[firstFruitName];
showFruitDetails(firstFruit);

const searchInput = document.querySelector('.search-block input');

searchInput.addEventListener('input', function() {
    const searchText = searchInput.value.trim().toLowerCase();

    const filteredFruits = Object.keys(fruits).filter(fruitName => fruitName.startsWith(searchText)).reduce((filtered, key) => {
        filtered[key] = fruits[key];
        return filtered;
    }, {});

    const fruitDiv = document.querySelector('.fruits-block');
    fruitDiv.innerHTML = '';

    showFruits(filteredFruits);
});


document.addEventListener("DOMContentLoaded", function() {
    const decreaseButton = document.getElementById("decrease-amount");
        const increaseButton = document.getElementById("increase-amount");
        const amountInput = document.getElementById("fruit-amount");

    decreaseButton.addEventListener("click", function() {
        decreaseAmount();
    });

    increaseButton.addEventListener("click", function() {
        increaseAmount();
    });

    function decreaseAmount() {
        if (selectedFruit) {
            if (selectedFruit.amount && selectedFruit.amount > 0) {
                selectedFruit.amount--;
            } else {
                selectedFruit.amount = 0;
            }
            amountInput.value = selectedFruit.amount;
        }
    }
    

    function increaseAmount() {
        if (selectedFruit) {
            if (selectedFruit.amount) {
                selectedFruit.amount++;
            } else {
                selectedFruit.amount = 1;
            }
            amountInput.value = selectedFruit.amount;
        }
    }
    
});

