import { OnInit } from '@angular/core/core';
import { CHECKBOX_REQUIRED_VALIDATOR } from '@angular/forms/src/directives/validators';
import { ElementRef,Input } from '@angular/core';
import { Component, ViewChild,AfterViewInit } from '@angular/core';

   var  $ = require('jquery');

 var dt      = require( 'datatables.net' );

// declare var jQuery:JQuery
@Component({
  selector: 'jquery-data-table',
  template:`
              <table #jTable [ngClass]= 'classObj' cellspacing="0" width="100%">
                  <thead data-table-header [data] = 'columns'></thead>
                  <tbody data-table-body [rows] = 'rows' [columns]='columns'></tbody>
                </table>

            `,
  styleUrls: ['./jquery-data-table.component.css']
})
export class JqueryDataTableComponent implements AfterViewInit,OnInit {

@ViewChild('jTable')
 table:ElementRef;

@Input('columns')
 columns:any[];
 
@Input('rows')
rows:any[];

@Input('stylesclass')
classObj:String;

  config={

                     dom:'t'
                     
  };

@Input('dataTableConfig')
    set tableConfig(config:any)
    {
      if(config)
       for(let param in config)
             this.config[param] = config[param];
    }


  constructor() {
    this.columns = ['Column1','Column2'];
   }

ngOnInit() {  
  if(!this.columns)
        throw new Error("Columns is a required property of jquery-dataTable");
  
}
  ngAfterViewInit() {

    $(this.table.nativeElement).DataTable(this.config);
    
  }

}
