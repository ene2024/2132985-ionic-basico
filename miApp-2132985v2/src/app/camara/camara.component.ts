import { Component, OnInit } from '@angular/core';
import { FotoService } from '../foto.service';

@Component({
  selector: 'app-camara',
  templateUrl: './camara.component.html',
  styleUrls: ['./camara.component.scss'],
})
export class CamaraComponent  implements OnInit {

  constructor(private tomarpic : FotoService) { }

  ngOnInit() {}

  tomarfoto(){
    console.log("vbgb ");
    this.tomarpic.addNewToGallery()
  }



}
