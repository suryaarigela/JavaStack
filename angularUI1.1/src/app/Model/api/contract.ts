import { Email } from "./email";

export interface Contract {
  id?: number;
  name: string;
  emails: Email[];
};
