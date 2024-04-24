import { Component, OnInit} from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { alumno } from '../alumno.model';


@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.scss'],
})
export class ListaAlumnosComponent{
  alumnos: alumno[] = [];
  //["Carlos", "Ximena", "Alberto", "Eduardo", "Baraba", "Georgina", "Kevin"];
  result: string = ''
  alumno: alumno = {
    nombre: '',
    presente: false
  }

  agregarAlumno(){
    console.log("guardado");
    this.alumnos.push(this.alumno);

    this.alumno = {
      nombre: '',
      presente: false
    };
  };

  ispresente(presente:boolean): string{
    if (presente){
      return "Presente"
    }
    else{
      return "Ausente"
    }
  }


  //constructor() { }
  isActionSheetOpen = false;
  public actionSheetButtons = [
    {
      text: 'Eliminar',
      role: 'destructive',
      data: {
        action: 'delete',
      },
    },
    {
      text: 'Cancelar',
      role: 'cancel',
      data: {
        action: 'cancel',
      },
    },
  ];

  setOpen(isOpen: boolean) {
    this.isActionSheetOpen = isOpen;
  }
}
