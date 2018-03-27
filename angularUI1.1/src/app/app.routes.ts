import { ClientRegisterationAddHouseholdMembersComponent } from './client-registeration-add-household-members/client-registeration-add-household-members.component';
import { Routes, RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { InitiateScreeningComponent } from './initiate-screening/initiate-screening.component';
import { ClientRegistrationV1Component } from './client-registration-v1/client-registration-v1.component';
import { HomeScreenComponent } from './home-screen/home-screen.component'
import { ContactInfoV1Component } from "app/contact-info-v1/contact-info-v1.component";
import { ClearanceSearchComponent } from 'app/clearance-search/clearance-search.component';
import { ProgramSelectionComponent } from './program-selection/program-selection.component';
import { HouseholdCircumstancesComponent } from './household-circumstances/household-circumstances.component';
import { AuthorizedRepresentativeComponent } from './authorized-representative/authorized-representative.component';
import { RecommendedProgramsComponent } from './recommended-programs/recommended-programs.component';
import { ScreeningDispositionComponent } from "app/screening-disposition/screening-disposition.component";
import { TrialBudgetComponent } from "./trial-budget/trial-budget.component";
import { TrialBudgetFoodStampSummaryComponent } from 'app/trial-budget-summary/trial-budget-foodStamps.summary.component';
import { TrialBudgetMedicalSummaryComponent } from 'app/trial-budget-summary/trial-budget-medicalAssistence.summary.component';
import { TrialBudgetPublicAssistenceSummaryComponent } from 'app/trial-budget-summary/trial-budget-publicAssistence.summary.component';
import { AppAuthGuard } from "app/app-auth.guard";
import { ScreeningHeaderComponent } from "app/header/screening.component";

const routes: Routes = [
  {
    path: 'clearenceSearch',
    component: ClearanceSearchComponent,
    canActivate: [AppAuthGuard]
  },
      // {
      //   path: 'clientRegistrationV1',
      //   component: ClientRegistrationV1Component

      // },
  {
    path: '',
    redirectTo: 'Login',
    pathMatch: 'full'
  },
  {
    path: 'Login',
    component: LoginComponent
  },
  {
    path: 'screening',
    component: ScreeningHeaderComponent,
    canActivate: [AppAuthGuard],
    children: [
      {
        path: 'contactInformationV1',
        component: ContactInfoV1Component,
      },
      {
        path: 'initiateScreening',
        component: InitiateScreeningComponent
      },
      {
        path: 'clientRegistrationV1',
        component: ClientRegistrationV1Component

      },
      {
        path: 'homeScreen',
        component: HomeScreenComponent
      },
      {
        path: 'clientRegisterationAddHouseholdMembersComponent/:id',
        component: ClientRegisterationAddHouseholdMembersComponent
      },
      /*uncommented*/
      {
         path: 'clearanceSearchComponent',
       component: ClearanceSearchComponent
      }, /*uncommented*/
      {
        path: 'programSelection',
        component: ProgramSelectionComponent
      },
      {
        path: 'householdCircumstances',
        component: HouseholdCircumstancesComponent
      },
      {
        path: 'authRepresentative',
        component: AuthorizedRepresentativeComponent
      },
      {
        path: 'recommendedPrograms',
        component: RecommendedProgramsComponent  },
      {

        path: 'screeningDisposition',
        component: ScreeningDispositionComponent
      },
       {

        path: 'trialBudget',
        component: TrialBudgetComponent
      },
      {
        path: 'trialBudgetMedical',
        component: TrialBudgetMedicalSummaryComponent,
		data : {
			programType : "Medical"
		}
      },{
        path: 'trialBudgetPublicAssistence',
        component: TrialBudgetPublicAssistenceSummaryComponent,
		data : {
			programType : "Public Assistence"
		}
      },{
        path: 'trialBudgetFoodStamp',
        component: TrialBudgetFoodStampSummaryComponent,
		data : {
			programType : "FoodStamp"
		}
      }
    ]
  },

  {
    path: 'ForgotPassword',
    component: ForgotPasswordComponent
  },
  {
    path: '**',
    redirectTo: '/Login'
  }
];
export const routing = RouterModule.forRoot(routes);
