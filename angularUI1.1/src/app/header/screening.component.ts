import { ConstantsService } from './../common/constants.service';
import { DataShareService } from 'app/common/data-share.service';
import { Component, OnInit, ElementRef } from '@angular/core';
import { AuthService } from 'app/common/auth.service';
import { Router, NavigationEnd } from "@angular/router";

import { Http } from '@angular/http';

import { FormBuilder, FormGroup, Validators, FormControl, FormArray } from '@angular/forms';
import { ISearch } from "app/Model/SearchR";


declare var $: any;

@Component({
  selector: 'app-header',
  templateUrl: './screening.component.html',
  styleUrls: ['./screening.component.scss'],
})
export class ScreeningHeaderComponent implements OnInit {
  clientSearchRequest: FormGroup;
  clientSearchResults: ISearch[];
  clientSearchResultsAvailable = false;
  public elementRef;

  ngOnInit(): void {
    this.shareService.addDataToMap('hideSearchHeader', true);
    this.shareService.addDataToMap('showLeftSidebarMenu', false);
    this.shareService.addDataToMap('hideRunVerificationBelowMenu', true);
    this.router.events.subscribe((evt) => {
      if (!(evt instanceof NavigationEnd)) {
        return;
      }
      window.scrollTo(0, 0)
    });


  }
  constructor(private authService: AuthService,
    private router: Router,
    private shareService: DataShareService,
    private constantsService: ConstantsService,
    private http: Http,
    myElement: ElementRef,
    private fb: FormBuilder
  ) {
  }

  logout(): void {
    this.authService.setLoginStatus(false);
    this.router.navigate(['/Login']);
  }
  // onSubmit({ value }: { value: ClientSearchRequest }) {
  //   this.shareService.addDataToMap('hideSearchDetails', true);
  // }
}




