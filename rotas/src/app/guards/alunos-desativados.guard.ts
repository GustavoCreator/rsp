import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanDeactivate, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AlunosFormComponent } from "../alunos/alunos-form/alunos-form.component";
import { IFormCanDeactivate } from "./i-form-can-deactivate";

@Injectable()
export class AlunosDeactivateGuard implements CanDeactivate<IFormCanDeactivate> {

  canDeactivate(
    component: IFormCanDeactivate,
    Route: ActivatedRouteSnapshot,
    State: RouterStateSnapshot,
  ): Observable<boolean>|Promise<boolean>|boolean {

    //return component.podeMudarRota();
    return component.podeDesativar();
  }
}
