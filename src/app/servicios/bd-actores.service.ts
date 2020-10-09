import { Injectable } from '@angular/core';
import { Actor } from '../clases/actor';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class BdActoresService {
  datos: Actor[];
  collectionName= "actores";

  constructor(private db: AngularFirestore) { }

  getDatos(): Promise<Actor[]>{
    return new Promise((resolve,reject)=>{
      this.db.collection(this.collectionName).get().subscribe((querySnapshot)=> {
        this.datos = [];
        querySnapshot.forEach((doc)=> {
          let item=doc.data() as Actor;
          item.id=doc.id;
          this.datos.push(item);
        });
        console.log("Service");
        console.log( this.datos);
        resolve(this.datos);
      },(err)=>reject(err));
    })
  }

  guardarDato(dato: Actor){
    this.db.collection(this.collectionName).add({		                                          //devuelve una promesa
      Nombre: dato.Nombre,
      apellido: dato.apellido,
      sexo: dato.sexo,
      FechaNacimiento: dato.FechaNacimiento,
      Foto: dato.Foto,
      Nacionalidad: dato.Nacionalidad
    })
    .then((docRef)=> {    console.log("Document written with ID: ", docRef.id);	})
    .catch((error)=> {    console.error("Error adding document: ", error);	});
  
  }

  borrarDato(id){
    this.db.collection(this.collectionName).doc(id).delete()
    .then(()=>console.log("Borrado")).catch(err=>console.log(err));
  }


}
