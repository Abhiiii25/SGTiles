import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BathwareBrandsComponent } from './bathware-brands.component';

describe('BathwareBrandsComponent', () => {
  let component: BathwareBrandsComponent;
  let fixture: ComponentFixture<BathwareBrandsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BathwareBrandsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BathwareBrandsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
