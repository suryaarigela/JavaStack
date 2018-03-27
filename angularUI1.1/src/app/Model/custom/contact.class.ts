import { Address } from 'app/Model/api/address.class';
import { PhoneNumber } from 'app/Model/api/phone-number.class';

export class Contact{
    constructor(
        address: Address = new Address(),
        phoneNumber: PhoneNumber = new PhoneNumber()
    ){}
}