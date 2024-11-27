// Reference to HTML elements
const  = document.querySelector("#");
const  = document.querySelector("#");
const  = document.querySelector("#");

// Function to add a new item to the list
function addItem() {
  const  = .value;

    // Create a new list item and give content
    const  = document.createElement("");
    .textContent = ;

    // Create a remove button for the new list item
    const  = document.createElement("");
    .textContent = "Slett";
    .classList.add("");

    // Add an event listener to the remove button
    .addEventListener("click", function () {
      removeItem(li)
    });

    // Append the remove button to the list item
    li.appendChild();

    // Append the list item to the list
    list.appendChild();
}

// Function to remove an item from the list
function removeItem(listItem) {
  // Remove the list item from the DOM
  listItem.remove();
}

// Event listener for the Add button
addButton.addEventListener("click", addItem);