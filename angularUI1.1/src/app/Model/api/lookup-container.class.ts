import {LookupBean} from './lookup-bean.class';
export class LookupContainer {
    constructor(
    public beans: LookupBean[]=[],
        public shortLookups: Map<String,String> = new Map<String, String>(),
        public longLookups: Map<String,String> = new Map<String, String>(),
        public lookupType: string= "",

    ) {
    }
}