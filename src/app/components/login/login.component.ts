import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private _snackBar: MatSnackBar) {
    this.form = this.fb.group({
      User: ['', Validators.required],
      Password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  Login() {
    const usuario = this.form.value.User;
    const password = this.form.value.Password;

    if (usuario === 'admin' && password === 'pass123') this.loading = true;
    else {
      this.error();
    }
  }

  error() {
    this._snackBar.open('Datos incorrectos', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom',
    });
  }
}
