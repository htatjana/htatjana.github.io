import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-insecure-functions',
  templateUrl: './insecure-functions.component.html',
  styleUrls: ['./insecure-functions.component.css']
})
export class InsecureFunctionsComponent implements OnInit {

  dangerousInput: string;

  constructor() { }

  ngOnInit(): void {
  }



  // :) wird erkannt von Snyk
  eval() {
    eval(this.dangerousInput);
  }

  // ???
  eval3(input: string) {
    eval(input);
  }

  concatenate(input: string) {
    return 'asdkjhsad' + input
  }

  // :( wird nicht erkannt von Snyk



}
