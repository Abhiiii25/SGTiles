import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  products: any[] = [
    {
      id: 1,
      name: "ESSCO Catalogue",
      category: "Floor Tiles",
      size: "24x24 inches",
      thickness: "10mm",
      finish: "Polished",
      color: "White with Gray Veins",
      coverage: "16 sq ft/box",
      stock: 150,
      rating: 4.8,
      pdfFile: "catelogue/ESSCO_CATALOGUE.pdf",
      description: "ESSCO_CATALOGUE.pdf - Explore the complete ESSCO tile collection catalogue."
    },
    {
      id: 2,
      name: "Look Book",
      category: "Wooden Planks",
      size: "6x36 inches",
      thickness: "8mm",
      finish: "Matte",
      color: "Oak Brown",
      coverage: "18 sq ft/box",
      stock: 220,
      rating: 4.6,
      pdfFile: "catelogue/Look_Book.pdf",
      description: "Look_Book.pdf - Browse the latest tile designs and inspirations."
    },
    {
      id: 3,
      name: "Raindrop Sadhguru 600x600",
      category: "Wall Tiles",
      size: "3x6 inches",
      thickness: "6mm",
      finish: "Glossy",
      color: "Subway White",
      coverage: "5 sq ft/box",
      stock: 350,
      rating: 4.4,
      pdfFile: "catelogue/Raindrop_Sadhguru_600x600.pdf",
      description: "Raindrop_Sadhguru_600x600.pdf - Detailed catalogue for Raindrop Sadhguru 600x600mm tiles."
    },
    {
      id: 4,
      name: "Sadhguru 12x18 Bathroom Wall",
      category: "Decorative Tiles",
      size: "12x12 inches",
      thickness: "9mm",
      finish: "Honed",
      color: "Multicolor Speckles",
      coverage: "10 sq ft/box",
      stock: 95,
      rating: 4.7,
      pdfFile: "catelogue/SADHGURU_12x18_Bathroom_wall.pdf",
      description: "SADHGURU_12x18_Bathroom_wall.pdf - Catalogue for Sadhguru 12x18 bathroom wall tiles."
    },
    {
      id: 5,
      name: "Sadhguru Glossy EL 12x18",
      category: "Outdoor Tiles",
      size: "18x18 inches",
      thickness: "12mm",
      finish: "Natural",
      color: "Charcoal Gray",
      coverage: "12 sq ft/box",
      stock: 180,
      rating: 4.9,
      pdfFile: "catelogue/SADHGURU_Glossy_EL_12x18.pdf",
      description: "SADHGURU_Glossy_EL_12x18.pdf - Glossy finish EL 12x18 tile catalogue."
    },
    {
      id: 6,
      name: "Sadhguru Matt 600x600mm",
      category: "Outdoor Tiles",
      size: "18x18 inches",
      thickness: "12mm",
      finish: "Natural",
      color: "Charcoal Gray",
      coverage: "12 sq ft/box",
      stock: 180,
      rating: 4.9,
      pdfFile: "catelogue/SADHGURU_Matt_600x600mm.pdf",
      description: "SADHGURU_Matt_600x600mm.pdf - Matt finish 600x600mm tile catalogue."
    },
    {
      id: 7,
      name: "Sadhguru Tiles Pune",
      category: "Outdoor Tiles",
      size: "18x18 inches",
      thickness: "12mm",
      finish: "Natural",
      color: "Charcoal Gray",
      coverage: "12 sq ft/box",
      stock: 180,
      rating: 4.9,
      pdfFile: "catelogue/SADHGURU_TILES_PUNE.pdf",
      description: "SADHGURU_TILES_PUNE.pdf - Sadhguru Tiles Pune collection catalogue."
    }
  ];

}
