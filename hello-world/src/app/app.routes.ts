import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Test2Component } from './test2/test2.component';
import { NgModule } from '@angular/core';
import { Test3Component } from './test3/test3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: 'Employees', title: 'jjjj', component: EmployeeListComponent },
    { path: 'test2', component: Test2Component },
    { path: 'test3', component: Test3Component },
    { path: '**', component: PageNotFoundComponent }
];