// Componente para el título de derechos reservados
class TitulosUfpso extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        let shadowRoot = this.attachShadow({ mode: 'open' });
        shadowRoot.innerHTML = `
        <style>
          div {      
            background-color: green;
            border-radius: 8px;
            box-shadow: 0 8px 8px rgba(0, 0, 0, 0.1);
            overflow: hidden;
            width: 100%; 
            font-size: 1.2em;
            color: #ffffff;
            margin: 20px;
            padding: 10px;
            text-align: center; /* Centrar el texto */
            font-weight: bold; /* Texto en negrita */
            font-family: Arial, sans-serif; /* Cambiar a fuente preferida */
          }
        </style>
        <div>Derechos reservados UFPSO</div>
        `;
    }
}
customElements.define("titulos-ufpso", TitulosUfpso);

//Componente de fechas
class FechaHoy extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        // Inicializa el HTML del componente
        this.shadowRoot.innerHTML = `
        <style>
            .container {
                display: flex;
                align-items: center;
                justify-content: space-around; /* Centra el contenido horizontalmente */
                font-size: 20px;
                color: blue;
            }
            .fecha, .hora, button {
                margin-right: 20px; /* Espacio entre elementos */
            }
            button {
                background-color: blue;
                color: white;
                border: none;
                border-radius: 5px;
                padding: 10px;
                cursor: pointer;
                font-size: 16px;
            }
            button:hover {
                background-color: darkblue;
            }
        </style>
        <div class="container">
            <div class="fecha">${this.fecha()}</div>
            <div class="hora" id="hora">${this.hora()}</div>
            <button id="ir-chatgpt">Ir a ChatGPT</button>
        </div>`;

        // Agregar evento al botón
        this.shadowRoot.querySelector('#ir-chatgpt').addEventListener('click', () => {
            window.location.href = 'https://chat.openai.com/'; // Redirigir a ChatGPT
        });

        // Actualizar la hora cada segundo
        this.updateTime();
        this.intervalId = setInterval(() => this.updateTime(), 1000);
    }

    fecha() {
        const today = new Date();
        const dia = String(today.getDate()).padStart(2, '0');
        const mes = String(today.getMonth() + 1).padStart(2, '0');
        const ano = today.getFullYear();
        return `${dia}/${mes}/${ano}`;
    }

    hora() {
        const now = new Date();
        const horas = String(now.getHours()).padStart(2, '0');
        const minutos = String(now.getMinutes()).padStart(2, '0');
        return `${horas}:${minutos}`; // Solo mostrar hora y minutos
    }

    updateTime() {
        // Actualiza el contenido de la hora en el componente
        this.shadowRoot.querySelector('#hora').textContent = this.hora();
    }

    disconnectedCallback() {
        // Limpiar el intervalo si el componente es eliminado del DOM
        clearInterval(this.intervalId);
    }
}
customElements.define("fecha-hoy", FechaHoy);


// Componente para el botón del carrito
class BotonCarrito extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' }).innerHTML = `
            <style>
                .card-container {
                    display: flex;
                    justify-content: center;
                    gap: 20px; /* Espacio entre las tarjetas */
                }
                .card {
                    width: 200px;
                    background-color: #f8f8f8;
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
                    overflow: hidden;
                    text-align: center;
                    font-family: Arial, sans-serif;
                }
                .card img {
                    width: 100%;
                    height: 150px;
                    object-fit: cover;
                }
                .card-content {
                    padding: 15px;
                }
                .card h3 {
                    font-size: 18px;
                    margin: 10px 0;
                }
                .card p {
                    font-size: 16px;
                    color: #333;
                    margin: 5px 0;
                }
                .card button {
                    background-color: blue;
                    color: white;
                    border: none;
                    border-radius: 5px;
                    padding: 10px;
                    cursor: pointer;
                    font-size: 14px;
                    margin-top: 10px;
                }
                .card button:hover {
                    background-color: darkblue;
                }
            </style>
            <div class="card-container">
                ${this.createCard('Producto 1', '$10.00', 'https://via.placeholder.com/200')}
                ${this.createCard('Producto 2', '$15.00', 'https://via.placeholder.com/200')}
                ${this.createCard('Producto 3', '$20.00', 'https://via.placeholder.com/200')}
            </div>
        `;
    }

    createCard(name, price, imageUrl) {
        return `
            <div class="card">
                <img src="${imageUrl}" alt="${name}">
                <div class="card-content">
                    <h3>${name}</h3>
                    <p>Precio: ${price}</p>
                    <button>Ir al carrito</button>
                </div>
            </div>
        `;
    }
}
customElements.define("boton-carrito", BotonCarrito);

// Componente para la barra de búsqueda
class BarraBuscador extends HTMLElement {
    constructor() {
        // Always call super first in constructor
        super();
    }
    connectedCallback() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
        // Create caja de texto
        const buscarcaja = document.createElement("input");
        buscarcaja.type = 'text';
        buscarcaja.name = 'buscar';
        buscarcaja.id = 'buscar';

        buscarcaja.placeholder = 'Burcar con ChatGPT';
        buscarcaja.setAttribute("class", "buscarcaja buscarcaja:focus");
        const style = document.createElement("style");
        style.textContent = `
            .buscarcaja {       
                width: 1800px;           
                padding: 10px;         
                border: 2px solid #007bff; 
                border-radius: 20px;   
                outline: none;         
                transition: border-color 0.3s; 
                margin: 25px;
            }
            .buscarcaja:focus {
                border-color: #CD5C5C;  
            }
            `;
        // Attach the created elements to the shadow dom
        shadow.appendChild(style);
        shadow.appendChild(buscarcaja);



    }
}
customElements.define("barra-buscador", BarraBuscador);

