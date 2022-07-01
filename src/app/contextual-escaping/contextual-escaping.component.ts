import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {DomSanitizer} from "@angular/platform-browser";

@Component({
  selector: 'app-contextual-escaping',
  templateUrl: './contextual-escaping.component.html',
  styleUrls: ['./contextual-escaping.component.css']
})
export class ContextualEscapingComponent implements OnInit, AfterViewInit {

  @ViewChild('taintsource')
  taintSource: ElementRef;

  @ViewChild('usernameRef')
  usernameRef: ElementRef;

  username = 'Tatjana';

  titel1 = "<div [innerHTML]=\"username\"></div>"
  titel2 = "<div innerHTML=\"{{username}}\"></div>";
  titel3 = "<div #usernameRef></div>";

  constructor(private domSanitizer: DomSanitizer) {
  }

  ngAfterViewInit() {
    console.log('Values on ngAfterViewInit():');
    console.log("sample:", this.usernameRef);
  }

  ngOnInit(): void {
  }

  setUsernameRef(username: string) {
    console.log("set innerHTML")
    this.usernameRef.nativeElement.innerHTML = username;
  }

}
