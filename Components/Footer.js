import { FooterStyle } from "../Styles/Footer.styles.js";

export class Footer {
    constructor() {
        this.footerContainer = document.createElement('footer');
    }

    render() {
        this.footerContainer.innerHTML = `
            <footer class="footer">
               <ul class="footer-list">
                    <li class="list">
                        <a class="link" href="#">
                           Byran Espina 
                        </a>
                        <span class="list-bottom">Facebook</span>
                    </li>
                    </li>
                        <li class="list">
                        <a class="link" href="#">
                            jbryan0812espina@gmail.com
                        </a>
                        <span class="list-bottom">Gmail</span>
                    </li>
                    <li class="list">
                        <a class="link" href="#">
                            0921-331-3641  
                        </a>
                        <span class="list-bottom">Phone</span>
                    </li>
               </ul>
            </footer>
        `;

        new FooterStyle().applyStyles(this.footerContainer);

        return this.footerContainer;
    }
}
