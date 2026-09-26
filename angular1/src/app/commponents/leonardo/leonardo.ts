import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button],
  selector: 'app-leonardo',
  styleUrl: './leonardo.css',
  templateUrl: './leonardo.html',
})
export class Leonardo {
  casosDePrueba: number = 0;
  serieFibonacci: number[]= [];

handleAction(){
let a = 0;
let b = 1;
this.serieFibonacci = [];

for(let i=0; i<this.casosDePrueba; i++){
this.serieFibonacci.push(a);

const siguiente = a +b;
a = b;
b = siguiente;
}

console.log(this.serieFibonacci);
  }
}