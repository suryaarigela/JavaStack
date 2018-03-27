import { Directive, Component, Input, Output, EventEmitter, HostListener, ElementRef, Renderer } from '@angular/core';
import { CustomValidatorsService } from 'app/common/custom-validators.service';
@Directive({
    selector: '[ssnMask]',
    host: {
        '(keypress)':'prevent($event)',
        '(keyup)': 'ssnMasking($event)'
    }
})
export class SsnMaskDirective {
    constructor(private el: ElementRef,
    private render: Renderer) {
    }
    
 @Input() test: any;
    //apply regex when possible
    prevent(event: any){
        let val = event.target.value;
        let temp: string = val;
        temp = temp.replace("-", "");
        temp = temp.replace("-", "");
        if (!CustomValidatorsService.numberOnly(event) ||   temp.length >= 9) {
            event.preventDefault();
        } 
    }
    
    ssnMasking(event: any) {
        var val = event.target.value;
        let pos = this.el.nativeElement.selectionStart;
        var charCode = (event.charCode) ? event.charCode : event.keyCode;
        // Allow only backspace and delete
        if (charCode == 37 || charCode == 45) {
            // let it happen, don't do anything
            return;
        }
        else if( ((charCode == 8 || charCode == 46) && (!(/^\d{3}-\d{2}$/.test(val)))) || (/^\d{4}/.test(val)) || (/^\d{3}-\d{3}/.test(val)) ){
            let temp: string = val;
            let newSSN: string = val;
            temp = temp.replace("-", "");
            temp = temp.replace("-", "");

            if (temp.length <= 3) {
                newSSN = temp;
            } else if (temp.length > 3 && temp.length < 6) {
                newSSN = temp.substring(0, 3) + '-' + temp.substring(3);
            }
            else if (temp.length > 5) {
                newSSN = temp.substring(0, 3) + '-' + temp.substring(3, 5) + '-' + temp.substring(5);
            }
            if (newSSN.length > 0){
                event.target.value = newSSN;
                if(!(charCode == 8 || charCode == 46)){
                    if(pos == 4 || pos == 7)
                        pos = pos+1;
                }
                this.el.nativeElement.selectionStart = pos;
                this.el.nativeElement.selectionEnd = pos;
            }
        }
        this.el.nativeElement.selectionStart = pos;
        this.el.nativeElement.selectionEnd = pos;
        }
    /*@Output() valueChange: EventEmitter<string> = new EventEmitter<string>();
    onInputChange(event, keyCode) {
        console.log("2");
        if (keyCode > 47 && keyCode < 58) {
            if (event) {
                var newVal = event.replace(/\D/g, '');
                if (newVal.length == 0) {
                    newVal = '';
                }
                else if (newVal.length <= 2) {
                    newVal = newVal.replace(/^(\d{0,3})/, '$1');
                }
                else if (newVal.length <= 4) {
                    newVal = newVal.replace(/^(\d{0,3})(\d{0,2})/, '$1-$2');
                }
                else if (newVal.length <= 9) {
                    newVal = newVal.replace(/^(\d{0,3})(\d{0,2})(\d{0,4})/, '$1-$2-$3')
                }
                this.valueChange.emit(newVal);                
            }
        }
        else
            return false;
    }*/
}

    
