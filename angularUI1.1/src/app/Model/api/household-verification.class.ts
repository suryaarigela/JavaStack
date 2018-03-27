import {VerificationRequestModel} from './verification-request-model.class';

export class HouseholdVerification{
    constructor(
    public ssnVerificationModel: VerificationRequestModel= new VerificationRequestModel(),
    public dobVerificationModel: VerificationRequestModel= new VerificationRequestModel(),
    ){}
}