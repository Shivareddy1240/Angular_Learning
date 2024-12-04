import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CourseService } from '../../services/course.service';
import { catchError, of } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'app-course-details',
  standalone: true,
  imports: [FormsModule,CommonModule],
  providers : [CourseService],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css'
})
export class CourseDetailsComponent {
  public courseDetails = []
  public errorMessage = '';
  constructor(private _courseService : CourseService, private _router : Router) {
    this._courseService.getCourseInfo().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return of(null);
      })
    ).subscribe(
      res => this.courseDetails = res
    );
  }  
  onSelect(details){
    this._router.navigate(['/selectedItem', details.id])
  }
}
