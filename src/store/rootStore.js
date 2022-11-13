import UIStore from "./uiStore";
import ProductStore from "./productStore";

class RootStore {
  constructor() {
    this.uiStore = new UIStore(this);
    this.productStore = new ProductStore(this);
  }
}

export default new RootStore();