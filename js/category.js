import data from '../dummy-data.json' assert {type:'json'};

const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });
  let value = params.category;
  document.querySelector("h1").textContent= value;
  const products = document.querySelector('.products')
  for(const x of data.products){
      if(x.category == params.category){
        const product = document.createElement('div');
        const picture = document.createElement('img');
        picture.src = '/images/'+ x.image;
        picture.alt = x.title;
        product.appendChild(picture);
        const title = document.createElement('h3');
        title.textContent = x.title;
        product.appendChild(title);
        const price = document.createElement('p');
        price.textContent = x.price+'$';
        product.appendChild(price);
        products.appendChild(product);
      }
  }

