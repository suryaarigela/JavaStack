import { HouseholdMember } from './household-member.class';
import { SearchModel } from './search-model.class';
export class ClientContainer extends SearchModel<HouseholdMember>{
    constructor(       
        public client: HouseholdMember=new HouseholdMember()
        ){
            super();
        }
}