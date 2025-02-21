import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, MoveRight } from 'lucide-angular';

@Component({
  selector: 'app-collection',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {

  expArrow = MoveRight;

  cardsData: any = [
    { title: "Modern Living", shortDes: "Contemporary designs for modern spaces", img: '/product/img1.jpg' },
    { title: "Classic Elegance", shortDes: "Timeless Patterns and textures", img: '/product/img2.jpg' },
    { title: "Outdoor Collection", shortDes: "Durable tiles for outdoor spaces", img: '/product/img3.jpg' }

  ]


}
