import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/shared/services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  usersData: any[];
  displayedColumns: string[];

  constructor(public userService: UserService) {
    this.displayedColumns = ['name', 'role', 'email', 'username'];
  }

  ngOnInit() {
    this.userService.getAllUsers().subscribe((response: any) => {
      console.log(response._embedded.persons);
      this.usersData = response._embedded.persons;
    });
  }

  parseRole(role: string) {
    if (role === 'ROLE_ADMINISTRATOR') {
      return 'Administrador';
    }
    if (role === 'ROLE_EDITOR') {
      return 'Editor';
    }
    if (role === 'ROLE_REDACTOR') {
      return 'Redactor';
    }
  }

}
