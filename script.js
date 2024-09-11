const recipes = {
  "Grape Tea": {
    "green-tea": 250,
    "crystal-boba": 1,
    "sugar": 20,
    "grape": 40,
  },
  "Peral Milk Tea": {
    "black-tea": 250,
    "creamer": 100,
    "sugar": 30,
    "peral": 1,
  },
  "Grass Jelly Milk Tea": {
    "black-tea": 250,
    "grass-jelly": 1,
    "sugar": 30,
    "creamer": 100,
  },
  "Lychee Tea": {
    "lychee": 20,
    "lychee-jello": 1,
    "sugar": 25,
    "dragon": 5,
    "water": {
      "quantity": 250,
      "state": "cold"
    }
  }
};

// Function to randomly select a drink and update the "Current Drink" section
function updateCurrentDrink() {
    const drinks = ['Grape Tea', 'Peral Milk Tea', 'Grass Jelly Milk Tea', 'Lychee Tea'];
    const randomDrink = drinks[Math.floor(Math.random() * drinks.length)];
    document.getElementById('drink-name').textContent = randomDrink;
}

// Call the function when the page loads
window.addEventListener('load', function() {
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

document.querySelectorAll('#topping-container button').forEach(button => {
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
