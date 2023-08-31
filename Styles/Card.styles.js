// card.styles.js

export class CardStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .card {
                background-color: #f7f7f7;
                border-radius: 8px;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                padding: 20px;
                display: flex;
                align-items: center;
                margin: 10px;
            }

            .card-image {
                width: 50%;
                height: 380px;
                border-radius: 8px;
                overflow: hidden;
                margin-right: 15px;
            }

            .card-image img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            .card-description {
                font-size: 16px;
                line-height: 1.4;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
