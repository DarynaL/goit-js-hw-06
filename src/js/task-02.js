const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');
// console.log(elementEl);

ingredients.forEach(option => {
  const liEl = document.createElement("li");
  liEl.textContent = option;
  liEl.classList.add('item');
  ingredientsList.append(liEl);
  console.log(liEl);
});

