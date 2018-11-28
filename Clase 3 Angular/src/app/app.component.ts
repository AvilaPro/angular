import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'clase3';
  //dentro del ViewChild debe ir el identificado #xxxx
  @ViewChild('nombreHtml')
  public inputNombre

  nombre:string = "";
  apellido:string = "";

  

  constructor(){
    console.log(document.getElementById('nameregistro'));
    // una forma de ver el contenido del html
    
  }

  ngOnInit(): void {
    console.log(document.getElementById('nameregistro'));
    // otra forma de ver el contenido, recordar que esto es al estilo js
  console.log(this.inputNombre);
  
    
  }
}


