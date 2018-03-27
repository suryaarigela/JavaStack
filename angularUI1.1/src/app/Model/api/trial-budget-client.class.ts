import { EarnedIncome } from './earned-income.class';

export class TrialBudgetClient {
    constructor(
        public thirtyAndOneThirdYN: string = "",
        public thirtYN: string = "",
        public dependentCareExpense: number = undefined, // number
        public earnedIncomes: EarnedIncome[] = [],
        public earnedIncomeExpenseType: string = "",
        public earnedIncomeExpense: number = undefined // number
    ) { }
}