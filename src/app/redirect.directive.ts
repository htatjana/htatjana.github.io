import {Directive, HostListener, Input} from '@angular/core';
import {RedirectService} from "./redirect.service";
import {DomSanitizer} from "@angular/platform-browser";

// @Reference https://medium.com/wizdm-genesys/angular-redirecting-to-external-links-bd3e785325c6


@Directive({
  selector: 'a[appRedirect],area[appRedirect]'
})
export class RedirectDirective {


  constructor(readonly redirect: RedirectService, private sanitizer: DomSanitizer) {
  }

  @Input('appRedirect') url: string;

  @HostListener('click') onClick() {
    // Fallbakcs to default if no url is specified
    if (!this.url) {
      return true;
    }
    // Navigates on the requested link redirecting when necessary
    window.location.href = this.url;
    // this.redirect.navigate(this.url);
    // Prevents default
    return false;
  }

  trustStyle(input: string) {
    this.sanitizer.bypassSecurityTrustStyle(input);
  }
}
