export class BaseComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.rendered = false;
    }

    // abstract
    afterViewInit() {}

    async initTemplate(path) {
        const template = await this.fetchHtml(path);
        this.appendTemplate(template);
        
    }

    async fetchHtml(path) {
        const response = await fetch(path)
        const templateString = await response.text();
        return templateString;
    }

    appendTemplate(templateString) {
        const template = document.createElement("template");
        template.innerHTML = templateString;
        const clone = document.importNode(template.content, true);
        this.shadowRoot.appendChild(clone);

        this.afterViewInit();

    }

    /* This is available publicly when selecting the custom element via javascript. */
    changeStyles(selector, styles) {
        const el = this.shadowRoot.querySelector(selector);
        for ( const [property, style] of Object.entries(styles) ) {
            el.style[property] = style;
        }
    }

}