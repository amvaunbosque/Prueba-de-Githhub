import { Nestor } from './commponents/nestor/nestor';
import { Component, signal } from '@angular/core';
import { Button } from './commponents/button/button';
import { Calculadora } from './commponents/calculadora/calculadora';
import { Leonardo } from './commponents/leonardo/leonardo';
import { Game } from './commponents/game/game';
import { Corre } from './commponents/corre/corre';
import { Maraton } from './commponents/maraton/maraton';
import { Notas } from './commponents/notas/notas';
import { MenuButton } from './core/model/model';
@Component({
  imports: [Button, Calculadora, Leonardo, Game, Corre, Nestor, Maraton, Notas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title: String;
  subtitile: String;
  option: Number;
  menuOptions : MenuButton[];

  constructor(){
    this.option = 0;
    this.title = "Bienvenido al seleclot de ejercicios";
    this.subtitile = "Escoja el ejercicio que desea visualizaer";
    this.menuOptions = [
    {
      "textButton": "Iniciar PPTLS",
      "labelMessage": "Juego piedra, papel y tijera",
      "actionNumber": 1
      
    },

    {
      "textButton": "Calculadora",
      "labelMessage": "Calculadora de notas ds3-2026",
      "actionNumber": 2
      
    },
    {
      "textButton": "Leonardo",
      "labelMessage": "Serie de fibonacci",
      "actionNumber":3
      
    },

    {
      "textButton": "MAraton",
      "labelMessage": "Juego piedra, papel y tijera",
      "actionNumber": 4
      
    },

    {
      "textButton": "Nestor",
      "labelMessage": "Juego piedra, papel y tijera",
      "actionNumber": 5
      
    },

    {
      "textButton": "Notas",
      "labelMessage": "Calculadroa de carlos",
      "actionNumber": 6
      
    },

    {
      "textButton": "Corre",
      "labelMessage": "calculador de corredores",
      "actionNumber": 7
    },
  ];
  }

  changeMenuOption(option: Number){
    console.log(option);
    this.option=option;
  }
}


