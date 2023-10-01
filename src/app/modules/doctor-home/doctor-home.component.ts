import { Component, ViewChild } from '@angular/core';
import { MatMenu } from '@angular/material/menu';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-doctor-home',
  templateUrl: './doctor-home.component.html',
  styleUrls: ['./doctor-home.component.scss']
})
export class DoctorHomeComponent {
  panelOpenState=false;
  doctorMenuList: any[]=[];
  @ViewChild('sidenav') sidenav!:MatSidenav;
  isExpanded: boolean = true; 

 
  constructor(private userService:UserService){
    this.getMessage();
    this.getDoctorMenus();

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

  getDoctorMenus(){
    this.userService.getDoctorMenus().subscribe(
      {
        next:(res:any)=>{
          console.log(res)
          this.doctorMenuList=[...res.doctorMenu];
        },
        error:(err:any)=>{
          console.log(err);
        }
      }
    )
  }
  toggleSidenav() {
    this.isExpanded = !this.isExpanded;
    if (!this.isExpanded) {
      this.sidenav.close(); // Close the side nav menu when collapsing
    }
  }
}

