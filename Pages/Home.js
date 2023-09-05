import { Banner } from "../Components/Banner.js";
import { Card } from "../Components/Card.js";
import { CardDepoiment } from "../Components/CardDepoiment.js";
import { Footer } from "../Components/Footer.js";
import { Header } from "../Components/Header.js";

export class Home {
    constructor() {
        this.homeContainer = document.createElement('div');
    }

    render() {
        const HeaderComponent = new Header().render();
        const CardComponent = new Card("https://source.unsplash.com/300x225/?wave", "Technology in the fieldof Computer Science", "Lorem Ipssum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of").render();
        const FooterComponent = new Footer().render();
        const BannerComponent = new Banner().render();
        const CardDepoimentComponent = new CardDepoiment("https://source.unsplash.com/300x225/?wave", "Technology in the fieldof Computer Science", "Lorem Ipssum is simply dummy text of the printing and typesetting", "ot only five centuries, but also the leap").render();

        this.homeContainer.innerHTML = `
           <main>
              ${HeaderComponent.outerHTML}
              ${BannerComponent.outerHTML}
              <div>
                ${CardComponent.outerHTML}
                ${CardDepoimentComponent.outerHTML}
              </div>
              ${FooterComponent.outerHTML}
           </main> 
        `;

        return this.homeContainer;
    }
}