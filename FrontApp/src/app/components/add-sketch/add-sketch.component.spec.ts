import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSketchComponent } from './add-sketch.component';

describe('AddSketchComponent', () => {
  let component: AddSketchComponent;
  let fixture: ComponentFixture<AddSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddSketchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AddSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
