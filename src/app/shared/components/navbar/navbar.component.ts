import { AuthService } from './../../../auth/auth.service';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  constructor(private router:Router,public authService:AuthService){

  }


  navigateTo(navigatePage:string){
       if(navigatePage=="login"){
           this.router.navigate([navigatePage]);
       }else if(navigatePage=="create-account"){
           this.router.navigate([navigatePage]);
       }
       else if(navigatePage=="logout"){
        this.authService.logout();
        this.router.navigate(['login']);
    }
  }
}
