import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer, SafeHtml, SafeResourceUrl, SafeScript, SafeStyle, SafeUrl} from "@angular/platform-browser";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-spielwiese',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit, AfterViewInit {

  // Variable für Fall 1-1
  @ViewChild('usernameElement') usernameElement: ElementRef;

  // Variable für Fall 1-1
  username: string;

  dangerousInput: string;
  dangerousUrl: string;

  trustedUrl: SafeUrl;
  trustedResourceUrl: SafeResourceUrl;
  trustedHtml: SafeHtml;
  trustedScript: SafeScript;
  unusedTrustedScript: SafeScript;
  trustedStyle: SafeStyle;

  test: string;

  private readonly usernameLocalStorageKey = "username";
  private readonly pictureUrlLocalStorageKey = "profile-image";


  constructor(private sanitizer: DomSanitizer, private route: ActivatedRoute, private router: Router) {

    // Fall 1-1: Schritt 2
    this.route.queryParams
      .subscribe((params: any) => {
        this.username = params.username;
      });

  }

  ngAfterViewInit(): void {

    // Fall 1-1: Schritt 3 (sink)
    this.usernameElement.nativeElement.innerHTML = this.username;

  }

  ngOnInit(): void {

    this.getImageFromLocalStorage();
  }


  getUsernameFromLocalStorage() {
    // Fall 2-1: Schritt 3 - Holen des Payloads aus LocalStorage
    this.dangerousUrl = localStorage.getItem(this.pictureUrlLocalStorageKey) ? localStorage.getItem(this.pictureUrlLocalStorageKey)! : 'assets/wilfred-worrior2-quadrat.png';
    this.trustUrl();

  }

  saveUsername() {
    // Fall 2-1: Schritt 2.1 - Zwischenspeicherung des Payloads im LocalStorage

  }

  saveImageUrl() {
    // Fall 2-2: Schritt 2.2 - Zwischenspeicherung des Payloads im LocalStorage
    localStorage.setItem(this.pictureUrlLocalStorageKey, this.dangerousUrl);
    this.trustUrl();
  }

  getImageFromLocalStorage() {
    // Fall 2-2: Schritt 3 - Holen des Payloads aus LocalStorage
    this.dangerousUrl = localStorage.getItem(this.pictureUrlLocalStorageKey) ? localStorage.getItem(this.pictureUrlLocalStorageKey)! : 'assets/wilfred-worrior2-quadrat.png';
    this.trustUrl();
  }


  trustUrl() {
    // Fall 2-2: Schritt 4 - Umgehung von Angular's URL-Sanitizing
    this.trustedUrl = this.sanitizer.bypassSecurityTrustUrl(this.dangerousUrl);
  }

  trustHtml() {
    this.trustedHtml = this.sanitizer.bypassSecurityTrustHtml(this.dangerousInput);
    localStorage.setItem(this.usernameLocalStorageKey, this.dangerousInput);
  }

  trustResourceUrl() {
    this.trustedResourceUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.dangerousInput);
  }

  trustStyle() {
    this.trustedStyle = this.sanitizer.bypassSecurityTrustStyle(this.dangerousInput);
  }

  trustScript() {
    this.trustedScript = this.sanitizer.bypassSecurityTrustScript("<script src='abc.de'></script>"); // Correct Negative
    this.unusedTrustedScript = this.sanitizer.bypassSecurityTrustScript(this.dangerousInput); // False Positive ?
    this.trustedScript = this.sanitizer.bypassSecurityTrustScript(this.dangerousInput);
  }

  resetPage() {
    this.deleteImageUrl();
  }

  resetUsername() {
    this.usernameElement.nativeElement.innerHTML = "";

  }

  deleteImageUrl() {
    localStorage.removeItem(this.pictureUrlLocalStorageKey);
    this.dangerousUrl = 'assets/wilfred-worrior2-quadrat.png';
    this.trustUrl();
  }

  async getUsername(): Promise<string> {
    return Promise.resolve("<img src='aaaa' onerror='javascript:alert()'>");
  }
}
