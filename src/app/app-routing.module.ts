import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'address-book', pathMatch: 'full'},
  { path: 'contact-list', loadChildren: () => import('./contact-list/contact-list.module').then(mod => mod.ContactListModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {}
