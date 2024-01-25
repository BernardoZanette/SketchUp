import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    FontAwesomeModule
  ],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {

  // IMAGES //  
  first_top_image = "assets/home-page/home-back-ground-top.jpg"
  second_bottom_image = "assets/home-page/home-back-ground-bottom.jpg"

  // ICONS //
  left_arrow_icon = faUpRightFromSquare

}
