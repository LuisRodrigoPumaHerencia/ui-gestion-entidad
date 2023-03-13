import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginRestService } from '../services/login-rest.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(
    private login_rest:LoginRestService
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    
    const token = this.login_rest.getToken();

    if(token){
      const cloned = request.clone({
        headers: request.headers.set('Authorization', `Bearer${token}`)
      })
      return next.handle(cloned);
    }

    return next.handle(request);
  }
}
