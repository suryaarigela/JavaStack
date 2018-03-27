import { ApiMessage } from './api-message.class';

export class BusinessException{
    constructor(
        public requestActor: string="",       //"unknown"
        public requestOwner: string="",       //"anonymous"
        public userMessages: ApiMessage[]=[],
        public requestDateTime: string="",    //"2017-06-03T01:27:12.979-04:00"
        public requestId: string="",          //"10fc020a-2f3d-4724-973e-3d650e3e01d5"
        public navigationFlowRequested: boolean=false){}
}