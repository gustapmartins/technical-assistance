// banner.styles.js

export class BannerStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .banner {
                background-color: #f7f7f7;
                background-image: url('https://www.vtekassistencia.com.br/wp-content/uploads/2017/10/ref_b_vtek_site_banner_reparo_avançado_1920x1080px.png'); /* Adicione a imagem de fundo aqui */
                background-size: cover;
                background-position: center;
                padding: 40px 0;
                text-align: center;
            }

            .banner-title {
                font-size: 24px;
                margin-bottom: 20px;
            }

            .banner-input {
                padding: 8px;
                width: 70%;
                border: 1px solid #ccc;
                border-radius: 4px;
                margin-right: 10px;
            }

            .banner-button {
                padding: 8px 16px;
                background-color: #333;
                color: white;
                border: none;
                border-radius: 4px;
                cursor: pointer;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
