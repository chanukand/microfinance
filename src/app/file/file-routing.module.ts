import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreditSavingsUnitComponent } from './credit-savings-unit/credit-savings-unit.component';
import { ToastrModule } from 'ngx-toastr';
import { Component } from '@angular/core/src/metadata/directives';
import { BranchComponent } from './branch/branch.component';

const routes: Routes = [
  {
    path: '',
    data: {
      title: 'File'
    },
    children: [
      {
        path: '',
        redirectTo: 'branch'
      },
      {
        path: 'branch',
        component: BranchComponent,
        data: {
          title: 'Branch'
        }
      },
      {
        path: 'csu',
        component: CreditSavingsUnitComponent,
        data: {
          title: 'CSU'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes),
           ToastrModule.forRoot()
          ],
  exports: [RouterModule]
})
export class FileRoutingModule { }
