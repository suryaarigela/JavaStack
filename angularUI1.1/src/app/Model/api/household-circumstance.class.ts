import { Person } from './person.class';

export class HouseholdCircumstance{
    constructor(
        public earningsAmount: Map<String, number> = new Map<String, number>(),
        public unearnedAmount: Map<String, number> = new Map<String, number>(),
        public assetAmount: Map<String, number> = new Map<String, number>(),
        public shelterAmount: Map<String, number> = new Map<String, number>(),
        public homelessYN: string="",
        public disabledYN: string="",
        public refugeeYN: string="",
        public blindYN: string="",
        public destituteMigrantYN: string="",
        public shelterIncludesMealsYN: string="",
        public protectiveLivingArrangementYN: string="",
        public communityBasedWaiverYN: string="",
        public medicarePartAEntitlementYN: string="",
        public authorizedRepresentativeYN: string="",
        public absentParentYN: string="",
        public absentParent: Person= new Person()){ }
}