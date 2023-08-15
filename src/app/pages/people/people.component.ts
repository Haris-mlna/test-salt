import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css'],
})
export class PeopleComponent implements OnInit {
  constructor(private userService: UserService) {}

  userList: any[] = [];
  commentList: any[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      console.log(data);
      this.userList = data.users;
      console.log(this.userList);
    });

    this.userService.getComments().subscribe((commentsData) => {
      console.log(commentsData);
      this.commentList = commentsData;
    });
  }
}
