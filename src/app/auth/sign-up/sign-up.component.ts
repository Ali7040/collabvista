import { Component, inject } from '@angular/core';
import { FormBuilder, Validators, ReactiveFormsModule } from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
})
export class SignUpComponent {
  fb = inject(FormBuilder);
  authService = inject(AuthService);
  router = inject(Router);
  errorMessage: string | null = null;

  form = this.fb.group({
    username: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]], // Added email validation
    password: ['', [Validators.required, Validators.minLength(6)]], // Added minLength validation
  });

  onSubmit() {
    console.log('Form submission triggered');
    const rawForm = this.form.getRawValue();

    // Ensure that rawForm values are non-null and of type string
    const username = rawForm.username ?? '';
    const email = rawForm.email ?? '';
    const password = rawForm.password ?? '';

    if (this.form.valid && username && email && password) {
      console.log('Form is valid, submitting...');
      this.authService.signUp(username, email, password).subscribe({
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
