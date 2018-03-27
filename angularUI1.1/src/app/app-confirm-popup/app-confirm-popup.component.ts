import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-app-confirm-popup',
  templateUrl: './app-confirm-popup.component.html',
  styleUrls: ['./app-confirm-popup.component.css']
})

export class AppConfirmPopupComponent implements OnInit {
  @Output() onSuccessCallback = new EventEmitter<boolean>();

  private ConfirmMsg: string;
  public ConfirmMessageIsVisible: boolean;

  constructor() { }

  ngOnInit() {
  }

  showMessage(msg: string) {
    this.ConfirmMsg = msg;
    this.ConfirmMessageIsVisible = true;
  }

  successMsg() {
    this.ConfirmMessageIsVisible = false;
    this.onSuccessCallback.emit(true);
  }

  cancelMsg() {
    this.ConfirmMessageIsVisible = false;
    this.onSuccessCallback.emit(false);
  }

}
