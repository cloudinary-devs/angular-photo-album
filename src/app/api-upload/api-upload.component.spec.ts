import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApiUploadComponent } from './api-upload.component';

describe('ApiUploadComponent', () => {
  let component: ApiUploadComponent;
  let fixture: ComponentFixture<ApiUploadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ApiUploadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ApiUploadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
