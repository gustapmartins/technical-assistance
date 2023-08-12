export class Button {

    Menu() {
        const counterContainer = document.createElement('div');

        counterContainer.innerHTML += `
            <button> enviar </button>
        `

        return counterContainer;
    }
}
