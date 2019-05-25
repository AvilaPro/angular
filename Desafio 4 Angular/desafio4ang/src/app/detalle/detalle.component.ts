import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.scss']
})
export class DetalleComponent implements OnInit {

  public id:string;
  public infocurso:any;

  constructor(private parametro:ActivatedRoute, 
              private _cursosService:CursosService) { }

  ngOnInit() {
    this.id = this.parametro.snapshot.paramMap.get('parametroid');
    this.infocurso = this._cursosService.getCursosById(this.id);
  }

}
