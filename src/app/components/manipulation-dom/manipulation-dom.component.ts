import { Component, ViewChild, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-manipulation-dom',
  standalone: true,
  imports: [],
  templateUrl: './manipulation-dom.component.html',
  styleUrl: './manipulation-dom.component.css'
})
export class ManipulationDomComponent {
    @ViewChild("myDiv") getmyDiv
    @ViewChild("para") myPara
    @ViewChildren("heading") head

    ngAfterViewInit(){
      this.getmyDiv.nativeElement.oninput = () => {
        console.log(this.getmyDiv.nativeElement.value)
      }
    }

    test(){
      console.log(this.myPara.nativeElement.innerText)
      //accessing one from array
      console.log(this.head._results[1].nativeElement.innerText)
      //accessing all
      for(let element of this.head){
        console.log(element.nativeElement.innerText)
      }
    }
}
