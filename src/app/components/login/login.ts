import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Injectable} from '@angular/core';
import {Observable } from 'rxjs';
interface User {
    userName: string;
}
@Injectable()
export  class Login implements  CanActivate {
  constructor(private router: Router) {}
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    const userStr = sessionStorage.getItem('validateForm');
    const user: User = JSON.parse(userStr);
    if (user && user.userName) {
      alert(user.userName);
      console.log('路由守卫验证通过!');
      alert('路由守卫验证通过!');
      return true;
    } else {
      console.log('路由守卫验证失败!');
      alert('路由守卫验证失败!');
      this.router.navigateByUrl('/app-login');
      return false;
    }
 }
}
