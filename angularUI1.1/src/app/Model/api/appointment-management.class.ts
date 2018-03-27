export class AppointmentManagement {
    constructor(
        public appointmentStartTime: Date= undefined,
        public appointmentEndTime: Date= undefined,
        public appointmentType: string=""  
    ) { }
}