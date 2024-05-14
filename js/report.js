import {Mydetails} from "./components/myDetails.js"
import { Mycard } from "./components/myCard.js";
import "./components/clock.js";


let btn = document.querySelectorAll("button");
let report__menu = document.querySelectorAll(".report__menu button");
let report__details = document.querySelector(".report__details")

btn.forEach(val =>{
    val.addEventListener("click", (e)=>{
        for(let val of report__menu) val.classList.remove('report__active');
        e.target.classList.add("report__active")

        if(e.target.innerHTML=="clients"){
            report__details.innerHTML = /*html*/`
            <my-details logic="client_1" text="1. Devuelve el nombre de los clientes y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>  
            <my-details logic="client_2" text="2. Devuelve un listado con el nombre de los todos los clientes españoles."></my-details>
            <my-details logic="client_3" text="3. Devuelve el nombre de los clientes que han hecho pagos y el nombre de sus representantes junto con la ciudad de la oficina a la que pertenece el representante."></my-details>
            <my-details logic="client_4" text="4. Devuelve un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas."></my-details>
            <my-details logic="client_5" text="5. Devuelve el nombre de los clientes que hayan realizado pagos junto con el nombre de sus representantes de ventas."></my-details> 
            `
        }
        if(e.target.innerHTML=="employees"){
            report__details.innerHTML = /*html*/`
            <my-details logic="employee_1" text="1. Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7."></my-details> 
            <my-details logic="employee_2" text="2. Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa."></my-details>
            <my-details logic="employee_3" text="3. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas."></my-details>  
            <my-details logic="employee_4" text="4. Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes."></my-details>  
            <my-details logic="employee_5" text="5. Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe."></my-details>  
            <my-details logic="employee_6" text="6. Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado."></my-details>  
            <my-details logic="employee_7" text="7. Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado."></my-details>  
            `
        }

        if(e.target.innerHTML=="gama"){
            report__details.innerHTML = /*html*/`   
                <h1>Aun no estan estas consultas</h1>
            `
        }

        if(e.target.innerHTML=="offices"){
            report__details.innerHTML = /*html*/`
                <h1>Aun no estan estas consultas</h1>
            `
        }

        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
                <h1>Aun no estan estas consultas</h1>
            `
        }

        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`
                <h1>Aun no estan estas consultas</h1>
            `
        }

        if(e.target.innerHTML=="request details"){
            report__details.innerHTML = /*html*/`
                <h1>Aun no estan estas consultas</h1>
            `
        }

        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
                <h1>Aun no estan estas consultas</h1>
            `
        }
    })
})



customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)
