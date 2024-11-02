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
                    padding: 4px 8px;
                    border-radius: 4px;
                    font-size: 0.9em;
                    font-weight: bold;
                    display: inline-block;
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
                    padding: 10px 15px;
                    border-radius: 5px;
                    cursor: pointer;
                }
                button img {
                    margin-right: 8px;
                }
                button:hover {
                    background-color: #0056b3;
                }
            </style>
            <button>
                <img src="https://via.placeholder.com/20" alt="icono">
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
                    padding: 8px;
                    border: 1px solid #007bff;
                    border-radius: 5px;
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
                    padding: 8px;
                    border: 2px dashed #28a745;
                    border-radius: 5px;
                    font-style: italic;
                    text-align: center;
                }
            </style>
            <input type="text" placeholder="Ingrese cupón de descuento">
        `;
    }
}
customElements.define("caja-cupon", CajaCupon);
