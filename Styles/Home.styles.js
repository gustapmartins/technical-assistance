// card.styles.js

export class HomeStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
           .depoiments{
                background-color: #131821;
                padding: 12px;
                display: flex;
                justify-content: end;
           }

           
           .active {
                display: flex;
            }

           .cards {
                width: 90%;
                margin: auto;
           }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
