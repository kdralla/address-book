import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { ContactListComponent } from './contact-list.component';
import { ContactListRoutingModule } from './contact-list-routing.module';

@NgModule({
  imports: [ SharedModule, ContactListRoutingModule ],
  declarations: [ ContactListComponent ]
})

export class ContactListModule { }
