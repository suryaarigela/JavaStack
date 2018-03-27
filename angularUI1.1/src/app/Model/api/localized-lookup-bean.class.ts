import {LookupBean} from './lookup-bean.class';
export class LocalizedLookupBean {
    constructor(
        public localeCode: string= "",
        public sortOrder: number = undefined,
        public lookupBean: LookupBean= new LookupBean()
    ) {
    }
}