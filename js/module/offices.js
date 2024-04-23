export const getAllOficceAndcodeCity = async() =>{
    let res = await fetch("http://localhost:5504/offices?city")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return{
            code_office: val.code_office,
            city: val.city
        }
    })
    return dataUpdate
}

export const getAllOficceCityAndMovil = async()=>{
    let res = await fetch("http://localhost:5504/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val=>{
        return{
            code_office: val.code_office,
            movil: val.movil
        }
    })
    return dataUpdate
}

export const getOfficesBycode = async(code) =>{
    let res = await fetch(`http://localhost:5504/offices?code_office=${code}`)
    let data = await res.json();
    return data
}
