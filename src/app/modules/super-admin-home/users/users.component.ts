import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit, AfterViewInit {
  ELEMENT_DATA: any[] = []
  displayedColumns: string[] = ['typeId', 'firstName', 'lastName', 'username', 'email', 'role', 'createdDate', 'updatedDate', 'status', 'active'];
  dataSource = new MatTableDataSource<User[]>(this.ELEMENT_DATA);
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  constructor(private userService: UserService) {

  }
  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  ngOnInit(): void {
    this.getAllUsers();
  }


  getAllUsers() {
    this.userService.getAllUsers().subscribe(
      {
        next: (res: any) => {
          this.dataSource.data = res;
        },
        error: (err: any) => {
          console.log(err);
        }
      }
    )
  }

}
