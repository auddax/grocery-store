import { makeAutoObservable } from 'mobx';
import productsApi from '../api/api';

class ProductStore {
  products = [];

  constructor(rootStore) {
    this.rootStore = rootStore;
    this.getProducts();
    makeAutoObservable(this);
  }

  async getProducts() {
    const data = await productsApi();
    this.products = data.values;
  }

}

export default ProductStore;