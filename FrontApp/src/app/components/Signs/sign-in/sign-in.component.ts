import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavBarService } from '../../../Services/nav-bar.service';

@Component({
  selector: 'app-sign-in',
  standalone: true,
  imports: [],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.css'
})
export class SignInComponent implements OnInit, OnDestroy{
  constructor (private navbarService: NavBarService) {}

    ngOnInit(): void {
       this.navbarService.hide()
    }

    ngOnDestroy(): void {
      this.navbarService.display()
    }

} 
