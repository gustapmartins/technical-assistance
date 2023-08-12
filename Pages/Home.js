import { Button } from "../Components/Button.js";

export class Home {
    constructor() {
        this.homeContainer = document.createElement('div');
    }

    render() {
        const buttonComponent = new Button().Menu();

        this.homeContainer.innerHTML = `
           <header>
              ${buttonComponent.outerHTML}
              <div>
                começo do projeto
              </div>
           </header> 
        `;

        return this.homeContainer;
    }
}