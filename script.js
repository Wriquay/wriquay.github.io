const recipes = {
  "A1 Mango pomelo coconut": {
    "diced-mangos": 0.5,
    "grapefruit": 1,
    "sago": 1,
    "coconut-cream": 1,
	"ice": 300,
	"mango-pwdr": 1,
	"mango-jam": 1,
	"water": {
      "quantity": 150,
      "state": "cold"
    }
  },
  "A2 Season spring mango tea": {
    "4-seasons-tea": 250,
    "coconut-jelly": 1,
    "sugar": 20,
    "mango-jam": 1,
  },  
    "A3 Mango pudding slush": {
    "milk": 80,
    "creamer": 30,
	   "sago": 1,
    "brulee": 1,
    "sugar": 20,
    "ice":600
  },
    "A4 Signature fruit tea": {
    "4-seasons-tea": 300,
    "a4": 40,
    "sugar": 35,
  },
    "A5 Pink peach lemon": {
    "green-tea": 50,
    "lemon": 3,
    "sugar": 55,
    "coconut-jelly": 1,
	"peach": 40,
	"dragon": 5,
	"water": {
      "quantity": 250,
      "state": "cold"
    }
  },
    "A6 Brown sugar milk tea": {
    "bs-syrup": 0.5,
    "bs-boba": 1,
    "black-tea": 150,
    "creamer": 60,
	"cheese-foam": 1,
  },
    "A7 Brown sugar fresh milk": {
    "bs-syrup": 0.5,
    "bs-boba": 1,
    "milk": 200,
	"cheese-foam": 1,
  },
    "B1 lime jasmine green tea": {
    "green-tea": 300,
    "jasmine-jello": 1,
    "sugar": 70,
    "lime": 5,
  },
    "B2 passion fruit tea": {
    "green-tea": 250,
    "coconut-jelly": 1,
    "passion-fruit": 1,
    "lime": 1,
	"sugar": 50,
	"water": {
      "quantity": 50,
      "state": "hot"
    }
  },  
    "B3 miao maio grape tea": {
    "green-tea": 250,
    "crystal-boba": 1,
    "sugar": 20,
    "grape": 40,
  },
    "B4 brewed peach fruit tea": {
    "green-tea": 250,
    "jello": 1,
    "sugar": 20,
	"rice": 2,
	"dragon": 5,
    "peach": 60,
	"water": {
      "quantity": 250,
      "state": "cold"
    }
  },
    "B5 lychee fruit tea": {
    "lychee": 20,
    "lychee-jello": 1,
    "sugar": 25,
    "dragon": 5,
    "water": {
      "quantity": 250,
      "state": "cold"
    }
  },
    "B8 strawberry lemon tea": {
    "4-seasons-tea": 250,
    "crystal-boba": 1,
    "sugar": 25,
    "strawberry": 2,
	"strawberry-jam": 1,
	"lemon": 5,
  },
    "B9 wintermelon tea": {
    "grass-jelly": 1,
    "wintermelon": 40,
	"water": {
      "quantity": 250,
      "state": "cold"
    }
  },
    "C1 strawberry peach tea slush": {
    "strawberry": 2,
    "peach": 60,
    "sugar": 30,
    "dragon": 5,
	"cheese-foam": 2,
	"ice": 450,
	"water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "C2 mango tea slush": {
    "4-seasons-tea": 150,
    "crystal-boba": 0.5,
	"diced-mangos": 0.5,
	"mango-jam": 1,
	"jello": 1,
	"ice": 400,
    "sugar": 25,
    "cheese-foam": 2,
  },
    "C3 grape tea slush": {
    "green-tea": 150,
	"grape": 40,
    "crystal-boba": 0.5,
    "jello": 1,
	"ice": 450,
    "sugar": 25,
    "cheese-foam": 2,
  },
    "C4 strawberry tea slush": {
    "4-seasons-tea": 150,
    "crystal-boba": 0.5,
    "strawberry": 2,
	"crushed-strawberry": 1,
	"strawberry-jam": 1,
	"jello": 1,
	"ice": 450,
    "sugar": 25,
    "cheese-foam": 2,
  },
    "C5 watermelon tea slush": {
    "ice": 300,
    "watermelon": 300,
    "4-seasons-tea": 75,
    "sugar": 25,
    "cheese-foam": 2,
  },
    "C6 pink peach tea slush": {
    "peaches": 2,
    "ice": 600,
    "peach": 55,
    "dragon": 5,
    "4-seasons-tea": 100,
    "sugar": 30,
  },
    "C7 mousse pink peach slush": {
    "peaches": 2,
    "ice": 600,
    "peach": 55,
    "dragon": 5,
    "creamer": 60,
    "sugar": 20,
    "water": {
      "quantity": 100,
      "state": "cold"
    }
  },
    "D1 lychee enzyme": {
    "lychee-jello": 1,
    "lychee": 15,
    "lychee-enz": 25,
    "sugar": 5,
    "water": {
      "quantity": 200,
      "state": "cold"
    }
  },
    "D2 peach enzyme": {
    "jasmine-jello": 1,
    "peach-enz": 25,
    "dragon": 5,
    "sugar": 15,
    "water": {
      "quantity": 200,
      "state": "cold"
    }
  },
    "E1 assorted milk tea": {
    "cake-paste": 1,
    "oat": 1,
    "taro": 1,
    "taro-balls": 1,
    "oreo": 1,
    "creamer": 100,
    "black-tea": 250,
    "sugar": 25,
  },
    "E2 peral milk tea": {
    "black-tea": 250,
    "creamer": 100,
    "sugar": 30,
    "peral": 1,
  },
    "E3 oat milk tea": {
    "oat": 3,
    "taro-balls": 0.5,
    "creamer": 100,
    "black-tea": 250,
    "sugar": 30,
  },
    "E4 red bean milk tea": {
    "red-bean": 3,
    "taro-balls": 0.5,
    "creamer": 100,
    "black-tea": 250,
    "sugar": 25,
  },
    "E5 fresh taro milk tea": {
    "taro": 3,
    "taro-balls": 0.5,
    "creamer": 100,
    "black-tea": 250,
    "sugar": 30,
  },
    "E6 cocoa milk tea": {
    "cake-paste": 1,
    "oreo": 2,
    "cocoa": 2,
    "creamer": 80,
    "black-tea": 150,
    "sugar": 20,
    "water": {
      "quantity": 150,
      "state": "hot"
    }
  },
    "E7 brewed green milk tea": {
    "taro-balls": 1,
    "rice": 2,
    "creamer": 100,
    "green-tea": 250,
    "sugar": 25,
  },
    "E8 brulee": {
    "brulee": 1,
    "creamer": 100,
    "black-tea": 250,
    "sugar": 25,
  },
    "E9 matcha milk tea": {
    "red-bean": 2,
    "taro-balls": 0.5,
    "matcha": 5,
    "creamer": 80,
    "sugar": 25,
    "water": {
      "quantity": 150,
      "state": "hot"
    }
  },
    "E10 mochi soy milk tea": {
    "mochi": 1,
    "soy": 1,
    "creamer": 60,
    "black-tea": 150,
    "cheese-foam": 1,
    "sugar": 20,
  },
    "E11 mochi oreo milk tea": {
    "mochi": 1,
    "oreo": 1,
    "creamer": 60,
    "black-tea": 150,
    "cheese-foam": 1,
    "sugar": 20,
  },
    "E12 mochi crab yolk milk tea": {
    "mochi": 1,
    "crab-yolk": 1,
    "creamer": 60,
    "black-tea": 150,
    "cheese-foam": 1,
    "sugar": 20,
  },
    "E13 grass jelly milk tea": {
    "black-tea": 250,
    "grass-jelly": 1,
    "sugar": 30,
    "creamer": 100,
  },
    "F1 peach yogurt": {
    "jello": 100,
    "yogurt": 80,
    "peach": 50,
    "dragon": 5,
    "4-seasons-tea": 75,
    "ice": 400,
    "sugar": 25,
  },
    "F2 grape yogurt": {
    "jello": 100,
    "yogurt": 80,
    "grape": 40,
    "4-seasons-tea": 100,
    "ice": 400,
    "sugar": 20,
  },
    "F3 strawberry yogurt": {
    "strawberry": 2,
	"crushed-strawberry": 1,
    "jello": 100,
    "yogurt": 80,
    "strawberry-jam": 1,
    "4-seasons-tea": 75,
    "ice": 400,
    "sugar": 20,
  },
    "F4 mango yogurt": {
    "diced-mango": 1,
    "jello": 100,
    "yogurt": 80,
    "mango-jam": 1,
    "4-seasons-tea": 100,
    "ice": 350,
    "sugar": 15,
  },
    "F5 avocado yogurt": {
    "jello": 100,
    "yogurt": 80,
    "avocado": 0.5,
    "green-tea": 100,
    "ice": 400,
    "sugar": 35,
  },
    "F6 lychee yogurt": {
    "lychee-jello": 100,
    "yogurt": 80,
    "crystal-boba": 0.25,
    "lychee": 40,
    "dragon": 15,
    "4-seasons-tea": 75,
    "ice": 400,
    "sugar": 10,
  },
    "F7 dragon fruit yogurt": {
    "jello": 100,
    "yogurt": 80,
    "dragon-fruit": 0.5,
    "4-seasons-tea": 100,
    "ice": 350,
    "sugar": 35,
  },
    "G1 strawberry smoothie": {
    "strawberry-jam": 1.5,
    "creamer": 40,
    "ice": 500,
	"sugar": 12,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "G2 matcha smoothie": {
    "matcha": 10,
    "creamer": 80,
    "ice": 500,
	"sugar": 40,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "G3 cocoa smoothie": {
    "cocoa": 2,
    "creamer": 20,
	"sugar": 15,
    "ice": 500,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "G4 dragon fruit smoothie": {
    "dragon-fruit": 0.5,
    "creamer": 80,
	"sugar": 30,
    "ice": 550,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "G5 taro smoothie": {
    "taro-pwdr": 2,
    "creamer": 80,
    "ice": 550,
	"sugar": 25,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "H1 mango yakult": {
    "coconut-jelly": 1,
    "mango": 25,
    "yakult": 2,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "H2 lychee yakult": {
    "coconut-jelly": 1,
    "lychee": 40,
    "yakult": 2,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  },
    "H3 strawberry yakult": {
    "coconut-jelly": 1,
    "strawberry-jam": 0.75,
    "yakult": 2,
    "water": {
      "quantity": 150,
      "state": "cold"
    }
  }
};

// List of all drinks
const drinks = ['A1 Mango pomelo coconut', 'A2 Season spring mango tea', 'A3 Mango pudding slush', 'A4 Signature fruit tea', 'A5 Pink peach lemon', 'A6 Brown sugar milk tea', 'B1 lime jasmine green tea', 'B2 passion fruit tea', 'B3 miao maio grape tea', 'B4 brewed peach fruit tea', 'B5 lychee fruit tea', 'B8 strawberry lemon tea', 'B9 wintermelon tea', 'C1 strawberry peach tea slush', 'C2 mango tea slush', 'C3 grape tea slush', 'C4 strawberry tea slush', 'C5 watermelon tea slush', 'C6 pink peach tea slush', 'C7 mousse pink peach slush', 'D1 lychee enzyme', 'D2 peach enzyme', 'E1 assorted milk tea', 'E2 peral milk tea', 'E3 oat milk tea', 'E4 red bean milk tea', 'E5 fresh taro milk tea', 'E6 cocoa milk tea', 'E7 brewed green milk tea', 'E8 brulee', 'E9 matcha milk tea', 'E10 mochi soy milk tea', 'E11 mochi oreo milk tea', 'E12 mochi crab yolk milk tea', 'E13 grass jelly milk tea', 'F1 peach yogurt', 'F2 grape yogurt', 'F3 strawberry yogurt', 'F4 mango yogurt', 'F5 avocado yogurt', 'F6 lychee yogurt', 'F7 dragon fruit yogurt', 'G1 strawberry smoothie', 'G2 matcha smoothie', 'G3 cocoa smoothie', 'G4 dragon fruit smoothie', 'G5 taro smoothie', 'H1 mango yakult', 'H2 lychee yakult', 'H3 strawberry yakult'];

// Sorted list of drinks
const alphabeticalDrinks = ['A1 Mango pomelo coconut', 'A2 Season spring mango tea', 'A3 Mango pudding slush', 'A4 Signature fruit tea', 'A5 Pink peach lemon', 'A6 Brown sugar milk tea', 'B1 lime jasmine green tea', 'B2 passion fruit tea', 'B3 miao maio grape tea', 'B4 brewed peach fruit tea', 'B5 lychee fruit tea', 'B8 strawberry lemon tea', 'B9 wintermelon tea', 'C1 strawberry peach tea slush', 'C2 mango tea slush', 'C3 grape tea slush', 'C4 strawberry tea slush', 'C5 watermelon tea slush', 'C6 pink peach tea slush', 'C7 mousse pink peach slush', 'D1 lychee enzyme', 'D2 peach enzyme', 'E1 assorted milk tea', 'E2 peral milk tea', 'E3 oat milk tea', 'E4 red bean milk tea', 'E5 fresh taro milk tea', 'E6 cocoa milk tea', 'E7 brewed green milk tea', 'E8 brulee', 'E9 matcha milk tea', 'E10 mochi soy milk tea', 'E11 mochi oreo milk tea', 'E12 mochi crab yolk milk tea', 'E13 grass jelly milk tea', 'F1 peach yogurt', 'F2 grape yogurt', 'F3 strawberry yogurt', 'F4 mango yogurt', 'F5 avocado yogurt', 'F6 lychee yogurt', 'F7 dragon fruit yogurt', 'G1 strawberry smoothie', 'G2 matcha smoothie', 'G3 cocoa smoothie', 'G4 dragon fruit smoothie', 'G5 taro smoothie', 'H1 mango yakult', 'H2 lychee yakult', 'H3 strawberry yakult'].sort();

// List to keep track of shown drinks
let shownDrinks = [];
let currentDrinkList = [];
let alphabeticalIndex = 0; // Index for alphabetical order

// Function to update the current drink based on the current state
function updateCurrentDrink() {
    if (shownDrinks.length === currentDrinkList.length) {
        // All drinks have been shown, reset the list
        shownDrinks = [];
        if (currentDrinkList === alphabeticalDrinks) {
            alphabeticalIndex = 0; // Reset alphabetical index
        }
    }

    let drinkToShow;

    if (currentDrinkList === alphabeticalDrinks) {
        // Show drinks in alphabetical order
        drinkToShow = alphabeticalDrinks[alphabeticalIndex];
        alphabeticalIndex++;
    } else {
        // Show drinks randomly
        do {
            drinkToShow = currentDrinkList[Math.floor(Math.random() * currentDrinkList.length)];
        } while (shownDrinks.includes(drinkToShow));
    }

    // Add the selected drink to the list of shown drinks
    shownDrinks.push(drinkToShow);

    // Update the drink name on the page
    document.getElementById('drink-name').textContent = drinkToShow;
}

// Toggle button click event listener
document.getElementById('toggle-randomizer-btn').addEventListener('click', function() {
    const button = this;
    const currentState = button.dataset.state;

    if (currentState === 'random') {
        button.textContent = 'Alphabetical';
        button.dataset.state = 'alphabetical';
        currentDrinkList = alphabeticalDrinks;
        // Reset shown drinks and index when switching to alphabetical
        shownDrinks = [];
        alphabeticalIndex = 0;
    } else {
        button.textContent = 'Random';
        button.dataset.state = 'random';
        currentDrinkList = drinks;
        // Reset shown drinks when switching to random
        shownDrinks = [];
    }

    updateCurrentDrink();
});

// Call the function when the page loads
window.addEventListener('load', function() {
    currentDrinkList = drinks; // Start with random order
    updateCurrentDrink(); // Show a random drink when the page loads
});

// Existing inventory button click event listeners
document.querySelectorAll('.inventory-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 60) {
                currentQuantity = Math.min(currentQuantity + 5, 60); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 5, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.dairy-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 100) {
                currentQuantity = Math.min(currentQuantity + 10, 100); 
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 10, 0); 
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.ice-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 600) {
                currentQuantity = Math.min(currentQuantity + 50, 600); 
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 300) {
                currentQuantity = Math.max(currentQuantity - 50, 300); 
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.getElementById('add-ice-btn').addEventListener('click', function() {
    const inventoryItems = document.querySelectorAll('.ice-item');
    inventoryItems.forEach(item => {
        const ingredient = item.querySelector('.quantity').dataset.ingredient;
        const quantity = parseFloat(item.querySelector('.quantity').textContent, 10);

        if (quantity > 0) {
            addToSummary(ingredient, quantity);
            item.querySelector('.quantity').textContent = '300'; // Reset quantity
        }
    });
});

document.querySelectorAll('.topping-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 2) {
                currentQuantity = Math.min(currentQuantity + 0.5, 2); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 0.5, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.powder-section button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 2) {
                currentQuantity = Math.min(currentQuantity + 1, 2); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 1, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.additonal-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 5) {
                currentQuantity = Math.min(currentQuantity + 1, 5); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 1, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.straw-ava-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 2) {
                currentQuantity = Math.min(currentQuantity + .25, 2); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - .25, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.watermelon-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 400) {
                currentQuantity = Math.min(currentQuantity + 100, 400); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 100, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.matcha-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 20) {
                currentQuantity = Math.min(currentQuantity + 5, 20); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 5, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.tea-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantityInput = document.querySelector(`.quantity-input[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantityInput.value, 10);

        if (this.classList.contains('tea-increase-btn')) {
            if (currentQuantity < 300) {
                currentQuantity = Math.min(currentQuantity + 25, 300); // Ensure it doesn't exceed 300
                quantityInput.value = currentQuantity;
            }
        } else if (this.classList.contains('tea-decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 25, 0); // Ensure it doesn't go below 0
                quantityInput.value = currentQuantity;
            }
        }
    });
});

document.querySelectorAll('.yogurt-item button').forEach(button => {
    button.addEventListener('click', function() {
        const ingredient = this.dataset.ingredient;
        const quantitySpan = document.querySelector(`.quantity[data-ingredient="${ingredient}"]`);
        let currentQuantity = parseFloat(quantitySpan.textContent, 10);

        if (this.classList.contains('increase-btn')) {
            if (currentQuantity < 200) {
                currentQuantity = Math.min(currentQuantity + 20, 200); // Ensure it doesn't exceed 60
                quantitySpan.textContent = currentQuantity;
            }
        } else if (this.classList.contains('decrease-btn')) {
            if (currentQuantity > 0) {
                currentQuantity = Math.max(currentQuantity - 20, 0); // Ensure it doesn't go below 0
                quantitySpan.textContent = currentQuantity;
            }
        }
    });
});

document.getElementById('add-all-btn').addEventListener('click', function() {
    // Select each section within the shaker-container
    const sections = document.querySelectorAll('#inventory-container .dairy-section, #inventory-container .inventory-section, #inventory-container .additonal-section');
    
    sections.forEach(section => {
        // Select each item within the current section
        const items = section.querySelectorAll('.dairy-item, .inventory-item, .additonal-item, .straw-ava-item, .watermelon-item, .matcha-item');
        
        items.forEach(item => {
            const ingredient = item.querySelector('.quantity').dataset.ingredient;
            const quantity = parseFloat(item.querySelector('.quantity').textContent, 10);
            
            if (quantity > 0) {
                addToSummary(ingredient, quantity);
                item.querySelector('.quantity').textContent = '0'; // Reset quantity
            }
        });
    });
});

document.getElementById('add-all-btn').addEventListener('click', function() {
    const inventoryItems = document.querySelectorAll('.topping-item');
    inventoryItems.forEach(item => {
        const ingredient = item.querySelector('.quantity').dataset.ingredient;
        const quantity = parseFloat(item.querySelector('.quantity').textContent, 10);

        if (quantity > 0) {
            addToSummary(ingredient, quantity);
            item.querySelector('.quantity').textContent = '0'; // Reset quantity
        }
    });
});


document.getElementById('add-all-btn').addEventListener('click', function() {
    const inventoryItems = document.querySelectorAll('.powder-item');
    inventoryItems.forEach(item => {
        const ingredient = item.querySelector('.quantity').dataset.ingredient;
        const quantity = parseFloat(item.querySelector('.quantity').textContent, 10);

        if (quantity > 0) {
            addToSummary(ingredient, quantity);
            item.querySelector('.quantity').textContent = '0'; // Reset quantity
        }
    });
});

document.getElementById('add-all-btn').addEventListener('click', function() {
    const teaItems = document.querySelectorAll('.tea-item');
    teaItems.forEach(item => {
        const ingredient = item.querySelector('input.quantity-input').dataset.ingredient;
        const quantity = parseInt(item.querySelector('input.quantity-input').value, 10);

        if (quantity > 0) {
            addToSummary(ingredient, quantity);
            item.querySelector('input.quantity-input').value = '0'; // Reset quantity
        }
    });
});

document.querySelectorAll('.sugar-btn').forEach(button => {
    button.addEventListener('click', function() {
        const sugarAmount = this.dataset.sugar; // Extract the data-sugar value

        const ingredient = "sugar"; // Ensure it's lowercase
        const quantity = parseInt(sugarAmount, 10); // Convert to integer

        if (quantity > 0) {
            addToSummary(ingredient, quantity);
        }
    });
});


function addToSummary(ingredient, quantity) {
    const summaryList = document.getElementById('summary-list');
    const existingItem = summaryList.querySelector(`button[data-ingredient="${ingredient}"]`);

    if (existingItem) {
        // Update existing item quantity
        const quantitySpan = existingItem.querySelector('.quantity');
        const currentQuantity = parseFloat(quantitySpan.textContent, 10);
        quantitySpan.textContent = currentQuantity + quantity;
    } else {
        // Add new item to the list
        const newItem = document.createElement('button');
        
        // Ensure ingredient name is in lowercase, for consistency with the recipes object
        newItem.dataset.ingredient = ingredient.toLowerCase();

        if (ingredient === 'water') {
            const waterState = document.getElementById('toggle-water-btn').dataset.state;
            newItem.innerHTML = `Water (${waterState}): <span class="quantity">${quantity}</span>`;
        } else {
            newItem.innerHTML = `${ingredient.replace(/-/g, ' ').toUpperCase()}: <span class="quantity">${quantity}</span>`;
        }

        newItem.addEventListener('click', function() {
            summaryList.removeChild(newItem);
        });
        summaryList.appendChild(newItem);
    }
}

document.getElementById('toggle-water-btn').addEventListener('click', function() {
    const button = this;
    const currentState = button.dataset.state;

    if (currentState === 'cold') {
        button.textContent = 'Hot';
		button.style.backgroundColor = 'red';
        button.dataset.state = 'hot';
    } else {
        button.textContent = 'Cold';
		button.style.backgroundColor = '#007BFF';
        button.dataset.state = 'cold';
    }
});

// Initialize the score
let score = 0;

// Function to update the score display
function updateScore() {
    const scoreElement = document.getElementById('drink-points');
    scoreElement.textContent = score.toString().padStart(2, '0');
}

// Function to validate if the ingredients match the current drink
function validateIngredients() {
    const currentDrink = document.getElementById('drink-name').textContent;
    const summaryItems = document.querySelectorAll('#summary-list button');

    if (!recipes[currentDrink]) {
        alert('No recipe found for this drink!');
        return false;
    }

    const requiredIngredients = recipes[currentDrink];

    // Check if only the required ingredients are present
    for (let summaryItem of summaryItems) {
        const ingredient = summaryItem.dataset.ingredient;
        if (!requiredIngredients.hasOwnProperty(ingredient)) {
            alert(`Extra ingredient: ${ingredient.replace(/-/g, ' ')}`);
            return false;
        }
    }

    // Check if required ingredients are in the summary list
    for (let [ingredient, requiredData] of Object.entries(requiredIngredients)) {
        const summaryItem = Array.from(summaryItems).find(item => item.dataset.ingredient === ingredient);

        if (!summaryItem) {
            alert(`Missing ingredient: ${ingredient.replace(/-/g, ' ')}`);
            return false;
        }

        const quantity = parseFloat(summaryItem.querySelector('.quantity').textContent, 10);
        const requiredQuantity = typeof requiredData === 'object' ? requiredData.quantity : requiredData;

        if (quantity < requiredQuantity) {
            alert(`Insufficient quantity of ${ingredient.replace(/-/g, ' ')}. Required: ${requiredQuantity}, Currently: ${quantity}`);
            return false;
        }

        // Special check for water state (if applicable)
        if (ingredient === 'water' && requiredData.state) {
            const waterState = document.getElementById('toggle-water-btn').dataset.state;
            if (waterState !== requiredData.state) {
                alert(`Water must be ${requiredData.state} for ${currentDrink}!`);
                return false;
            }
        }
    }

    // If all validations passed, return true
    return true;
}

// Set the initial countdown time (in seconds)
let countdownTime = 59;
let timerInterval; // Declare timerInterval globally

// Get the timer element
const timerDisplay = document.getElementById('count-down');

// Function to update the timer display
function updateTimer() {
    let minutes = Math.floor(countdownTime / 60);
    let seconds = countdownTime % 60;
    
    // Format seconds and minutes to be two digits
    seconds = seconds < 10 ? '0' + seconds : seconds;
    minutes = minutes < 10 ? '0' + minutes : minutes;

    timerDisplay.textContent = `${minutes}:${seconds}`;

    if (countdownTime > 0) {
        countdownTime--;
    } else {
        clearInterval(timerInterval); // Stop the timer
        timerDisplay.textContent = "Time's up!";
        // Reset the score when time is up
        score = 0;
        updateScore();
    }
}

// Function to start or restart the timer
function startTimer() {
    countdownTime = 59; // Reset the countdown time
    timerDisplay.textContent = '01:00'; // Reset the display

    if (timerInterval) {
        clearInterval(timerInterval); // Clear any existing interval
    }

    timerInterval = setInterval(updateTimer, 1000); // Start a new interval
}

// Call the function to start the timer when the page loads
window.addEventListener('load', function() {
    startTimer(); // Start the timer on page load
    updateCurrentDrink(); // Show a random drink when the page loads
});

// Serve button click event listener
document.getElementById('serve-btn').addEventListener('click', function() {
    if (validateIngredients()) {
        const summaryListItems = document.querySelectorAll('#summary-list button');
        const ingredients = Array.from(summaryListItems).map(item => ({
            ingredient: item.dataset.ingredient,
            quantity: parseFloat(item.querySelector('.quantity').textContent, 10)
        }));

        console.log('Serving the following ingredients:');
        ingredients.forEach(item => {
            console.log(`${item.ingredient}: ${item.quantity}`);
        });

        // Clear the summary list after serving
        document.getElementById('summary-list').innerHTML = '';

        // Increment the score and update the display
        score += 1;
        updateScore();

        // Restart the timer when the score changes
        startTimer();

        // Optionally, update the current drink to a new random drink after serving
        updateCurrentDrink();
    }
});
