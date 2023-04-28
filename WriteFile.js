const { error, Console } = require('console')
const fs = require('fs')

fs.writeFile('./prueba1.txt','linea1\nLinea 2\n',error => {
    
    if (error) {
        console.log("Error",error)
    }
    else {
        console.log("archivo creado")
    }
})
console.log("Ultima? linea")