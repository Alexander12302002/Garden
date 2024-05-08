import {
    getAllFullName,
    getAllClientsFromCityAndCode,
    getAllClientsWithRepresentativesInfo 
    
} from "../module/clients.js"
export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode: "open"})
        this.shadowRoot.innerHTML = /* html */`
        <link rel="stylesheet" href="../css/myCard.css">
        `
    }
    async getAllFullNameDesign(){
        let data = await getAllFullName()
        data.forEach(val => {
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                            <div>${val.client_name}</div>
                        </div>
                            <div class="card__body">
                                <div class="body__marck">
                                    <p><b>Nombre del empleado: </b>${val.contact_name}</p>
                                    <p><b>Ciudad: </b>${val.country}</p>
                                </div>
                        </div>
                </div>
                        `;
                    });
    }

    async getAllClientsFromCityAndCodeDesign(){
        let data = await getAllClientsFromCityAndCode()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.contact_name} ${val.contact_lastname}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>ID: </b> ${val.id}</p>
                            <p><b>Nombre cliente </b>${val.client_name}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                            <p><b>Numero: </b>${val.phone}</p>
                        </div>
                </div>
            
            `
        })
    }

    async getAllClientsWithRepresentativesInfoDesign(){
        let data = await getAllClientsWithRepresentativesInfo();
        console.log(await getAllClientsWithRepresentativesInfo())
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                        <div class="card__body">
                            <div class="body__marck">
                            <p><b>Code Office: </b> ${val.employee_office_code}</p>
                            <p><b>Nombre Empleado </b>${val.employee_full_name}</p>
                            <p><b>Ciudad: </b>${val.city_employees}</p>
                            </div>
                        </div>
                </div>
            
            `
            
        })
    }

    static get observedAttributes(){
        return ["logic"]
    }
    attributeChangedCallback(name,old,now){
        if(name == "logic" && now == "client_1") this.getAllClientsFromCityAndCodeDesign();
        if(name == "logic" && now == "client_2") this.getAllFullNameDesign();
        if(name == "logic" && now == "client_3") this.getAllClientsWithRepresentativesInfoDesign();
    }
}


