// highlights ingredients and creates pop up but needs formatting work
// also includes a midIngredients list and pop up box

const goodIngredients = {
  "phthalate free fragrance":
    "Phthalate-free fragrance is used to provide a pleasant scent without certain chemicals.",
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
  "deionized water":
    "Deionized Water is a common base ingredient in many haircare products.",
  "behentrimonium methosulfate":
    "Behentrimonium Methosulfate is used in haircare products for conditioning purposes.",
  "cetearyl alcohol":
    "Cetearyl Alcohol is often used as an emollient in hair products.",
  "persea gratissima (avocado) oil":
    "Persea Gratissima (Avocado) Oil is rich in nutrients and can be beneficial for hair health.",
  "oryza sativa (rice bran) oil":
    "Oryza Sativa (Rice Bran) Oil is known for its potential benefits for hair and scalp.",
  "aloe barbadensis leaf":
    "Aloe Barbadensis Leaf is commonly used for its soothing properties on the scalp.",
  "ricinus communis (castor seed) oil":
    "Ricinus Communis (Castor Seed) Oil is often used to promote hair growth.",
  "ternifolia (macadamia nut) seed oil":
    "Ternifolia (Macadamia Nut) Seed Oil can provide moisture and shine to the hair.",
  sorbitol: "Sorbitol is a humectant that helps hair retain moisture.",
  "camellia (green tea) sinensis leaf":
    "Camellia (Green Tea) Sinensis Leaf extract is used for its potential benefits on hair health.",
  "oryza sativa (rice) milk":
    "Oryza Sativa (Rice) Milk can provide nourishment to the hair.",
  "rosa canina (rose hip) seed oil":
    "Rosa Canina (Rose Hip) Seed Oil is known for its potential benefits for hair health.",
  "cetearyl alcohol":
    "Cetearyl Alcohol is often used as an emollient in hair products.",
  "ceteareth 20":
    "Ceteareth 20 is an emulsifying agent commonly used in haircare products.",
  "slippery elm (ulmus fulva) bark":
    "Slippery Elm (Ulmus Fulva) Bark may have soothing properties for the hair and scalp.",
  phenoxyethanol:
    "Phenoxyethanol is a preservative commonly used in haircare products.",
  "caprylyl glycol":
    "Caprylyl Glycol is a conditioning agent that may be used in haircare products.",
  "sorbic acid":
    "Sorbic Acid is a preservative that can help extend the shelf life of haircare products.",
  "paraben-free":
    "Paraben-free ingredients are used to avoid parabens, which some people may want to avoid due to concerns about potential health risks.",
  "phthalate-free":
    "Phthalate-free ingredients are used to avoid phthalates, which some people may want to avoid due to concerns about potential health risks.",
  betaine:
    "Betaine is a humectant and conditioning agent that can help improve hair hydration.",
  "oryza sativa (rice) extract":
    "Oryza Sativa (Rice) Extract may provide nourishment and strengthen hair.",
  "serenoa serrulata fruit extract":
    "Serenoa Serrulata Fruit Extract is often used for promoting hair health.",
  phytosterols:
    "Phytosterols can help with moisture retention and strengthening of curly hair.",
  "ceramide np":
    "Ceramide NP can improve the moisture retention of hair and scalp.",
  "copper tripeptide-1":
    "Copper Tripeptide-1 may support hair growth and overall hair health.",
  biotin:
    "Biotin is known to support hair growth and may improve hair strength.",
  "helianthus annuus (sunflower) seed oil":
    "Helianthus Annuus (Sunflower) Seed Oil can provide moisture and shine to the hair.",
  "rosmarinus officinalis (rosemary) leaf extract":
    "Rosemary Leaf Extract may have scalp benefits and promote hair growth.",
  inositol: "Inositol may help improve hair texture and reduce frizz.",
  "polyglyceryl-3 betainate acetate":
    "Polyglyceryl-3 Betainate Acetate is a conditioning agent for hair.",
  // Add more key-value pairs for other ingredients
};

