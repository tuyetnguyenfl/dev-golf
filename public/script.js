// ==========================================
// GREETING FUNCTION
// ==========================================

const nameInput = document.getElementById('name');
const greetButton = document.getElementById('greetButton');
const greeting = document.getElementById('greeting');


// Function to greet the user
function sayHello() {

  const name = nameInput.value.trim();


  // Check if name is empty
  if (name === '') {

    greeting.textContent = 'Please enter your name 😊';

    return;
  }


  // Display personalized greeting
  greeting.textContent =
    `Hello, ${name}! 👋 Welcome!`;
}


// Click the "Say Hello" button
greetButton.addEventListener('click', sayHello);


// Allow user to press Enter
nameInput.addEventListener('keydown', (event) => {

  if (event.key === 'Enter') {

    sayHello();

  }

});



// ==========================================
// SEARCH FUNCTION
// ==========================================

const searchInput =
  document.getElementById('searchInput');

const searchButton =
  document.getElementById('searchButton');

const cards =
  document.querySelectorAll('.result-card');

const noResults =
  document.getElementById('noResults');


// Search function
function searchCards() {

  const searchTerm =
    searchInput.value.toLowerCase().trim();


  // If search box is empty
  if (searchTerm === '') {

    cards.forEach((card) => {

      card.style.display = 'block';

    });

    noResults.style.display = 'none';

    return;
  }


  let foundResults = 0;


  // Check every result card
  cards.forEach((card) => {

    const cardText =
      card.textContent.toLowerCase();


    // Show matching cards
    if (cardText.includes(searchTerm)) {

      card.style.display = 'block';

      foundResults++;

    }

    // Hide cards that don't match
    else {

      card.style.display = 'none';

    }

  });


  // Display "No results" message
  if (foundResults === 0) {

    noResults.style.display = 'block';

  }

  else {

    noResults.style.display = 'none';

  }

}


// ==========================================
// SEARCH BUTTON
// ==========================================

// Search when button is clicked
searchButton.addEventListener(
  'click',
  searchCards
);


// Search when user presses Enter
searchInput.addEventListener(
  'keydown',
  (event) => {

    if (event.key === 'Enter') {

      searchCards();

    }

  }
);
