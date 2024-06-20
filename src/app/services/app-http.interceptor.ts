import {HttpEvent, HttpHandler, HttpInterceptor, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {Injectable} from "@angular/core";
import {AppStateService} from "./app-state.service";
import {finalize, Observable} from "rxjs";
import {LoadingService} from "./loading.service";

@Injectable()
export class AppHttpInterceptor implements HttpInterceptor {
  /*
  alors pour que ce Intercipteur puissent etre fonctionner
  il faut le déclarré dans le module dans la partie providers
   */
  constructor(private appStateService : AppStateService, private  loadingService : LoadingService) {}
  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
  /*
      this.appStateService.setProductState({
        status : "LOADING"
      });
   */
    this.loadingService.showLoadingSpiner() ;
    let req = request.clone({
      headers : request.headers.set("Authorization" , "Bearer JWT")
    }) ;
    return next.handle(req).pipe(
      finalize(()=>{
        /*
                this.appStateService.setProductState({
          //ici je  ne sais pas est ce que la requete est passe bien
          // ou no, , c'est a dire je ne sais pas est ce que il y un erreur ou loaded
          // alors il y d'autre facon pour voir 'et de la requet
          status :""
        })
         */
        this.loadingService.hideLoadingSpiner() ;
        //this.loadingService.hideLoadingSpinner();
      })
    );

  }
}
