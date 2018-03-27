import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
    selector: '[disableOnClick]'
})

export class DisableOnClickDirective {
    constructor(private ef: ElementRef) { }

    @HostListener('click') click() {
        setTimeout(function () {
            if(this.ef && this.ef.nativeElement) 
                this.ef.nativeElement.disabled = true;
        }, 100);
    }
}