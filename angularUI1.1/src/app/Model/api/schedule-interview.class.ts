import { Worker } from './worker.class';
import { AppointmentManagement } from './appointment-management.class';
export class ScheduleInterview extends AppointmentManagement {
    constructor(
        public worker: Worker = new Worker(),
        public inquiryDate: Date = undefined //date

    ) {
        super();
    }
}