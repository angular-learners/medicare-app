import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.scss']
})
export class DoctorProfileComponent  implements OnInit{
  updateProfileForm!:FormGroup;
  userId: number = 0;
  profile!:User;
  isUpdateProfile:boolean=false;
  constructor(private userService: UserService,private fb:FormBuilder) {
  this.getUserId();
  this.myProfile();
  }
  ngOnInit(): void {
 this.onInitCreateAccountForm();
  }


  
  onInitCreateAccountForm() {
    this.updateProfileForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      username: [''],
      password: [''],
      email: [''],
    })
  }
  getUserId() {
    let user = JSON.parse(localStorage.getItem('user') as any);
    this.userId = user.userId;
    console.log(this.userId);
  }

  patchProfile(res:User){
     let {firstName,lastName,username,password,email}=res;
      this.updateProfileForm.patchValue({
        firstName: firstName,
        lastName: lastName,
        username: username,
        password: password,
        email: email,
      })
  }

  myProfile(){
    this.userService.getUserById(this.userId).subscribe(
      {
        next:(res:any)=>{
          this.profile=res;
          console.log(this.profile)
          this.patchProfile(res);
        },
        error:(err:any)=>{
          console.log(err);
        }
      } 
    )
  }

  updateProfile(){
    const form=this.updateProfileForm.getRawValue();
    this.userService.updateUserById(this.userId,form).subscribe(
      {
        next:(res:any)=>{
        console.log(res); 
        this.myProfile();
        this.isUpdateProfile=false;
        },
        error:(err:any)=>{
          console.log(err);
        }
      } 
    )
  }
}
