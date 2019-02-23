import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../calculator.service";
import {Button} from "../models/button.model"
import {ButtonType} from "../enums/button-type.enum"

@Component({
  selector: 'app-buttons-block',
  templateUrl: './buttons-block.component.html',
  styleUrls: ['./buttons-block.component.scss']
})
export class ButtonsBlockComponent implements OnInit {

  regularValues : Button[] = [];
  operations : Button[] = [];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.getOperations();
    this.getRegularValues();
  }

  getOperations(){
     this.operations = this.calculatorService.getCalcButtons().filter((btn:Button)=>{
      return btn.type == ButtonType.OPERATION || btn.type == ButtonType.SUBMIT
    });
  }

  getRegularValues(){
    this.regularValues = this.calculatorService.getCalcButtons().filter((btn:Button)=>{
      return btn.type != ButtonType.OPERATION && btn.type != ButtonType.SUBMIT
    });
  }
}
