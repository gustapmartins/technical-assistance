// card.styles.js

export class CardDepoimentStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .card-depoiment {
                width: 180px;
                height: 160px;
                display: flex;
                flex-direction: column;
                justify-content: center;
                background-color: #F8F5F5;
                border-radius: 8px;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                padding: 16px;
                margin: 10px;
            }

            .perfil {
                display: flex;
                align-items: center
            }

            .perfil > img {
                width: 50px;
                height: 50px;
                border-radius: 50%;
                object-fit: cover;
            }

            .perfil-name {
                color: #000;
                font-weight: 600;
                font-size: 1rem;
                padding-left: 12px;
            }

            .card-depoiment-description {
                margin-top: 24px;
                font-size: 0.8rem;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
