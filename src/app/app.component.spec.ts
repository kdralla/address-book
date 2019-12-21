import { TestBed, async } from '@angular/core/testing';
import {BrowserModule} from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {AddressBookModule} from './address-book/address-book.module';
import {ContactDetailsModule} from './contact-details/contact-details.module';
import {AppRoutingModule} from './app-routing.module';

describe('AppComponent', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserModule,
        AddressBookModule,
        ContactDetailsModule,
        AppRoutingModule
      ],
      declarations: [
        AppComponent
      ],
    });
    TestBed.compileComponents();
  });

  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));

});
