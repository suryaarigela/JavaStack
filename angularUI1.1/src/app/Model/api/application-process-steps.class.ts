import { ScreeningSteps } from './screening-steps.class';
export class ApplicationProcessSteps{
     constructor(
     public screeningSteps: ScreeningSteps = new ScreeningSteps() 
     ){}
}