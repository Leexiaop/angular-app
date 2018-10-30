import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import urlObj from '../../../assets/api/url';
interface Res {
  code: number;
}
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  validateForm: FormGroup;
  constructor(private fb: FormBuilder, private message: NzMessageService, private router: Router, private http: HttpClient) {}
  submitForm(): void {
    if (!this.validateForm.value.userName || !this.validateForm.value.password) {
      this.message.create('warning', `请填写用户名和密码！`);
      return;
    }
    const userStr: string = JSON.stringify(this.validateForm.value);
    sessionStorage.setItem( 'user', userStr );
    this.http.get(urlObj.list).subscribe((res: Res) => {
      if (res.code === 0) {
        this.router.navigateByUrl('/app-main');
      } else {
        this.message.create('warning', '登录失败！');
      }
    });
  }
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
