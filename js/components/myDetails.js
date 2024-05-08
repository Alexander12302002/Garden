export class Mydetails extends HTMLElement{
    marquee
    myCard
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /*html*/`
        <details id="queryAboutTable7">
        <link rel="stylesheet" href="../css/myDetails.css">
                <summary>
                    <div class="details__description">Campus: </div>
                        <div class="details__container">
                            <p><marquee behavior="" direction=""></marquee></p>
                        </div>
                </summary>
                    <div class="report__container">
                        <my-card></my-card>
                    </div>
        </details> 
        `;
        this.marquee = this.shadowRoot.querySelector("marquee");
        this.myCard = this.shadowRoot.querySelector("my-card")
    }
    static get observedAttributes(){
        return ["logic", "query"]
    }
    attributeChangedCallback(name,old,now){
        if(name == "logic") this.myCard.setAttribute("query", now)
        if(name == "query") this.marquee.innerHTML = now
        
    }
}

