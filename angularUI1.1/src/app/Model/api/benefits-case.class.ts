import { HouseholdMember } from './household-member.class';
import { ContactInformation } from './contact-information.class';
import { AdditionalInformation } from './additional-information.class';
import { Program } from './program.class';
import { HouseholdCircumstance } from './household-circumstance.class';
import { AuthorizedRepresentative } from './authorized-representative.class';
import { Eligibility } from './eligibility.class';
import { Signature } from './signature.class';
import { ScheduleInterview } from './schedule-interview.class';
import { ApplicationProcessSteps } from './application-process-steps.class';

export class BenefitsCase{
    constructor(
        public caseId: string="",
        public applicationDate: string="",
        public householdMembers: HouseholdMember[]=[],
        public contactInformation: ContactInformation= new ContactInformation(),
        public additionalInformation: AdditionalInformation= new AdditionalInformation(),
        public requestedPrograms: Program[]=[],
        public householdCircumstance: HouseholdCircumstance= new HouseholdCircumstance(),
        public authorizedRepresentatives: AuthorizedRepresentative[]=[],
        public eligibility: Eligibility= new Eligibility(),
        public signature: Signature=new Signature(),
        public scheduleInterview: ScheduleInterview= new ScheduleInterview(),
        public reviewUpdateNarrativeYN: string="",
        public requestBackgroundVerificationYN: string="",
        public caseStatusCode: string="",
        public steps: ApplicationProcessSteps=new ApplicationProcessSteps()){}
}