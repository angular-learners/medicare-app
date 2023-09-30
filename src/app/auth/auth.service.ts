import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { BehaviorSubject, Observable, tap } from "rxjs";
import { Environment } from "../environments/environment";
import { LoginRequest } from "../shared/models/user.login.model";


@Injectable(
    { providedIn: 'root' }
)
export class AuthService {
    private tokenKey = 'auth_token';

    constructor(private http: HttpClient) {
        //this.getLoggedInData();
    }
    
    // isLogged$ = new BehaviorSubject<boolean>(false);

    // isLoggedIn(): Observable<boolean> {
    //     return this.isLogged$.asObservable();
    // }

    // logout():void{
    //     localStorage.removeItem('isLoggedIn');
    //      this.isLogged$.next(false);
    // }

    // private getLoggedInData() {
    //     this.isLogged$.next(JSON.parse(localStorage.getItem('isLoggedIn') as any));
    // }

    logout() {
        this.removeToken();
    }

    setToken(token: string) {
        localStorage.setItem(this.tokenKey, token);
    }

    getToken(): string | null {
        return localStorage.getItem(this.tokenKey);
    }

    removeToken() {
        localStorage.removeItem(this.tokenKey);
    }

    isAuthenticated(): boolean {
        const token = this.getToken();
        return !!token;
    }
    login(loginRequest: LoginRequest) {
        return this.http
            .post<any>(`${Environment.BASE_URL}/authenticate`, loginRequest)
            .pipe(tap((response: any) => {
                this.setToken(response.token);
            }));
    }
    
}