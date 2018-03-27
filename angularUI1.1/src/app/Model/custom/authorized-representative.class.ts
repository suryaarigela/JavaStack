import { Contact } from 'app/Model/custom/contact.class';

export class AuthorizedRepresentative extends Contact {
    constructor(        
        public authRepType: string="",
        public relationshipCd: string=""
       ){
            super();
       }
}
