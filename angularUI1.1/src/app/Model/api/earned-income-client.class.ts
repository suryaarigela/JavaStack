import { EarnedIncome } from './earned-income.class';
export class EarnedIncomeClient {
    constructor (
	public earnedIncomes: EarnedIncome[] = [],
    public incomeOption1: boolean = false,
    public incomeOption2: boolean = false,
    public earnedIncomeExpense: EarnedIncome = undefined,
    public dependentCareExpense: number = undefined
	){ }
}