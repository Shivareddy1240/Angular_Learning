import { Component } from '@angular/core';
import { UpperCasePipe,SlicePipe ,LowerCasePipe,DatePipe,TitleCasePipe,CurrencyPipe,JsonPipe, PercentPipe } from '@angular/common';

@Component({
  selector: 'app-pipes-demo',
  standalone: true,
  imports: [UpperCasePipe,SlicePipe, LowerCasePipe,DatePipe,TitleCasePipe,CurrencyPipe,JsonPipe,PercentPipe],
  templateUrl: './pipes-demo.component.html',
  styleUrl: './pipes-demo.component.css'
})
export class PipesDemoComponent {
  name = 'angular demo'
  salary = 25000

  employee = {
    name : "shiva",
    age : 34
  }
  dob = new Date();
  num = 0.98;
  myValue = ''
  company ='microsoft'
  OnButtonClick(myInput : any){
  this.myValue = myInput.value;    

  }
}
