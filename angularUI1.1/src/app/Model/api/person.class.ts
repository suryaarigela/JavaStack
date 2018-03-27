import { PersonName } from './person-name.class';
import { SocialSecurityNumber } from './social-security-number.class';

export class Person {
    constructor(
        public personName: PersonName = new PersonName(),
        public dob: string = "", // Date
        public ssn: SocialSecurityNumber = new SocialSecurityNumber(),
        public gender: string = "",  // enum
        public raceCds: string[] = [],
        public deletedYN: string = "") { }
}
