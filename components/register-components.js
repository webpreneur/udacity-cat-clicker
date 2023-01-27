import { CatClicker } from './cat-clicker/cat-clicker.component.js';



export const registerComponents = () => {
  customElements.define("cat-clicker", CatClicker);
}