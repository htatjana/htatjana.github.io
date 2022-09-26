import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {DomSanitizer, SafeScript, SafeUrl} from "@angular/platform-browser";


@Component({
  selector: 'app-case18',
  templateUrl: './case18.component.html',
  styleUrls: ['./case18.component.css']
})
export class Case18Component implements AfterViewInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('input') input: ElementRef;
  @ViewChild('button', {static: false}) button: ElementRef;

  dangerousUrl: string;
  trustedUrl: SafeUrl;
  size = "1000";
  src: SafeScript;

  // TODO Attribute based XSS klappt nicht :(

  constructor(private route: ActivatedRoute, private renderer: Renderer2, private sanitizer: DomSanitizer) {
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      // this.renderer.setAttribute(this.input.nativeElement, 'value', params.value);
      // this.dangerousUrl = '">javascript:alert("Hi there")';
      // this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
      // this.button.nativeElement.value = params.value;
      // this.button.nativeElement.ksksksksk = this.sanitizer.bypassSecurityTrustResourceUrl(params.value);

      // const buttonElement = document.createElement('button');
      // buttonElement.value = params.value;
      // buttonElement.innerHTML = "A cute kitty button here";
      // buttonElement.setAttribute('aaa', params.value);
      // buttonElement.setAttribute('aaaa', params.value);
      // const bodyElement = document.querySelector('app-case18');
      // this.renderer.appendChild(bodyElement, buttonElement);

      // if (params.width) {
      //   this.image.nativeElement.width = params.width;
      //   this.size = params.width;
      // }

      // if (params.src || params.value) {
      //   this.src = this.sanitizer.bypassSecurityTrustResourceUrl(params.src);
      //
      //   // this.size = params.width;
      //   // this.src = 'javascript:alert("Hi there")';
      //   // this.trustedUrl = sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
      //
      //   this.renderer.setProperty(this.input.nativeElement, 'value', params.value);
      //   this.renderer.setAttribute(this.div.nativeElement, 'value', params.value);
      // }
    });
  }

  changeSize() {
    this.image.nativeElement.width = this.input.nativeElement.value;
  }
}
