import { BannerStyle } from "../Styles/Banner.styles.js";

// Banner.js
export class Banner {
    constructor() {
        this.bannerContainer = document.createElement('div');
    }

    render() {
        this.bannerContainer.innerHTML = `
            <div class="banner">
                <div class="box">
                    <h2 class="banner-title-code">
                        < TECH_ASSISTENCE >
                    </h2>
                    <h1 class="banner-title">
                        GUSTAVO LINDO
                    </h1>
                    <div>
                        <button class="btn btn-blue">SERVIÇOS</button>
                        <button class="btn btn-purple">ORÇAMENTO</button>
                    </div>
                </div>
            </div>
        `;

        new BannerStyle().applyStyles(this.bannerContainer);

        return this.bannerContainer;
    }
}
