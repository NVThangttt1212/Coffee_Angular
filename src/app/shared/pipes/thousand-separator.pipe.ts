import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'tien'
})
export class ThousandSeparatorPipe implements PipeTransform {
  transform(value: number): string {
    if(isNaN(value)){
      return '';
    }
    return  value.toLocaleString()
  }
}
