import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthserviceService } from './authservice.service';

@Injectable({
  providedIn: 'root'
})
export class RoleguardGuard implements CanActivate {
constructor(private _auth:AuthserviceService, private router:Router){}

  canActivate():boolean{
    if(this._auth.getRole()){
      return true;
          }
          else{
            this.router.navigate(['/'])
            return false;
          }
        }
   
  
}
