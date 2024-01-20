import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSketchComponent } from './edit-sketch.component';

describe('EditSketchComponent', () => {
  let component: EditSketchComponent;
  let fixture: ComponentFixture<EditSketchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EditSketchComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EditSketchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
