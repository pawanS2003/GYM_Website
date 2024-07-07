import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contect',
  standalone: true,
  imports: [],
  templateUrl: './contect.component.html',
  styleUrl: './contect.component.css'
})
export class ContectComponent implements OnInit {
  constructor(private router:Router) {}

  ngOnInit(): void {
  }

  submitForm() {
    alert("Form submitted!");
    this.router.navigate(['./ledger-account/main-dashboard']);
  }
}
