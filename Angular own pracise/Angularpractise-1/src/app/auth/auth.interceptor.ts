import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private authService: AuthService) {}
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    console.log('intercepted!', req);
    const locstortoken = this.authService.getToken();
    if (locstortoken) {
    const clonedreq = req.clone({
     // params: req.params.set('auth', this.authService.getToken())
     headers : req.headers.set('Autherization' , 'Bearer' + locstortoken)
    });
    // return next.handle(req); // we r continuing the request to the backend server through 'next'
   return next.handle(clonedreq);
    } else {
      return next.handle(req);
    }
  }
}
