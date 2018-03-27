import { PersonName } from './person-name.class';
import { SocialSecurityNumber } from './social-security-number.class';
import { HouseholdVerification } from './household-verification.class';
import { Person } from './person.class';
export class HouseholdMember extends Person {
    constructor(
        public householdMemberId: number = undefined,
        public headOfHouseholdYN: string = "",
        public relationshipCd: string = "",
        public altNames: PersonName[] = [],
        public additionalSsns: SocialSecurityNumber[] = [],
        public pregnantYN: string = "",
        public pregnancyDueDate: Date = undefined,
        public aliasClientIds: number[] = [],
        public memberClearanceId: string = "",
        public memberClearedYN: string = "",
        public memberEditableYN: string = "",
        public cases: string[] = [],
        public verification: HouseholdVerification = new HouseholdVerification(),
        public hasSsnYN: string = "",
        public ssnReferral: string = ""
    ) {
        super();
    }
}