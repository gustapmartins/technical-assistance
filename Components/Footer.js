import { FooterStyle } from "../Styles/Footer.styles.js";

export class Footer {
    constructor() {
        this.footerContainer = document.createElement('footer');
    }

    render() {
        this.footerContainer.innerHTML = `
            <div class="footer">
                © 2023 Your App. All rights reserved.
            </div>
        `;

        new FooterStyle().applyStyles(this.footerContainer);

        return this.footerContainer;
    }
}
