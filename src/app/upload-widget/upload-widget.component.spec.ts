import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadWidgetComponent } from './upload-widget.component';

describe('UploadWidgetComponent', () => {
  let component: UploadWidgetComponent;
  let fixture: ComponentFixture<UploadWidgetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadWidgetComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
