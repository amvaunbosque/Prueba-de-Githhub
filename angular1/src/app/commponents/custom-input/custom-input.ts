import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-custom-input',
  styleUrl: './custom-input.css',
  templateUrl: './custom-input.html',
})
export class CustomInput {

  @Input() inputLabel : String = "";
  @Input() inputType: String = "";

  @Input() value: String | number = 0; 
  @Output() valueChange = new EventEmitter<String | number>;


  onHandleChange(value: String|number){
    console.log('Value changed:', value);
    this.value = value;
    this.valueChange.emit(value);
  }

}
