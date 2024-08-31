import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeAge'
})
export class PipeAgePipe implements PipeTransform {

  transform(value: Date, ...args: unknown[]): number {

    let age=new Date().getFullYear() - new Date(value).getFullYear()
    return age;
  }

}
