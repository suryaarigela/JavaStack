import { Address } from './address.class';
import { PhoneNumber } from './phone-number.class';

export class ContactInformation{
    public homeAddress: Address=new Address();
    public mailingAddress: Address= new Address();
    public sameMailingAddressYN: string="";
    public homeAddressYN: string="";
    public phoneNumber: PhoneNumber= new PhoneNumber();
    public altPhoneNumber: PhoneNumber= new PhoneNumber();
    public email: string="";
}