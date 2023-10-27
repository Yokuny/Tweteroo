import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { SignupService } from '../services/signup.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent {
  constructor(
    private formBuilder: FormBuilder,
    readonly SignupService: SignupService,
    private router: Router
  ) {}

  user = localStorage.getItem('user') || '';
  userForm = this.formBuilder.group({
    username: '',
    avatar: '',
  });
  responseMessage = '';

  onSubmit() {
    const newUser = this.userForm.value.username || '';
    const userAvatar = this.userForm.value.avatar || '';

    this.SignupService.postUser(newUser, userAvatar).subscribe({
      next: () => {
        this.router.navigate(['/home']);
        localStorage.setItem('user', newUser);
        this.userForm.reset();
      },
      error: (error) => {
        this.responseMessage = error.error.message;
      },
    });
  }

  ngOnInit() {
    if (this.user !== '' && this.user !== null) {
      this.router.navigate(['/home']);
    }
  }
}
