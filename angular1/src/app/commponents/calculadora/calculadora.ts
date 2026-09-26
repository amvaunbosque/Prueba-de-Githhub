import { Component } from '@angular/core';
import { CustomInput } from '../custom-input/custom-input';
import { Button } from '../button/button';

@Component({
  standalone: true,
  imports: [CustomInput, Button],
  selector: 'app-calculadora',
  styleUrl: './calculadora.css',
  templateUrl: './calculadora.html',
})
export class Calculadora {

  notas: number[] = [0, 0, 0, 0, 0, 0, 0, 0];

  pesos: number[] = [0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125, 0.125];

  notaDefinitiva: number | null = null;

  calcularNotaDefinitiva() {
    let total = 0;
    for (let i = 0; i < this.notas.length; i++) {
      total += this.notas[i] * this.pesos[i];
    }
    this.notaDefinitiva = total;
  }
}