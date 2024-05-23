//Devuelve un listado con los distintos estados por los que puede pasar un pedido.
export const getAllStatus = async() =>{
    let res = await fetch("http://172.16.101.146:5528/requests")
    let data = await res.json();
    let uniqueStatusMethods = new Set();
    data.forEach(val => {
        uniqueStatusMethods.add(val.status);
    });

    let uniqueStatusMethodsArray = Array.from(uniqueStatusMethods);
    return uniqueStatusMethodsArray;

}
//Devuelve un listado de todos los pedidos que fueron rechazados en 2009.
export const getAllRequestsStatusRefused = async() =>{
    let res = await fetch("http://172.16.101.146:5528/requests?status=Rechazado");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let {date_request}= val
        let [year] = date_request.split("-") 
        if(year == "2009"){
            dataUpdate.push(val)
        }
    });
    return dataUpdate
}
//Devuelve un listado de todos los pedidos que han sido entregados en el mes de enero de cualquier año.
export const getAllRequestsStatusDelivered = async() =>{
    let res = await fetch("http://172.16.101.146:5528/requests?status=Entregado");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let {date_request} = val
        let [year, month, day] = date_request.split("-");
        if(month === "01"){
            dataUpdate.push(val)
        }
    })

    return dataUpdate
}
//Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.
export const getAllRequestsCodeClientAndDate = async() =>{
    let res = await fetch("http://172.16.101.146:5528/requests")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let {date_request} = val
        let {date_wait} = val
        if(date_wait > date_request){
            dataUpdate.push(val)
        }
    })
    let newData = dataUpdate.map(val =>{
        return{
            code_client: val.code_client,
            code_request: val.code_request,
            date_request: val.date_request,
            date_wait: val.date_wait
        }
    })

    return newData
}

//Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.
export const getAllRequestsDeliveryEarly = async() =>{
    let res = await fetch("http://172.16.101.146:5528/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let { date_delivery, date_wait } = val;
        let requestDate = new Date(date_delivery);
        let waitDate = new Date(date_wait);
        let difference = waitDate.getTime() - requestDate.getTime();
        let differenceInDays = difference / (1000 * 3600 * 24);
        if (differenceInDays >= 2) {
            dataUpdate.push(val);
        }
    })

    return dataUpdate
}


export const getAllRequestByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5528/requests?code_client=${code}`)
    let data = await res.json();
    return data
}


