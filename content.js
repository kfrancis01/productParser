// content.js
// Define a dictionary to map extracted data
const goodIngredients = {
    'shea butter': 'Shea butter is a popular moisturizer for coily hair, known for its ability to hydrate and nourish.',
    'coconut oil': 'Coconut oil can help reduce frizz and improve hair shine for coily hair types.',
    'castor oil': 'Castor oil is often used to promote hair growth and strengthen coily hair.',
    'avocado oil': 'Avocado oil is rich in vitamins and can help with hair moisture and health.',
    'argan oil': 'Argan oil is known for its ability to add shine and manageability to coily hair.',
    // Add more key-value pairs for other ingredients
  };
  
 // Define a dictionary to map extracted data
const badIngredients = {
    'sulfates': 'Sulfates can strip natural oils from coily hair, leading to dryness and frizz.',
    'silicones': 'Silicones can create build-up on coily hair, making it appear greasy and heavy.',
    'mineral oil': 'Mineral oil can weigh down coily hair and prevent moisture absorption.',
    'isopropyl alcohol': 'Isopropyl alcohol can be drying and irritating to the scalp and hair.',
    'parabens': 'Parabens may disrupt the natural balance of coily hair and scalp.',
    // Add more key-value pairs for other ingredients to avoid
  };
  
  
// Function to extract and process data from the webpage
function parseWebpage() {
    // Replace this selector with the appropriate one for your target elements
    const targetElement = document.querySelector('#Ingredient');
  
    if (targetElement) {
      const extractedText = targetElement.textContent;
      
        // Check if the extracted text is a key in the badIngredientsDictionary
        if (badIngredientsDictionary.hasOwnProperty(extractedText)) {
            const description = badIngredientsDictionary[extractedText];

            // Create a popup box with a red background
            const popup = document.createElement('div');
            popup.textContent = description;
            popup.style.backgroundColor = 'red';
            popup.style.color = 'white';
            popup.style.position = 'fixed';
            popup.style.top = '10px';
            popup.style.left = '10px';
            popup.style.padding = '10px';
            popup.style.zIndex = '9999';

            // Append the popup to the document body
            document.body.appendChild(popup);

            // Remove the popup after a few seconds (adjust the delay as needed)
            setTimeout(() => {
            document.body.removeChild(popup);
            }, 60000); // 1 min

        }
     }
  }
  
  // Execute the parsing function when the page is fully loaded
  window.addEventListener('load', parseWebpage);
  
  // You can also listen for specific events or execute code based on user interactions, e.g., a button click
  // Example:
  // document.getElementById('myButton').addEventListener('click', parseWebpage);
  