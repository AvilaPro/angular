import { Component, OnInit } from '@angular/core';
import { CursosService } from '../cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.scss']
})
export class CursosComponent implements OnInit {

  public cursos:any[]

  constructor(private _cursosServices:CursosService) { }

  ngOnInit() {
    this.cursos = this._cursosServices.getCursos();
  }

}
