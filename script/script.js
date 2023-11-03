const fruits = {
    apple: {
        name: "Apple",
        calories: 52,
        carbohydrates: 14,
        fiber: 2.4,
        vitaminC: 14,
        vitaminA: 1,
    },
    banana: {
        name: "Banana",
        calories: 89,
        carbohydrates: 23,
        fiber: 2.6,
        vitaminC: 10,
        vitaminB6: 20,
    },
    orange: {
        name: "Orange",
        calories: 43,
        carbohydrates: 8.2,
        fiber: 2.4,
        vitaminC: 89,
    },
    grape: {
        name: "Grape",
        calories: 69,
        carbohydrates: 18,
        fiber: 0.9,
        vitaminC: 3.2,
    },
    strawberry: {
        name: "Strawberry",
        calories: 32,
        carbohydrates: 7.7,
        fiber: 2,
        vitaminC: 58.8,
    },
    pear: {
        name: "Pear",
        calories: 57,
        carbohydrates: 15.5,
        fiber: 3.1,
        vitaminC: 4.2,
    },
    pineapple: {
        name: "Pineapple",
        calories: 50,
        carbohydrates: 13.1,
        fiber: 1.4,
        vitaminC: 47.8,
    },
    watermelon: {
        name: "Watermelon",
        calories: 30,
        carbohydrates: 7.6,
        fiber: 0.4,
        vitaminC: 8.1,
    },
    mango: {
        name: "Mango",
        calories: 60,
        carbohydrates: 15,
        fiber: 1.6,
        vitaminC: 60.1,
    },
    kiwi: {
        name: "Kiwi",
        calories: 61,
        carbohydrates: 14.9,
        fiber: 3,
        vitaminC: 92.7,
    },
    cherry: {
        name: "Cherry",
        calories: 50,
        carbohydrates: 12.2,
        fiber: 1.6,
        vitaminC: 12,
    },
    lemon: {
        name: "Lemon",
        calories: 17,
        carbohydrates: 9.3,
        fiber: 2.8,
        vitaminC: 88.8,
    },
    raspberry: {
        name: "Raspberry",
        calories: 52,
        carbohydrates: 11.9,
        fiber: 6.5,
        vitaminC: 26.2,
    },
    blueberry: {
        name: "Blueberry",
        calories: 32,
        carbohydrates: 7.7,
        fiber: 2.4,
        vitaminC: 9.7,
    },
    blackberry: {
        name: "Blackberry",
        calories: 43,
        carbohydrates: 9,
        fiber: 5.3,
        vitaminC: 23,
    },
    peach: {
        name: "Peach",
        calories: 39,
        carbohydrates: 9.5,
        fiber: 1.5,
        vitaminC: 6.6,
    },
    plum: {
        name: "Plum",
        calories: 46,
        carbohydrates: 11.4,
        fiber: 1.4,
        vitaminC: 9.5,
    },
    apricot: {
        name: "Apricot",
        calories: 48,
        carbohydrates: 11.1,
        fiber: 2,
        vitaminC: 10.1,
    },
    pomegranate: {
        name: "Pomegranate",
        calories: 83,
        carbohydrates: 18.7,
        fiber: 4.0,
        vitaminC: 10.2,
    },
    guava: {
        name: "Guava",
        calories: 68,
        carbohydrates: 14,
        fiber: 9,
        vitaminC: 228,
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

            fruitDiv.appendChild(fruitContainer);
        }
    }
}

showFruits(fruits);


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
