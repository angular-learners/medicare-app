import { UserService } from 'src/app/shared/services/user.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicareRoutes } from '../../routes/medicare.routes';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.scss']
})
export class CreateAccountComponent implements OnInit {
 rolesOptions:any[]=[
     {key:'Doctor',value:'ROLE_DOCTOR'},
     {key:'Patient',value:'ROLE_PATIENT'},
     {key:'Admin',value:'ROLE_ADMIN'},
     {key:'Super Admin',value:'ROLE_SUPER_ADMIN'}
 ]

  createAccountForm!: FormGroup;
  constructor(private fb: FormBuilder, private userService: UserService, private router: Router) {

  }
  ngOnInit(): void {
    this.onInitCreateAccountForm();
  }

  onInitCreateAccountForm() {
    this.createAccountForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      password: [''],
      email: [''],
      role: [''],
    })
  }

  createAccount() {
    const form = this.createAccountForm.getRawValue();
    console.log(form);
    this.userService.createUserAccount(form).subscribe(
      {
        next: (res) => {
          console.log(res);
          this.router.navigate([MedicareRoutes.LOGIN])
        },
        error: (err) => {
          console.log(err);
        }
      }
    )
  }

}
