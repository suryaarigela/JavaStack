import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'custom-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css'],
  
})
export class DatePickerComponent implements OnInit {

@Input('datePickerRecieveData') date: string;
@Output('datePickerSendData') outgoingData = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public sendDate(data:string){
	 this.outgoingData.emit(data);       
	}
}