const midIngredients = {
  "lemon fruit extract (citrus medica limonum)":
    "Lemon Fruit Extract (Citrus Medica Limonum) is used in haircare, but it may not be suitable for all hair types.",
  "bilberry fruit (vaccinium myrtillus)":
    "Bilberry Fruit (Vaccinium Myrtillus) extract may not be suitable for all hair types.",
  "sugar cane (sucrose)":
    "Sugar Cane (Sucrose) extract is used in some haircare products, but it may not be suitable for all hair types.",
  "sugar maple (acer saccharum)":
    "Sugar Maple (Acer Saccharum) extract is used in haircare, but it may not suit everyone's hair type.",
  "sweet orange fruit (citrus aurantium dulcis)":
    "Sweet Orange Fruit (Citrus Aurantium Dulcis) extract is used in some haircare products, but it may not be suitable for all hair types.",
  "castor (raccinus communis) seed oil":
    "Castor (Raccinus Communis) Seed Oil is often used for hair, but it may not suit everyone's hair type.",
  honey:
    "Honey is a natural sweetener and may not be suitable for all hair types.",
  "1,2-hexanediol":
    "1,2-Hexanediol is a solvent that may not suit all hair types.",
  "potassium sorbate":
    "Potassium Sorbate is a preservative that may not be suitable for everyone.",
  "sodium benzoate":
    "Sodium Benzoate is a preservative that may not be suitable for everyone.",
};

// Updated badIngredients dictionary
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
  "olive fruit oil (olea europea (olive))":
    "Olive Fruit Oil (Olea Europea (Olive)) is used in haircare, but some individuals may be sensitive to it.",
  "aloe leaf juice (aloe barbadensis)":
    "Aloe Leaf Juice (Aloe Barbadensis) is a common ingredient but can cause irritation in some cases.",
  "optiphen nd":
    "Optiphen ND is a preservative used in some haircare products, but it may not be suitable for all individuals.",
  "peg-100 stearate":
    "PEG-100 Stearate is an emulsifier that may cause build-up in hair.",
  "sodium chloride":
    "Sodium Chloride (Salt) can be drying and strip natural oils from hair.",
  "citric acid":
    "Citric Acid is used for pH balancing but can be harsh on some hair types.",
  // Add more key-value pairs for other ingredients to avoid
};

// Function to highlight recognized ingredients with borders on the page
function highlightIngredientsInSections(
  textToMatch,
  borderColor,
  sectionHeaders
) {
  const elements = document.querySelectorAll("*"); // Select all elements in the page
  let insideSection = false;

  elements.forEach((element) => {
    if (sectionHeaders.includes(element.textContent.trim().toLowerCase())) {
      insideSection = true;
    } else if (insideSection && element.textContent.includes(textToMatch)) {
      element.style.border = `2px solid ${borderColor}`;
    } else if (
      sectionHeaders.includes(element.textContent.trim().toLowerCase())
    ) {
      insideSection = false;
    }
  });
}

// Usage example:
const sectionHeaders = [
  "gourmet ingredients:",
  "full ingredient list",
  "ingredients",
  "Ingredients",
  "Full Ingredient List",
  "label info",
  "Label Info",
];

for (const [key, value] of Object.entries(goodIngredients)) {
  highlightIngredientsInSections(key, "green", sectionHeaders);
}
for (const [key, value] of Object.entries(badIngredients)) {
  highlightIngredientsInSections(key, "red", sectionHeaders);
}
for (const [key, value] of Object.entries(midIngredients)) {
  highlightIngredientsInSections(key, "yellow", sectionHeaders);
}

