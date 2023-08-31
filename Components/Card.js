import { CardStyle } from '../Styles/Card.styles.js'

export class Card {
    constructor(imageUrl, title, description) {
        this.cardContainer = document.createElement('section');
        this.imageUrl = imageUrl;
        this.description = description;
        this.title = title;
    }

    render() {
        this.cardContainer.innerHTML = `
            <section class="card">
                <div class="card-image">
                    <img src="${this.imageUrl}" alt="Client Image">
                </div>
                <div class="card-description">
                    <span class="description">${this.title}</span>
                    <span>${this.description}</span>
                </div>
            </section>
        `;

        new CardStyle().applyStyles(this.cardContainer);

        return this.cardContainer;
    }
}
