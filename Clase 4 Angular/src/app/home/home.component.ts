import { Component, OnInit } from '@angular/core';
import { PeliculaService } from '../pelicula.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public peliculas:any[]
  public peliculasAPI:any[]

  constructor(private _peliculasServices:PeliculaService) { }

  ngOnInit() {
    let observable = this._peliculasServices.getPeliculasAPI();

    observable.subscribe((result:any)=>{
      this.peliculasAPI=result.Search;
      console.log(result.Search[0].Title);
      console.log(result);
    })

    console.log(this._peliculasServices.getPeliculas());
    this.peliculas = this._peliculasServices.getPeliculas();
  }

}
