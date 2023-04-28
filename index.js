import {invertirTexto,concatTextOnly} from './Manejo-Text.js'
import {Alumno} from './Alumno.js';
import {PI,Suma,Resta,Multiplicacion,Division} from './math.js'
import { copiar } from './CopyFile.js';
import { Parsear } from './ParseUrl.js';
import cinfig from './dbconfig.js';
import sql from 'mssql';
let pool = await sql.connect(config);
let result = await pool.request().query("SELECT TOP 2 * from Pizzas");
console.log(result.recordsets.length);
console.log(result.recordsets[0].length);
console.log(result.recordsets[0]);
getById = async (id) =>{
    let returnEntity = null;
    console.log('Estoy en: PizzaService.GetById(id)');
    try{
        let pool = await sql.connect(config);
        let result = await pool.request()
        .input('pId', sql.Int, id)
        .query('SELECT* FROM Pizzas WHERE id=@pId');
        rowsAffected = result.rowsAffected;
    } catch (error){
        console.log(error);
    }
    return rowsAffected;
}
let text1 ="Escuela";
let text2 = "Ort";
let textoSalida = invertirTexto(text1,text2);   
console.clear();
console.log("Textos de entrada: " ,text1, " y ", text2);
console.log("Texto invertido: ", textoSalida); 

let numero1 = 5;
let numero2 = 4;
let sum = Suma(numero1,numero2);
let rest = Resta(numero1,numero2);
let mult = Multiplicacion(numero1,numero2);
let div = Division(numero1,numero2);
console.log("Numeros: " ,numero1, "y ", numero2,"  Suma: ", sum, "Resta: ", rest , "Multiplicacion: ", mult, "Division: ", div);

const al1 = new Alumno("Franco", "46916289")
const al2 = new Alumno("Juli", "46603069") 
al1.mostrar();
console.log("------------")
al2.mostrar();

copiar("entrada.txt", "salida.txt")
console.log(Parsear("http://www.ort.edu.ar:8080/alumnos/index.htm?curso=2022&mes=mayo"))
console.log(Parsear(33))
