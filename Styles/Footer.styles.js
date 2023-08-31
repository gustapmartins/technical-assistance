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

            .footer-list {
                display: flex;
                justify-content: space-evenly; 
                align-items: center;
                margin: 12px;
            }

            .list {
                display: flex; 
                flex-direction: column;
            }

            .link {
                padding: 0px 12px;
                color: #fff;
                text-decoration: none;
            }

            .list-bottom {
                color: #ccc;
                font-size: 0.9rem;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}