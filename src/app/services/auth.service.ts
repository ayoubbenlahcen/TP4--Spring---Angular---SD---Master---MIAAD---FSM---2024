import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {firstValueFrom} from "rxjs";
import {AppStateService} from "./app-state.service";
import {jwtDecode} from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private  httpClient : HttpClient ,
              private appState : AppStateService
              ) { }

  async login(username : string , password : string){
    //une methode qui utlise le mot await il faut qu'il va etre declare async
    //c'est a dire je veux attendre jusqu'a le retoure de la reponce  a partir du back end
    let user : any = await firstValueFrom( this.httpClient.get("http://localhost:8089/users/"+username)) ;
    console.log(password) ;
    console.log(user.password);
    console.log(atob(user.password))
    if (atob(user.password) == password){
      //je rappel quie cette partie la ne se fait jamais en front-end
      //parce que notre front-end ne recoit jamais le mode passe denotre utilisateur
      //on fais ca maintenant seulement pour bricoller notre faut backend
      // alors dans un vrais back end on fait comme suite :
      //        let user : any = await firstValueFrom( this.httpClient.post("https://localhost:8089/"+username)) ;
      // puis on recoupere la reponce sous forme un token  JWT
      // et a l'aide des encodeur en va essayer de faire extraire les information quans on veut


      let decodedJwt : any = jwtDecode(user.token) ;
      this.appState.setAuthState({
                                  isAuthenticated  : true ,
                                  username : decodedJwt.sub  ,
                                  roles : decodedJwt.roles ,
                                  token : user.token
      }) ;
      return Promise.resolve(true) ;
    }else{
      return  Promise.reject("Bad credentials ----> un  erreur d'authentification") ;
    }
  }

  authenticatedUser(user: any) {

  }
}
