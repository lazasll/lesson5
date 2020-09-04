'use strict'

const products = [
    { title: 'T-Short', price: 100 },
    { title: 'T-Short', price: 150 },
    { title: 'T-Short', price: 200 },
];

class ProductItem{
    constructor(title, price){
        this.title = title
        this.price = price
    }

    render(){
        return`
        <div class="product__men__man1">
        <div class="product__men__man1__border ">
            <div class="product__men__man1__foto"><img src="img/shopping/2879.png" alt="men"></div>
            <div class="product__men__man1__mango">
                <h3 class="product__men__man1__mango__title">${this.title}</h3>
                <div class="product__men__man1__mango__cr">
                    <p class="product__men__man1__mango__cr__color">Color:</p>
                    <p class="product__men__man1__mango__cr__red">Red</p>
                </div>
                <div class="product__men__man1__mango__cr">
                    <p class="product__men__man1__mango__cr__color">Size:</p>
                    <p class="product__men__man1__mango__cr__red">XXII</p>
                </div>
            </div>
            <div class="product__men__man1__price">$${this.price}</div>
            <div class="product__men__man1__quantity">2</div>
            <div class="product__men__man1__shipping">FREE</div>
            <div class="product__men__man1__subtotal">$300</div>
            <div class="product__men__man1__action"><img src="img/shopping/2890.png"></div>
        </div>
        </div>
            `;
    }
}

class ProductList {
    constructor(){
        this.product = [];
    }
    fetchProduct() {
        this.product = product;
    }
    render(){
        let html = '';
        this.product.forEach(({ title, price }) => {
            const productItem = new ProductItem(title, price);
            html += productItem.render();
        });
        document.querySelector('.product_men_123').innerHTML = html;
    }
}

const list = new ProductList();