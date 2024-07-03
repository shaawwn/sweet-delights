



class Button extends HTMLElement {
    constructor(innerText) {
      super();
      const button = document.createElement('button');
      this.button = button
      button.innerText = innerText;
      this.appendChild(button);
    }

    addClickEvent(func) {
        this.button.addEventListener('click', () => {
            func()
        })
    }

    addHoverEvent(func) {
        this.button.addEventListener('hover', () => {
            func()
        })
    }
  }
  
  
  customElements.define('custom-button', Button);
  
  export default Button;