export class ScreeningSteps {
    constructor(
        public initiateScreeningComplete: boolean = false,
        public registrationRequired: boolean = false,
        public registrationComplete: boolean = false,
        public verificationComplete: boolean = false,
        public householdInformationRequired: boolean = false,
        public householdInformationComplete: boolean = false,
        public contactInformationRequired: boolean = false,
        public contactInformationComplete: boolean = false,
        public requestedProgramSelectionRequired: boolean = false,
        public requestedProgramSelectionComplete: boolean = false,
        public householdCircumstancesRequired: boolean = false,
        public householdCircumstancesComplete: boolean = false,
        public informedChoiceRequired: boolean = false,
        public informedChoiceComplete: boolean = false,
        public assistanceRequiredFormPrinted: boolean = false,
        public screeningDispositionRequired: boolean = false,
        public screeningDispositionComplete: boolean = false,
        public trailBudgetComplete: boolean = false,
        public screeningComplete: boolean = false
    ) { }
}