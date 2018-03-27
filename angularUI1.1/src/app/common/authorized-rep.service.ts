import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()

export class AuthorizedRepService{

    
    FirstName:string;
    firstName$;
    Relation:string;
    Relation$;
    Address:string;
    Address$;
    PhoneNumber:number;
    PhoneNumber$;
    
    private firstName=new Subject<object[]>();
    private relation=new Subject<object[]>();
    private address=new Subject<object[]>();
    private phoneNumber=new Subject<object[]>();
    
    constructor(){
        this.firstName$=this.firstName.asObservable();
        this.Relation$=this.relation.asObservable();
        this.Address$=this.address.asObservable();
        this.PhoneNumber$=this.phoneNumber.asObservable();
    }

    publishRelation(data:string)
    {
        console.log("relation in service"+data);
        this.Relation=data;
        return this.Relation;       
    }
    
    publishData(data:string)
    {
        console.log("name in service"+data);
        this.FirstName=data;
        return this.FirstName;       
    }

    publishAddress(data:string)
    {
        console.log("address in service"+data);
        this.Address=data;
        return this.Address;       
    }

    publishPhoneNumber(data:number)
    {
        console.log("phonenumber in service"+data);
        this.PhoneNumber=data;
        return this.PhoneNumber;       
    }

}