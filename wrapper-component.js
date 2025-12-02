import './article-component.js';

class WrapperComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
        }
      </style>
      <article-component>
        <h2>Article Title</h2>
        <p>This is a simple article component.</p>
        <a href="https://example.com" id="test-link">Click here</a>
      </article-component>
    `;
  }
}

customElements.define('wrapper-component', WrapperComponent);
