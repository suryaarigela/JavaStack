export class ApiMessage{
    constructor(
        public code: string="",   // "validation.msg.id_already_exists"
        public message: string="",    //"The id provided already exists [{1}]"
        public severity: number=undefined  // 1
    ){}
}