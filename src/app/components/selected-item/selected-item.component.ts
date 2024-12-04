import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-selected-item',
  standalone: true,
  imports: [],
  templateUrl: './selected-item.component.html',
  styleUrl: './selected-item.component.css'
})
export class SelectedItemComponent {
  public courseID = '';
  public courseName = '';
  constructor(private _activatedRoute : ActivatedRoute){
    this.courseID = _activatedRoute.snapshot.paramMap.get('id');
  }
}
