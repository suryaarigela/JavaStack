import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: '[data-table-body]',
  template:`<tr *ngFor="let row of rows">
              <td *ngFor="let col of columns">
                  {{row[col["data"]]}}
              </td>
            </tr>
            `,
  styleUrls: ['./data-table-body.component.css']
})
export class DataTableBodyComponent implements OnInit {

@Input('rows')
  rows:any[];

@Input('columns')
    columns:any[];  
  constructor() { }

  ngOnInit() {
  }

}
