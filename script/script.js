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
