'use strict';

const app = new Vue({
    el: '#app',
    data: {
      products: [],
      filteredProducts: [],
    },

    methods:{
        filteredProducts(value){
            const regexp = new RegExp(value, 'i');
            this.filteredProducts = this.products.filter(product => regexp.test(product.title));
            this.render();
        } 
    }
  });