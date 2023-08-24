import { BannerStyle } from "../Styles/Banner.styles.js";

// Banner.js
export class Banner {
    constructor() {
        this.bannerContainer = document.createElement('div');
    }

    render() {
        this.bannerContainer.innerHTML = `
            <div class="banner">
                <h2 class="banner-title-code">Welcome to Our Website</h2>
                <h1 class="banner-title">Welcome to Our Website</h1>
                <div>
                    <button class="btn">SERVIÇOS</button>
                    <button class="btn">ORÇAMENTO</button>
                </div>
            </div>
        `;

        new BannerStyle().applyStyles(this.bannerContainer);

        return this.bannerContainer;
    }
}
