import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReusableTableComponent } from './components/reusable-table/reusable-table.component';
import { ReusablePaginationComponent } from './components/reusable-pagination/reusable-pagination.component';



@NgModule({
  declarations: [
    ReusableTableComponent,
    ReusablePaginationComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ReusableTableComponent,
    ReusablePaginationComponent
  ]
})
export class SharedModule { }
