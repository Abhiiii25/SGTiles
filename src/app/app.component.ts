import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { LucideAngularModule,BotMessageSquare,X } from 'lucide-angular';
import { ChatbotComponent } from "./components/chatbot/chatbot.component";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, CommonModule, NavbarComponent, FooterComponent, LucideAngularModule, ChatbotComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'tilesShop';
  bot_icon=BotMessageSquare;
  close_icon=X;



  isModalVisible: boolean = false;

  // Method to toggle the modal visibility
  toggleModal(): void {
    this.isModalVisible = !this.isModalVisible;
  }
}
