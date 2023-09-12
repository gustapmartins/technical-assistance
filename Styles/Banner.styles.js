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
                height: 580px;
                padding: 20px 0;
            }

            .box{
                width: 500px;
                margin-left: 25px;
            }

            .banner-title-code {
                color: #D4D4D4;
                font-weight: 50;
            }

            .banner-title {
                width: ;
                word-wrap: break-word;
                font-size: 28px;
                margin-top: 8px;
                margin-bottom: 20px;
                font-weight: 600;
                color: #fff;
            }

            .box:hover .banner-title {
                opacity: 1;
                transform: translateY(0);
            }

            .btn {
                padding: 12px;
                border-radius: 8px;
                border: none;
                cursor: pointer;
                font-weight: 700;
                box-shadow: -5px 5px 10px #0F131A;
            }

            .btn-blue {
                color: #fff; 
                background-color: #62C8CE;
                margin-right: 10px;
            }

            .btn-purple {
                color: #fff;
                background-color: #AC56B2;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
