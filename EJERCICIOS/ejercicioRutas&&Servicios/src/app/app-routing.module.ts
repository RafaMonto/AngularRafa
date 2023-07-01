import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LenguajesComponent } from './lenguajes/lenguajes.component';

const routes: Routes = [
  {
    path: 'lenguajes',
    component: LenguajesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
