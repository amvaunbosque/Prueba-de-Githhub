import { CustomInput } from './../custom-input/custom-input';
import { FormsModule } from '@angular/forms';
import { Component } from '@angular/core';
import { Button } from '../button/button';

@Component({
  imports: [Button, FormsModule, CustomInput],
  selector: 'app-leonardo',
  styleUrl: './leonardo.css',
  templateUrl: './leonardo.html',
})
export class Leonardo {
  casosDePrueba: number = 0;
  serieFibonacci: number[]= [];
  errorMesas= "";

handleAction(){
  if (this.casosDePrueba >=1 && this.casosDePrueba<=30){
  this.errorMesas= ""; 
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
  }else{
    this.errorMesas = "El número de casos de prube a no es entre 1 y 30"
    }
  }
}