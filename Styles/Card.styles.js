// card.styles.js

export class CardStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .card {
                border-radius: 8px;
                padding: 20px;
                display: flex;
                align-items: center;
                margin: 10px;
                margin: auto;
            }

            .card-image {
                width: 40%;
                height: 380px;
                border-radius: 8px;
                overflow: hidden;
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
                padding-left: 2.8rem;
            }
            
            .title {
                font-size: 2rem;
                color: #4F4848;
                font-weight: 600;
            }

            .description{
                font-size: 1.3rem;
                color: #4F4848;
                opacity: 0.7;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
