import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoveRight, ArrowDownToLine } from 'lucide-angular';
import { CollectionComponent } from "../collection/collection.component";
import { SuppliersComponent } from "../suppliers/suppliers.component";
import { BathwareBrandsComponent } from "../bathware-brands/bathware-brands.component";
import { AuthService } from '../../services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  imports: [ImageSliderComponent, CommonModule, LucideAngularModule, CollectionComponent, CollectionComponent, SuppliersComponent, BathwareBrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  expArrow = MoveRight;
  downloadArreow = ArrowDownToLine;

  isLoggedIn!: boolean;

  userData: any = null; // Initialize userData to null

 constructor(
  // private _auth:AuthService,
  private _router:Router){}

  ngOnInit(){
   
  }


  gotoProduts() {
    this._router.navigate(['product'])

  }

}
