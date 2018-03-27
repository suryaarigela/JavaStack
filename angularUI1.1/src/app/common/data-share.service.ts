import { Injectable } from '@angular/core';

@Injectable()
export class DataShareService {

  dataMap: Map<string, any>;
  ClientInfo: any[];
  
  constructor() {
    this.dataMap = new Map();
    this.addDataToMap('sugPrograms', [
    {
        programName: "first",
        programType: "programType1",
        medCoverageGroup: "medCoverageGroup1",
        availableAuId: "availableAuId1",
        ppiGroup: "ppiGroup1",
        selectedYN: "selectedYN1",
        eligibleYN: "eligibleYN1",
        requestedYN: "requestedYN1"
    }, {
        programName: "second",
        programType: "programType2",
        medCoverageGroup: "medCoverageGroup2",
        availableAuId: "availableAuId2",
        ppiGroup: "ppiGroup2",
        selectedYN: "selectedYN2",
        eligibleYN: "eligibleYN2",
        requestedYN: "requestedYN2"
    }
  ])
  }

  addDataToMap(key: string, value: any) {
    if (key)
      this.dataMap.set(key, value);
  }
  getClientData(key: string, value: any) {
    if (key)
      this.ClientInfo = this.dataMap.get(key);
    return value;
  }

  getDataFromMap(key: string): any {
    var val: any;
    if (key)
      val = this.dataMap.get(key);
    return val;
  }
  getDataFromMapAndClearData(key: string): any {
    var val: any = this.getDataFromMap(key);
    this.dataMap.delete(key);
    return val;
  }

  private _toggleSidebar() {
    this.addDataToMap('showLeftSidebarMenu', !this.getDataFromMap('showLeftSidebarMenu'));
  }
}
