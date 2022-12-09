import data from '../dummy-data.json' assert {type:'json'};
const categories = document.querySelector('.categories')
for(let category of data.categories){
    let block = document.createElement('div');
    let link = document.createElement('a');
    link.href = `/pages/category.html?category=${category}`;
    block.textContent = category;
    link.appendChild(block);
    categories.appendChild(link);
}

document.querySelector('#categories').addEventListener('mouseover', e =>{
    document.querySelector('.categories').style.display = 'flex'
})
document.querySelector('#categories').addEventListener('mouseleave', e =>{
    document.querySelector('.categories').style.display = 'none'
})
categories.addEventListener('mouseover',e=>{
    categories.style.display = 'flex'
})
categories.addEventListener('mouseleave',e=>{
    categories.style.display = 'none'
})