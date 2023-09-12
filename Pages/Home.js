import { Banner } from "../Components/Banner.js";
import { Card } from "../Components/Card.js";
import { CardDepoiment } from "../Components/CardDepoiment.js";
import { Footer } from "../Components/Footer.js";
import { Header } from "../Components/Header.js";
import { HomeStyle } from "../Styles/Home.styles.js";
import depoimentsData from '../Mock/Depoiments.js';
import cardsMock from '../Mock/Cards.js';

export class Home {
    constructor() {
        this.homeContainer = document.createElement('div');
    }

    render() {
        const HeaderComponent = new Header().render();
        const FooterComponent = new Footer().render();
        const BannerComponent = new Banner().render();


        let depoimentComponentsHTML = '';
        let cardsHTML = '';
        depoimentsData.forEach(data => {
            depoimentComponentsHTML += new CardDepoiment(data.imageUrl, data.name, data.text).render().outerHTML;
        });

        cardsMock.forEach(data => {
            cardsHTML += new Card(data.imageUrl, data.title, data.description).render().outerHTML;
        });

        this.homeContainer.innerHTML = `
           <main>
              ${HeaderComponent.outerHTML}
              ${BannerComponent.outerHTML}
              <div>
                <div class="cards">
                   ${cardsHTML}
                </div>
                <div class="depoiments">
                    ${depoimentComponentsHTML}
                </div>
              </div>
              ${FooterComponent.outerHTML}
           </main> 
        `;

        const menuToggle = this.homeContainer.querySelector('.menu-toggle');
        const menuList = this.homeContainer.querySelector('.menu-list');

        menuToggle.addEventListener("click", () => {
            menuList.classList.toggle('active')
        })

        new HomeStyle().applyStyles(this.homeContainer);

        return this.homeContainer;
    }
}