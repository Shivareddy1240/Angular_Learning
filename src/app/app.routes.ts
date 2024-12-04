import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { StructuralComponent } from './components/structural/structural.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { CourseNameComponent } from './components/course-name/course-name.component';
import { CourseDetailsComponent } from './components/course-details/course-details.component';
import { SelectedItemComponent } from './components/selected-item/selected-item.component';

export const routes: Routes = [
    {
        path : '',
        redirectTo : '/home',
        pathMatch : 'full'
    },
   {
    path: 'structural',
    component : StructuralComponent
   },
   {
    path:'home',
    component : HomeComponent
   },
   {
    path : 'courseName',
    component : CourseNameComponent
   },
   {
    path : 'courseDetails',
    component : CourseDetailsComponent
   },
   {
    path: 'selectedItem/:id',
    component : SelectedItemComponent
   },
   {
    path : '**',
    component : PageNotFoundComponent
   }
];
