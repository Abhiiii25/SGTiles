import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule,BotMessageSquare,X } from 'lucide-angular';
import { ChatbotComponent } from "../chatbot/chatbot.component";
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, LucideAngularModule, ChatbotComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  bot_icon=BotMessageSquare;
  close_icon=X;
  isLoggedIn!: boolean;

 isMobileMenuOpen = false;
 userData: any = null; // Initialize userData to null

 constructor(private _auth:AuthService){}

  ngOnInit(){
    this.isLoggedIn=this._auth.isLoggedIn()

    if(this.isLoggedIn){
      this.userData=this._auth.getUserData()
      if(this.userData){
      Swal.fire(
        {
          toast: true,
          icon: 'success',
          title: 'Welcome!',
          text: `Hello ${this.userData.firstName}, you are logged in.`,
          showConfirmButton: false,
          timer: 3000,
          position: 'top',
        }
      )
      }
    }
  }


  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }

 logout(){
  this._auth.logout()
  Swal.fire({
    toast: true,
    icon: 'success',
    title: 'Logout!',
    text: `You have logged out successfully.`,
    showConfirmButton: false,
    timer: 3000,
    position: 'top',
  })
  this.isLoggedIn=false;
  this.userData=null;
 }

  isModalVisible: boolean = false;

  // Method to toggle the modal visibility
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
