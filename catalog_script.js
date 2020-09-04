'use strict';

const products = [
  { title: 'Shirt', price: 150 },
  { title: 'Socks', price: 50 },
  { title: 'Jacket', price: 350 },
  { title: 'Shoes', price: 250 },
  { title: 'Sweater', price: 450 },
  { title: 'T-Shirt', price: 175 },
  { title: 'Jacket', price: 550 },
  { title: 'Shoes', price: 750 },
  { title1: 'Shoes', price1: 950 },
];

const shopCart = [];

class ProductItem{
  constructor(title, price){
    this.title = title;
    this.price = price;
  }
  render(){
    return `
            <div class="product">
              <a href="single__page.html"><img class="product__img" src="img/men/1937.png" alt="photo"></a>
                  <div class="product__content">
                        <a href="#" class="product__name">${this.title}</a>
                        <p class="product__price">$${this.price}</p>
                  </div>
                        <a href="#" class="product__add">Add to Cart</a>
                        <a href="#" class="product__add__XX"><img class="" src="img/men/1895.png"></a>
                        <a href="#" class="product__add__love"><img class="" src="img/men/1899.png"></a>
            </div>
        `;
  }      
};

class ProductList {
  constructor(){
    this.products = [];
    this.filteredProducts = [];
  }

  _getProducts(){
    this.products = products;
    this.filteredProducts = this.products;
  }

  render(list){
    let html = '';

    this.filteredProducts.forEach(({title, price}) => {
      const productItem = new ProductItem(title, price);
      html += productItem.render();
    });

    document.querySelector('.catalog').innerHTML = html;
  }

  total() {
    let total = 0;
    this.products.forEach(({ price }) => {
      total += price;
    });

    console.log('ИТОГО: ', total);
  }
  
}

