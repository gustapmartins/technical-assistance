// banner.styles.js

export class BannerStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .banner {
                background-color: #f7f7f7;
                background-image: url('../Imgs/Header.png'); /* Adicione a imagem de fundo aqui */
                background-size: cover;
                background-position: center;
                display: flex;
                flex-direction: column;
                justify-content: center;
                height: 280px;
                padding: 20px 0;
            }

            .banner-title-code {
                color: #fff;
                font-weight: 200;
            }

            .banner-title {
                font-size: 24px;
                margin-bottom: 20px;
                color: #fff;
            }

            .btn {
                padding: 12px;
                border-radius: 8px;
                border: none;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
