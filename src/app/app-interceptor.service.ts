import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable()
export class AppInterceptor implements HttpInterceptor {
    constructor() {}
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        const cloneRequest = req.clone({
            headers: req.headers.set('Qsc-Token', 'aaa') // 假设设置token的值为aaaa,在此处可以设置个请求拦截
        });
        return next.handle(cloneRequest);
    }
}
