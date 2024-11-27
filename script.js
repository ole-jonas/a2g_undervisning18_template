console.log('Hei?');
// Reference to HTML elements
const inputField = document.querySelector("#");
const addButton = document.querySelector('#');
const list = document.querySelector('#');

// Function to add a new item to the list
function addItem() {
  const newItem = inputField.value;

  if (newItem) {
    inputField.value = ''; // Clear the input field

    // Create a new list item
    const li = document.createElement('li');
    li.textContent = newItem;

    // Create a remove button for the new list item
    const removeButton = document.createElement('span');
    removeButton.textContent = 'Remove';
    removeButton.classList.add('remove-btn');

    // Add an event listener to the remove button
    removeButton.addEventListener('click', () => removeItem(li));

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the list
    list.appendChild(li);
  }
}

// Function to remove an item from the list
function removeItem(listItem) {
  // Remove the list item from the DOM
  listItem.remove();
}

// Event listener for the Add button
addButton.addEventListener('click', addItem);

// Allow pressing Enter to add an item
inputField.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addItem();
  }
});
