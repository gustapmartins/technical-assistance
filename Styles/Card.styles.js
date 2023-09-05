// card.styles.js

export class CardStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .card {
                width: 95%;
                border-radius: 8px;
                padding: 20px;
                display: flex;
                align-items: center;
                margin: 10px;
                margin: auto;
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
                width: 50%;
                height: 380px;
                display: flex;
                justify-content: space-evenly;
                flex-direction: column;
                font-size: 16px;
                line-height: 1.4;
            }
            
            .title {
                font-size: 2.5rem;
                color: #4F4848;
                font-weight: 600;
            }

            .description{
                font-size: 1.4rem;
                color: #4F4848;
                opacity: 0.7;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
