import { ApiMessage } from './api-message.class';

export class VerificationRequestModel {
    constructor(
        public verificationDocumentCd: string = "",
        public verificationRequestedYN: string = "",
        public verificationAutoVerified: boolean = false,
        public verificationFileList: string[] = [],
        public verificationType: string = "",
        public verifiedYN: string = "",
        public retryCount: number = undefined,
        public messages: ApiMessage[] = []
    ) { }
}