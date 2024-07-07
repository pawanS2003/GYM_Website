import { NgClass, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-shoping',
  standalone: true,
  imports: [NgIf, NgFor, NgClass, NavbarComponent],
  templateUrl: './shoping.component.html',
  styleUrl: './shoping.component.css'
})
export class ShopingComponent {
  isNavbarCollapsed = false;

  toggleNavbar() {
    this.isNavbarCollapsed = !this.isNavbarCollapsed;
  }
  products = [
    { name: 'Fancy Product', price: '$40.00 - $80.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false },
    { name: 'Special Item', price: '$18.00', oldPrice: '$20.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false, rating: 5 },
    { name: 'Sale Item', price: '$25.00', oldPrice: '$50.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false },
    { name: 'Popular Item', price: '$40.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false, rating: 5 },
    { name: 'Fancy Product', price: '$40.00 - $80.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false },
    { name: 'Special Item', price: '$18.00', oldPrice: '$20.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false, rating: 5 },
    { name: 'Sale Item', price: '$25.00', oldPrice: '$50.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false },
    { name: 'Popular Item', price: '$40.00', imageUrl: 'https://via.placeholder.com/450x300', sale: false, rating: 5 },
    // Add more products as needed
  ];
}
