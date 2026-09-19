import { Component, signal } from '@angular/core';
import { Button } from './commponents/button/button';

@Component({
  imports: [Button],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  title: string;
  subtitile: string;
  option: number;

  constructor(){
    this.option = 0;
    this.title = "Bienvenido al seleclot de ejercicios";
    this.subtitile = "Escoja el ejercicio que desea visualizaer";
  
  }

  changeMenuOption(option: number){
    console.log(option);
    this.option=option;
  }
}


