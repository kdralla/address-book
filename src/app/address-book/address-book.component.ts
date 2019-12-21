import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

import { Contact, ContactListService } from '../shared/service/contact-list.service';

@Component({
  selector: 'app-address-book',
  templateUrl: './address-book.component.html',
  styleUrls: [ './address-book.component.css' ]
})

export class AddressBookComponent implements OnInit {
  contact: Contact;
  contacts: Contact[];
  shouldEdit: boolean;
  msg = 'Loading contacts ...';

  contactForm = this.fb.group({
    name: ['', Validators.required],
    phone: ['', Validators.required],
    city: ['', Validators.required],
    address: ['', Validators.required]
  });

  constructor(private contactService: ContactListService, private fb: FormBuilder) {
  }

  ngOnInit() {
    this.setupForm();
    this.shouldEdit = false;
  }

  setupForm() {
    this.contactService.getContacts().subscribe(contacts => {
      this.msg = '';
      this.contacts = contacts;
      this.contact = contacts[0];
      this.contactForm.get('name').setValue(this.contact.name);
      this.contactForm.get('phone').setValue(this.contact.phone);
      this.contactForm.get('city').setValue(this.contact.city);
      this.contactForm.get('address').setValue(this.contact.address);
    });
  }

  editContact(): void {
    this.shouldEdit = true;
  }

  next() {
    let ix = 1 + this.contacts.indexOf(this.contact);
    if (ix >= this.contacts.length) { ix = 0; }
    this.contact = this.contacts[ix];
    this.contactForm.get('name').setValue(this.contact.name);
    this.contactForm.get('phone').setValue(this.contact.phone);
    this.contactForm.get('city').setValue(this.contact.city);
    this.contactForm.get('address').setValue(this.contact.address);
  }

  onSubmit() {
    const newName = this.contactForm.get('name').value;
    const newPhone = this.contactForm.get('phone').value;
    const newCity = this.contactForm.get('city').value;
    const newAddress = this.contactForm.get('address').value;
    this.displayMessage('Successfully Saved ' + newName);
    // Check do we have to update or add new contact
    if (this.contact.name) {
      this.contact.name = newName;
      this.contact.phone = newPhone;
      this.contact.city = newCity;
      this.contact.address = newAddress;
    } else {
      this.contact = {id: Math.floor(Math.random() * 100) + 10, name: newName, phone: newPhone, city: newCity, address: newAddress};
      this.contacts.push(this.contact);
    }
    this.shouldEdit = false;
  }

  newContact() {
    this.shouldEdit = true;
    this.displayMessage('New address-book');
    this.contactForm.get('name').setValue('');
    this.contactForm.get('phone').setValue('');
    this.contactForm.get('city').setValue('');
    this.contactForm.get('address').setValue('');
    this.contact = {id: Math.floor(Math.random() * 100) + 10, name: '', phone: '', city: '', address: ''};
  }

  /** Display a message briefly, then remove it. */
  displayMessage(msg: string) {
    this.msg = msg;
    setTimeout(() => this.msg = '', 1500);
  }
}
