export const getAllRequestDetailsByCode = async(code) =>{
    let res = await fetch(`http://localhost:5507/request_details?`)
    let data = await res.json();
    return data
}