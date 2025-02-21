import { CommonModule, isPlatformBrowser } from '@angular/common';
import { Component, HostListener, Inject, OnInit, PLATFORM_ID, signal } from '@angular/core';
import { LucideAngularModule, ChevronLeft, ChevronRight, Dot } from 'lucide-angular';

@Component({
  selector: 'app-image-slider',
  standalone: true, // ✅ Ensure it's a standalone component
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './image-slider.component.html',
  styleUrl: './image-slider.component.css'
})
export class ImageSliderComponent implements OnInit { // ✅ Ensure the class is exported
  rightArrow = ChevronRight;
  leftArrow = ChevronLeft;
  dot = Dot;
  activeSlideIndex = signal(0);
  isAutoslide = true;
  iconSize: number = 30;
  isBrowser: boolean = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
    this.isBrowser = isPlatformBrowser(this.platformId); // ✅ Ensure window-related code runs only in browser
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    if (this.isBrowser) {
      this.updateIconSize(event.target.innerWidth);
    }
  }

  updateIconSize(width: number) {
    if (width >= 1024) {
      this.iconSize = 60;
    } else if (width >= 768) {
      this.iconSize = 40;
    } else {
      this.iconSize = 30;
    }
  }

  images = [
    '/product/img1.jpg', '/product/img2.jpg', '/product/img3.jpg', '/product/img4.jpg', '/product/img5.jpg'
  ];

  ngOnInit(): void {
    if (this.isBrowser) {
      this.updateIconSize(window.innerWidth);
      if (this.isAutoslide) {
        setInterval(() => {
          this.nextSlide();
        }, 3000);
      }
    }
  }

  nextSlide() {
    let active = this.activeSlideIndex();
    active = (active + 1) % this.images.length;
    this.activeSlideIndex.set(active);
  }

  previouseSlide() {
    let active = this.activeSlideIndex();
    active = (active - 1 + this.images.length) % this.images.length;
    this.activeSlideIndex.set(active);
  }

  gotoSlide(index: number) {
    this.activeSlideIndex.set(index);
  }
}



// import { CommonModule } from '@angular/common';
// import { Component, HostListener, OnInit, signal } from '@angular/core';
// import { LucideAngularModule, ChevronLeft, ChevronRight, Dot } from 'lucide-angular';


// @Component({
//   selector: 'app-image-slider',
//   imports: [CommonModule, LucideAngularModule],
//   templateUrl: './image-slider.component.html',
//   styleUrl: './image-slider.component.css'
// })
// export class ImageSliderComponent implements OnInit {
//   rightArrow = ChevronRight;
//   leftArrow = ChevronLeft;
//   dot = Dot;
//   activeSlideIndex = signal(0);
//   isAutoslide = true;

//   iconSize: number = 30; // Default icon size

//   // Listen for window resize events and update icon size dynamically
//   @HostListener('window:resize', ['$event'])
//   onResize(event: any) {
//     this.updateIconSize(event.target.innerWidth); // Accessing window width via event.target
//   }

//   // Function to update the icon size based on screen width
//   updateIconSize(width: number) {
//     if (width >= 1024) {
//       this.iconSize = 60; // Large screens
//     } else if (width >= 768) {
//       this.iconSize = 40; // Medium screens
//     } else {
//       this.iconSize = 30; // Small screens
//     }
//   }



//   images = [
//     '/product/img1.jpg', '/product/img2.jpg', '/product/img3.jpg', '/product/img4.jpg', '/product/img5.jpg'
//   ]



//   ngOnInit(): void {
//     if (this.isAutoslide) {
//       setInterval(() => {
//         this.nextSlide();
//       }, 3000);
//     }

//     this.updateIconSize(window.innerWidth); // Initial size when the component loads

//   }



//   nextSlide() {
//     let active = this.activeSlideIndex();
//     if (active == this.images.length - 1) {
//       active = 0;
//     } else {
//       active++;
//     }
//     this.activeSlideIndex.set(active);
//   }
//   previouseSlide() {
//     let active = this.activeSlideIndex();
//     if (active == 0) {
//       active = this.images.length - 1;
//     } else {
//       active--;
//     }
//     this.activeSlideIndex.set(active);
//   }

//   gotoSlide(index: number) {
//     this.activeSlideIndex.set(index);
//   }
// }
