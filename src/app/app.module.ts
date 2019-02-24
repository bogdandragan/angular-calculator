import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { ResultBlockComponent } from './calculator/result-block/result-block.component';
import { ButtonsBlockComponent } from './calculator/buttons-block/buttons-block.component';
import { ButtonComponent } from './calculator/buttons-block/button/button.component';
import { FormatOperationPipe } from "./calculator/shared/format-operation.pipe";
import { CalcHighlightButtonDirective } from './calculator/shared/calc-highlight-button.directive';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ResultBlockComponent,
    ButtonsBlockComponent,
    ButtonComponent,
    FormatOperationPipe,
    CalcHighlightButtonDirective
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
