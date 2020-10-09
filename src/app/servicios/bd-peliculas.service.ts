import { Injectable } from '@angular/core';
import { Pelicula } from '../clases/pelicula';
import { AngularFirestore } from '@angular/fire/firestore';



@Injectable({
  providedIn: 'root'
})
export class BdPeliculasService {
  datos: Pelicula[];
  collectionName= "peliculas";

  constructor(private db: AngularFirestore) { }

  guardarDato(dato: Pelicula){
    this.db.collection(this.collectionName).add({		                                          //devuelve una promesa
      Nombre: dato.Nombre,
      Tipo: dato.Tipo,
      FechaEstreno: dato.FechaEstreno,
      CantidadPublico: dato.CantidadPublico,
      FotoPelicula: dato.FotoPelicula,
      actor: dato.actor
    })
    .then((docRef)=> {    console.log("Document written with ID: ", docRef.id);	})
    .catch((error)=> {    console.error("Error adding document: ", error);	});
  
  }

  getDatos(): Promise<Pelicula[]>{
    return new Promise((resolve,reject)=>{
      this.db.collection(this.collectionName).get().subscribe((querySnapshot)=> {
        this.datos = [];
        querySnapshot.forEach((doc)=> {
            let item=doc.data() as Pelicula;
            item.Id=doc.id;
            this.datos.push(item);
        });
        console.log("Service");
        console.log( this.datos);
        resolve(this.datos);
      },(err)=>reject(err));
    })
    /*
    const coleccionPuntajes = this.db.collection(this.collectionName).valueChanges();
    coleccionPuntajes.subscribe(lista =>{ console.log('valueChanges'+lista);  }); 
    return coleccionPuntajes; */
  }

  borrarDato(id){
    this.db.collection(this.collectionName).doc(id).delete()
    .then(()=>console.log("Borrado")).catch(err=>console.log(err));
  }



}