import { KeyValue } from './key-value.class';

export class DropDown{
    constructor(
        public propName: string="",
        public values: KeyValue[]=[]){}
}