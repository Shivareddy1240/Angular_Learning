import { Component } from '@angular/core';

@Component({
  selector: 'app-evnt-binding',
  standalone: true,
  imports: [],
  templateUrl: './evnt-binding.component.html',
  styleUrl: './evnt-binding.component.css'
})
export class EvntBindingComponent {
onClick(){
  console.log("You clicked this button");
}
ondblClick(){
  console.log("You double clicked this button");
}
onmouseOver(){
  console.log("You mouse over on this button");
}
onmouseOut(){
  console.log("You mouse out from this button");
}
onKeyDown(){
  console.log("key down");
}
onKeyUp(){
  console.log("key up");
}
onKeyPress(){
  console.log("key press");
}
onFocus(){
  console.log("focused on textbox");
}
onInput(){
  console.log("entered text in textbox");
}
}
