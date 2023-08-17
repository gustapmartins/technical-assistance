// Header.js
import { HeaderStyle } from '../Styles/header.styles.js';

export class Header {
    constructor() {
        this.headerContainer = document.createElement('header');
    }

    render() {
        this.headerContainer.innerHTML = `
            <div class="header">
                <div class="logo">My App</div>
                <ul class="nav">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
            </div>
        `;

        new HeaderStyle().applyStyles(this.headerContainer);

        return this.headerContainer;
    }
}
