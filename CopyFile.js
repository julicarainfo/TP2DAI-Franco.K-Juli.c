import fs from 'fs'

export function copiar(entrada, salida)
{
  fs.copyFile(entrada, salida, (err) => {
    if (err) throw err;
    console.log('Se cambio el nombre del archivo');
})
}
