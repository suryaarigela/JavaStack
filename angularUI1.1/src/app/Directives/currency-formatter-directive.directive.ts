import { Directive, ElementRef, HostListener } from '@angular/core';
import { CurrencyFormatterPipe } from "app/Pipes/currency-formatter.pipe";

@Directive({
  selector: '[appCurrencyFormatterDirective]'
})
export class CurrencyFormatterDirectiveDirective {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: CurrencyFormatterPipe
  ) {
    this.el = this.elementRef.nativeElement;

  }

  ngOnInit() {
    this.el.value = this.currencyPipe.transform(this.el.value);
  }

  @HostListener("focus", ["$event.target.value"])
  onFocus(value) {
    this.el.value = this.currencyPipe.parse(value); // opossite of transform
  }

  @HostListener("blur", ["$event.target.value"])
  onBlur(value) {
    this.el.value = this.currencyPipe.transform(value);
  }
}
