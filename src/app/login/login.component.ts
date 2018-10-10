import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MatDialog, MatDialogRef } from '@angular/material';
import { UserData } from "../shared/userdata";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  @ViewChild('fform') loginFormDirective;

  formErrors = {
    'nickname': '',
    'password': ''
  };

  validationMessages = {
    'nickname': {
      'required': 'Nickname is required'
    },
    'password': {
      'required': 'Password is required'
    }
  };

  loginForm: FormGroup;
  userData: UserData;

  constructor(
    public dialogRef: MatDialogRef<LoginComponent>,
    private fb: FormBuilder
  ) {
    this.createForm();
  }

  ngOnInit() {
  }

  createForm(): void {
    this.loginForm = this.fb.group({
      nickname: ['', Validators.required],
      password: ['', Validators.required],
      remember: false
    });

    this.loginForm.valueChanges
      .subscribe(data => {
        this.onValueChanged(data);
      });

    this.onValueChanged();
  }

  onValueChanged(data?: any) {
    if (!this.loginForm) { return; }
    const form = this.loginForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        // clear previous error message (if any)
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit() {
    this.userData = this.loginForm.value;
    this.resetForm();
    this.dialogRef.close();
  }

  resetForm() {
    this.loginForm.reset({
      nickname: '',
      password: '',
      remember: false
    });
    this.loginFormDirective.resetForm();
  }

}
