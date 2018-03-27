import { Worker } from './worker.class';

export class WorkerManagement {
    constructor(
        public search: Worker = new Worker(),
        public results: Worker[] = []
    ) { }
}