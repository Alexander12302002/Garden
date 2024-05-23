import {
    getAllFullName,
    getAllClientsFromCityAndCode,
    getAllClientsWithRepresentativesInfo,
    getAllClientsAndManager,
    getAllClientsPaymentsAndManger
    
} from "../module/clients.js"

import {
    getAllFullNameAndEmails,
    getBoss,
    getAllFullNamePositionDiferentSalesRepresentative,
    getAllEmpleyeesAndBoss,
    getAllEmployeesAndBossOfBoss,
    getEmployeesWithoutClients,
    getEmployeesWithoutClientsAndOffices,

} from "../module/employee.js"

import { 
    getAllOficceAndcodeCity,
    getAllOficceCityAndMovil
} from "../module/offices.js";

import { 
    getAllPaymentsFromPaypalEachYear,
    getPaymentsMethods
} from "../module/payments.js";

import { 
    getAllOrnamentalesPlus100,
    getProductsNeverOrdered,
    getProductsNotOrdered
} from "../module/product.js";

import { 
    getAllStatus,
    getAllRequestsStatusRefused,
    getAllRequestsStatusDelivered,
    getAllRequestsCodeClientAndDate,
    getAllRequestsDeliveryEarly
} from "../module/requests.js";
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

    async getAllClientsAndManagerDesing(){
        let data = await getAllClientsAndManager();
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
                        </div>
                    </div>
            </div>
        
        `
        })
    }

    async getAllClientsPaymentsAndMangerDesing(){
        let data = await getAllClientsPaymentsAndManger();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Payment: </b> ${val.payment}</p>
                        <p><b>Nombre Empleado </b>${val.employee_full_name}</p>
                        </div>
                    </div>
            </div>
        `
        })

    }
        
    async getAllFullNameAndEmailsDesing(){
        let data = await getAllFullNameAndEmails();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre Empleado: </b>${val.fullLastName}</p>
                    <p><b>Email Empleado: </b>${val.email}</p>
                    </div>
                </div>
            </div>
            `
        })

    }

    async getBossDesing(){
        let data = await getBoss()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre Jefe: </b>${val.fullLastName}</p>
                    <p><b>position: </b>${val.position}</p>
                    </div>
                </div>
            </div>
            `
        })
    }

    async getAllFullNamePositionDiferentSalesRepresentativeDesing(){
        let data = await getAllFullNamePositionDiferentSalesRepresentative()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre Empleado: </b>${val.fullLastName}</p>
                    <p><b>position: </b>${val.position}</p>
                    </div>
                </div>
            </div>
            `
        })
    }

    async getAllEmpleyeesAndBossDesign(){
        let data = await getAllEmpleyeesAndBoss()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
            <div class="card__title">
                <div>${val.name}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre Jefe: </b>${val.boss}</p>
                    </div>
                </div>
            </div>
            `
        })
    }


    //arreglar estructura
    async getAllEmployeesAndBossOfBossDesigg(){
        let data = await getAllEmployeesAndBossOfBoss()
        const employeeMap = new Map(data.map(employee => [employee.employee_code, employee]));
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                <div class="card__body">
                    <div class="body__marck">
                        <p><b>Nombre Jefe: </b>${val.code_boss !== null ? val.code_boss.map(bossCode => {
                            const boss = employeeMap.get(bossCode);
                            return boss ? boss.name : 'No encontrado';
                        }).join(', ') : "No hay jefe"}</p>
                    </div>
                </div>
            </div>
            `
        })
    }

    async getEmployeesWithoutClientsDesign(){
        let data = await getEmployeesWithoutClients()
        data.forEach(val =>{
        this.shadowRoot.innerHTML += /* html */`
        <div class="report__card">
            <div class="card__title">
                <div>${val.name}</div>
            </div>
                <div class="card__body">
                    <div class="body__marck">
                    <p><b>Nombre Empleado: </b>${val.lastname1} ${val.lastname2}</p>
                    <p><b>Jefe: </b>${val.code_boss}</p>
                    </div>
                </div>
        </div>
        `    
        })
    }

    async getEmployeesWithoutClientsAndOfficesDesign(){
        let data = await getEmployeesWithoutClientsAndOffices()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Nombre Empleado: </b>${val.lastname1} ${val.lastname2}</p>
                        </div>
                    </div>
            </div>
            `    
            })
    }

    async getAllOficceAndcodeCityDesign(){
        let data = await getAllOficceAndcodeCity()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.city}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Codigo ciudad: </b>${val.code_office}</p>
                        </div>
                    </div>
            </div>
            `    
            })
    }

    async getAllOficceCityAndMovilDesign(){
        let data = await getAllOficceCityAndMovil()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_office}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Celular: </b>${val.movil}</p>
                        </div>
                    </div>
            </div>
            `    
            })
    }

    async getAllPaymentsFromPaypalEachYearDesign(){
        let data = await getAllPaymentsFromPaypalEachYear()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.id_transaction}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>code_client: </b>${val.code_client}</p>
                        <p><b>id: </b>${val.id}</p>
                        <p><b>date_payment: </b>${val.date_payment}</p>
                        <p><b>payment: </b>${val.payment}</p>
                        <p><b>total: </b>${val.total}</p>
                        </div>
                    </div>
            </div>
            `    
            })
    }

    async getPaymentsMethodsDesign(){
        let data = await getPaymentsMethods()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Pago: </b>${val}</p>
                    </div>
            </div>
            `    
            })
    }

    async getAllOrnamentalesPlus100Design(){
        let data = await getAllOrnamentalesPlus100()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_product}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>description: </b>${val.description}</p>
                        <p><b>dimension: </b>${val.dimension}</p>
                        <p><b>gama: </b>${val.gama}</p>
                        <p><b>id: </b>${val.id}</p>
                        <p><b>name: </b>${val.name}</p>
                        <p><b>price_provider: </b>${val.price_provider}</p>
                        <p><b>price_sale: </b>${val.price_sale}</p>
                        <p><b>provider: </b>${val.provider}</p>
                        <p><b>stock: </b>${val.stock}</p>
                    </div>
            </div>
            `    
            })
    }

    async getProductsNeverOrderedDesign(){
        let data = await getProductsNeverOrdered()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>description: </b>${val.imagen}</p>
                        <p><b>dimension: </b>${val.dimension}</p>
                        <p><b>gama: </b>${val.gama}</p>
                        <p><b>id: </b>${val.id}</p>
                        <p><b>name: </b>${val.name}</p>
                        <p><b>price_provider: </b>${val.price_provider}</p>
                        <p><b>price_sale: </b>${val.price_sale}</p>
                        <p><b>provider: </b>${val.provider}</p>
                        <p><b>stock: </b>${val.stock}</p>
                    </div>
            </div>
            `    
            })
    }

    async getProductsNotOrderedDesign(){
        let data = await getProductsNotOrdered()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.name}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>image: </b>${val.image}</p>
                        <p><b>description: </b>${val.description}</p>
                    </div>
            </div>
            `    
            })
    }

    async getAllStatusDesign(){
        let data = await getAllStatus()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div></div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Status: </b>${val}</p>
                    </div>
            </div>
            `    
            })
    }

    async getAllRequestsStatusRefusedDesing(){
        let data = await getAllRequestsStatusRefused()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_client}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>code_request: </b>${val.code_request}</p>
                        <p><b>comment: </b>${val.comment}</p>
                        <p><b>date_delivery: </b>${val.date_delivery}</p>
                        <p><b>date_request: </b>${val.date_request}</p>
                        <p><b>date_wait: </b>${val.date_wait}</p>
                        <p><b>id: </b>${val.id}</p>
                        <p><b>Status: </b>${val.status}</p>
                    </div>
            </div>
            `    
            })
    }

    async getAllRequestsStatusDeliveredDesing(){
        let data = await getAllRequestsStatusDelivered();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_client}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>code_request: </b>${val.code_request}</p>
                        <p><b>comment: </b>${val.comment}</p>
                        <p><b>date_delivery: </b>${val.date_delivery}</p>
                        <p><b>date_request: </b>${val.date_request}</p>
                        <p><b>date_wait: </b>${val.date_wait}</p>
                        <p><b>id: </b>${val.id}</p>
                        <p><b>Status: </b>${val.status}</p>
                    </div>
            </div>
            `    
            })
    }

    async getAllRequestsCodeClientAndDateDesing(){
        let data = await getAllRequestsCodeClientAndDate();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_client}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>code_request: </b>${val.code_request}</p>
                        <p><b>date_request: </b>${val.date_request}</p>
                        <p><b>date_wait: </b>${val.date_wait}</p>
                    </div>
            </div>
            `    
            })
    }

    async getAllRequestsDeliveryEarlyDesing(){
        let data = await getAllRequestsDeliveryEarly();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.code_client}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>code_request: </b>${val.code_request}</p>
                        <p><b>comment: </b>${val.comment}</p>
                        <p><b>date_delivery: </b>${val.date_delivery}</p>
                        <p><b>date_request: </b>${val.date_request}</p>
                        <p><b>date_wait: </b>${val.date_wait}</p>
                        <p><b>id: </b>${val.id}</p>
                        <p><b>Status: </b>${val.status}</p>
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
        if(name == "logic" && now == "client_4") this.getAllClientsAndManagerDesing();
        if(name == "logic" && now == "client_5") this.getAllClientsPaymentsAndMangerDesing();
        if(name == "logic" && now == "employee_1") this.getAllFullNameAndEmailsDesing();
        if(name == "logic" && now == "employee_2") this.getBossDesing();
        if(name == "logic" && now == "employee_3") this.getAllFullNamePositionDiferentSalesRepresentativeDesing();
        if(name == "logic" && now == "employee_4") this.getAllEmpleyeesAndBossDesign();
        if(name == "logic" && now == "employee_5") this.getAllEmployeesAndBossOfBossDesigg();
        if(name == "logic" && now == "employee_6") this.getEmployeesWithoutClientsDesign();
        if(name == "logic" && now == "employee_7") this.getEmployeesWithoutClientsAndOfficesDesign();
        if(name == "logic" && now == "offices_1") this.getAllOficceAndcodeCityDesign();
        if(name == "logic" && now == "offices_2") this.getAllOficceCityAndMovilDesign();
        if(name == "logic" && now == "payments_1") this.getAllPaymentsFromPaypalEachYearDesign();
        if(name == "logic" && now == "payments_2") this.getPaymentsMethodsDesign();
        if(name == "logic" && now == "product_1") this.getAllOrnamentalesPlus100Design();
        if(name == "logic" && now == "product_2") this.getProductsNeverOrderedDesign();
        if(name == "logic" && now == "product_3") this.getProductsNotOrderedDesign();
        if(name == "logic" && now == "requests_1") this.getAllStatusDesign();
        if(name == "logic" && now == "requests_2") this.getAllRequestsStatusRefusedDesing();
        if(name == "logic" && now == "requests_3") this.getAllRequestsStatusDeliveredDesing();
        if(name == "logic" && now == "requests_4") this.getAllRequestsCodeClientAndDateDesing();
        if(name == "logic" && now == "requests_5") this.getAllRequestsDeliveryEarlyDesing();
    }
}


