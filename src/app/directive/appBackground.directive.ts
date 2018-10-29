import { Directive, Input, ElementRef, Renderer, HostListener } from '@angular/core';

@Directive({
    selector: '[appBackground]'
})

export class AppBackgroundDirective {
   public defaultColor = 'yellow';
   @Input('appBackground') backgroundColor: string;
   constructor(private elementRef: ElementRef, private renderer: Renderer) {
    this.setStyle(this.defaultColor);
  }
  @HostListener('click')
  onclick(): void {
    this.setStyle(this.backgroundColor || this.defaultColor);
  }
  private setStyle(color: string) { // 调用renderer对象提供的API设置元素的背景颜色
    this.renderer.setElementStyle(this.elementRef.nativeElement,
      'backgroundColor', color);
  }
}
