import { Injectable } from '@angular/core';
import {Button} from "./models/button.model";

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  private operations: string[] = ["+","-","*","/"];
  private calcValues: string[] = ["7","8","9","4","5","6","1","2","3","0","(",")","."];
  
  constructor() { }

  getOperations(){
    return this.operations;
  }

  getCalcValues(){
    return this.calcValues;
  }
}
