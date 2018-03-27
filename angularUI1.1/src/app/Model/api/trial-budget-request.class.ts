import { Program } from './program.class';
import { TrialBudgetClient } from './trial-budget-client.class';
import { VehicularAsset } from './vehicular-asset.class';
import { UnearnedIncome } from './unearned-income.class';
import { Asset } from './asset.class';

export class TrialBudgetRequest {
    constructor(
        public livingArrangement: string = "",
        public householdMemberSize: number = undefined,
        public program: Program = new Program(),
        public irsDependents: string = "",
        public clients: TrialBudgetClient[] = [],
        public deemarEarnedIncome: number = undefined, //number
        public deemarEarnedIncomeExpense: number = undefined, //number
        public unearnedIncomes: UnearnedIncome = new UnearnedIncome(),
        public spouseUnearnedIncome: number = undefined, //number
        public deemarUnearnedIncome: number = undefined, //number
        public rentMortgageExpense: number = undefined, //number
        public utilities: number = undefined, //number
        public medicalExpense: number = undefined, //number
        public ltc: number = undefined, //number
        public mortage: number = undefined, //number
         public houseHoldUtility: string = "",
        
        public utilityMethodType: string = "",
        public assets: Asset[] = [],
        public vehicularAssets: VehicularAsset[] = [],
        
    ) { }

}
