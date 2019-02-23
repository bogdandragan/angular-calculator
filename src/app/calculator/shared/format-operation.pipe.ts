import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatOperation'})
export class FormatOperationPipe implements PipeTransform {
    transform(value: string): string {
      const tempElement = document.createElement("i");
      let displayValue = "";
        switch(value){
            case "*":{
              tempElement.innerHTML = "&times;";
              displayValue = tempElement.innerText;
                break;
            }
            case "/":{
                tempElement.innerHTML = "&divide;";
                displayValue = tempElement.innerText;
                break;
            }
            default:{
                displayValue = value;
                break;
            }
        }
        return displayValue;
    }
}
