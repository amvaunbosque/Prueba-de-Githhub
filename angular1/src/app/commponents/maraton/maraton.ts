import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { Button } from '../button/button';

@Component({
  standalone: true,
  imports: [CustomInput, Button],
  selector: 'app-maraton',
  styleUrl: './maraton.css',
  templateUrl: './maraton.html',
})
export class Maraton {

  numeroCasosPrueba: number = 0;
  errorMessage = "";
  casos: number[][] = [];
  resultados: number[] = [];

  handleAction() {
    if (this.numeroCasosPrueba >= 1 && this.numeroCasosPrueba <= 100) {
      this.errorMessage = "";
      this.casos = [];
      this.resultados = [];

      for (let i = 0; i < this.numeroCasosPrueba; i++) {
        this.casos.push([0, 0]);
      }
    } else {
      this.errorMessage = "El número de casos de prueba debe estar entre 1 y 100.";
    }
  }

  calcular() {
    this.resultados = this.casos.map(caso => this.combinatoria(caso[0], caso[1]));
  }

  private factorial(n: number): number {
    let resultado = 1;
    for (let i = 2; i <= n; i++) {
      resultado *= i;
    }
    return resultado;
  }

  private combinatoria(n: number, m: number): number {
    return this.factorial(n) / (this.factorial(m) * this.factorial(n - m));
  }
}