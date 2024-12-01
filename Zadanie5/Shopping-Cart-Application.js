class Cart {
    constructor() {
      this.products = [];
    }
  
    addProduct(name, price, quantity) {
      this.products.push({ name, price, quantity });
    }
  
}
  