// https://learn.udacity.com/courses/ud989

class CatClicker extends HTMLElement {
    set counter(count) {
      this._counter = count;
      this.count.innerText = count;
    }
    get counter() {
      return this._counter;
    }
    constructor() {
      super();
      this.attachShadow({ mode: "open" });
  
      this._render();
  
      // Counter
      this.counter = 0;
    }
    _render() {
      const template = document.createElement("template");
      template.innerHTML = `
        <style>
          div {
            display: grid;
            justify-content: center;
          }
          img {
            width: 300px;
          }
          img:hover {
            cursor: pointer;
          }
        </style>
        <div>
          <img>
          <span></span>
        </div>
      `;
      const clone = document.importNode(template.content, true);
      this.shadowRoot.appendChild(clone);
  
      this.container = this.shadowRoot.querySelector("div");
      this.img = this.shadowRoot.querySelector("img");
      this.count = this.shadowRoot.querySelector("span");
  
      this.img.setAttribute(
        "src",
        "//live.staticflickr.com/1126/625069434_963be5836b_h.jpg"
      );
      this.img.title = "Click here to increase the counter!";
      this.img.addEventListener("click", () => this.counter++);
    }
  }
  
  customElements.define("cat-clicker", CatClicker);
  