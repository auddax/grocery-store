import { makeAutoObservable } from 'mobx';

class UIStore {
  constructor(rootStore) {
    this.rootStore = rootStore;
    makeAutoObservable(this);
  }
}

export default UIStore;