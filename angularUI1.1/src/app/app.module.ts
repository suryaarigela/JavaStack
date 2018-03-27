import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxDatatableModule } from '@swimlane/ngx-datatable/release/index';
import { SidebarModule } from 'ng-sidebar';
import { FileUploadModule } from 'ng2-file-upload';
import { FileSelectDirective } from "ng2-file-upload";
import 'hammerjs';
import { DatepickerModule } from 'angular2-material-datepicker';
import { NguiDatetimePickerModule } from '@ngui/datetime-picker';
import { TooltipModule } from "ngx-tooltip";

import { CurrencyMaskModule } from "ng2-currency-mask";

import { AlertComponent } from 'app/app-alert-popup/app-alert-popup.component';
import { LoginComponent } from 'app/login/login.component';
import { ForgotPasswordComponent } from 'app/forgot-password/forgot-password.component';
import { AppComponent } from 'app/app.component';
import { RightNavigationStatusComponent } from 'app/right-navigation-status/right-navigation-status.component';
import { DatePickerComponent } from 'app/date-picker/date-picker.component';
import { FooterComponent } from 'app/footer/footer.component';
import { InitiateScreeningComponent } from 'app/initiate-screening/initiate-screening.component';
import { ClientRegistrationV1Component } from 'app/client-registration-v1/client-registration-v1.component';
import { HomeScreenComponent } from 'app/home-screen/home-screen.component';
import { ContactInfoV1Component } from 'app/contact-info-v1/contact-info-v1.component';
import { ClientRegisterationAddHouseholdMembersComponent } from 'app/client-registeration-add-household-members/client-registeration-add-household-members.component';
import { ClearanceSearchComponent } from 'app/clearance-search/clearance-search.component';
import { ProgramSelectionComponent } from 'app/program-selection/program-selection.component';
import { HouseholdCircumstancesComponent } from 'app/household-circumstances/household-circumstances.component';
import { AuthorizedRepresentativeComponent } from 'app/authorized-representative/authorized-representative.component';
import { ScreeningDispositionComponent } from 'app/screening-disposition/screening-disposition.component';
import { TrialBudgetComponent } from 'app/trial-budget/trial-budget.component';
import { CaseInfoComponent } from 'app/trial-budget/trail-budget.caseInfo.component';
import { DeemerEarnedIncomeComponent } from 'app/trial-budget/trail-budget.deemerEarnedIncome.component';
import { UnEarnedIncomeArrayComponent } from 'app/trial-budget/unearnedIncome-array.component';
import { UnEarnedIncomeComponent } from 'app/trial-budget/unearnedIncome.component';
import { ExpenseInfoComponent } from 'app/trial-budget/trail-budget.expenseInfo.component';
import { AssetArrayComponent } from 'app/trial-budget/asset-array.component';
import { AssetComponent } from 'app/trial-budget/asset.component';
import { MotorVehicleComponent } from 'app/trial-budget/motorVehicle.component';
import { EarnedIncomeArrayComponent } from 'app/trial-budget/earnedIncome-array.component';
import { ClientComponent } from 'app/trial-budget/Client.component';
import { ClientArrayComponent } from 'app/trial-budget/Client-array.component';
import { EarnedIncomeComponent } from 'app/trial-budget/earnedIncome.component';
import { MotorVehicleArrayComponent } from 'app/trial-budget/motorVehicle-array.component';
import { TrialBudgetAppComponent } from 'app/trial-budget/trial-budget-app.component';
import { ScreeningHeaderComponent } from "app/header/screening.component";
import { TopMenuComponent } from 'app/header/top-menu/top-menu.component';
import { TitleStripComponent } from 'app/header/screening/title-strip/title-strip.component';
import { SidebarComponent } from 'app/header/sidebar/sidebar.component';
import { LeftNavigationComponent } from 'app/header/screening/left-navigation/left-navigation.component';
import { ClearanceSearchMenuComponent } from 'app/header/screening/clearance-search-menu/clearance-search-menu.component';
import { ScreeningBodyComponent } from 'app/header/screening/screening-body/screening-body.component';
import { RecommendedProgramsComponent } from 'app/recommended-programs/recommended-programs.component';
import { TrialBudgetFoodStampSummaryComponent } from 'app/trial-budget-summary/trial-budget-foodStamps.summary.component';
import { TrialBudgetMedicalSummaryComponent } from 'app/trial-budget-summary/trial-budget-medicalAssistence.summary.component';
import { TrialBudgetPublicAssistenceSummaryComponent } from 'app/trial-budget-summary/trial-budget-publicAssistence.summary.component';



