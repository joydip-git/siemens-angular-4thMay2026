import { inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, GuardResult, MaybeAsync, Router, RouterStateSnapshot } from "@angular/router";

export const AuthGuard: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> => {
    if (sessionStorage.getItem('token')) {
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