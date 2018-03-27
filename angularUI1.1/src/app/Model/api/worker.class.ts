import { PersonName } from './person-name.class';
import { TimeSlots } from './time-slots.class';
import { Person } from './person.class';
export class Worker extends Person {
    constructor(
        public unitType: string = "",
        public unitNumber: number = undefined, //number
        public workerId: number = undefined,
        public timeSlots: Map<String, String> = new Map<String, String>()
    ) {
        super();
    }
}