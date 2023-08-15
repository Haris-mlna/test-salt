import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router'; // Import Router

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {} // Inject Router

  userList: any[] = [];

  ngOnInit(): void {
    this.userService.getUsers().subscribe((data) => {
      this.userList = data.users;
      console.log(this.userList);
    });
  }

  login(): void {
    const user = this.userList.find(
      (u) => u.username === this.username && u.password === this.password
    );

    console.log(this.username, this.password);
  
    if (user) {
      const loggedInUser = {
        id: user.id,
        username: user.username,
        firstName: user.firstName,
        lastName: user.lastName,
        image: user.image,
      };
  
      sessionStorage.setItem('currentUser', JSON.stringify(loggedInUser));
      console.log('User logged in:', loggedInUser);
      
      this.router.navigate(['/']);
    } else {
      console.log('Invalid username or password');
    }
  }
}
