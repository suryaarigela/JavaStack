import { ApiMessage } from './api-message.class' 
export class ApiResponseModel{
    constructor(
        public requestActor: string="",
        public requestOwner: string="",
        public userMessages: ApiMessage[]=[],
        public requestDateTime: Date=undefined,
        public requestId: string="",
        public navigationFlowRequested: boolean=false    
    ){}
}
