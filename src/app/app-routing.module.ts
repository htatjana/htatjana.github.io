import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContextualEscapingComponent} from "./contextual-escaping/contextual-escaping.component";
import {LocalStorageXssComponent} from "./local-storage-xss/local-storage-xss.component";
import {C1BypassSecurityTrustComponent} from "./c1-bypass-security-trust/c1-bypass-security-trust.component";

const routes: Routes = [
  {
    path: 'prevention',
    component: ContextualEscapingComponent
  },
  {
    path: 'localstorage',
    component: LocalStorageXssComponent
  }, {
    path: 'case-1',
    component: C1BypassSecurityTrustComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
