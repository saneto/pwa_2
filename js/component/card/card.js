import { LitElement, html, css } from 'lit-element';

export default class AppCard extends LitElement {
  constructor() {
    super();
    this.content = '';
    this.done = true;
  }

  static get properties() {
    return {
      content: { type: String },
      done: { type: Boolean }
    }
  }

  static get styles() {
    return css`
    li {
      cursor: pointer;
      position: relative;
      padding: 12px 8px 12px 40px;
      background: #eee;
      font-size: 18px;
      transition: 0.2s;
    
      /* make the list items unselectable */
      -webkit-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
    }
    

ul li:nth-child(odd) {
  background: #f9f9f9;
}


ul li:hover {
  background: #ddd;
}


ul li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}


 li.checked::before {
  content: '';
  position: absolute;
  border-color: #fff;
  border-style: solid;
  border-width: 0 2px 2px 0;
  top: 10px;
  left: 16px;
  transform: rotate(45deg);
  height: 15px;
  width: 7px;
}
li.checked {
  background: #888;
  color: #fff;
  text-decoration: line-through;
}
    `;
  }

  initCard(done, content) {
    this.done = done;
    this.content = content;
  }
  
  handleClick()
  {
    console.log(this.shadowRoot.querySelector('li'));
    this.shadowRoot.querySelector('li').classList.toggle('checked');
  }

  render() {
    return html`
    <li class="li_list checked" @click="${this.handleClick}" id="todoElemt">     
        ${this.content} 
    </li>;
    `
  }
}

customElements.define('app-card', AppCard);