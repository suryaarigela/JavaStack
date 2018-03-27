export class Signature {
    constructor(
        public withdrawAppBeforeSigningYN: string = "",
        public withdrawAppAfterSigningYN: string = "",
        public lastNameAndRemarks: string = "",
        public email?: any,
        public newSignature?: any,
        public email_assistance?: boolean
    ) { }
}