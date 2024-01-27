import { Component, OnDestroy, OnInit } from '@angular/core';
import { NavBarService } from '../../../Services/nav-bar.service';
import { CommonModule} from '@angular/common';
import { UserService } from '../../../Services/user.service';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [
    FormsModule,
    CommonModule,
    RouterModule
  ],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent implements OnInit, OnDestroy{

  
  // IMAGES //
  logo_image = "assets/general/logo.png";
  signs_back_ground = "assets/general/signs-back-ground.jpg"

  constructor (private navbarService: NavBarService, private userService: UserService) {}

    name!:string
    email!:string
    password!:string


    errors: any = [];

    ngOnInit(): void {
       this.navbarService.hide()
    }

    saveUser() {

      var inputData = {
        name: this.name,
        email: this.email,
        password: this.password
      }

      this.userService.saveUser(inputData).subscribe({
        next: (res: any) => {
          console.log(res, 'response');
          alert('User successfully created')
          this.name = ''
          this.email = ''
          this.password = ''
        },
        error: (err: any) => {
          this.errors = err.error.errors
          console.log(err.error.errors, 'errors')
        }
      })

    }

    ngOnDestroy(): void {
      this.navbarService.display()
    }
    

}

