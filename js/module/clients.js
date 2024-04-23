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