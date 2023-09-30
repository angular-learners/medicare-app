import { Environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoginRequest } from '../models/user.login.model';
import { User } from '../models/user.model';

@Injectable({
    providedIn: 'root'
})
export class UserService {

    constructor(private http: HttpClient) {
    }

    login(user: LoginRequest): Observable<LoginRequest> {
        return this.http.post<LoginRequest>(`${Environment.BASE_URL}/authenticate`, user);
    }

    welcome() {
        return this.http.get(`${Environment.BASE_URL}/welcome`)
    }

    createUserAccount(userAccountRequest: User) {
        return this.http.post(`${Environment.BASE_URL}/createAccount`, userAccountRequest);
    }
}