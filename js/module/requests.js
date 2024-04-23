export const getAllStatus = async() =>{
    let res = await fetch("http://localhost:5508/requests")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return{
            status: val.status,
            id: val.id
        }
    })
    return dataUpdate
}


