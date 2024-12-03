import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { CourseService } from '../../services/course.service';
import { catchError, of } from 'rxjs';
@Component({
  selector: 'app-course-name',
  standalone: true,
  imports: [FormsModule,CommonModule,AngularMaterialModule],
  providers : [CourseService],
  templateUrl: './course-name.component.html',
  styleUrl: './course-name.component.css'
})
export class CourseNameComponent {
  public courses = []
  public errorMessage='';
  constructor(private _courseService : CourseService){
    //Old
    // this._courseService.getCourseInfo().
    // subscribe(res => this.courses = res,
    //   err => this.errorMessage = err
    // )

    //new
     this._courseService.getCourseInfo().pipe(
      catchError(err => {
        this.errorMessage = err.message;
        return of(null);
      })
     ).subscribe(
      res => this.courses = res
     );
  }  
}
