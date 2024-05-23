//Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmails = async()=>{
    let res = await fetch("http://172.16.101.146:5524/employee?code_boss=7")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return{
            name: val.name,
            fullLastName: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^\[\]]+@[^\[\]]+(?=\])/)[0]
        }
    })
    
    return dataUpdate
}

//Devuelve el nombre del puesto, nombre, apellidos y email del jefe de la empresa.
export const getBoss = async()=>{
    let res = await fetch("http://172.16.101.146:5524/employee")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val =>{
        if(val.code_boss == null){
            dataUpdate.push({ 
                position: val.position,
                name: val.name,
                fullLastName: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^\[\]]+@[^\[\]]+(?=\])/)[0]
            })
        }
    })
    return dataUpdate
}


//Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.
export const getAllFullNamePositionDiferentSalesRepresentative = async()=>{
    let res = await fetch("http://172.16.101.146:5524/employee?position_ne=RepresentanteVentas")
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.code_boss != null){
            dataUpdate.push({
                name: val.name,
                fullLastName: `${val.lastname1} ${val.lastname2}`,
                position: val.position
            })
        }
    })
    return dataUpdate;
}
// Obtener la informacion de un empleado por su codigo
export const getEmpleyeesByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5524/employee?employee_code=${code}`)
    let data = await res.json();
    return data
}
// Obtener la informacion de un empleado
export const getAllEmploy = async() =>{
    let res = await fetch(`http://172.16.101.146:5524/employee`);
    let data = await res.json();
    return data;
}

//Devuelve un listado con el nombre de los empleados junto con el nombre de sus jefes.
export const getAllEmpleyeesAndBoss = async() =>{
    let res = await fetch("http://172.16.101.146:5524/employee")
    let employees = await res.json();

    const bossMap = new Map();
    for (const employee of employees){
        if (employee.code_boss !== null) {
            const bossRes = await fetch(`http://172.16.101.146:5524/employee/${employee.code_boss}`);
            const bossData = await bossRes.json();
            const bossName = `${bossData.name} ${bossData.lastname1} ${bossData.lastname2}`;
            bossMap.set(employee.code_boss, bossName);
        }
    }
    const employeesWithBoss = employees.map(employee => {
        let bossName = bossMap.get(employee.code_boss) || "N/A";
        return {
            name: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
            boss: bossName
        };
    });

    return employeesWithBoss;
}

//Devuelve un listado que muestre el nombre de cada empleados, el nombre de su jefe y el nombre del jefe de sus jefe.
export const getAllEmployeesAndBossOfBoss = async()=>{
    let dataEmployees = await getAllEmploy();
    for (let i = 0; i < dataEmployees.length; i++) {
        let {code_boss} = dataEmployees[i]
        let listBoss = [];
        if(!code_boss) continue 
        do{
            let searchedBoss = async() => await getEmpleyeesByCode(code_boss)
            let [boos] = await searchedBoss()
            code_boss = boos.code_boss
            listBoss.push(boos)
        }while(code_boss)
        dataEmployees[i].code_boss = listBoss;
    }
    return dataEmployees;
}

//Devuelve un listado con los datos de los empleados que no tienen clientes asociados y el nombre de su jefe asociado
export const getEmployeesWithoutClients = async () => {
    let employeesRes = await fetch(`http://172.16.101.146:5524/employee`);
    let clientsRes = await fetch(`http://172.16.101.146:5523/clients`);

    let employees = await employeesRes.json();
    let clients = await clientsRes.json();

    let employeesWithClients = clients.map(client => client.code_employee_sales_manager);
    let employeesWithoutClients = employees.filter(employee => !employeesWithClients.includes(employee.employee_code));

    return employeesWithoutClients;
}

//Devuelve un listado que muestre los empleados que no tienen una oficina asociada y los que no tienen un cliente asociado.
export const getEmployeesWithoutClientsAndOffices = async () => {
    let employeesRes = await fetch(`http://172.16.101.146:5524/employee`);
    let clientsRes = await fetch(`http://172.16.101.146:5523/clients`);
    let officesRes = await fetch(`http://172.16.101.146:5525/offices`);

    let employees = await employeesRes.json();
    let clients = await clientsRes.json();
    let offices = await officesRes.json();

    let employeesWithClients = clients.map(client => client.code_employee_sales_manager);
    let employeesWithoutClients = employees.filter(employee => !employeesWithClients.includes(employee.employee_code));

    let employeesWithOffices = employeesWithoutClients.map(employee => {
        let office = offices.find(office => office.code_office === employee.code_office);
        return {
            ...employee,
            office: office ? office : null
        };
    });

    return employeesWithOffices;
}
