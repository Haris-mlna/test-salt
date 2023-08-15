import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  userList : any[] = []
  commentList: any[] = [];
  timestamp: number[] = [];

  userone : any;
  usertwo : any;
  userthree : any;
  userfour : any;
  userfive : any;

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userService.getUsers()
      .subscribe(data => {
        this.userList = data.users
        this.userone = this.userList[0]
        this.usertwo = this.userList[1]
        this.userthree = this.userList[2]
        this.userfour = this.userList[3]
        this.userfive = this.userList[4]

        console.log(
          this.userone,
          this.usertwo,
          this.userthree,
          this.userfour,
          this.userfive,
        )
      });

    this.userService.getComments()
      .subscribe(data => {
        // console.log(data)
        this.commentList = data.comments;
        this.timestamp = this.generateRandomTimestamps(this.commentList.length);
        // console.log(this.timestamp);
      });
  }

  generateRandomTimestamps(length: number): number[] {
    const minTimestamp = 0;
    const maxTimestamp = 60;
    const roundedTimestamps: number[] = [];

    for (let i = 0; i < length; i++) {
      const randomTimestamp = Math.floor(Math.random() * (maxTimestamp - minTimestamp + 1)) + minTimestamp;
      roundedTimestamps.push(randomTimestamp);
    }

    return roundedTimestamps;
  }
}
