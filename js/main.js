import { 
    getAllOficceAndcodeCity,
    getAllOficceCityAndMovil 
} from "./module/offices.js";

import { 
    getAllFullNameAndEmails,
    getBoss,
    getAllFullNamePositionDiferentSalesRepresentative,
    getAllEmpleyeesAndBoss,
    getAllEmployeesAndBossOfBoss,
    getEmployeesWithoutClients,
    getEmployeesWithoutClientsAndOffices,
    getEmployeesWithoutOfficeAndClients
} from "./module/employee.js";
//console.log(await getAllFullNameAndEmails())
//console.log(await getBoss())
//console.log(await getAllFullNamePositionDiferentSalesRepresentative())
//console.log(await getAllEmpleyeesAndBoss())
//console.log(await getAllEmployeesAndBossOfBoss())
//console.log(await getEmployeesWithoutClients())
//console.log(await getEmployeesWithoutClientsAndOffices())
//console.log(await getEmployeesWithoutOfficeAndClients())

import { 
    getAllFullName,
    getAllClientsFromCityAndCode,
    getAll,
    getAllClientsAndManager,
    getAllClientsPaymentsAndManger,
    getClientsNotPaymentsAndEmplyee,
    getClientsOfFuenlabrada,
    getAllClientsAndEmployee,
    getAllclientsNotPayments,
    getAllclientsNotRequests,
    getAllclientsNotRequestsAndNotPayments
} from "./module/clients.js";
//console.log(await getAllFullName())
//console.log(await getAllClientsFromCityAndCode())
//console.log(await getAll())
//console.log(await getAllClientsAndManager())
//console.log(await getAllClientsPaymentsAndManger())
//console.log(await getClientsNotPaymentsAndEmplyee())
//console.log(await getClientsOfFuenlabrada())
//console.log(await getAllClientsAndEmployee())
//console.log(await getAllclientsNotPayments())
//console.log(await getAllclientsNotRequests())
//console.log(await getAllclientsNotRequestsAndNotPayments())

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
//console.log(await getAllRequestsDeliveryEarly())

import { 
    getAllPaymentsFromPaypalEachYear,
    getPaymentsMethods
} from "./module/payments.js";
//console.log(await getAllPaymentsFromPaypalEachYear());
//console.log(await getPaymentsMethods())

import { 
    getAllOrnamentalesPlus100,
    getProductsNeverOrdered,
    getProductsNotOrdered 
} from "./module/product.js";
//console.log(await getAllOrnamentalesPlus100())
//console.log(await getProductsNeverOrdered())
console.log(await getProductsNotOrdered ())

