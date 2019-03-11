import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FileRoutingModule } from './file-routing.module';
import { CreditSavingsUnitComponent } from './credit-savings-unit/credit-savings-unit.component';
import { CsuServiceService } from '../services/csu.service.service';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { AngularDraggableModule } from 'angular2-draggable';
import { CollapseModule } from 'ngx-bootstrap/collapse';
import { BranchComponent } from './branch/branch.component';

@NgModule({
  declarations: [CreditSavingsUnitComponent, BranchComponent],
  imports: [
    CommonModule,
    FileRoutingModule,
    FormsModule,
    HttpModule,
    AngularDraggableModule,
    CollapseModule,
    ToastrModule.forRoot()
  ],
  providers: [CsuServiceService]
})
export class FileModule { }
