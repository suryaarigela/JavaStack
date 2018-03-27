import { EarnedIncome } from './earned-income.class';
export class UnearnedIncome {
	constructor(
		public houseHoldUnearnedIncomes: EarnedIncome[]= [],
		public spouseUnearnedIncome: number = undefined ,
		public deemerUnearnedIncome: number = undefined
    ) { }
}