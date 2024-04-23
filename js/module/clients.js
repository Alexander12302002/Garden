import { getEmpleyeesByCode } from "./employee.js";
import { getOfficesBycode } from "./offices.js";

export const getAllFullName = async() =>{
    let res = await fetch("http://localhost:5501/clients?country=Spain")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return{
            client_name: val.client_name,
            contact_name: val.contact_name,
            country: val.country
        }
    })
    return dataUpdate
}

export const getAllClientsFromCityAndCode = async()=>{
    let res = await fetch("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let dataUpdate = [];
    dataUpdate = data.filter(val => val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30)
    return dataUpdate
}

export const getAll = async()=>{
    let res = await fetch("http://localhost:5501/clients")
    let client = await res.json();
    for (let i = 0; i < client.length; i++) {        
        let {
            id:id_client,
            limit_credit,
            postal_code:postal_code_client,
            country:country_client,
            region:region_client,
            city,
            address2:address2_client,
            address1:address1_client,
            fax,
            phone,
            ...clientUpdate} = client[i]
            client[i] = clientUpdate
        let [employee] = await getEmpleyeesByCode(clientUpdate.code_employee_sales_manager);
        let{
            in:id_employee,
            extension,
            email,
            code_boss,
            position,
            ...employeeUpdate
        } = employee
        let [offices] = await getOfficesBycode(employeeUpdate.code_office);
        let{
            country,
            region,
            postal_code,
            movil,
            address1,
            address2,
            ...officeUpdate
        } = offices
        let data = {...clientUpdate, ...employeeUpdate, ...officeUpdate}
        client[i] = {
            client_name: `${data.client_name}`,
            employee_full_name: `${data.name} ${data.lastname1} ${data.lastname2}`,
            employee_office_code: data.code_office,
            city_employees: data.city
        }

    }
    return client;
}
