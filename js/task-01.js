const categoriesEl = document.querySelectorAll("#categories");

const itemsEl = document.querySelectorAll('.item');

const numberOfCategories = itemsEl.length;
console.log('Number of categories:', numberOfCategories);

itemsEl.forEach(itemsEl => {
    console.log('Category:', itemsEl.firstElementChild.textContent);
    console.log('Elements', itemsEl.lastElementChild.children.length);
}
);
