import { CardDepoimentStyle } from '../Styles/CardDepoiment.styles.js';

export class CardDepoiment {
    constructor(imageUrl, name, depoiment) {
        this.cardContainer = document.createElement('section');
        this.imageUrl = imageUrl;
        this.name = name;
        this.depoiment = depoiment;
    }

    render() {
        this.cardContainer.innerHTML = `
            <section class="card-depoiment">
                <div class="perfil">
                    <img src="${this.imageUrl}" alt="Client Image">
                    <span class="perfil-name">${this.name}</span>   
                </div>
                <div class="card-depoiment-description">
                    <span class="depoiment-description">${this.depoiment}</span>
                </div>
            </section>
        `;

        new CardDepoimentStyle().applyStyles(this.cardContainer);

        return this.cardContainer;
    }
}
