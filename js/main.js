import prompt from "async-prompt"
import { postProfile } from "./module/campers.js"

let name = await prompt("ingrese el nombre: ")
console.log(await postProfile(name))