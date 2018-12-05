import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PeliculaService {

  private peliculas:any[] = [
    {id:1, nombre:'Thor', fecha:'2018', url:'https://images-na.ssl-images-amazon.com/images/I/91P1wWqX63L._SL1500_.jpg'},
    {id:2, nombre:'Venom', fecha:'2018'},
    {id:3, nombre:'Hulk', fecha: '2016'},
    {id:4, nombre:'Spiderman', fecha:'2015'}
  ]

  constructor(private http: HttpClient) { }

  public getPeliculasAPI(){
    return this.http.get("http://www.omdbapi.com/?apikey=92c1362b&s=venom");
  }

  public getPeliculas(){
    return this.peliculas
  }

  public getPeliculasById(id){
    for(let i = 0; i<this.peliculas.length;i++){
      if(this.peliculas[i].id === Number.parseInt(id)){
        return this.peliculas[i];
      }
    }
  }
}
