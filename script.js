// Reference to HTML elements
const inputField = document.querySelector("#inputField");
const list = document.querySelector("#list");
const addButton = document.querySelector("#addButton");

// Function to add a new item to the list
function addItem() {
  const inputFieldvalue = inputField.trim();
if (inputFieldValue === "") {
  alert("Please enter a Valid item!");
  return;
}

    // Create a new list item and give content
    const li = document.createElement("li");
    li.textContent = inputFieldValue;

    // Create a remove button for the new list item
    const removeButton = document.createElement("button");
    removeButton.textContent = "Slett";
    removeButton.classList.add("removeButton");

    // Add an event listener to the remove button
    removeButton.addEventListener("click", function () {
      removeItem(li)
    });

    // Append the remove button to the list item
    li.appendChild(removeButton);

    // Append the list item to the list
    list.appendChild(li);

    inputField.value = "";
}

// Function to remove an item from the list
function removeItem(listItem) {
  // Remove the list item from the DOM
  listItem.remove();
}

// Event listener for the Add button
addButton.addEventListener("click", addItem);