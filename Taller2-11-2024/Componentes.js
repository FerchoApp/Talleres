class AyudaTexto extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                span {
                    background-color: #f0f8ff;
                    color: #333;
                    padding: 8px 12px;
                    border-radius: 5px;
                    font-size: 1em;
                    font-weight: bold;
                    text-align: center;
                    display: inline-block;
                    margin: 10px auto;
                }
            </style>
            <span><slot>Ayuda</slot></span>
        `;
    }
}
customElements.define("ayuda-texto", AyudaTexto);

class BotonNotificaciones extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                button {
                    display: flex;
                    align-items: center;
                    background-color: #007bff;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    border-radius: 5px;
                    cursor: pointer;
                    margin: 10px auto;
                    font-size: 1em;
                    font-weight: bold;
                }
                button img {
                    margin-right: 8px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <button>
                🔔
                Notificaciones
            </button>
        `;
    }
}
customElements.define("boton-notificaciones", BotonNotificaciones);

class CajaClave extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                input {
                    padding: 10px;
                    width: 80%;
                    max-width: 300px;
                    border: 1px solid #007bff;
                    border-radius: 5px;
                    text-align: center;
                    display: block;
                    margin: 10px auto;
                }
            </style>
            <input type="password" id="clave" placeholder="Ingrese su clave">
        `;

        shadow.querySelector('#clave').addEventListener('change', () => {
            this.encryptAndSend();
        });
    }

    encryptAndSend() {
        const input = this.shadowRoot.querySelector('#clave');
        const clave = btoa(input.value); // Simple base64 encoding
        console.log("Clave encriptada:", clave);
        input.value = clave;
    }
}
customElements.define("caja-clave", CajaClave);

class CajaCupon extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        const shadow = this.attachShadow({ mode: 'open' });
        shadow.innerHTML = `
            <style>
                input {
                    padding: 10px;
                    width: 80%;
                    max-width: 300px;
                    border: 2px dashed #28a745;
                    border-radius: 5px;
                    font-style: italic;
                    text-align: center;
                    display: block;
                    margin: 10px auto;
                }
            </style>
            <input type="text" placeholder="Ingrese cupón de descuento">
        `;
    }
}
customElements.define("caja-cupon", CajaCupon);
