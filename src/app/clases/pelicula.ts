export class Pelicula {
    Id;
    Nombre;
    Tipo: Tipo ;
    FechaEstreno;
    CantidadPublico;
    FotoPelicula;
    actor;

    constructor(nombre, tipo, fechaEstreno, cantPublico, actor, foto, id?){
        this.Nombre=nombre;
        this.Tipo=tipo;
        this.FechaEstreno= fechaEstreno;
        this.CantidadPublico= cantPublico;
        this.FotoPelicula= foto;
        this.Id=id;
        this.actor=actor;
    }
}

export type Tipo =  "terror" | "comedia"| "amor" |"otros" ;
