// Reference to HTML elements
const inputField  = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addButton = document.querySelector("#addButton");

// Function to add a new item to the list
function addItem() {
  const inputValue = inputField.value;

  // Check if the input field is not empty
  if (inputValue.trim() !== "") {
     // Create a new list item and give content
    const li = document.createElement("li");
    li.textContent = inputValue;
  
   
    // Create a remove button for the new list item
    const removeButton  = document.createElement("button");
    removeButton.textContent = "Slett";
    removeButton.classList.add("remove-button");

    // Add an event listener to the remove button
    removeButton.addEventListener("click", function () {
      removeItem(li)
    });

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the list
    list.appendChild(li);

    // Clear the input field
    inputField.value = "";

    // Sort the list items alphabetically
    sortList();
}
}

// Function to remove an item from the list
function removeItem(listItem) {
  // Remove the list item from the DOM
  listItem.remove();

  // Re-sort the list after an item is removed
  sortList();
}

// Function to sort the list items
function sortList() {
  // Get all the list items
  const listItems = Array.from(list.children);

  // Sort the list items alphabetically
  listItems.sort((a, b) => a.textContent.localeCompare(b.textContent));

  // Remove all list items from the DOM before re-adding them in sorted order
  list.innerHTML = "";

  // Append each list item back to the list in sorted order
  listItems.forEach(item => list.appendChild(item));

}


// Event listener for the Add button
addButton.addEventListener("click", addItem);