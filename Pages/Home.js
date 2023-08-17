import { Banner } from "../Components/Banner.js";
import { Card } from "../Components/Card.js";
import { Footer } from "../Components/Footer.js";
import { Header } from "../Components/Header.js";

export class Home {
    constructor() {
        this.homeContainer = document.createElement('div');
    }

    render() {
        const HeaderComponent = new Header().render();
        const CardComponent = new Card("https://source.unsplash.com/300x225/?wave", "Card").render();
        const FooterComponent = new Footer().render();
        const BannerComponent = new Banner().render();

        this.homeContainer.innerHTML = `
           <div>
              ${HeaderComponent.outerHTML}
              ${BannerComponent.outerHTML}
              <div>
                ${CardComponent.outerHTML}
              </div>
              ${FooterComponent.outerHTML}
           </div> 
        `;

        return this.homeContainer;
    }
}