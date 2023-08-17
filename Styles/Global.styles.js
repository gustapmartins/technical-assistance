// global.styles.js

export class GlobalStyles {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            /* Reset CSS */
            body, h1, h2, h3, h4, h5, h6, p, ul, ol {
                margin: 0;
                padding: 0;
            }
            body {
                font-family: Arial, sans-serif;
            }
            ul, ol {
                list-style: none;
            }
            img {
                max-width: 100%;
                height: auto;
            }
        `;
    }

    applyStyles() {
        document.head.appendChild(this.style);
    }
}
