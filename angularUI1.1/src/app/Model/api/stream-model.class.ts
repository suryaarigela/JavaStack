import { ApiResponseModel } from './api-response-model.class';
export class StreamModel extends ApiResponseModel {
    constructor(
        public data: string[] = [],
        public name: string = "",
        public contentType: string = ""
    ) {
        super();
    }
}