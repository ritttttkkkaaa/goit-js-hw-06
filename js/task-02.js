const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const title = document.createElement('li');
title.classList.add('item');
title.textContent = 'ingredients';

document.body.appendChild(title);

console.log(title);