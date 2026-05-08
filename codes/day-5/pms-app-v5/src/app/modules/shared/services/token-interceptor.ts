// import { HttpEvent, HttpHandler, HttpHandlerFn, HttpInterceptor, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
//import { Inject, Injectable } from "@angular/core";

import { HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from "@angular/common/http";
import { inject } from "@angular/core";
import { Observable } from "rxjs";
import { TokenStorageService } from "./token-storage.service";

export const TokenInterceptor: HttpInterceptorFn = (req: HttpRequest<unknown>, next: HttpHandlerFn): Observable<HttpEvent<unknown>> => {
    const tokenSvc = inject(TokenStorageService)
    //const token = sessionStorage.getItem('token')
    const token = tokenSvc.getToken()
    if (token !== null) {
        const tokenizedRequest = req.clone({
            headers: req.headers.append('Authorization', `Bearer ${token}`)
        })
        return next(tokenizedRequest)
    } else
        return next(req)
}

// @Injectable()
// class TkInterceptor implements HttpInterceptor{
//     intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
//         return next.handle(req)
//     }    
// }