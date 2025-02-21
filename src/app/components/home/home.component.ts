import { Component } from '@angular/core';
import { ImageSliderComponent } from '../image-slider/image-slider.component';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, MoveRight, ArrowDownToLine } from 'lucide-angular';
import { CollectionComponent } from "../collection/collection.component";
import { SuppliersComponent } from "../suppliers/suppliers.component";
import { BathwareBrandsComponent } from "../bathware-brands/bathware-brands.component";
@Component({
  selector: 'app-home',
  imports: [ImageSliderComponent, CommonModule, LucideAngularModule, CollectionComponent, CollectionComponent, SuppliersComponent, BathwareBrandsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  expArrow = MoveRight;
  downloadArreow = ArrowDownToLine;



  gotoProduts() {
    // this.Routes.navigate(['product'])
    alert("Need to Implement pendding.....???");
    console.log("Product button is working");
  }

}
