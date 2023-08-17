import { BannerStyle } from "../Styles/Banner.styles.js";

// Banner.js
export class Banner {
    constructor() {
        this.bannerContainer = document.createElement('div');
    }

    render() {
        this.bannerContainer.innerHTML = `
            <div class="banner">
                <h2 class="banner-title">Welcome to Our Website</h2>
                <div>
                    <input type="text" class="banner-input" placeholder="Search...">
                    <button class="banner-button">Search</button>
                </div>
            </div>
        `;

        new BannerStyle().applyStyles(this.bannerContainer);

        return this.bannerContainer;
    }
}
