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
        console.log
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

    }
}


