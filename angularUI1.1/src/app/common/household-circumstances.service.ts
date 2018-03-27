import { Injectable } from "@angular/core";
import { Subject } from "rxjs/Subject";

@Injectable()

export class HouseHoldCircumstanceService{

    EarnedIncome:string;
    EarnedIncome$;
    UnearnedIncome: string;
    UnearnedIncome$;
    AssetIncome: string;
    AssetIncome$;
    ShelterIncome: string;
    ShelterIncome$;
    Name:string;
    Name$;
    Demographics:string;
    Demographics$;


    
    private earnedIncome=new Subject<object[]>();
    private unearnedIncome=new Subject<object[]>();
    private assetIncome=new Subject<object[]>();
    private shelterIncome=new Subject<object[]>();
    private name=new Subject<object[]>();
    private demographics=new Subject<object[]>();
    
    constructor(){
        this.EarnedIncome$=this.earnedIncome.asObservable();
        this.UnearnedIncome$=this.unearnedIncome.asObservable();
        this.AssetIncome$=this.assetIncome.asObservable();
        this.ShelterIncome$=this.shelterIncome.asObservable();        
        this.Name$=this.name.asObservable();
        this.Demographics$=this.demographics.asObservable();
    }

    publishEarnedIncome(data:string)
    {
        console.log("earned Income in service "+data);
        this.EarnedIncome=data;
        return this.EarnedIncome;       
    }
    
    publishUnearnedIncome(data:string)
    {
        console.log("Unearned income in service "+data);
        this.UnearnedIncome=data;
        return this.UnearnedIncome;       
    }
    publishAssetIncome(data:string)
    {
        console.log("Unearned income in service "+data);
        this.AssetIncome=data;
        return this.AssetIncome;       
    }
    publishShelterIncome(data:string)
    {
        console.log("Unearned income in service "+data);
        this.ShelterIncome=data;
        return this.ShelterIncome;       
    }

    publishName(data:string)
    {
        console.log("name in service "+data);
        this.Name=data;
        return this.Name;       
    }

    publishDemographics(data:string)
    {
        console.log("Demographics in service "+data);
        this.Demographics=data;
        return this.Demographics;       
    }
}