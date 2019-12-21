import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AddressBookComponent } from './address-book.component';

const routes = [
  { path: 'address-book', component: AddressBookComponent}
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})

export class AddressBookRoutingModule {}

