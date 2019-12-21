import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { Contact, ContactListService } from '../shared/service/contact-list.service';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: [ './contact-details.component.css' ]
})

export class ContactDetailsComponent implements OnInit, OnDestroy {
  contact: Contact;
  shouldShow: boolean;
  subscription: Subscription;

  constructor(
    private contactListService: ContactListService
  ) { }

  ngOnInit() {
    this.subscription = this.contactListService.currentData.subscribe(data => {
      this.contact = data;
      this.shouldShow = true;
    });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  closeSidebar(): void {
    this.shouldShow = false;
  }
}
