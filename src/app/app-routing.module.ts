import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { RectComponent } from './rect/rect.component';
import { DirectiveComponent } from './directive/directive/directive.component';

const routes: Routes = [
  { path:'', redirectTo: '/', pathMatch:'full'},
  { path:'rect', component: RectComponent},
  { path:'directive', component: DirectiveComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
