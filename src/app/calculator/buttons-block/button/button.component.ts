import { Component, OnInit, Input } from '@angular/core';
import {Button} from "../../models/button.model";
import {ButtonType} from "../../enums/button-type.enum";
import {CalculatorService} from "../../calculator.service"

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input()button: Button;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
  }

  onButtonClick(){
    let btnType = this.button.type;
    let btnValue = this.button.value;

    if(this.button.type != ButtonType.SUBMIT){
      this.calculatorService.setError(false);
    }

    switch (btnType){
      case ButtonType.OPERATION:
        this.calculatorService.appendResult(btnValue);
        break;
      case ButtonType.REGULAR:
        this.calculatorService.appendResult(btnValue);
        break;
      case ButtonType.SUBMIT:
        this.evaluateResult();
        break;
      case ButtonType.CLEAR:
        this.calculatorService.clearResult();
        break;
      case ButtonType.DELETE:
        this.calculatorService.deleteSymbolFromResult();
        break;
      default:
        break;
    }
  }

  evaluateResult(){
    this.calculatorService.evaluateResult().subscribe(
      (result) => {
        this.calculatorService.setResult(result);
      }
    );
  }
}
