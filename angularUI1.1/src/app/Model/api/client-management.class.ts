import { HouseholdMember } from './household-member.class';

export class ClientManagement{
    constructor(
        public client: HouseholdMember=new HouseholdMember(),
        public search: HouseholdMember=new HouseholdMember(),
        public results: HouseholdMember[]=[]){}
}