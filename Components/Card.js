import { CardStyle } from '../Styles/Card.styles.js'

export class Card {
    constructor(imageUrl, description) {
        this.cardContainer = document.createElement('div');
        this.imageUrl = imageUrl;
        this.description = description;
    }

    render() {
        this.cardContainer.innerHTML = `
            <div class="card">
                <div class="card-image">
                    <img src="${this.imageUrl}" alt="Client Image">
                </div>
                <div class="card-description">
                    ${this.description}
                </div>
            </div>
        `;

        new CardStyle().applyStyles(this.cardContainer);

        return this.cardContainer;
    }
}
