import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SplinegraphComponent } from './splinegraph.component';

describe('SplinegraphComponent', () => {
  let component: SplinegraphComponent;
  let fixture: ComponentFixture<SplinegraphComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SplinegraphComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SplinegraphComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
