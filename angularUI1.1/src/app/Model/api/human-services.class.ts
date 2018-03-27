import { TrialBudget } from './trial-budget.class';
import { BenefitsCase } from './benefits-case.class';
import { WorkerContainer } from './worker-container.class';
import { ClientContainer } from './client-container.class';
import { HelpTextContainer} from './help-text-container.class';
import { Address} from './address.class';
import {ApiResponseModel} from './api-response-model.class'; 
import { SearchModel } from "app/Model/api/search-model.class";
export class HumanServices extends ApiResponseModel {
    constructor(
        public benefitsCase: BenefitsCase= new BenefitsCase(),
        public verification: string="" ,
        public workerManagement: WorkerContainer= new WorkerContainer(),
        public clientManagement: ClientContainer= new ClientContainer(),
        public helpTexts: HelpTextContainer= new HelpTextContainer(),
        public addressSearch: SearchModel<Address>= new SearchModel<Address>(),
        public trialBudget: TrialBudget= new TrialBudget()                  
    ) {
        super();
    }
}