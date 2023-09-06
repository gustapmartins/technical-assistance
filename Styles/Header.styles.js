// header.styles.js

export class HeaderStyle {
    constructor() {
        this.style = document.createElement('style');
    }

    applyStyles(component) {
        this.style.innerHTML = `
            .header {
                background-color: #1E222A;
                color: white;
                padding: 10px;
                display: flex;
                justify-content: space-between;
                align-items: center;
            }

            .title-tech {
                font-size: 1.5rem;
                font-weight: 600;
                color: #fff;
            }

            .title-assistence {
                font-weight: 600;
                color: #71D5DB;
            }

            .menu {
                position: fixed;
                background-color: #333;
                color: white;
                width: 250px;
                height: 100%;
                left: -250px;
                top: 0;
                transition: left 0.3s ease-in-out;
              }
              
              .menu.active {
                display: flex;
              }
              
              .menu-toggle {
                cursor: pointer;
                padding: 10px;
              }
              
              .bar {
                width: 25px;
                height: 3px;
                background-color: white;
                margin: 5px 0;
              }
              
              .menu-list {
                display: none;
                position: fixed;
                list-style: none;
                padding: 0;
                right: 0;
                top: 69px;
                margin: 0;
              }
              
              .menu-list li {
                padding: 15px;
                border-bottom: 1px solid #444;
              }
              
              .menu-list li a {
                color: white;
                text-decoration: none;
                transition: color 0.3s ease-in-out;
              }
              
              .menu-list li a:hover {
                color: #ddd;
              }
        `;

        component.appendChild(this.style);
    }
}
