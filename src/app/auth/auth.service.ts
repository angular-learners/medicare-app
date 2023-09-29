import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable(
    { providedIn: 'root' }
)
export class AuthService {

    constructor(){
         this.getLoggedInData();
    }
   isLogged$=new BehaviorSubject<boolean>(false);

    isLoggedIn():Observable<boolean>{
        return this.isLogged$.asObservable();
    }
     
    logout():void{
        localStorage.removeItem('isLoggedIn');
         this.isLogged$.next(false);
    }

    private  getLoggedInData(){
        this.isLogged$.next(JSON.parse(localStorage.getItem('isLoggedIn') as any));
     }
}