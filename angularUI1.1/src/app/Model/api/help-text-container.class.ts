import { HelpText } from './help-text.class';

export class HelpTextContainer{
    constructor(
    public moduleName: string="",
    public helpTexts: Map<string, HelpText[]> = new Map<string, HelpText[]>(),    
    sectionKeys: string[]=[]){ }
}