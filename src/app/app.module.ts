import {enableProdMode, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule, MatIconRegistry} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatChipsModule} from "@angular/material/chips";
import {ProfileComponent} from './xss-cases/profile/profile.component';
import {SchenkerTestsComponent} from './schenker-tests/schenker-tests.component';
import {AppendScriptComponent} from './xss-cases/native-dom-api/append-script/append-script.component';
import {RedirectDirective} from './redirect.directive';
import {RedirectService} from "./redirect.service";
import {XssPipe} from './xss.pipe';
import {HighlightDirective} from "./highlight.directive";
import {InsecureFunctionsComponent} from './xss-cases/insecure-functions/insecure-functions.component';
import {Case1Component} from './case1/case1.component';
import {Case2Component} from './case2/case2.component';
import {Case3Component} from './case3/case3.component';
import {Case4Component} from './case4/case4.component';
import {Case5Component} from './case5/case5.component';
import {Case6Component} from './case6/case6.component';
import {Case7Component} from './case7/case7.component';
import {Case8Component} from './case8/case8.component';
import {Case9Component} from './case9/case9.component';
import {Case10Component} from './case10/case10.component';
import {Case11Component} from './case11/case11.component';
import {Case12Component} from './case12/case12.component';
import {Case13Component} from './case13/case13.component';
import {Case14Component} from './case14/case14.component';
import {Case15Component} from './case15/case15.component';
import {Case16Component} from './case16/case16.component';
import {Case17Component} from './case17/case17.component';
import {Case18Component} from './case18/case18.component';
import {Case19Component} from './case19/case19.component';
import {Case20Component} from './case20/case20.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatGridListModule} from "@angular/material/grid-list";
import {HttpClientModule} from "@angular/common/http";
import {MatTableModule} from "@angular/material/table";
import {ProfilesService} from "./profiles.service";

enableProdMode();


@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    SchenkerTestsComponent,
    AppendScriptComponent,
    RedirectDirective,
    XssPipe,
    HighlightDirective,
    InsecureFunctionsComponent,
    Case1Component,
    Case2Component,
    Case3Component,
    Case4Component,
    Case5Component,
    Case6Component,
    Case7Component,
    Case8Component,
    Case9Component,
    Case10Component,
    Case11Component,
    Case12Component,
    Case13Component,
    Case14Component,
    Case15Component,
    Case16Component,
    Case17Component,
    Case18Component,
    Case19Component,
    Case20Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatChipsModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatGridListModule,
    HttpClientModule,
    MatTableModule
  ],
  providers: [RedirectService, ProfilesService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
}
