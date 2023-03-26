const title = document.querySelectorAll('.item');
console.log(`Number of categories: ${title.length}`)

const nameCategory = document.querySelector('h2').textContent;

title.forEach((element) => {
    let titleEl = element.querySelector('h2').textContent;
    
    let itemEl = element.querySelectorAll('li')

    console.log(`Category: ${titleEl}`);
    console.log(`Elements: ${itemEl.length}`)
})

