import { SelectOption } from './../../core/model/model';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-custom-select',
  styleUrl: './custom-select.css',
  templateUrl: './custom-select.html',
})
export class CustomSelect {

  @Input() selectLabel : String = "";
  @Input() selectItems: SelectOption [] = [];

  @Input() value: String | number = 0; 
  @Output() valueChange = new EventEmitter<String | number>;


  onHandleChange(value: String|number){
    console.log('Value changed:', value);
    this.value = value;
    this.valueChange.emit(value);
  }

}
