import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JqueryDataTableComponent } from './jquery-data-table.component';
import { DataTableHeaderComponent } from './data-table-header/data-table-header.component';
import { DataTableBodyComponent } from './data-table-body/data-table-body.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [JqueryDataTableComponent, DataTableHeaderComponent, DataTableBodyComponent],
  exports:[JqueryDataTableComponent]
})
export class JqueryDataTableModule { }
