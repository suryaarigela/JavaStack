import { CommonModule }      from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: '[data-table-header]',
  template:`
           
				        <tr>
                  <th *ngFor="let column of columns">
                      <div style='white-space: nowrap;'>{{column["title"]}}</div>
                  </th>
                </tr>
           
            `,
  styleUrls: ['./data-table-header.component.css']
})
export class DataTableHeaderComponent {

@Input('data')
columns :any[];
  constructor() { }


}
