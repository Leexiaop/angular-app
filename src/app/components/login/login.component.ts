import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  validateForm: FormGroup;
  submitForm(): void {
    if (!this.validateForm.value.userName || !this.validateForm.value.password) {
      this.message.create('warning', `请填写用户名和密码！`);
      return;
    }
    this.router.navigateByUrl('/app-main');
  }
  constructor(private fb: FormBuilder, private message: NzMessageService, private router: Router) {
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
