import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { Router } from "@angular/router";
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { DataShareService } from 'app/common/data-share.service';
import { ConstantsService } from "app/common/constants.service";

@Component({
  selector: 'app-home-screen',
  templateUrl: './home-screen.component.html',
  styleUrls: ['./home-screen.component.css']
})
export class HomeScreenComponent implements OnInit, OnDestroy {
private columns:any[];
private rows:any[];
  constructor(private consts: ConstantsService, private shareService: DataShareService, private header: ScreeningHeaderComponent, private router: Router) {

    this.columns=[{data:"task",title:"TASK"},
                  {data:"priority",title:"PRIORITY"},
                  {data:"dueDate",title:"TITLE"},
                  {data:"assignedDate",title:"ASSIGNED DATE"}];
    this.rows=[{task:"Verification Submitted",priority:"High",dueDate:"19/04/2017",assignedDate:"05/04/2017"},
                {task:"Assistance Application",priority:"Medium",dueDate:"19/04/2017",assignedDate:"05/04/2017"},
                {task:"Review case history",priority:"Low",dueDate:"19/04/2017",assignedDate:"05/04/2017"}]
  }

 
  ngOnInit() {
        this.shareService.addDataToMap('hideHeaderMenus', true);
        this.shareService.addDataToMap('hideHeaderBar', true);

  }

  next() {
    this.shareService.addDataToMap('currentModule', this.consts.getText('screeningModule'));
    this.router.navigate(['/screening/initiateScreening']);
    this.consts.changedStatusOnDefault('initStatus');
  }
  // @Output() hideHeader: EventEmitter<any> = new EventEmitter();
  ngOnDestroy() {
    this.shareService.addDataToMap('hideHeaderMenus', false);
    this.shareService.addDataToMap('hideHeaderBar', false);
  }

  trialBudget() {
    this.router.navigate(['/screening/trialBudget']);
  }
}
