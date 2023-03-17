import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelelrUpdateProductComponent } from './selelr-update-product.component';

describe('SelelrUpdateProductComponent', () => {
  let component: SelelrUpdateProductComponent;
  let fixture: ComponentFixture<SelelrUpdateProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelelrUpdateProductComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelelrUpdateProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
