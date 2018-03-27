import { Program } from './program.class';

export class Eligibility{
    constructor(
        public programs: Program[]=[],
        public expeditedFoodStampsYN: string=""){}
}