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
//console.log(await getAll())

import {
    getAllStatus ,
    getAllRequestsStatusRefused,
    getAllRequestsStatusDelivered,
    getAllRequestsCodeClientAndDate,
    getAllRequestsDeliveryEarly
} from "./module/requests.js";
//console.log(await getAllStatus())
//console.log(await getAllRequestsStatusRefused())
//console.log(await getAllRequestsStatusDelivered())
//console.log(await getAllRequestsCodeClientAndDate())
console.log(await getAllRequestsDeliveryEarly())

import { 
    getAllPaymentsFromPaypalEachYear,
    getPaymentsMethods
} from "./module/payments.js";
//console.log(await getAllPaymentsFromPaypalEachYear());
//console.log(await getPaymentsMethods())

import { 
    getAllOrnamentalesPlus100 
} from "./module/product.js";
//console.log(await getAllOrnamentalesPlus100())