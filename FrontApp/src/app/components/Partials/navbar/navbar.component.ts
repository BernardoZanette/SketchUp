import { Component, OnDestroy } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { NavBarService } from '../../../Services/nav-bar.service';
import { Subscription } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterModule,
    FontAwesomeModule,
    CommonModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnDestroy {

  // ICONS //
  search_icon = faSearch

  // OTHER VARIABLES //

  showNavbar: boolean=true;
  subscription: Subscription

  constructor(private navbarService: NavBarService) {
    this.subscription = this.navbarService.showNavbar.subscribe((value) => {
      this.showNavbar = value;
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
