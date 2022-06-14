import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PocComponent} from "./components/poc/poc.component";

const routes: Routes = [
  {
    path: 'poc',
    component: PocComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
