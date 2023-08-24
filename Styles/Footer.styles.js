export class FooterStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .footer {
                width: 100%;
                bottom: 0;
                background-color: #333;
                color: white;
                padding: 10px;
                text-align: center;
                box-sizing: border-box;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}