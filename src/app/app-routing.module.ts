import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//my app navigation routes
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
