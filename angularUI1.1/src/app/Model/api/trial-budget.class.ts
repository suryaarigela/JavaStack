import { TrialBudgetRequest } from './trial-budget-request.class';
export class TrialBudget {
    constructor(
        public request: TrialBudgetRequest = new TrialBudgetRequest(),
        public eligibleBudget: Map<String, Map<String, number>> = new Map<String, Map<String, number>>(),
        public budgetType: string = "",
        public reason: string = ""
    ) { }
}