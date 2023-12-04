import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CldImageComponent } from './cld-image.component';

describe('CldImageComponent', () => {
  let component: CldImageComponent;
  let fixture: ComponentFixture<CldImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CldImageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CldImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
