import { RightNavigation } from '../Model/right-navigation.interface';

export interface RightNavigationInterface {

    getRightNavigationModel() : RightNavigation;
    setRightNavigationModel(model: RightNavigation) : void;
}