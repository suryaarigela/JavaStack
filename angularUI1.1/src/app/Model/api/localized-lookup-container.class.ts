import {LocalizedLookupBean} from './localized-lookup-bean.class';
export class LocalizedLookupContainer {
    constructor(
        public beans: LocalizedLookupBean[]=[],
        public shortLookups: Map<String,String> = new Map<String, String>(),
        public longLookups: Map<String,String> = new Map<String, String>(),
        public lookupType: string = "",
        public locale:string= ""
    ) {
    }
}