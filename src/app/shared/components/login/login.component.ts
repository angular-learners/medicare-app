import { AuthService } from './../../../auth/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Roles } from '../../enums/roles.enum';
import { MedicareRoutes } from '../../routes/medicare.routes';
import { LoginResponse } from '../../models/login.res.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loginRes!:LoginResponse;
  constructor(private router: Router,
    private authService: AuthService, private userService: UserService) {
      

  }
    

  ngOnInit(): void {
    this.onInitForm();

  }

  onInitForm() {
    this.loginForm = new FormGroup({
      username: new FormControl(''),
      password: new FormControl(''),
    });

  }



  navigateByRole(loginRes:LoginResponse){
     if(loginRes.role==Roles.ROLE_ADMIN){
       this.router.navigate([MedicareRoutes.ADMIN_HOME]);
     }else if(loginRes.role==Roles.ROLE_DOCTOR){
      this.router.navigate([MedicareRoutes.DOCTOR_HOME]);
     }else if(loginRes.role==Roles.ROLE_PATIENT){
      this.router.navigate([MedicareRoutes.PATIENT_HOME]);
     }else if(loginRes.role==Roles.ROLE_SUPER_ADMIN){
      this.router.navigate([MedicareRoutes.SUPER_ADMIN_HOME]);
     }
  }

  submit() {
    const form = this.loginForm.getRawValue();
    this.authService.login(form).subscribe(
      {
        next: (res: any) => {
          console.log(res);
          // localStorage.setItem('isLoggedIn',JSON.stringify(true));
          // this.authService.isLogged$.next(true);
          this.loginRes=res;
          localStorage.setItem('user',JSON.stringify(this.loginRes));
          this.navigateByRole(this.loginRes);
           
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    )
  }
}
