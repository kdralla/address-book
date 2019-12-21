import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { Contact, ContactListService } from '../shared/service/contact-list.service';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})

export class ContactListComponent {
  contacts: Observable<Contact[]>;
  constructor(private contactListService: ContactListService) {
    this.contacts = this.contactListService.getContacts();
  }

  getContactDetails(contact: Contact): void {
    this.contactListService.setCurrentContact(contact);
  }
}

