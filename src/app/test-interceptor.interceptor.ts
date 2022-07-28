import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class TestInterceptorInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    console.log({request})
    let token = localStorage.getItem('tokenName')
    let commonUrl = 'http://localhost:3000/'
    let newRequest = request.clone({
      url:(commonUrl+request.url),
      setHeaders:{'Auth-header':'hgfewykuhfweiuy'},
    })
    return next.handle(newRequest);
  }
}
