import { Component } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent {

  constructor(private userService:UserService){
    this.getMessage();

  }
  getMessage(){
      this.userService.welcome().subscribe(
        {
          next:(res:any)=>{
            console.log(res)
          },
          error:(err:any)=>{
            console.log(err);
          }
        }
      )
  }
}
