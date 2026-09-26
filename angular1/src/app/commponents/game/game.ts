import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { SelectOption } from '../../core/model/model';
import { Button } from '../button/button';
import { CustomSelect } from '../custom-select/custom-select';

@Component({
  standalone: true,
  imports: [CustomInput, Button, CustomSelect],
  selector: 'app-game',
  styleUrl: './game.css',
  templateUrl: './game.html',
})
export class Game {

  numeroCasosPrueba: number = 0;
  errorMessage = "";
  numeroDeJuegos: number[][] = [];

  selectOptions: SelectOption[] = [
    { selectId: 1, selectValue: "Piedra" },
    { selectId: 2, selectValue: "Papel" },
    { selectId: 3, selectValue: "Tijera" },
    { selectId: 4, selectValue: "Lagarto" },
    { selectId: 5, selectValue: "Spock" },
  ];

  handleAction() {
    if (this.numeroCasosPrueba >= 1 && this.numeroCasosPrueba <= 100) {
      this.errorMessage = "";
      this.numeroDeJuegos = [];

      for (let i = 0; i < this.numeroCasosPrueba; i++) {
        this.numeroDeJuegos.push([0, 0]);
      }
    } else {
      this.errorMessage = "El número de casos de prueba debe estar entre 1 y 100.";
    }
  }

  isEnableCalcular(sheldon: number, rajesh: number): boolean {
    return (sheldon <=1 && sheldon >= 5 && rajesh <= 1 && rajesh >=5);
  }

  calcularGanador(sheldon: number, rajesh: number): String {
    if (sheldon == rajesh) {
      return "Empate";
    }
    if (
    (sheldon.toString() === "1" && rajesh.toString() === "3") || 
    (sheldon.toString() === "1" && rajesh.toString() === "4") || 
    (sheldon.toString() === "2" && rajesh.toString() === "1") || 
    (sheldon.toString() === "2" && rajesh.toString() === "5") || 
    (sheldon.toString() === "3" && rajesh.toString() === "2") || 
    (sheldon.toString() === "4" && rajesh.toString() === "2") || 
    (sheldon.toString() === "4" && rajesh.toString() === "5") || 
    (sheldon.toString() === "5" && rajesh.toString() === "1") || 
    (sheldon.toString() === "5" && rajesh.toString() === "3")    
  ) {
    return "sheldon";
  } else {
    return "rajesh";
  }
}
}