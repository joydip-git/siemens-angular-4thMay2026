import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";
import { TokenStorageService } from "./token-storage.service";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    const tokenSvc = inject(TokenStorageService)
    //if (sessionStorage.getItem('token')) {
    if (tokenSvc.getToken() !== null) {
        return true
    } else {
        const router = inject(Router)
        router.navigate(['/login'], {
            queryParams: {
                'returnUrl': state.url
            }
        })
        return false
    }
}