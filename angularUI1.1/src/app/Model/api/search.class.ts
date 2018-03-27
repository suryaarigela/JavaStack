import { SocialSecurityNumber } from './social-security-number.class';

export class Search {
    constructor(
        public clientId: string = "",
        public ssn: SocialSecurityNumber = new SocialSecurityNumber(),
        public name: string = "",
        public dob: string = "",
        public sex: string = "",
        public race: string = "",//string[]
    ) { }
}