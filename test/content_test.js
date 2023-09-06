// Define a dictionary to map extracted data
const goodIngredients = {
    hair: "this is just for testing",
    "hair": "this is just for testing",
    "shea butter":
      "Shea butter is a popular moisturizer for coily hair, known for its ability to hydrate and nourish.",
    "coconut oil":
      "Coconut oil can help reduce frizz and improve hair shine for coily hair types.",
    "castor oil":
      "Castor oil is often used to promote hair growth and strengthen coily hair.",
    "avocado oil":
      "Avocado oil is rich in vitamins and can help with hair moisture and health.",
    "argan oil":
      "Argan oil is known for its ability to add shine and manageability to coily hair.",
    "water (aqua)":
      "Water (Aqua) is a common base ingredient in many haircare products.",
    "oryza sativa (rice water) extract":
      "Oryza Sativa (Rice Water) Extract is used for its potential benefits on hair health.",
    glycerin:
      "Glycerin is a humectant that can help retain moisture in the hair.",
    "urtica dioica (nettle) extract":
      "Urtica Dioica (Nettle) Extract may have nourishing properties for the hair.",
    "honey (mel) wildflower & clover":
      "Honey (Mel) Wildflower & Clover can provide moisture and shine to the hair.",
    // Add more key-value pairs for other ingredients
  };
  
  // Define a dictionary to map extracted data
  const badIngredients = {
    sulfates:
      "Sulfates can strip natural oils from coily hair, leading to dryness and frizz.",
    silicones:
      "Silicones can create build-up on coily hair, making it appear greasy and heavy.",
    "mineral oil":
      "Mineral oil can weigh down coily hair and prevent moisture absorption.",
    "isopropyl alcohol":
      "Isopropyl alcohol can be drying and irritating to the scalp and hair.",
    parabens: "Parabens may disrupt the natural balance of coily hair and scalp.",
    "phenoxyethanol (optiphen nd)":
      "Phenoxyethanol (Optiphen ND) is a preservative that may be used in haircare products.",
    ethylhexylglycerin:
      "Ethylhexylglycerin is a conditioning agent sometimes found in haircare products.",
    "phthalate free fragrance":
      "Phthalate-free fragrance is used to provide a pleasant scent without certain chemicals.",
    // Add more key-value pairs for other ingredients to avoid
  };

// Function to highlight recognized ingredients with borders on the page
function highlightIngredientsInSections(textToMatch, borderColor, sectionHeaders) {
  const elements = document.querySelectorAll('*'); // Select all elements in the page
  let insideSection = false;

  elements.forEach((element) => {
    if (sectionHeaders.includes(element.textContent.trim().toLowerCase())) {
      insideSection = true;
    } else if (insideSection && element.textContent.includes(textToMatch)) {
      element.style.border = `2px solid ${borderColor}`;
    } else if (sectionHeaders.includes(element.textContent.trim().toLowerCase())) {
      insideSection = false;
    }
  });
}

// Usage example:
const sectionHeaders = ["gourmet ingredients:", "full ingredient list", "ingredients"];
highlightIngredientsInSections("Water", "green", sectionHeaders);
  
  // Execute the highlighting function when the page is fully loaded
  window.addEventListener("load", highlightIngredients);
  