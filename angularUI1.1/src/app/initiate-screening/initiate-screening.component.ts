import { ConstantsService } from 'app/common/constants.service';
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { ScreeningHeaderComponent } from 'app/header/screening.component'
@Component({
  selector: 'app-initiate-screening',
  templateUrl: './initiate-screening.component.html',
  styleUrls: ['./initiate-screening.component.css']
})
export class InitiateScreeningComponent implements OnInit {

  constructor(private router: Router, private header: ScreeningHeaderComponent, private constantsService: ConstantsService) {
  }

  ngOnInit() { }

  next() {
    this.router.navigate(['/screening/clientRegisterationAddHouseholdMembersComponent/0']);
    this.constantsService.changedStatusOnDefault('clientStatus');
    this.constantsService.changedStatus('initStatus', false);
  }

}
