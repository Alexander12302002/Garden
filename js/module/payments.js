//Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.
export const getAllPaymentsFromPaypalEachYear = async() =>{
    let res = await fetch("http://172.16.101.146:5526/payments?payment=PayPal");
    let data = await res.json();
    let dataUpdate = [];
    data.forEach(val => {
        let {date_payment}= val
        let [year] = date_payment.split("-") 
        if(year == "2008"){
            dataUpdate.push(val)
        }
    });
    dataUpdate.sort((a, b) => {
        const dateA = new Date(a.date_payment);
        const dateB = new Date(b.date_payment);
        return dateB - dateA;
    })
    return dataUpdate;
}
//Devuelve un listado con todas las formas de pago que aparecen en la tabla pago. Tenga en cuenta que no deben aparecer formas de pago repetidas.
export const getPaymentsMethods = async() => {
    let res = await fetch("http://172.16.101.146:5526/payments");
    let data = await res.json();
    let uniquePaymentMethods = new Set();
    data.forEach(val => {
        uniquePaymentMethods.add(val.payment);
    });

    let uniquePaymentMethodsArray = Array.from(uniquePaymentMethods);
    return uniquePaymentMethodsArray;

}

export const getAllPaymentsByCode = async(code)=>{
    let res = await fetch(`http://172.16.101.146:5526/payments?code_client=${code}`)
    let data = await res.json();
    return data
}