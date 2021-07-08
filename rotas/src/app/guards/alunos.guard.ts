import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, RouterStateSnapshot } from '@angular/router';
import { Observable, of, interval } from 'rxjs';

@Injectable({providedIn: 'root'})
export class AlunosGuard implements CanActivateChild {
  constructor() { }

  canActivateChild(route: ActivatedRouteSnapshot,
                   state: RouterStateSnapshot):Observable<boolean>| boolean {

                      console.log('AlunosGuard: Guarda de rotas filhas');

  if (state.url.includes('editar')){
   //alert('Usuário Sem Acesso');
    //return (true);
  }

    return true;
  }
}
