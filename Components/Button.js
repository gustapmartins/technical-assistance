export class Button {
    constructor() {
        this.counterContainer = document.createElement('div');
    }

    render() {
        this.counterContainer.innerHTML += `
            <button> enviar </button>
        `

        return this.counterContainer;
    }
}
