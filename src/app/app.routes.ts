import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CareerComponent } from './components/career/career.component';
import { ContactComponent } from './components/contact/contact.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { PagenotfoundComponent } from './components/pagenotfound/pagenotfound.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ProductComponent } from './components/product/product.component';
import { ChatbotComponent } from './components/chatbot/chatbot.component';
import { UnauthGuard } from './gaurds/unauth.guard';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  { path: 'about', component: AboutusComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'career', component: CareerComponent },
  { path: 'login', component: LoginComponent,canActivate: [UnauthGuard] },
  { path: 'signup', component: SignupComponent ,canActivate:[UnauthGuard]},
  { path: '**', component: PagenotfoundComponent },
];
