class CardNews extends HTMLElement {
    constructor() {
            super();

            const shadow = this.attachShadow({mode:"open"});
            shadow.appendChild(this.build());   
            shadow.appendChild(this.styles());                        
        }

        build(){
            const componentRoot = document.createElement("div");
            componentRoot.setAttribute("class", "card");

            const cardLeft = document.createElement("div");
            cardLeft.setAttribute("class", "card_left");

            const autor = document.createElement("span");
            autor.textContent = "By" + (this.getAttribute("Autor") || "Anonymous");
            
            const linkTitle = document.createElement("a");
            linkTitle.textContent = this.getAttribute("title");
            linkTitle.href = this.getAttribute("link-url");
                        
            const newsContent = document.createElement("p");
            newsContent.textContent = this.getAttribute("content");

            cardLeft.appendChild(autor);
            cardLeft.appendChild(linkTitle);
            cardLeft.appendChild(newsContent);

            const cardRight = document.createElement("div");
            cardRight.setAttribute("class", "card_right");

            const newsImage = document.createElement("img");
            newsImage.src = this.getAttribute("photo") || "assets/default.png";
            newsImage.alt = "Foto noticia"
            cardRight.appendChild(newsImage);

            componentRoot.appendChild(cardLeft);
            componentRoot.appendChild(cardRight);

            return componentRoot;
        }

        styles(){
            const style = document.createElement("style");
            style.textContent = `
            .card{
                width: 100%;
                display: flex;
                flex-direction: row;
                box-shadow: 10px -1px 64px -4px rgba(52,3,49,0.76);
                -webkit-box-shadow: 10px -1px 64px -4px rgba(52,3,49,0.76);
                -moz-box-shadow: 10px -1px 64px -4px rgba(52,3,49,0.76);
                justify-content: space-between;
            }
            
            .card_left{
                display: flex;
                flex-direction: column;
                justify-content: center;
                padding: 12px;
            }
            
            .card_left > span {
               font-weight: 300;
            }
            
            .card_left > a {
                margin-top: 15px;
                font-size: 25px;
                color: black;
                text-decoration: none;
                font-weight: 500;
            }
            
            .card_left > p {
                color: gray;
            }
            `;
            
            return style;
        }
}

customElements.define("card-news", CardNews);














// class CardNews extends HTMLElement {
//     constructor() {
//             super();

//             const shadow = this.attachShadow({mode:"open"});
//             shadow.innerHTML = "<h1> Hello</h1>"     //estatico                   
//         }

//         build(){}

//         styles(){}
// }

// customElements.define("card-news", CardNews);