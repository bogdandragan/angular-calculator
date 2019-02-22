import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'formatOperation'})
export class FormatOperationPipe implements PipeTransform {
    transform(value: string): string {
        let displayValue = "";
        switch(value){
            case "*":{
                displayValue = "x";
                break;
            }
            case "/":{
                displayValue = "/";
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