import { Component } from '@angular/core';

@Component({
  selector: 'address-component',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css'],
})
export class AddressComponent {
  userName: string;

  constructor() {
    this.userName = 'Girish';
  }
}
