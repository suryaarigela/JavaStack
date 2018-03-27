import { NavigationComponentsEnum } from "../Enums/navigation-flow-components.enum";

export interface RightNavigation {
    openComponent: NavigationComponentsEnum;
    contactInformation: boolean; 
    basicInfo: boolean;
    additionalNames: boolean;
    houseHoldMember: number;
}