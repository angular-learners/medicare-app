import { Component, ViewChild, OnInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-super-admin-home',
  templateUrl: './super-admin-home.component.html',
  styleUrls: ['./super-admin-home.component.scss']
})
export class SuperAdminHomeComponent  implements OnInit{
  panelOpenState=false;
  superAdminMenuList: any[]=[];
  @ViewChild('sidenav') sidenav!:MatSidenav;
  isExpanded: boolean = true; 

 
  constructor(private userService:UserService){

  }
  ngOnInit(): void {
    this.getSuperAdminMenus();
  }

  getSuperAdminMenus(){
    this.userService.getSuperAdminMenus().subscribe(
      {
        next:(res:any)=>{
        
          this.superAdminMenuList=[...res.superAdminMenu];
          console.log(this.superAdminMenuList)
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
      this.sidenav.close(); 
    }
  }
}
