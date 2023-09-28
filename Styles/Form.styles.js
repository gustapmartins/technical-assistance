export class FormStyle {
    constructor() {
        this.style = document.createElement('style');
        this.style.innerHTML = `
            .container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh;
            }

            .form-container {
                display: flex;
                align-items: center;
                justify-content: space-around;
                width: 70%;
                height: 580px;
                box-sizing: border-box;
                background-color: #1E222A;
                border-radius: 15px;
            }

            .invalid-nome {
                color: red;
                font-size: 0.8rem;
                padding-top: 5px;
                display: none;
            }

            .invalid-email{
                color: red;
                font-size: 0.8rem;
                padding-top: 5px;
                display: none;
            }

            .invalid-description{
                color: red;
                font-size: 0.8rem;
                padding-top: 5px;
                display: none;
            }

            .form-container img {
                width: 50%;
                height: 100%;
                object-fit: fill;
                border-radius:  15px;
            }

            .form-container form {
                width: 50%;
                height: 100%;
                display: flex;
                flex-direction: column; 
                justify-content: center;
                padding: 0px 30px 0 30px;
            }

            .form-container form label {
               color: #fff;
               padding: 8px;
               font-weight: 500;
            }

            .form-container input[type="text"],
            .form-container input[type="email"],
            .form-container textarea,
            .form-container button {
                width: 100%;
                padding: 10px;
                border: 1px solid #ccc;
                border-radius: 5px;
                box-sizing: border-box;
                outline: none;
            }

            .form-container button {
                width: 80%;
                background-color: #007bff;
                padding: 15px;
                color: #fff;
                border: none;
                cursor: pointer;
                margin: 0 auto;
                margin-top: 50px;
                background: linear-gradient(90deg, #62C8CE -18.03%, #AC55B2 128.77%);
            }

            .form-container button:hover {
                background-color: #0056b3;
            }

            .title_form {
                width: 40%;
                color: #fff;
                text-align: center;
                margin-bottom: 25px;
                border-bottom: 2px solid #fff;
                margin: 0 auto;
                margin-bottom: 10px;
            }
        `;
    }

    applyStyles(element) {
        element.appendChild(this.style);
    }
}
