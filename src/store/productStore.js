import { makeAutoObservable } from 'mobx';

class ProductStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default ProductStore;