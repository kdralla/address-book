import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';

import { AddressBookComponent } from './address-book.component';
import { AddressBookRoutingModule } from './address-book-routing.module';

@NgModule({
  imports: [
    SharedModule,
    AddressBookRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [ AddressBookComponent ],
})

export class AddressBookModule { }
