import { Address } from './address.class';

export class AddressSearch { 
    constructor(
        public search: Address= new Address(),
        public results: Address[]=[]){}
}