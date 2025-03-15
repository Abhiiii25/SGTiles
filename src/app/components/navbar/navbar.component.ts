import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LucideAngularModule,BotMessageSquare,X } from 'lucide-angular';
import { ChatbotComponent } from "../chatbot/chatbot.component";
@Component({
  selector: 'app-navbar',
  imports: [RouterLink, CommonModule, LucideAngularModule, ChatbotComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  bot_icon=BotMessageSquare;
  close_icon=X;


 isMobileMenuOpen = false;

  toggleMobileMenu() {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
  }


  isModalVisible: boolean = false;

  // Method to toggle the modal visibility
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
