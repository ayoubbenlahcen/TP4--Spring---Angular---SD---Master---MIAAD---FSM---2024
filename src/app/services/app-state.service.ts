import { Injectable } from '@angular/core';
import {Product} from "../model/product.model";
@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  public productsState: {
                          //specifier les types des attribue qui cractriser l'etat d'un productComponenent
                          products : Array<Product> ,
                          keyword : string ,
                          totalPages : number ,
                          pageSize : number ,
                          currentPage : number ,
                          totalProducts : number,
                          status: string ,
                          errorMessage : any }={
                  // Les attribues  que je veux partager
                  products : [],
                  keyword : "",
                  totalPages: 0,
                  pageSize: 3,
                  currentPage: 1,
                  totalProducts: 0,
                  status : "" ,
                  errorMessage : ""
          }

  authState : any={
    username : undefined ,
    roles : undefined ,
    isAuthenticated : undefined ,
    token : undefined
  }
  constructor() { }
  public  setProductState(state : any) : void{
    this.productsState={...this.productsState , ...state}
  }

  public  setAuthState(state : any) : void{
    this.authState={...this.authState , ...state}
  }
}
