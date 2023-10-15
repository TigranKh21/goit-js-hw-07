const listItemsEl = document.querySelectorAll('.item');
console.log(`Number of categories: ${listItemsEl.length}`);

listItemsEl.forEach(
    (listItem)=>
console.log(`Category: ${listItem.firstElementChild.textContent}\n
Elements: ${listItem.querySelectorAll('ul li').length}`)
)


