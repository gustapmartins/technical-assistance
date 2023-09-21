import { FormStyle } from "../Styles/Form.styles.js";

export class Form {
    constructor() {
        this.formContainer = document.createElement('footer');
    }

    render() {
        this.formContainer.innerHTML = `
            <div class="container">
                <div class="form-container">
                    <img src="https://media.istockphoto.com/id/480798670/pt/foto/galáxia-espiral-ilustração-da-via-láctea.jpg?s=612x612&w=0&k=20&c=mxboBErzRYlvSY4CoAa8SREIZ6nTCG3jnoT7Sld8_kg=" alt="Imagem" />
                    <form class="form_submit">
                        <h2 class="title_form">ORÇAMENTO</h2>

                        <label for="nome">Nome:</label>
                        <input type="text" id="nome" name="nome" class="input" required>

                        <label for="email">Email:</label>
                        <input type="email" id="email" name="email class="input"" required>

                        <label for="descricao">Descrição:</label>
                        <textarea id="descricao" name="descricao " class="input" rows="4" required></textarea>

                        <button type="submit">Enviar</button>
                    </form>
                </div>
            </div>
        `;

        new FormStyle().applyStyles(this.formContainer);

        return this.formContainer;
    }
}
