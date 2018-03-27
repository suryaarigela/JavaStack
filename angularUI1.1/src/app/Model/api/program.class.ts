export class Program {
    constructor(
        public programName: string = "",
        public programType: string = "",
        public medCoverageGroup: string = "",
        public availableAuId: string = "",
        public ppiGroup: string = "",
        public selectedYN: string = "", // non display suggested program
        public eligibleYN: string = "",
        public requestedYN: string = "",  // non display additional program
        public capYN: string = "",
    ) { }

}
