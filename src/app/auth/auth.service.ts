import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";


@Injectable(
    { providedIn: 'root' }
)
export class AuthService {

    constructor(){
         this.getLoggedIn();
    }
    isLogged$=new BehaviorSubject<boolean>(false);

    isLoggedIn():Observable<boolean>{
        return this.isLogged$.asObservable();
    }
     
    logout():void{
        localStorage.removeItem('isLoggedIn');
       this.isLogged$.next(false);
    }

     getLoggedIn(){
       const loggedInData= JSON.parse(localStorage.getItem('isLoggedIn') as any);
        this.isLogged$.next(loggedInData);
     }
}