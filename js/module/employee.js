//Devuelve un listado con el nombre, apellidos y email de los empleados cuyo jefe tiene un código de jefe igual a 7.
export const getAllFullNameAndEmails = async()=>{
    let res = await fetch("http://localhost:5502/employee?code_boss=7")
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
    let res = await fetch("http://localhost:5502/employee")
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
    let res = await fetch("http://localhost:5502/employee?position_ne=RepresentanteVentas")
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

export const getEmpleyeesByCode = async(code) =>{
    let res = await fetch(`http://localhost:5502/employee?employee_code=${code}`)
    let data = await res.json();
    return data
}

export const getAllEmpleyeesAndBoss = async() =>{
    let res = await fetch("http://localhost:5502/employee")
    let employees = await res.json();

    const bossMap = new Map();
    for (const employee of employees){
        if (employee.code_boss !== null) {
            const bossRes = await fetch(`http://localhost:5502/employee/${employee.code_boss}`);
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

export const getAllEmployeesAndBossOfBoss = async()=>{
    let res = await fetch("http://localhost:5502/employee")
    let employees = await res.json();

    const bossMap = new Map();

    const getBossName = async(employee_code)=>{
        if(employee_code == null){
            return "N/A"
        }
        const bossRes = await fetch(`http://localhost:5502/employee/${employee_code}`);
        const bossData = await bossRes.json();
        const bossName = `${bossData.name} ${bossData.lastname1} ${bossData.lastname2}`;
        bossMap.set(employee_code, bossName);
        return bossName;
    }

    const getEmployeesWithBosses = async () => {
        const employeesWithBosses = [];
        for (const employee of employees) {
            const bossName = await getBossName(employee.code_boss);
            const employeeName = `${employee.name} ${employee.lastname1} ${employee.lastname2}`;
            employeesWithBosses.push({ employee: employeeName, boss: bossName });
        }
        return employeesWithBosses;
    };

    const employeesWithBosses = await getEmployeesWithBosses();

    const mapEmployeesAndBossesRecursively = (employeesWithBosses) => {
        return employeesWithBosses.map(({ employee, boss }) => {
            const bossOfBoss = bossMap.get(boss.split(" ")[0]);
            return {
                employee,
                boss,
                bossOfBoss: bossOfBoss ? bossOfBoss : "N/A"
            };
        });
    };

    return mapEmployeesAndBossesRecursively(employeesWithBosses)
}