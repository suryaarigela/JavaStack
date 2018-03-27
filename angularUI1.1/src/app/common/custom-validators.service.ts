import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';

@Injectable()
export class CustomValidatorsService {

    static validEmail(control) {
        let regex = new RegExp('^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$');
        let val = control.value;

        if (control.valid && control.dirty && val.length > 0 && !(regex.test(val.toString()))) {
            return { 'invalidEmail': 'invalid Email' };
        }
        else {
            return null;
        }
    }

     static validSsn(control) {
    let regexx = new RegExp('^(?!666|000|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0{4})\\d{4}$');
    let values = control.value;

    if (control.value != '' && !(regexx.test(values.toString()))) {
      return { 'invalidSsn': 'invalidSsn' };
    }
  }

    static invalidDate(control) {
        if (control.value) {
            if (control.value == 'Invalid date') {
                return { 'invalidDate': 'invalidDate' };
            }       
            else {
                return null;
            }
        }
    }

    static numberOnly(event: any) {
        return (event.charCode >= 48 && event.charCode <= 57);
    }

    static textOnly(event: any) {
        return (event.charCode >= 65 && event.charCode <= 90 || event.charCode >= 97 && event.charCode <= 122);
    }

    static ssnMasking(event: any) {
        var val = event.target.value;
        var charCode = (event.charCode) ? event.charCode : event.keyCode;      // Allow only backspace and delete
        if (charCode == 46 || charCode == 8 || charCode == 37 || charCode == 45) {// let it happen, don't do anything
        }
        else {   // Ensure that it is a number and stop the keypress
              if (!this.numberOnly(event)) {
                event.preventDefault();
            }
            else {
                var formatFlag = false;
                if (/^\d{3}$/.test(val)) {
                    val = val.substring(0, 3) + '-';
                    formatFlag = true;
                }
                else if (/^\d{3}-\d{2}$/.test(val)) {
                    val = val.substring(0, 6) + '-';
                    formatFlag = true;
                }
                if (formatFlag)
                    event.target.value = val;
            }
        }
    }

}
