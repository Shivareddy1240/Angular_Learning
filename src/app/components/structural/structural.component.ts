  import { CommonModule } from '@angular/common';
  import { Component } from '@angular/core';
  import { FormsModule } from '@angular/forms';
  import { CommonExecOptions } from 'child_process';

  @Component({
    selector: 'app-structural',
    standalone: true,
    imports: [CommonModule,FormsModule],
    templateUrl: './structural.component.html',
    styleUrl: './structural.component.css'
  })
  export class StructuralComponent {
  public isRequired : boolean = false;
  public names = ['Shiva','Anusha','Akash'];
  public employee = {
    id : 1,
    name : 'shiva'
  }
  public employees = [
    {
      id : 1,
      name: 'shiva'
    },
    {
      id : 2,
      name: 'Anusha'
    },
    {
      id : 3,
      name:'Akash'
    }
  ]
  public Check(){
  return this.isRequired = true;
  }
  }
