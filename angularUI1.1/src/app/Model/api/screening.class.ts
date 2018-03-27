import { BenefitsCase } from './benefits-case.class';
import { HouseholdVerification } from './household-verification.class';
import { ScreeningSteps } from './screening-steps.class';


export class Screening {
    constructor(
        public benefitsCase: BenefitsCase = new BenefitsCase(),
        public verification: HouseholdVerification = new HouseholdVerification(),
        public screeningSteps: ScreeningSteps = new ScreeningSteps(),
        public caseNarrative: string = ""
    ) { }
}