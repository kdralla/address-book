import { Injectable, OnDestroy } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { delay } from 'rxjs/operators';

export class Contact {
  constructor(
    public id: number,
    public name: string,
    public phone: string,
    public city: string,
    public address: string,
  ) { }
}

const CONTACTS: Contact[] = [
  new Contact(1, 'Julian', '075894311', 'London', 'Harriet Walk'),
  new Contact(2, 'Eric', '075891313', 'Paris', 'Harriet Paris'),
  new Contact(3, 'Momi', '075991311', 'Bitola', 'Marshal Tito'),
  new Contact(4, 'Madeleine', '075821311', 'Skopje', 'Partizanska'),
  new Contact(5, 'Seth', '075891361', 'Barcelona', 'La Rambla'),
  new Contact(6, 'Teresa', '075891331', 'Milan', 'San Siro Area')
];

const FETCH_LATENCY = 500;

/** Simulate a data service that retrieves contacts from a server */
@Injectable({ providedIn: 'root' })
export class ContactListService implements OnDestroy {
  private dataSource = new Subject<Contact>();
  currentData = this.dataSource.asObservable();

  constructor() { console.log('ContactListService instance created.'); }
  ngOnDestroy() { console.log('ContactListService instance destroyed.'); }

  // Get list of all contacts
  getContacts(): Observable<Contact[]>  {
    return of(CONTACTS).pipe(delay(FETCH_LATENCY));
  }

  // Get single contact by id
  getContact(id: number | string): Observable<Contact> {
    const contact$ = of(CONTACTS.find(contact => contact.id === +id));
    return contact$.pipe(delay(FETCH_LATENCY));
  }

  // Set current chosen contact
  setCurrentContact(contact: Contact): void {
    this.dataSource.next(contact);
  }
}
