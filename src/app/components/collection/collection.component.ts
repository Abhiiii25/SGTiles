import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { LucideAngularModule, MoveRight, Route } from 'lucide-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-collection',
  imports: [LucideAngularModule, CommonModule],
  templateUrl: './collection.component.html',
  styleUrl: './collection.component.css'
})
export class CollectionComponent {
  constructor(private _router: Router) { }

  expArrow = MoveRight;

  cardsData: any = [
    { title: "Modern Living", shortDes: "Contemporary designs for modern spaces", img: '/slider_images/img1.jpg' },
    { title: "Classic Elegance", shortDes: "Timeless Patterns and textures", img: '/slider_images/img4.jpg' },
    { title: "Outdoor Collection", shortDes: "Durable tiles for outdoor spaces", img: '/slider_images/img5.jpg' }

  ]

  gotoProduts() {
    this._router.navigate(['product'])
  }
}
