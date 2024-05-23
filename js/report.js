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
            <my-details logic="offices_1" text="1. Devuelve un listado con el código de oficina y la ciudad donde hay oficinas."></my-details>
            <my-details logic="offices_2" text="2. Devuelve un listado con la ciudad y el teléfono de las oficinas de España."></my-details>  
            `
        }

        if(e.target.innerHTML=="payments"){
            report__details.innerHTML = /*html*/`
            <my-details logic="payments_1" text="1. Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor."></my-details>
            <my-details logic="payments_2" text="2. Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas."></my-details>
            `
        }

        if(e.target.innerHTML=="product"){
            report__details.innerHTML = /*html*/`
            <my-details logic="product_1" text="1. Devuelve un listado con todos los productos que pertenecen a la gama Ornamentales y que tienen más de 100 unidades en stock. El listado deberá estar ordenado por su precio de venta, mostrando en primer lugar los de mayor precio."></my-details>
            <my-details logic="product_2" text="2. Devuelve un listado de los productos que nunca han aparecido en un pedido."></my-details>
            <my-details logic="product_3" text="3. Devuelve un listado de los productos que nunca han aparecido en un pedido, mostrando el nombre, la descripción y la imagen del producto."></my-details>
            `
        }

        if(e.target.innerHTML=="request details"){
            report__details.innerHTML = /*html*/`
                <h1>Aun no estan estas consultas</h1>
            `
        }

        if(e.target.innerHTML=="requests"){
            report__details.innerHTML = /*html*/`
            <my-details logic="requests_1" text="1. Devuelve un listado con los distintos estados por los que puede pasar un pedido."></my-details>
            <my-details logic="requests_2" text="2. Devuelve un listado de todos los pedidos que fueron rechazados en 2009."></my-details>
            <my-details logic="requests_3" text="3. Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año."></my-details>
            <my-details logic="requests_4" text="4. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo."></my-details>
            <my-details logic="requests_5" text="5. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada."></my-details>
            `
        }
    })
})



customElements.define("my-details", Mydetails)
customElements.define("my-card", Mycard)
