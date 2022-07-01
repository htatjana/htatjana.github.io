import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ContextualEscapingComponent} from "./contextual-escaping/contextual-escaping.component";
import {LocalStorageXssComponent} from "./local-storage-xss/local-storage-xss.component";

const routes: Routes = [
  {
    path: 'prevention',
    component: ContextualEscapingComponent
  },
  {
    path: 'localstorage',
    component: LocalStorageXssComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