// Function to create and display a popup with a border
function createPopupWithBorder(message, backgroundColor, borderColor) {
  const popup = document.createElement("div");
  popup.textContent = message;
  popup.style.backgroundColor = backgroundColor;
  popup.style.color = "white";
  popup.style.position = "fixed";
  popup.style.top = "300px";
  popup.style.right = "0px";
  popup.style.padding = "10px";
  popup.style.border = `2px solid ${borderColor}`; // Add a border
  popup.style.zIndex = "1000";
  popup.style.display = "none";

  const popup2 = document.createElement("div");
  popup2.style.backgroundColor = backgroundColor;
  popup2.style.position = "fixed";
  popup2.style.top = "300px";
  popup2.style.right = "5px";
  popup2.style.padding = "10px";
  popup2.style.border = `2px solid ${borderColor}`; // Add a border
  popup2.style.zIndex = "1100";
  
  
  // Add a toggle button to the popup element
  const toggleButton = document.createElement("button");
  toggleButton.id = "toggle-popup";
  toggleButton.textContent = "Toggle";
  popup.appendChild(toggleButton);
  
    // Add a toggle button to the popup element
    const toggleButton_open = document.createElement("button");
    toggleButton.id = "toggle-open";
    toggleButton.textContent = "Toggle";
    popup2.appendChild(toggleButton_open);
  
  // // Create an img element for the icon
  const iconImg = document.createElement("img");
  iconImg.src = "icon/border-48.png"; // Set the path to your icon image
  //iconImg.src = browser.extension.getURL("icon/border-48.png");
  iconImg.alt = "📝";
  
  // Append the img element to the button
  toggleButton_open.appendChild(iconImg);

  // Add an event listener to the toggle button to toggle the visibility of the popup element
  toggleButton.addEventListener("click", function () {
    popup.style.display = popup.style.display === "none" ? "block" : "none";
    popup2.style.display = popup2.style.display === "none" ? "block" : "none";
  });

    // Add an event listener to the toggle button to toggle the visibility of the popup element
    toggleButton_open.addEventListener("click", function () {
      popup.style.display = popup.style.display === "block" ? "none" : "block";
      popup2.style.display = popup2.style.display === "none" ? "block" : "none";
    });

  //     // Add an event listener to the image element (if needed)
  // iconImg.addEventListener("click", function () {
  //   popup.style.display = popup.style.display === "block" ? "none" : "block";
  //   popup2.style.display = popup2.style.display === "none" ? "block" : "none";
  // });

  document.body.appendChild(popup);
  document.body.appendChild(popup2);

}

let badIngredientsFound = [];
for (const [key, value] of Object.entries(badIngredients)) {
  if (document.body.textContent.includes(key)) {
    badIngredientsFound.push(`${key}: ${value}`);
    // highlightIngredientsInSections(key, "red", sectionHeaders);
  }
}

if (badIngredientsFound.length > 0) {
  // Create a popup with a list of bad ingredients found
  createPopupWithBorder(
    "Bad Ingredients Found:\n" + badIngredientsFound.join("\n"),
    "red",
    "black"
  );
}

let midIngredientsFound = [];
for (const [key, value] of Object.entries(midIngredients)) {
  if (document.body.textContent.includes(key)) {
    midIngredientsFound.push(`${key}: ${value}`);
    // highlightIngredientsInSections(key, "yellow", sectionHeaders);
  }
}

if (midIngredientsFound.length > 0 && badIngredientsFound.length == 0) {
  // Create a popup with a list of bad ingredients found
  createPopupWithBorder(
    "Use at your own risk:\n" + midIngredientsFound.join("\n"),
    "orange",
    "yellow"
  );
}

let goodIngredientsFound = [];
for (const [key, value] of Object.entries(goodIngredients)) {
  if (document.body.textContent.includes(key)) {
    goodIngredientsFound.push(`${key}: ${value}`);
    // highlightIngredientsInSections(key, "yellow", sectionHeaders);
  }
}

if (goodIngredientsFound.length > 0 && badIngredientsFound.length == 0 && midIngredientsFound.length == 0) {
  // Create a popup with a list of bad ingredients found
  createPopupWithBorder(
    "Great choice:\n" + goodIngredientsFound.join("\n"),
    "green",
    "black"
  );
}

//Warning: If you move the for loops here then it doesn't work
// Execute the highlighting function when the page is fully loaded
window.addEventListener("load", () => {
  // highlightIngredientsInSections();
  createPopupWithBorder();
});
