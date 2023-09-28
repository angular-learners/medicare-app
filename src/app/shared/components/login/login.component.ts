import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private router:Router,private authService:AuthService) {

  }



  ngOnInit(): void {
    this.onInitForm();

  }

  onInitForm() {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl(''),
    });

  }



  submit() {
         const form=this.loginForm.getRawValue();
         if(form.email=="sai" && form.password=="sai123"){
                this.router.navigate(['toolbar']);
                console.log("login success");
                localStorage.setItem('isLoggedIn',JSON.stringify(true));
                this.authService.isLogged$.next(true);
         }
  }
}
