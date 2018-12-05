import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  public id:string;
  public categoria:string;
  public subcategoria:string;

  public infopelicula:any;

  constructor(private parametros:ActivatedRoute,
  private _peliculaService:PeliculaService) { }

  ngOnInit() {

    this.id = this.parametros.snapshot.paramMap.get('identificador');
    // this.categoria = this.parametros.snapshot.paramMap.get('otroparam');
    // this.subcategoria = this.parametros.snapshot.paramMap.get('subcategoria');
    // console.log(this.id);
    // console.log(this.categoria);
    // console.log(this.subcategoria);
    this.infopelicula = this._peliculaService.getPeliculasById(this.id);

  }

}
