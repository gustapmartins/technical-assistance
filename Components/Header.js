// Header.js
import { HeaderStyle } from '../Styles/header.styles.js';

export class Header {
    constructor() {
        this.headerContainer = document.createElement('header');
    }

    render() {
        this.headerContainer.innerHTML = `
            <header class="header">
                <div class="title-tech">
                    Tech 
                    <span class="title">Assistence</span> 
                </div>
                <div class="menu-toggle">
                    <div class="bar"></div>
                    <div class="bar"></div>
                    <div class="bar"></div>
                </div>

                </div>
                    <ul class="menu-list">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
            </header>
        `;

        

        new HeaderStyle().applyStyles(this.headerContainer);

        return this.headerContainer;
    }
}
