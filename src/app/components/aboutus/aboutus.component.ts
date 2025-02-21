import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LucideAngularModule, Goal, Eye, Compass, Medal, Layers, CircleCheckBig, IndianRupee, CircleHelp, Truck } from 'lucide-angular';
import { title } from 'process';



@Component({
  selector: 'app-aboutus',
  imports: [CommonModule, LucideAngularModule],
  templateUrl: './aboutus.component.html',
  styleUrl: './aboutus.component.css'
})
export class AboutusComponent {

  goalic = Goal;
  visionic = Eye;
  missionic = Compass;
  medalic = Medal;
  stackic = Layers;
  checkic = CircleCheckBig;
  priceic = IndianRupee;
  helpic = CircleHelp;
  truckic = Truck;

  wCUs = [
    { icon: this.stackic, title: 'Vast Selection', desc: 'We offer a wide range of designs and styles to suit every need.' },
    { icon: this.checkic, title: 'Quality Assurance', desc: 'Premium materials ensuring druability and longevity.' },
    { icon: this.priceic, title: 'Competitive Pricing', desc: 'Exceptional value without compromising on quality.' },
    { icon: this.helpic, title: 'Expert Guidance', desc: 'Experienced team to assist you in tile selections.' },
    { icon: this.truckic, title: 'Timely Delivery', desc: 'We ensure our products reach you on time, every time.' },
  ]


  iconSize: number = 20; // Default icon size

  // Listen for window resize events and update icon size dynamically
  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.updateIconSize(event.target.innerWidth); // Accessing window width via event.target
  }

  // Function to update the icon size based on screen width
  updateIconSize(width: number) {
    if (width >= 1024) {
      this.iconSize = 50; // Large screens
    } else if (width >= 768) {
      this.iconSize = 30; // Medium screens
    } else {
      this.iconSize = 20; // Small screens
    }
  }

  ngOnInit(): void {
    this.updateIconSize(window.innerWidth);
  }

}
