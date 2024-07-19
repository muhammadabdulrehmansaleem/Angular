import { RouterModule, Routes } from '@angular/router';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { Test2Component } from './test2/test2.component';
import { NgModule } from '@angular/core';
import { Test3Component } from './test3/test3.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppComponent } from './app.component';
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { TestComponent } from './test/test.component';
import { TDFComponent } from './tdf/tdf.component';

export const routes: Routes = [
    // { path: '', component: AppComponent },
    {
        path: '', component: Test3Component,
        children: [
            { path: 'tdf', component: TDFComponent }
        ]

    },
    {
        path: 'test2', component: Test2Component

    },
    // { path: 'tdf', component: TDFComponent },
    { path: 'Employees', title: 'jjjj', component: EmployeeListComponent },
    {
        path: 'employee/:id', component: EmployeeDetailComponent,
        children: [
            { path: 'test3', component: Test3Component },
            { path: 'test', component: TestComponent }
        ]

    },
    { path: 'test3', component: Test3Component },
    { path: '**', component: PageNotFoundComponent }
];