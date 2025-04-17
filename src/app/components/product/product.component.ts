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
      name: "Marble Elegance",
      category: "Floor Tiles",
      size: "24x24 inches",
      thickness: "10mm",
      finish: "Polished",
      color: "White with Gray Veins",
      price: 45.99,
      coverage: "16 sq ft/box",
      stock: 150,
      rating: 4.8,
      image: "https://via.placeholder.com/300x300?text=Marble+Elegance",
      description: "Premium marble-effect porcelain tiles with realistic veining for luxurious interiors."
    },
    {
      id: 2,
      name: "Wooden Whisper",
      category: "Wooden Planks",
      size: "6x36 inches",
      thickness: "8mm",
      finish: "Matte",
      color: "Oak Brown",
      price: 32.50,
      coverage: "18 sq ft/box",
      stock: 220,
      rating: 4.6,
      image: "https://via.placeholder.com/300x300?text=Wooden+Whisper",
      description: "Wood-look ceramic tiles with authentic grain texture, perfect for cozy spaces."
    },
    {
      id: 3,
      name: "Metro Shine",
      category: "Wall Tiles",
      size: "3x6 inches",
      thickness: "6mm",
      finish: "Glossy",
      color: "Subway White",
      price: 12.75,
      coverage: "5 sq ft/box",
      stock: 350,
      rating: 4.4,
      image: "https://via.placeholder.com/300x300?text=Metro+Shine",
      description: "Classic subway tiles with high-gloss finish for timeless kitchen/bathroom walls."
    },
    {
      id: 4,
      name: "Terrazzo Touch",
      category: "Decorative Tiles",
      size: "12x12 inches",
      thickness: "9mm",
      finish: "Honed",
      color: "Multicolor Speckles",
      price: 28.90,
      coverage: "10 sq ft/box",
      stock: 95,
      rating: 4.7,
      image: "https://via.placeholder.com/300x300?text=Terrazzo+Touch",
      description: "Trendy terrazzo-pattern tiles with composite chips for artistic flooring."
    },
    {
      id: 5,
      name: "Slate Texture",
      category: "Outdoor Tiles",
      size: "18x18 inches",
      thickness: "12mm",
      finish: "Natural",
      color: "Charcoal Gray",
      price: 38.25,
      coverage: "12 sq ft/box",
      stock: 180,
      rating: 4.9,
      image: "https://via.placeholder.com/300x300?text=Slate+Texture",
      description: "Slate-effect anti-slip tiles ideal for patios and outdoor areas."
    }
  ];
  
}
