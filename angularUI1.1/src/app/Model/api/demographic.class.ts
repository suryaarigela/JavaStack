import { PersonName } from './person-name.class';
import { SocialSecurityNumber } from './social-security-number.class';

export class Demographic {
    constructor(
        public name: PersonName=new PersonName(),
        public dob: string="",
        public ssn: SocialSecurityNumber= new SocialSecurityNumber(),
        public gender: string="",
        public raceCds : string[]=[]){}
}