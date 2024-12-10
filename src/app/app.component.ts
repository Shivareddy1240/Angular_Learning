import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CommonModule, UpperCasePipe,LowerCasePipe } from '@angular/common';
import { EvntBindingComponent } from "./components/evnt-binding/evnt-binding.component";
import { TwoWayComponent } from "./components/two-way/two-way.component";
import { StructuralComponent } from "./components/structural/structural.component";
import { ParentComponent } from "./components/parent/parent.component";
import { ChildComponent } from "./components/child/child.component";
import { PipesDemoComponent } from "./components/pipes-demo/pipes-demo.component";
import { ManipulationDomComponent } from "./components/manipulation-dom/manipulation-dom.component";
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomeComponent, CommonModule, EvntBindingComponent, TwoWayComponent, StructuralComponent, ParentComponent, ChildComponent, PipesDemoComponent, ManipulationDomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Angular_Learning';
  name:string = "Shiva";
  isDisabled : boolean = false;
  emp = [
    {name: "shivareddym",age: 35},
    {name: null,age: 25},
    {name: "anushareddym",age: 30}
  ]
  img = 'https://th.bing.com/th/id/OIP.ensiLtlsMoQxpqIoO-IyYgHaEo?w=363&h=187&c=7&r=0&o=5&pid=1.7'

  public getEmployee(){
    return this.emp;
  }
  public myTextSize = 'textSize'
  public myGroup={
    textColor : true,
    textSize : true
  }

  public myStyleGroup = {
    color:'orange',
    fontStyle:'italic',
    fontWeight:'bold'
  }
  public isRequired:boolean = true;

  public myColor = 'blue';
}
