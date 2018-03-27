import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert-popup',
  templateUrl: './app-alert-popup.component.html',
  styleUrls: ['./app-alert-popup.component.css']
})
export class AlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private ErrorMsg: string;
  public ErrorMessageIsVisible: boolean;

  showMessage(msg: string) {
    this.ErrorMsg = msg;
    this.ErrorMessageIsVisible = true;
  }

  hideMsg() {
    this.ErrorMessageIsVisible = false;
  }

}
