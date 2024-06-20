import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot} from '@angular/router';
import {Injectable} from "@angular/core";
import {AppStateService} from "../services/app-state.service";
import {Observable} from "rxjs";
import {UrlTree} from "@angular/router";
import {Router} from "@angular/router";
@Injectable({
  providedIn: 'root'
})


export class AuthenticationGuard implements CanActivate { // il est possble de ne pas ecrire impliments CanActivate car il est depricated
  constructor( private  appStateService : AppStateService , private  router : Router) {}
  canActivate(route: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean | UrlTree>| Promise<boolean| UrlTree>|boolean |UrlTree {
        if(this.appStateService.authState.isAuthenticated ==true){
          return true ;
        }else {
          this.router.navigateByUrl("/login") ;
          return  false ;
        }
      //return  (this.appStateService.authState.isAuthenticated==true) ;
    }
}