import { SearchResultService } from 'app/common/search-result.services';
import { ClientFetchService } from 'app/common/client-fetch.service';
import { DataShareService } from 'app/common/data-share.service';
import { ConstantsService } from "app/common/constants.service";
import { CustomValidatorsService } from "app/common/custom-validators.service";
import { AuthService } from 'app/common/auth.service';
import { AppUtilService } from 'app/common/app.util.service';
import { RightNavigationService } from "app/right-navigation-status/right-navigation-status.service.impl";
import { AuthorizedRepService } from "app/common/authorized-rep.service";
import { HouseHoldCircumstanceService } from "app/common/household-circumstances.service";
import { ApiManager } from 'app/common/api-manager.service';
import { TrailBudgetService } from 'app/common/trail-budget.service';


import { SharedModule } from 'app/SharedModule/shared.module';
import { routing } from 'app/app.routes';
import { SsnMaskDirective } from "app/Directives/ssn-mask.directive";
import { JqueryDataTableModule } from 'app/jquery-data-table/jquery-data-table.module';
import { CurrencyFormatterPipe } from "app/Pipes/currency-formatter.pipe";
import { CurrencyFormatterDirectiveDirective } from "app/Directives/currency-formatter-directive.directive";
import { AppAuthGuard } from "app/app-auth.guard";
import { AppConfirmPopupComponent } from './app-confirm-popup/app-confirm-popup.component';




@NgModule({
    declarations: [
        AppComponent,
        ScreeningHeaderComponent,
        LoginComponent,
        ForgotPasswordComponent,
        RightNavigationStatusComponent,
        SsnMaskDirective,
        FooterComponent,
        InitiateScreeningComponent,
        ClientRegistrationV1Component,
        HomeScreenComponent,
        ContactInfoV1Component,
        ClientRegisterationAddHouseholdMembersComponent,
        ClearanceSearchComponent,
        ProgramSelectionComponent,
        HouseholdCircumstancesComponent,
        AuthorizedRepresentativeComponent,
        AlertComponent,
        CurrencyFormatterDirectiveDirective,
        ScreeningDispositionComponent,
        TrialBudgetComponent,
		CaseInfoComponent,
		DeemerEarnedIncomeComponent ,
		UnEarnedIncomeArrayComponent ,
		UnEarnedIncomeComponent ,
		ExpenseInfoComponent ,
		AssetArrayComponent ,
		AssetComponent ,
		MotorVehicleComponent ,
		EarnedIncomeArrayComponent ,
		ClientComponent ,
		ClientArrayComponent ,
		EarnedIncomeComponent ,
		MotorVehicleArrayComponent,
		TrialBudgetAppComponent,        
		TrialBudgetFoodStampSummaryComponent,
		TrialBudgetMedicalSummaryComponent,
		TrialBudgetPublicAssistenceSummaryComponent,
        FileSelectDirective,
        TopMenuComponent,
        TitleStripComponent,
        SidebarComponent,
        LeftNavigationComponent,
        ClearanceSearchMenuComponent,
        ScreeningBodyComponent,
        AlertComponent,
        RecommendedProgramsComponent,
        AppConfirmPopupComponent
    ],
    imports: [
        NgxDatatableModule,
        JqueryDataTableModule,
        HttpModule,
        BrowserModule,
        CurrencyMaskModule,
        FormsModule,
        BrowserAnimationsModule,
        MaterialModule,//imports all component modules for material design
        NguiDatetimePickerModule,
        ReactiveFormsModule,
        routing,
        SidebarModule.forRoot(),
        DatepickerModule,
        TooltipModule
    ],

    providers: [
        Title,
        DataShareService,
        ConstantsService,
        CustomValidatorsService,
        AppAuthGuard,
        AuthService,
        AppUtilService,
        RightNavigationService,
        ClientFetchService,
        AuthorizedRepService,
        HouseHoldCircumstanceService,
        SearchResultService,
        DatePickerComponent,
        CurrencyFormatterPipe,
        ApiManager,
		TrailBudgetService,
        CurrencyMaskModule
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
