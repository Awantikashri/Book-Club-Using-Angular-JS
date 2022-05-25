import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnvolopeComponent } from './envolope.component';

describe('EnvolopeComponent', () => {
  let component: EnvolopeComponent;
  let fixture: ComponentFixture<EnvolopeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnvolopeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnvolopeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
