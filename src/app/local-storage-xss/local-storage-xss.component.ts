import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-local-storage-xss',
  templateUrl: './local-storage-xss.component.html',
  styleUrls: ['./local-storage-xss.component.css']
})
export class LocalStorageXssComponent implements OnInit {

  username: string;
  mail: string;

  // Fall 1
  titel3 = "bypassSecurityTrustUrl + URL Attribut wurde via DOM binding [href]=\"url\" zugewiesen";
  titel4 = "bypassSecurityTrustUrl + URL Attribut wurde via Expressions href=\"{{url}}\" zugewiesen";

  @ViewChild('usernameElement') usernameElement: ElementRef;

  usernameLocalStorageKey = "username";
  mailLocalStorageKey = "mail";


  ngOnInit(): void {
    this.username = localStorage.getItem(this.usernameLocalStorageKey) || 'Wilfred Warrior';
    // this.username = localStorage.getItem(this.usernameLocalStorageKey) || 'Wilfred Warrior';
    this.mail = localStorage.getItem(this.mailLocalStorageKey) || 'wilfred@warrior.de';

  }

  saveInLocalStorage() {
    localStorage.setItem(this.usernameLocalStorageKey, this.username);
    localStorage.setItem(this.mailLocalStorageKey, this.mail);
  }



}
