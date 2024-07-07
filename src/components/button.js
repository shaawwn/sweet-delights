



class Button extends HTMLElement {
    constructor(innerText) {
      super();
      const button = document.createElement('button');
      this.button = button
      button.innerText = innerText;
      this.appendChild(button);

      this.button.classList.add('button')
    }


  }
  
  
  customElements.define('custom-button', Button);
  
  export default Button;