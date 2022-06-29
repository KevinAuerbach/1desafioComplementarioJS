const cliente = prompt("Ingrese su nombre")
alert("Bienvenido al kioskito " + cliente)

let chocolate = prompt("Elija el chocolate que quiera: (blanco o negro)").toLowerCase()

while(chocolate != "blanco" && chocolate != "negro"){
    alert("Ese chocolate no lo tenemos")
    chocolate = prompt("Elija el chocolate que quiera: (blanco o negro)").toLowerCase()
}
if(chocolate == "blanco"){
    let precio = 150
    alert("Su chocolate cuesta $" + precio)
}else if(chocolate == "negro"){
    precio = 200
    alert("Su chocolate cuesta $" + precio)
}
