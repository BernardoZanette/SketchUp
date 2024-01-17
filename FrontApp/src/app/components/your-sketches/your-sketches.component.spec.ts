import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YourSketchesComponent } from './your-sketches.component';

describe('YourSketchesComponent', () => {
  let component: YourSketchesComponent;
  let fixture: ComponentFixture<YourSketchesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [YourSketchesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(YourSketchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
