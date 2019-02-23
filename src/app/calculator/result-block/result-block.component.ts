import { Component, OnInit } from '@angular/core';
import {CalculatorService} from "../calculator.service";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-result-block',
  templateUrl: './result-block.component.html',
  styleUrls: ['./result-block.component.scss']
})
export class ResultBlockComponent implements OnInit {
  result:string;
  isEvaluationError:boolean = false;

  resultSubscription: Subscription;
  errorSubscription: Subscription;

  constructor(private calculatorService: CalculatorService) { }

  ngOnInit() {
    this.resultSubscription = this.calculatorService.resultChanged
      .subscribe(
      (result: string) => {
        this.result = result;
      }
    );
    this.errorSubscription = this.calculatorService.evaluationErrorChanged
      .subscribe(
      (isError: boolean) => {
        this.isEvaluationError = isError;
      }
    );
    this.setResult();
  }

  setResult(){
    this.result = this.calculatorService.getResult();
  }

  ngOnDestroy() {
    this.resultSubscription.unsubscribe();
    this.errorSubscription.unsubscribe();
  }
}
