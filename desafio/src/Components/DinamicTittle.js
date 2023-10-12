class DinamicTittle extends HTMLElements{
    constructor() {
            super();

            const shadow = this.attachShadow({mode: "open"});

            //base do component <h1> karol</h1>
            const componentRoot = document.createElement("h1");
            componentRoot.textContent = this.getAttribute("Título");

            //estilizar o component
            const style = document.createElement("style");
            style.textContent = `
                h1{
                color: purple;
                }
                `;

            //enviar para a shadow
            shadow.appendChild(componentRoot);
            shadow.appendChild(style);
    }
}

customElements.define("dinamic-tittle", DinamicTittle);