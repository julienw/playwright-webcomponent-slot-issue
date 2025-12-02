class ArticleComponent extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = `
      <style>
        article {
          padding: 20px;
          border: 1px solid #ccc;
          margin: 10px;
        }
      </style>
      <article>
        <slot></slot>
      </article>
    `;
  }
}

customElements.define('article-component', ArticleComponent);
