import { ConstantsService } from 'app/common/constants.service';
import { DataShareService } from 'app/common/data-share.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  private _modeNum: number = 0;
  private _positionNum: number = 0;
  private _closeOnClickOutside: boolean = true;
  private _closeOnClickBackdrop: boolean = true;
  private _showBackdrop: boolean = true;
  private _animate: boolean = true;
  private _trapFocus: boolean = true;
  private _autoFocus: boolean = true;
  private _keyClose: boolean = false;
  private _sidebarClass: String = "app-sidebar";

  private _MODES: Array<string> = ['over', 'push', 'slide', 'dock'];
  private _POSITIONS: Array<string> = ['left', 'right', 'top', 'bottom'];


  constructor(private router: Router, private shareService: DataShareService, private consts: ConstantsService) { }

  ngOnInit() {
  }
  _onCloseStart() {
    this.shareService.addDataToMap('showLeftSidebarMenu', false);
  }
  navigateToScreening() {

    this.shareService.addDataToMap('currentModule', this.consts.getText('screeningModule'));
    this.router.navigate(['/screening/initiateScreening']);
    this.consts.changedStatusOnDefault('initStatus');
  }

}
