import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "contact"
})
export class ContactPipe implements PipeTransform {
  transform(value: any, searchbar: any): any {
    console.log(searchbar);
    console.log(value);

    return value.filter(function(search) {
      return search.Email.toLowerCase().indexOf(searchbar.toLowerCase()) > -1;
    });
  }
}
