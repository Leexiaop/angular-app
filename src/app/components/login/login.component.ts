import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzMessageService } from 'ng-zorro-antd';
import { Route } from '@angular/compiler/src/core';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  title = 'login';
  validateForm: FormGroup;

  submitForm(): void {
    console.log(this.validateForm);
    if (!this.validateForm.value.userName || !this.validateForm.value.password) {
      this.message.create('warning', `请填写用户名和密码！`);
    }
    // this.router.navigateByUrl('main');
    // for (const i of Object.keys(this.validateForm.controls)) {
    //   this.validateForm.controls[ i ].markAsDirty();
    //   this.validateForm.controls[ i ].updateValueAndValidity();
    // }
    // this.router.navigate(['app-main']);
  }

  // constructor(private fb: FormBuilder, private message: NzMessageService, private router: Route) {
  // }
  constructor( private fb: FormBuilder, private message: NzMessageService) {}
  ngOnInit(): void {
    this.validateForm = this.fb.group({
      userName: [ null, [ Validators.required ] ],
      password: [ null, [ Validators.required ] ],
      remember: [ true ]
    });
  }
}
