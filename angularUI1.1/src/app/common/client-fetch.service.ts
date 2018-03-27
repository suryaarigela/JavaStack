import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';

import { HouseholdMember } from "app/Model/api/household-member.class";

 export const clients: HouseholdMember[] = [

//   {
//   householdMemberId: -1,
//   headOfHouseholdYN: "1",
//   relationshipCd: "1",
//   altNames: [{
//     firstName: "John",
//     lastName: "Diggle",
//     middleName: "",
//     suffix: "-1"
//   }, {
//     firstName: "Thea",
//     lastName: "Queen",
//     middleName: "",
//     suffix: "3"
//   }],
//   additionalSsns: [{
//     ssnPart1: 934,
//     ssnPart2: 87,
//     ssnPart3: 4665
//   }, {
//     ssnPart1: 654,
//     ssnPart2: 87,
//     ssnPart3: 9876
//   }],
//   pregnantYN: "2",
//   pregnancyDueDate: undefined,
//   aliasClientIds: [2547, 8563, 3655],
//   memberClearanceId: undefined,
//   memberClearedYN: "",
//   memberEditableYN: "",
//   homelessYN: "",
//   disabledYN: "",
//   refugeeYN: "",
//   blindYN: "",
//   destituteMigrantYN: "",
//   cases: [],
//   verification: {
//     ssnVerificationModel: {
//       verificationDocumentCd: "",
//       verificationRequestedYN: "2",
//       verificationType: "1",
//       verifiedYN: "2",
//       retryCount: 2,
//       messages: [{
//         code: "abc",
//         message: "Teat error",
//         severity: 1
//       }]
//     },
//     dobVerificationModel: {
//       verificationDocumentCd: "",
//       verificationRequestedYN: "2",
//       verificationType: "1",
//       verifiedYN: "2",
//       retryCount: 2,
//       messages: [{
//         code: "abc",
//         message: "Teat error",
//         severity: 1
//       }]
//     }
//   },
//   hasSsnYN: "1",
//   shelterIncludesMealsYN: "2",
//   protectiveLivingArrangementYN: "1",
//   communityBasedWaiverYN: "2",
//   medicarePartAEntitlement: "",
//   personName: {
//     firstName: "Jonathon",
//     lastName: "Michael",
//     middleName: "Rogers",
//     suffix: "3"
//   },
//   dob: new Date("01/9/1967"),
//   ssn: {
//     ssnPart1: 854,
//     ssnPart2: 45,
//     ssnPart3: 7854
//   },
//   gender: "1",
//   raceCds: ["1"],
//   deletedYN: "2"
// }
];

@Injectable()
export class ClientFetchService {

  constructor(private http: Http) { }

  _data: any;

  public getClients(): HouseholdMember[] {

    return clients;
    // return this.http.get('clients.json')
    //   .map(x => x.json())
    //   .map((data) =>
    //     this._data = data
    //   ).catch(this.handleError);

  }

  private handleError(errorResponse: Response) {
    console.log(errorResponse.statusText);
    return Observable.throw(errorResponse.json() || "Server error");
  }
}
