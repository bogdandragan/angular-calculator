import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../calculator.service";

@Component({
  selector: 'app-buttons-block',
  templateUrl: './buttons-block.component.html',
  styleUrls: ['./buttons-block.component.scss']
})
export class ButtonsBlockComponent implements OnInit {

  operations : string[] = [];
  calcValues : string[] = [];

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.getOperations();
    this.getCalcValues();
  }

  getOperations(){
    this.operations = this.calculatorService.getOperations();
  }

  getCalcValues(){
    this.calcValues = this.calculatorService.getCalcValues();

  }

}
