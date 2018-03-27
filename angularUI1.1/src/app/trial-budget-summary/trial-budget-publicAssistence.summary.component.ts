import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormArray, FormBuilder, Validators } from '@angular/forms';
import { ConstantsService } from './../common/constants.service';
import { ScreeningHeaderComponent } from 'app/header/screening.component';
import { TrialBudget } from 'app/Model/api/trial-budget.class';
import { Router,ActivatedRoute } from "@angular/router";

@Component({
  selector: 'trial-budget-publicAssistence-summary',
  templateUrl: './trial-budget-publicAssistence.summary.component.html',
  styleUrls: ['./trial-budget-summary.component.css']
})
export class TrialBudgetPublicAssistenceSummaryComponent implements OnInit {

  public tbForm: FormGroup;
  private targetValue: number;
  public trialBudget: TrialBudget;

  constructor(private route: ActivatedRoute,
private _fb: FormBuilder, private constantsService: ConstantsService, private header: ScreeningHeaderComponent, private router: Router) {
    this.constantsService.subheaderTitle("Trial Budget: Public Assistence");
  }

  back() {
    this.router.navigate(['screening/trialBudget']);
  }

  ngOnInit() {
	
	console.log("Data via params: ",this.route.snapshot.data['programType']);
  }

  print(): void {
    let printContents, popupWin;
    printContents = document.getElementById('printSection').innerHTML;
    popupWin = window.open('', '_blank', 'top=0,left=0,height=100%,width=auto');
    popupWin.document.open();
    popupWin.document.write(`
          <html>
              <head>
                  <title>Print tab</title>
                  <style>
                  .section-wrpr {
  background: #fff;
  box-shadow: 0 1px 4px #ccc;
  margin-top: 5px;
  margin-bottom: 20px;
  padding-bottom: 12px;
}

.section-label {
  font-size: 1.3em;
  padding: 15px;
  font-weight: 500;
  border-bottom: 1px solid #eeeeee;
  margin-bottom: 10px;
}

.zero-padding-left {
  padding-left: 0px;
}

.zero-padding-right {
  padding-right: 0px;
}

.zero-padding-bottom {
  padding-bottom: 0px;
}

.five-padding-left {
  padding-left: 3px;
}

.eighty-padding-left {
  padding-left: 80px;
}

.buttonALign {
  float: right;
  margin-right: 54px
}

.buttonPadding {
  width: 100px;
  /* height: 1px; */
  margin-right: 225px;
  background-color: #527332!important;
}

.page {
  padding-bottom: 90px;
  display: flex;
}

.float-right {
  float: right;
}

.trash-icon {
  font-size: 25px;
  cursor: pointer;
}

.buttonPaddingClerance {
  width: 133px;
  float: right;
  margin-right: 25px;
}

.buttonPaddingVarification {
  width: 133px;
  float: right;
  margin-right: 25px;
  margin-top: -6px;
}

.padleft {
  padding-left: 30px;
}

.pushDown {
  padding-top: 5px;
}

. label-field {
  padding-top: 35px;
}

.addStatement {
  float: right;
  cursor: pointer;
  font-size: 17px;
}

.pushDown25 {
  padding-bottom: 25px;
}

.plusIconColor {
  color: #67babe;
  font-size: 1.5em;
}

.form-group-relationship {
  margin-bottom: 28px;
}

.addAlternateSSN {
  margin-left: 315px;
}

.txt-action-color {
  color: #67babe;
}

.circle {
  padding: 5px 10px;
  display: inline-block;
  -moz-border-radius: 100px;
  -webkit-border-radius: 100px;
  border-radius: 100px;
  -moz-box-shadow: 0px 0px 2px #888;
  -webkit-box-shadow: 0px 0px 2px #888;
  box-shadow: 0px 0px 2px #888;
}

.leftbutton {
  float: right;
  /* padding-top: 20px; */
  margin-right: 122px;
}

.topMarginNames {
  padding-top: 24px;
}

.form-group-real {
  margin-bottom: 45px;
}

.buttonPaddingBack {
  width: 133px;
  /* height: 1px; */
  margin-right: 25px;
}

.form-control-v1 {
  width: 94% !important;
  }

.select-suffix {
  width: 77px;
}

.paddingSSNText {
  padding-left: 15px;
}

.trashtop {
  padding-top: 1.7em;
}

.paddingAdditional {
  padding-left: 7px;
}

.width-suffix {
  width: 88% !important;
}

.addAdditionalSSN {
  cursor: pointer;
}

.addAdditionalName {
  cursor: pointer;
}

.fa-130percx {
  font-size: 1.3em;
}

.pullDown7 {
  padding-top: 7px;
}

.buttonPadding {
  width: 100px;
  margin-right: -56px;
}
.box-border-bottom {
  border-bottom: 1px solid #eee;
}
.row-view {
  padding: 18px 4px;
   
}
.rowPadding{
    padding-top: 5px;
    padding-bottom: 15px;
}
.addbutton-margin{
    margin-top: 7px;
}
.add-client-height{
  height: 15px;
}
/*.tooltipalign{
  font-size: 14px;
}*/
.indexvalue{
  z-index: 2px;
}
.hrefcolor{
  color: #337ab7;
}
.topalign{
  margin-top: -24px;
}
.row-view:hover{
 background: #f0f7f7;
}
.bottom-space{
  padding-bottom : 0px !important;
}
.alignssnReferral{
  margin-bottom : -0.1em;
}
.alignRadio{
  margin-top : 13px;
}
.label-check-modify{
  margin-top: 7px!important;
}
.check-box-label-margin{
      margin-top: -31px;
}

.buttonWidth{
  width: 130px;
}
.right-margin-add-button{
  margin-right: 6%;
  margin-top: -2%;
}
  
.right-margin-button{
    margin-right: 5%;
    margin-top: -2%;
}
.heading-top-margin{
  margin-top: -3%;
}
.label-field {
  font-weight: 600;
  font-size: 1.35rem;
  display: block;
  margin-top: 6%;
  margin-left: -16px;
}
.margin-top-client{
      margin-top: -7%;
}

.margin-left-vichel{
      margin-left: -2%;
      margin-right: 3%;
      width: 65.666667%;
}


                  </style>
              </head>
              <body onload="window.print();window.close()">${printContents}
              </body>
          </html>`
    );
    popupWin.document.close();
  }



}
