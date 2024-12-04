import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap, Route, Router } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  standalone: true,
  imports: [],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.css'
})
export class SelectedItemComponent {
  public courseID;
  public courseName = '';
  constructor(private _activatedRoute : ActivatedRoute, private _router: Router){
    // this.courseID = _activatedRoute.snapshot.paramMap.get('id');
    _activatedRoute.paramMap.subscribe((param : ParamMap)=>{
      this.courseID = parseInt(param.get('id')) 
    })
  }
  goPrevious(){
    let currentID = this.courseID -1
    // this.courseID = this.courseID - 1
    this._router.navigate(['/selectedItem',currentID])
  }
  goNext(){
    let currentID = this.courseID +1 
    // this.courseID = this.courseID + 1;
    this._router.navigate(['/selectedItem',currentID])
  }
}
