import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-button',
  styleUrl: './button.css',
  templateUrl: './button.html',
})
export class Button {
@Input() textButton!: String;
@Input() labelMessage: String = "PAra cargar informacion";
@Output() buttonClick = new EventEmitter<boolean>();

  onclickButton(){
    this.buttonClick.emit(true);
  }
}
