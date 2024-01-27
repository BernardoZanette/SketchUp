import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavBarService } from '../../../Services/nav-bar.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit, OnDestroy{

  // IMAGES //
  logo_image = "assets/general/logo.png";
  signs_back_ground = "assets/general/signs-back-ground.jpg"

  constructor (private navbarService: NavBarService) {}

    ngOnInit(): void {
       this.navbarService.hide()
    }

    ngOnDestroy(): void {
      this.navbarService.display()
    }

} 
