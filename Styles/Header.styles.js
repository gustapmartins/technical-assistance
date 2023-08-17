// header.styles.js

export class HeaderStyle {
    constructor() {
        this.style = document.createElement('style');
    }

    applyStyles(component) {
        this.style.innerHTML = `
            .header {
                background-color: #333;
                color: white;
                padding: 10px 20px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .logo {
                font-size: 1.5rem;
            }

            .nav {
                list-style: none;
                display: flex;
            }

            .nav-item {
                margin-right: 10px;
            }

            .nav-link {
                text-decoration: none;
                color: white;
            }
        `;
        
        component.appendChild(this.style);
    }
}
