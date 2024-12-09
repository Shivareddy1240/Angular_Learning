import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ParentComponent } from "../parent/parent.component";

@Component({
  selector: 'app-child',
  standalone: true,
  imports: [ParentComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
@Input() public parentPostMan
@Output() public cData = new EventEmitter()
onClick(){
  this.cData.emit("This is child data")
}
data = "demo of view child"
passToParent(){
return this.data;
}
}
