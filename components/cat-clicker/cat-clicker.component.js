import { numberToWord } from "../../utils/number-to-word.js";
import { BaseComponent } from "../base-component.js";
// https://learn.udacity.com/courses/ud989

export class CatClicker extends BaseComponent {
    set counter(count) {
      this._counter = count;
      const numAsWord = numberToWord(count);
      this.count.innerText = `${count} (${numAsWord})`;
    }
    get counter() {
      return this._counter;
    }
    constructor() {
      super();

      this._render();
    }

    afterViewInit() {
      console.log("template fetched");
      this.counter = 0;
    }

    async _render() {

      await this.initTemplate("components/cat-clicker/cat-clicker.component.html");
        
      this.container = this.shadowRoot.querySelector("div");
      this.img = this.shadowRoot.querySelector("img");
      this.count = this.shadowRoot.querySelector("#counter");
      this.name = this.shadowRoot.querySelector("#name");
  
      this.img.setAttribute(
        "src",
        "//live.staticflickr.com/1126/625069434_963be5836b_h.jpg"
      );
      this.img.title = "Click here to increase the counter!";
      this.img.addEventListener("click", () => this.counter++);

      const name = this.getAttribute('cat-name');
      this.name.innerText = name;
    }
}

