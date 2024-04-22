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

