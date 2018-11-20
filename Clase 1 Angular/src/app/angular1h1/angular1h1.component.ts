import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-angular1h1',
  templateUrl: './angular1h1.component.html',
  styleUrls: ['./angular1h1.component.css']
})
export class Angular1h1Component implements OnInit {

  fotopinguino = "./assets/img/Penguins.jpg";

  lorem=`Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod ${this.fotopinguino}`;

  

  constructor() { }

  ngOnInit() {
  }

}

