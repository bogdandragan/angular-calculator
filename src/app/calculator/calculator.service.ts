import { Injectable } from '@angular/core';
import { Button } from "./models/button.model";
import { ButtonType } from './enums/button-type.enum'
import { Subject, Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {
  resultChanged = new Subject<string>();
  evaluationErrorChanged = new Subject<boolean>();

  private result: string = "0";
  private isEvaluationError: boolean = false;

  private calcButtons: Button[] = [
    new Button("7",ButtonType.REGULAR),
    new Button("8",ButtonType.REGULAR),
    new Button("9",ButtonType.REGULAR),
    new Button("4",ButtonType.REGULAR),
    new Button("5",ButtonType.REGULAR),
    new Button("6",ButtonType.REGULAR),
    new Button("1",ButtonType.REGULAR),
    new Button("2",ButtonType.REGULAR),
    new Button("3",ButtonType.REGULAR),
    new Button("0",ButtonType.REGULAR),
    new Button("(",ButtonType.REGULAR),
    new Button(")",ButtonType.REGULAR),
    new Button(".",ButtonType.REGULAR),
    new Button("+",ButtonType.OPERATION),
    new Button("-",ButtonType.OPERATION),
    new Button("*",ButtonType.OPERATION),
    new Button("/",ButtonType.OPERATION),
    new Button("AC",ButtonType.CLEAR),
    new Button("CE",ButtonType.DELETE),
    new Button("=",ButtonType.SUBMIT),
  ];

  constructor() { }

  getCalcButtons(){
    return this.calcButtons;
  }

  getResult(){
    return this.result;
  }

  setResult(result: string){
    this.result = result;
    this.resultChanged.next(this.result);
  }

  appendResult(value:string){
    if(this.result == "0"){
      this.result = "";
    }
    this.result += value;
    this.resultChanged.next(this.result);
  }

  clearResult(){
    this.result = "0";
    this.resultChanged.next(this.result);
  }

  deleteSymbolFromResult(){
    if(this.result.length == 1){
      this.result = "0";
    }else{
      this.result = this.result.slice(0, -1);
    }
    this.resultChanged.next(this.result);
  }

  evaluateResult(): Observable<string> {
    try{
      if(this.result)
      return of(eval(this.result).toString());
    }catch(error){
      this.isEvaluationError = true;
      this.evaluationErrorChanged.next(this.isEvaluationError)
    }
  }

  setError(isError: boolean){
    this.isEvaluationError = isError;
    this.evaluationErrorChanged.next(this.isEvaluationError);
  }
}
