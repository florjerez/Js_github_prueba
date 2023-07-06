// funcion declarativa 

function hello() {
    console.log ("Hola mundo desde funcion declarativa")
}

const hello2 = function () {
    console.log ("Hola mundo desde funcion annima")

}

const hello3 = () => {
    console.log ("Hola mundo desde funcion flecha")
} 

hello ();
hello2();
hello3();

let database = ["matias", "celeste", "joaquin", "lucas", "ivan" ];
 
const deleteUser = () => {
    let nameUser = prompt ('Ingrese el usuario que desea eliminar');
    let position = database.indexOf (nameUser)
  if (database.includes(nameUser) ) 
}