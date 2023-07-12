import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {
  slide1: string = '/assets/images/slide1.jpg';
  slide2: string = '/assets/images/slide2.jpg';
  slide3: string = '/assets/images/slide3.jpg';
}
