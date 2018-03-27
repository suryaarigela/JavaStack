import { HouseholdMember } from "app/Model/api/household-member.class";

export class HouseholdMemberVO{
    constructor(
        public editMode: string[] = [],
        public householdMember:HouseholdMember =new  HouseholdMember()
    ) {
      
    }
}
