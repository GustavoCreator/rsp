import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router, CanLoad, Route } from '@angular/router';
import { Observable } from 'rxjs';
import { promise } from 'selenium-webdriver';
import { AuthService } from './../login/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad  {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  canActivate(
    _route:ActivatedRouteSnapshot,
    _state:RouterStateSnapshot)
    :Observable<boolean> | boolean{

      console.log('AuthGuard');

    return this.verificarAcesso();
    }

     private verificarAcesso (){
      if (this.authService.usuarioEstaAutenticado()){
        return true;
      }
      this.router.navigate(['/login']);
      return false;
     }

  canLoad(route: Route): Observable<boolean> | Promise <boolean> | boolean{
    console.log('CanLoad: Verifiando se o usuario pode carregar o codigo do modulo');

    return this.verificarAcesso();
  }
}
