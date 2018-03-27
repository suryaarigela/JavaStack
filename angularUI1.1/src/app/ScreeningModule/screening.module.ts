import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { ClientRegisterationAddHouseholdMembersComponent } from 'app/client-registeration-add-household-members/client-registeration-add-household-members.component';
import { InitiateScreeningComponent } from 'app/initiate-screening/initiate-screening.component';
import { ClientRegistrationV1Component } from 'app/client-registration-v1/client-registration-v1.component';
import { HomeScreenComponent } from 'app/home-screen/home-screen.component'
import { ContactInfoV1Component } from "app/contact-info-v1/contact-info-v1.component";
import { ClearanceSearchComponent } from 'app/clearance-search/clearance-search.component';
import { ProgramSelectionComponent } from 'app/program-selection/program-selection.component';
import { HouseholdCircumstancesComponent } from 'app/household-circumstances/household-circumstances.component';
import { AuthorizedRepresentativeComponent } from 'app/authorized-representative/authorized-representative.component';
// import { InformedChoiceComponent } from 'app/informed-choice/informed-choice.component';
import { ScreeningDispositionComponent } from "app/screening-disposition/screening-disposition.component";
import { TrialBudgetComponent } from "app/trial-budget/trial-budget.component";
// import { TrialBudgetFinanceComponent } from "app/trial-budget-finance/trial-budget-finance.component";


@NgModule({
    declarations: [
        ContactInfoV1Component,
        InitiateScreeningComponent,
        ClientRegistrationV1Component,
        HomeScreenComponent,
        ClientRegisterationAddHouseholdMembersComponent,
        ClearanceSearchComponent,
        ProgramSelectionComponent,
        HouseholdCircumstancesComponent,
        AuthorizedRepresentativeComponent,
        // InformedChoiceComponent,
        ScreeningDispositionComponent,
        TrialBudgetComponent, 
        // TrialBudgetFinanceComponent
    ], 
    imports: [
        FormsModule, 
        CommonModule, 
        RouterModule.forChild([
            
        ])
    ],
    providers: [
        // Title,
        // DataShareService,
        // ConstantsService,
        // CustomValidatorsService,
        // AppAuthGuard,
        // AuthService,
        // AppUtilService,
        // RightNavigationService,
        // ClientFetchService,
        // AuthorizedRepService
    ],
    exports: []
})

export class ScreeningModule {}