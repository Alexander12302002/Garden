import { 
    getAllOficceAndcodeCity,
    getAllOficceCityAndMovil 
} from "./module/offices.js";

import { 
    getAllFullNameAndEmails,
    getBoss,
    getAllFullNamePositionDiferentSalesRepresentative
} from "./module/employee.js";
//console.log(await getAllFullNameAndEmails())
//console.log(await getBoss())
//console.log(await getAllFullNamePositionDiferentSalesRepresentative())

import { 
    getAllFullName,
    getAllClientsFromCityAndCode,
    getAll
} from "./module/clients.js";
//console.log(await getAllFullName())
//console.log(await getAllClientsFromCityAndCode())
console.log(await getAll())

import {
    getAllStatus 
} from "./module/requests.js";
//console.log(await getAllStatus())

import { 
    getAllPaymentsFromPaypalEachYear 
} from "./module/payments.js";
//console.log(await getAllPaymentsFromPaypalEachYear());