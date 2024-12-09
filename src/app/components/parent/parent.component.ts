import { Component, Input , ViewChild} from '@angular/core';
import { ChildComponent } from '../child/child.component';
@Component({
  selector: 'app-parent',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './parent.component.html',
  styleUrl: './parent.component.css'
})
export class ParentComponent {
  public pData = "Data coming from Parent"
  public dataFromChild = ''

  @ViewChild(ChildComponent) child
  getDataFromChild(){
    this.dataFromChild = this.child.passToParent();
  }
}
