import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable()
export class MovieDetailGuardService implements CanActivate {

  constructor(private _router: Router) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    const id = +route.url[1].path;
    if (isNaN(id) || id < 1) {
      this._router.navigate(['/movies']);
      return false;
    }
    return true;
  }
}
