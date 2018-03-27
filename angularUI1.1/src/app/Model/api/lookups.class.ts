import { LookupData } from './lookup-data.class';
export class Lookups {
    constructor(
        public lookupData: LookupData = new LookupData(),
        public lookupKeys: string = "",
        public modelName: string = "") { }
}