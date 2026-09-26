import { Button } from './../button/button';
import { CustomInput } from './../custom-input/custom-input';
import { Component, Input } from '@angular/core';

@Component({
  imports: [Button, CustomInput],
  selector: 'app-nestor',
  styleUrl: './nestor.css',
  templateUrl: './nestor.html',
})

export class Nestor {
  casosDePrueba: number = 0;
  numeroDeVotaciones : number[][] = [];
  errorMesas= "";

handleAction(){
  if (this.casosDePrueba >=1 && this.casosDePrueba<=100){
  this.errorMesas= ""; 
this.numeroDeVotaciones = [];

for(let i=0; i<this.casosDePrueba;i++){
  let votaciones: number []=[];
  votaciones.push(0);
  votaciones.push(0);
  console.log(votaciones);
  this.numeroDeVotaciones.push(votaciones);

}

console.log(this.numeroDeVotaciones);
  }else{
    this.errorMesas = "El número de casos de pruba no es entre 1 y 100"
    }
  }

  isEnableCalcular(votosFavor: number, votosContra: number): Boolean{
    return votosFavor> 0 && votosContra>0;

  }

  calcularGanador(votosFavor: number, votosContra: number): String{
    if(votosFavor> votosContra){
    return "Nestor se va";
    } else{
      return "nestor se queda";
    }
  }
}