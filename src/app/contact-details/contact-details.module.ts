import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactDetailsComponent } from './contact-details.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [CommonModule, SharedModule],
  declarations: [ ContactDetailsComponent ],
  exports: [ContactDetailsComponent]
})

export class ContactDetailsModule { }
