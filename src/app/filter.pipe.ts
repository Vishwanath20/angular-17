import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
  standalone: true,
  pure:false
})
export class FilterPipe implements PipeTransform {

  transform(value: any, filterString:string) {
    if(value.lenth === 0 || filterString === ""){
      return value;
    }
    
    const users = [];
    for(const user of value){
      if(user['name']===filterString){
        users.push(user);
      }
    }
    return users;
  }

}
