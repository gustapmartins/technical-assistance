import { Banner } from "../Components/Banner.js";
import { Card } from "../Components/Card.js";
import { CardDepoiment } from "../Components/CardDepoiment.js";
import { Footer } from "../Components/Footer.js";
import { Header } from "../Components/Header.js";
import { HomeStyle } from "../Styles/Home.styles.js";
import depoimentsData from '../Mock/Depoiments.js';
import cardsMock from '../Mock/Cards.js';
import { Form } from "../Components/Form.js";

export class Home {
    constructor() {
        this.homeContainer = document.createElement('div');
    }

    render() {
        const HeaderComponent = new Header().render();
        const FooterComponent = new Footer().render();
        const BannerComponent = new Banner().render();
        const FormComponent = new Form().render();


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
                ${FormComponent.outerHTML}
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
        });

        const submit = this.homeContainer.querySelector('.form_submit');
        const nome = this.homeContainer.querySelector('#nome');
        const email = this.homeContainer.querySelector('#email');
        const descricao = this.homeContainer.querySelector('#descricao');
 
        submit.addEventListener("submit", (e) => sendForm(e))

        function sendForm(e) {
            e.preventDefault();

            if(!nome.value && nome.value <= 2) {
                console.log("invalido")
            }
            if(!email.value && email.value <= 2) {
                console.log("invalido")
            }
            if(!descricao.value && descricao.value <= 10) {
                console.log("invalido")
            }else {
                console.log("valido")
            }
        }

        new HomeStyle().applyStyles(this.homeContainer);

        return this.homeContainer;
    }
}