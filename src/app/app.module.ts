import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalcAppComponent } from './calc-app/calc-app.component';
import { ButtonComponent } from './calculator/buttons-block/button/button.component';
import { ResultBlockComponent } from './calculator/result-block/result-block.component';
import { ButtonsBlockComponent } from './calculator/buttons-block/buttons-block.component';
import { CalculatorComponent } from './calculator/calculator.component';
import {FormatOperationPipe} from "./calculator/shared/format-operation.pipe";

@NgModule({
  declarations: [
    AppComponent,
    CalcAppComponent,
    ButtonComponent,
    ResultBlockComponent,
    ButtonsBlockComponent,
    CalculatorComponent,
    FormatOperationPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
