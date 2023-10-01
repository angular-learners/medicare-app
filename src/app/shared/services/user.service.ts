import { Environment } from './../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
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

    getDoctorMenus():Observable<any>{
        return this.http.get("assets/json/doctor-menu.json");
    }

    getSuperAdminMenus():Observable<any>{
        return this.http.get("assets/json/super-admin-menu.json");
    }
    getUserById(id:number):Observable<number>{
        return this.http.get<number>(`${Environment.BASE_URL}/${id}`);
    }
    updateUserById(id:number,user:any):Observable<any>{
        return this.http.put<any>(`${Environment.BASE_URL}/${id}`,user);
    }

    getAllUsers():Observable<User>{
        return this.http.get<User>(`${Environment.BASE_URL}`);
    }
}