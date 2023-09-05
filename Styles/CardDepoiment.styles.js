// card.styles.js

export class CardDepoimentStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .card-depoiment {
                background-color: #F8F5F5;
                border-radius: 8px;
                box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                padding: 20px;
            }

            .perfil {
                display: flex;
                align-items: center;
            }

            .perfil > img {
                width: 82px;
                border-radius: 50%;
                objet-fit: cover;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
