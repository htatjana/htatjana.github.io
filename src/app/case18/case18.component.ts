import {AfterViewInit, Component, ElementRef, Renderer2, ViewChild} from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-case18',
  templateUrl: './case18.component.html',
  styleUrls: ['./case18.component.css']
})
//False Positive testen
export class Case18Component implements AfterViewInit {

  @ViewChild('image') image: ElementRef;
  @ViewChild('input') input: ElementRef;

  size = "1000";

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
  }

  ngAfterViewInit(): void {
    this.route.queryParams.subscribe((params: any) => {
      if (params.width) {
        this.image.nativeElement.width = params.width;
        this.size = params.width;
      }
    });
  }

  changeSize() {
    this.image.nativeElement.width = this.input.nativeElement.value;
  }

}
