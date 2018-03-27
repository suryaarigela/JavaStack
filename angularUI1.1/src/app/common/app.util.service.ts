
import { Injectable } from '@angular/core';

import { ConstantsService } from "app/common/constants.service";
import { PersonName } from "app/Model/api/person-name.class";
import { HouseholdVerification } from "app/Model/api/household-verification.class";
import { VerificationRequestModel } from "app/Model/api/verification-request-model.class";
import { ApiMessage } from 'app/Model/api/api-message.class';
import { SocialSecurityNumber } from 'app/Model/api/social-security-number.class';


@Injectable()
export class AppUtilService {


    constructor(private constantsService: ConstantsService) { }
    getFullName(person: PersonName): string {
        let fullName: string = "";
        if (person.firstName) {
            fullName += person.firstName;
        }

        if (person.middleName) {
            fullName += " " + person.middleName;
        }

        if (person.lastName) {
            fullName += " " + person.lastName;
        }

        if (person.suffix) {

            for (let entry of this.constantsService.getLookups()[0].localizedLookups['suffix'].beans) {
                if (entry.lookupBean.code == person.suffix)
                    fullName += " " + entry.lookupBean.shortLabel;
            }
        }
        return fullName;
    }

    YNConvert(yesno:string): boolean{
        return yesno.trim().toLowerCase() == "n" 
            || yesno.trim().toLowerCase() == "no"
            || yesno.trim().toLowerCase() == 'false' ? false : true
    }

    getSsn(ssn: SocialSecurityNumber): string {
        let ssnString: string = "";
        if (!ssn)
            return "";
        if (ssn.ssnPart1) {
            ssnString += ssn.ssnPart1 + "-";
        }
        if (ssn.ssnPart2) {
            ssnString += ssn.ssnPart2 + "-";
        }
        if (ssn.ssnPart3) {
            ssnString += ssn.ssnPart3;
        }
        if (new RegExp(ConstantsService.ssnPattern).test(ssnString))
            return ssnString;
        else return "";
    }

    getSsnObjectFromString(input: string): SocialSecurityNumber {
        let ssn: SocialSecurityNumber = new SocialSecurityNumber();
        if (new RegExp(ConstantsService.ssnPattern).test(input)) {
            let splittedSsn: string[] = input.split('-');
            ssn.ssnPart1 = splittedSsn[0];
            ssn.ssnPart2 = splittedSsn[1];
            ssn.ssnPart3 = splittedSsn[2];
        }
        return ssn
    }

    getToFromVo<VO, TO>(input: VO, output: TO) {
        if (input) {
            if (typeof input == "string" || typeof input == "number") {
                if (output == undefined || typeof input == typeof output)
                    output = input as any as TO;
            } else {
                for (var prop of Object.getOwnPropertyNames(input)) {
                    if (output && output.hasOwnProperty(prop) && typeof output[prop] == typeof input[prop]) {
                        if (/*Object.getOwnPropertyNames(input[prop]).length > 0 &&*/ typeof input[prop] == 'object') {
                            if (Array.isArray(input[prop])) {
                                output[prop] = [];
                                for (let arrayElement of input[prop]) {
                                    let tempObject = this.getnewObject(arrayElement); //initialize a new object of type output[prop] array's object type
                                    tempObject = this.getToFromVo(arrayElement, tempObject);
                                    output[prop].push(tempObject);
                                }
                            } else
                                output[prop] = this.getToFromVo(input[prop], output[prop]);
                        }
                        else {
                            console.log(typeof input[prop])
                            if (input[prop] instanceof Date) {
                                var copy = new Date();
                                copy.setTime(input[prop].getTime());
                                output[prop] = copy;
                            } else
                                output[prop] = input[prop];
                        }
                    } else {
                        if (typeof input[prop] == "string" || typeof input[prop] == "number") {
                            if (output[prop] == undefined || typeof input[prop] == typeof output[prop])
                                output[prop] = input[prop] as any as TO;
                        }
                        //TODO, see how to make new object of output n copy only relevent properties from input to output

                    }
                }
            }
        }
        return output;
    }

    getnewObject<T>(input: T): any {
        //TODO , cant get class name, need to get empty object according to class of input object
        var className = input.constructor.name;
        console.log(typeof input);
        if (className == "PersonName") {
            return new PersonName();
        }
        if (className == "SocialSecurityNumber") {
            return new SocialSecurityNumber();
        }
        if (className == "HouseholdVerification") {
            return new HouseholdVerification();
        }
        if (className == "VerificationRequestModel") {
            return new VerificationRequestModel();
        }
        if (className == "ApiMessage") {
            return new ApiMessage();
        }
        if (className == "HouseholdVerification") {
            return new HouseholdVerification();
        }
        return undefined;
    }
    
    changeDateFormat(el):string {
        if(el) {
            let date:any = el.split("-");
            return (date[2] + "/" + date[1] +"/" + date[0]);
        }
        return el;
    }
}
