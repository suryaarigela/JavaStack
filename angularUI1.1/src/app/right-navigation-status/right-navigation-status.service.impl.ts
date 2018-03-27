import { RightNavigation } from '../Model/right-navigation.interface';
import { RightNavigationInterface } from './right-navigation-status.service';
import { NavigationComponentsEnum } from "../Enums/navigation-flow-components.enum";

export class RightNavigationService implements RightNavigationInterface {
    private navigationModel: RightNavigation = {basicInfo: false, additionalNames: false, houseHoldMember: 1, 
        contactInformation: false, openComponent: NavigationComponentsEnum.CLIENTREGISTRATION};
    getRightNavigationModel() : RightNavigation {
        return this.navigationModel;
    }

    setRightNavigationModel(model: RightNavigation) : void {
        this.navigationModel = model;
    }
}