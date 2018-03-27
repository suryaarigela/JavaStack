import { Directive, HostListener, ElementRef, OnInit } from "@angular/core";
import { SsnPipe } from "./ssn.pipe";

@Directive({ selector: "[myCurrencyFormatter]" })
export class SsnDirective implements OnInit {

  private el: any;

  constructor(
    private elementRef: ElementRef,
    private currencyPipe: SsnPipe
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