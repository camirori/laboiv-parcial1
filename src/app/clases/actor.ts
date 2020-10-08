export class Actor {
    id;
    Nombre;
    apellido;
    sexo;
    FechaNacimiento;
    Foto;
    Nacionalidad;

    constructor(nombre, apellido, sexo, fecha, pais, foto?, id?){
        this.id=id;
        this.Nombre=nombre;
        this.apellido=apellido;
        this.sexo=sexo;
        this.FechaNacimiento=fecha;
        this.Foto=foto;
        this.Nacionalidad=pais;
    }

}
