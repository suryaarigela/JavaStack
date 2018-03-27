import { ApiResponseModel } from './api-response-model.class';
export class ApiError extends ApiResponseModel {
    constructor(
        public errorDetail: any=undefined,
        public errorId: string="",
        public errorInformation: string=""
    ) {
        super();
    }
}