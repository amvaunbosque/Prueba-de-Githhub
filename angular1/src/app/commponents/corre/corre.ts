import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { Button } from '../button/button';

@Component({
  standalone: true,
  imports: [CustomInput, Button],
  selector: 'app-corre',
  styleUrl: './corre.css',
  templateUrl: './corre.html',
})
export class Corre {

  numeroCasosPrueba: number = 0;
  errorMessage = "";
  // Cada caso: [Ax, Ay, Bx, By, C, D]
  casos: number[][] = [];
  resultados: string[] = [];

  handleAction() {
    if (this.numeroCasosPrueba >= 1 && this.numeroCasosPrueba <= 100) {
      this.errorMessage = "";
      this.casos = [];
      this.resultados = [];

      for (let i = 0; i < this.numeroCasosPrueba; i++) {
        this.casos.push([0, 0, 0, 0, 0, 0]);
      }
    } else {
      this.errorMessage = "El número de casos de prueba debe estar entre 1 y 100.";
    }
  }

  calcular() {
    this.resultados = this.casos.map(caso => this.alcanza(caso));
  }

  private alcanza(caso: number[]): string {
    const [ax, ay, bx, by, c, d] = caso;

    const distancia = Math.sqrt((bx - ax) ** 2 + (by - ay) ** 2);
    const tiempoNecesario = distancia / c;

    return tiempoNecesario <= d ? "si" : "no";
  }
}