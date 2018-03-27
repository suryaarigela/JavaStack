import { Component, OnInit, Input } from '@angular/core';
import { RightNavigation } from '../Model/right-navigation.interface';
import { RightNavigationService } from "./right-navigation-status.service.impl";
import { NavigationStatusEnum } from "../Enums/navigation-flow-status.enum";
import { NavigationComponentsEnum } from "../Enums/navigation-flow-components.enum";

@Component({
  selector: 'app-right-navigation-status',
  templateUrl: './right-navigation-status.component.html',
  styleUrls: ['./right-navigation-status.component.css', './right-navigation-status.component.scss']
})
export class RightNavigationStatusComponent implements OnInit {
  @Input() currentComponent : string;
  private navEnumSt = NavigationStatusEnum;
  private openComp = NavigationComponentsEnum;
  private rightNavModel : RightNavigation;
  
  constructor(private _rightNavigationService : RightNavigationService) { 
    this.rightNavModel = this._rightNavigationService.getRightNavigationModel();
  }

  ngOnInit() {
  }

  isClientRegeistered() : boolean {
    return (this.rightNavModel && this.rightNavModel.basicInfo && this.rightNavModel.additionalNames 
            && this.rightNavModel.houseHoldMember) ? true : false;
  }

  isContactInfoAdded() : NavigationStatusEnum {
    if(this.isClientRegeistered()) {
      if(this.rightNavModel.contactInformation){
        return this.navEnumSt.COMPLETED;
      } else {
        return this.navEnumSt.ACTIVE;
      }
    } else {
      return this.navEnumSt.INACTIVE;
    }
     
  }

}
