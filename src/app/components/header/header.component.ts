import { Component, OnInit, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isDesktop: boolean = window.innerWidth >= 768;
  isLoggedIn: boolean = true;
  userImage: string | null = null;
  defaultAvatar: string = 'assets/icons/user.png';
  defaultFilter: string = 'filtered';
  firstName: string = 'FirstName';
  lastName:string = "LastName"
  defaultImage: string = 'img-user';

  constructor(private router: Router) {}

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.isDesktop = event.target.innerWidth >= 768;
  }

  login = () => {
    this.router.navigate(['/login']);
  };

  upload = () => {
    if (this.isLoggedIn === false) {
      this.router.navigate(['/login']);
    } else {
      this.router.navigate(['/post']);
    }
  };

  ngOnInit(): void {
    if (this.userImage !== null) {
      this.defaultFilter = '';
    }

    const storedUser = sessionStorage.getItem('currentUser');
    if (storedUser) {
      const loggedInUser = JSON.parse(storedUser);
      this.userImage = loggedInUser.image;
      this.firstName = loggedInUser.firstName
      this.lastName = loggedInUser.lastName
      this.isLoggedIn = true;
      this.defaultImage = 'img-user';
      console.log(this.defaultImage)
    } else {
      this.isLoggedIn = false;
    }
  }
}
