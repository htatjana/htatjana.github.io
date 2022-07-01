import {Component, OnInit} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from "@angular/platform-browser";

@Component({
  selector: 'app-c1-bypass-security-trust',
  templateUrl: './c1-bypass-security-trust.component.html',
  styleUrls: ['./c1-bypass-security-trust.component.css']
})
export class C1BypassSecurityTrustComponent implements OnInit {

  dangerousInput: string;

  trustedUrl: SafeUrl;
  trustedResourceUrl: SafeResourceUrl;
  trustedHtml: SafeHtml;
  trustedScript: SafeScript;
  trustedStyle: SafeStyle;

  constructor(private sanitizer: DomSanitizer) {
    // javascript: URLs are dangerous if attacker controlled.
    // Angular sanitizes them in data binding, but you can
    // explicitly tell Angular to trust this value:
    // this.dangerousInput = 'javascript:alert("Hi there")';
  }

  ngOnInit(): void {
  }

  trustUrl() {
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousInput);
  }

  trustHtml() {
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.dangerousInput);
  }

  trustResourceUrl() {
    this.trustedResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousInput);
  }

  trustStyle() {
    this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(this.dangerousInput);
  }

  trustScript() {
    this.trustedScript = this.sanitizer.bypassSecurityTrustScript(this.dangerousInput);
  }

  // byPassSecurity() {
  //   this.usernameElement.nativeElement.innerHTML = this.sanitizer.bypassSecurityTrustHtml(this.username);
  // }


}
