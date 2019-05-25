import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  private cursos:any[] = [
    {id:1, nombre:'Html', precio:'1000'},
    {id:2, nombre:'JavaScript', precio:'1500'},
    {id:3, nombre:'Angular', precio:'2000'},
    {id:4, nombre:'Ionic', precio:'2000'}
  ]

  constructor() { }

  public getCursos(){
    return this.cursos
  }

  public getCursosById(id){
    for(let i = 0; i<this.cursos.length; i++){
      if(this.cursos[i].id === Number.parseInt(id)){
        return this.cursos[i];
      }
    }
  }


}
