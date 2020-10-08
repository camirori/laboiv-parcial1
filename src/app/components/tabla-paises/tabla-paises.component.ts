import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.css']
})
export class TablaPaisesComponent implements OnInit {
  @Input() listado: any[] ;
  @Output() itemSeleccionado: EventEmitter<string> = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  Seleccionar(item: any) {
    // tslint:disable-next-line: no-console
    console.info( ' mostrar detalles ', item.name);
    this.itemSeleccionado.emit(item.name);
  }

}
