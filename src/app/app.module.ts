import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatButtonModule} from "@angular/material/button";
import {ContextualEscapingComponent} from './contextual-escaping/contextual-escaping.component';
import {MatCardModule} from "@angular/material/card";
import {LocalStorageXssComponent} from './local-storage-xss/local-storage-xss.component';
import {MatChipsModule} from "@angular/material/chips";
import { C1BypassSecurityTrustComponent } from './c1-bypass-security-trust/c1-bypass-security-trust.component';

@NgModule({
  declarations: [
    AppComponent,
    ContextualEscapingComponent,
    LocalStorageXssComponent,
    C1BypassSecurityTrustComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatInputModule,
    FormsModule,
    MatIconModule,
    MatButtonModule,
    MatChipsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
