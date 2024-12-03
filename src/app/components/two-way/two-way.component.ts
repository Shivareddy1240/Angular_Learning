import { Component } from '@angular/core';
import { AngularMaterialModule } from '../../modules/angular-material/angular-material.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-two-way',
  standalone: true,
  imports: [AngularMaterialModule,CommonModule,FormsModule],
  templateUrl: './two-way.component.html',
  styleUrl: './two-way.component.css'
})
export class TwoWayComponent {
public style = 'myInput'
public fname : string = ''
public myText : string = 'Default Text'
onClick(name){
  console.log("Welcome :", name)
  this.fname = name
}
}
