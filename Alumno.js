export class Alumno {
    constructor(username, DNI) {
      this.username = username;
      this.DNI = DNI;
    }
    mostrar()
    {
        console.log("Nombre del alumno: ", this.username);
        console.log("Dni del alumno: ", this.DNI);
    }
  }