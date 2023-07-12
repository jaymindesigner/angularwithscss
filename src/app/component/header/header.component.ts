import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  isMenuCollapsed = true;

  logo: string = '/assets/images/logo.png';
  
  // constructor() {
  //   this.ImagePath = '/assets/images/logo.png'
  // }
}
