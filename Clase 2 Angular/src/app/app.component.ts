import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = '';
  width = 300;
  visible = false;

  // cursos = [{nombre:"Eduardo", precio:"75$", visible:true},
  //           {nombre:"Jose Luis", precio:"no podras pagarlo", visible:true},
  //           {nombre:"Miguel", precio:"gratis", visible:true}
  // ]
  cursos: Curso[] = [
    new Curso("Javascript","1500"),
    new Curso("Java","2800"),
    new Curso("HTML","800"),
    new Curso("Word","600"),
    new Curso("Typescript","1200")
  ];
  //eliminar curso
  public eliminarCurso(curso:Curso){
    console.log(curso);
    let pos = this.cursos.indexOf(curso);
    this.cursos.splice(pos,1);
    console.log(this.cursos);
  }
  //agregar modulo
  public agregarCurso(){
    let nombre = prompt("Ingrese el nombre:");
    let precio = prompt("Ingre el precio:");
    this.cursos.push(new Curso(nombre,precio));    
  }
  public key(evt){
    console.log(evt);
  }

}

class Curso{
  nombre:string;
  precio:string;

  constructor(nombre: string,precio: string){
    this.nombre = nombre;
    this.precio = precio;
  }
}
