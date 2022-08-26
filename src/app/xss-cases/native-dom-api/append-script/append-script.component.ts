import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-append-script',
  templateUrl: './append-script.component.html',
  styleUrls: ['./append-script.component.css']
})
export class AppendScriptComponent implements OnInit {

  input: string;

  constructor() {}

  ngOnInit(): void {
    this.appendScript_secure(document, 'console.log("xss in appendScript_secure")');
    this.appendScript_insecure1(document, 'console.log("xss in appendScript_insecure1")');
    this.appendScript_insecure2(document, 'console.log("xss in appendScript_insecure2")');
  }

  // False Positive, Skript wird nicht ausgeführt, da es type = application/json ist
  private appendScript_secure(doc: Document, input: string) {
    const state = doc.createElement('script');
    state.type = 'application/json';
    state.innerHTML = input;
    const firstScript = doc.querySelector('script');
    doc.body.insertBefore(state, firstScript);
  }

  // Cross-Site Scripting möglich
  append() {
    this.appendScript_insecure2(document, this.input);
  }

  private appendScript_insecure1(doc: Document, input: string) {
    const state = doc.createElement('script');
    state.innerHTML = input;
    const firstScript = doc.querySelector('script');
    doc.body.insertBefore(state, firstScript);
  }

  private appendScript_insecure2(doc: Document, input: string) {
    const state = doc.createElement('script');
    state.type = 'module';
    state.innerHTML = input;
    const firstScript = doc.querySelector('script');
    doc.body.insertBefore(state, firstScript);
  }

  private appendScript_insecure3(input: string) {
    const state = document.createElement('script');
    state.innerHTML = input;
    document.body.append(state);
  }
}
