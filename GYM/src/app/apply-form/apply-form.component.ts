import { NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-apply-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './apply-form.component.html',
  styleUrls: ['./apply-form.component.css']
})
export class ApplyFormComponent implements OnInit {
  gymForm: FormGroup;
  total: number = 0;
  photoPreview: string | ArrayBuffer | null = null;
  formSubmitted: boolean = false;
  receiptData: any;

  constructor(private fb: FormBuilder) {
    this.gymForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      gender: ['', Validators.required],
      fee: ['', Validators.required],
      ccName: ['', Validators.required],
      ccSurname: ['', Validators.required],
      ccNumber: ['', Validators.required],
      ccExpiry: ['', Validators.required],
      ccCVV: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.gymForm.get('fee')?.valueChanges.subscribe(value => {
      this.total = value ? parseInt(value, 10) : 0;
    });
  }

  onFileChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files[0]) {
      const file = input.files[0];
      const reader = new FileReader();
      reader.onload = () => {
        this.photoPreview = reader.result;
      };
      reader.readAsDataURL(file);
    }
  }

  onSubmit(): void {
    if (this.gymForm.valid) {
      this.formSubmitted = true;
      this.receiptData = this.gymForm.value;
      console.log('Form Submitted', this.receiptData);
      alert('Form submitted successfully!');
    } else {
      alert('Please fill out the form correctly.');
    }
  }

  printReceipt(): void {
    window.print();
  }
}
