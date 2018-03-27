import { Person } from './person.class';
export class AuthorizedRepresentative extends Person{
    constructor(        
        public authRepType: string="",
        public relationshipCd: string=""
       ){
            super();
       }
}
