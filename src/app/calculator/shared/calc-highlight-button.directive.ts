import { Directive, Input, ElementRef } from '@angular/core';
import { ButtonType } from "../enums/button-type.enum";

@Directive({
  selector: '[appCalcHighlightButton]'
})
export class CalcHighlightButtonDirective {

  @Input("appCalcHighlightButton") buttonType: ButtonType;

  constructor(private el: ElementRef) { }

  ngOnChanges(){
    switch (this.buttonType){
      case ButtonType.REGULAR:
        this.el.nativeElement.className = "regular-button";
        break;
      case ButtonType.OPERATION:
        this.el.nativeElement.className = "operation-button";
        break;
      case ButtonType.CLEAR:
        this.el.nativeElement.className = "clear-button";
        break;
      case ButtonType.DELETE:
        this.el.nativeElement.className = "delete-button";
        break;
      case ButtonType.SUBMIT:
        this.el.nativeElement.className = "eval-button";
        break;
      default:
        break;
    }
  }
}
