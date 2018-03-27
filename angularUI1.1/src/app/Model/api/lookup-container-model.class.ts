import {ApiResponseModel} from './api-response-model.class';
import {LocalizedLookupContainer} from './localized-lookup-container.class';
import {LookupContainer} from './lookup-container.class';

export class LookupContainerModel extends ApiResponseModel {
    constructor(
        public lookups: Map<String,LookupContainer> = new Map<String, LookupContainer>(),
        public localizedLookups: Map<String, LocalizedLookupContainer> = new Map<String, LocalizedLookupContainer>()                
    ) {
        super();
    }
}