import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import {Injectable} from "@angular/core";
import {AppStateService} from "../services/app-state.service";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthorizationGuard implements CanActivate { // il est possble de ne pas ecrire impliments CanActivate car il est depricated
  constructor( private  appStateService : AppStateService ,
               private  router : Router) {
  }
  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean | UrlTree>| Promise<boolean| UrlTree>|boolean |UrlTree {
    if (this.appStateService.authState.roles.includes(route.data['requiredRoles'])){
          return true ;
    }else {
      this.router.navigateByUrl("/admin/notAuthorized")
          return false ;
    }

  }

}
