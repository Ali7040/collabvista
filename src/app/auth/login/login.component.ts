import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage: string | null = null;
  form = this.fb.group({
    email: ['', [Validators.required, Validators.email]], // Added email validation
    password: ['', [Validators.required, Validators.minLength(6)]], // Added minLength validation
  });

  onSubmit() {
    console.log('Form submission triggered');
    const rawForm = this.form.getRawValue();

    // Ensure that rawForm values are non-null and of type string

    const email = rawForm.email ?? '';
    const password = rawForm.password ?? '';

    if (this.form.valid && email && password) {
      console.log('Form is valid, submitting...');
      this.authService.logIn(email, password).subscribe({
        next: () => {
          console.log('Sign-up successful, navigating...');
          this.router.navigate(['/']);
        },
        error: (error) => {
          this.errorMessage = error;
          console.error('Sign-up error:', error);
        },
      });
    } else {
      console.log('Form is invalid or contains null values');
    }
  }
}
