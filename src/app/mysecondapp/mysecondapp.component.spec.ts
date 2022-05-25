import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MysecondappComponent } from './mysecondapp.component';

describe('MysecondappComponent', () => {
  let component: MysecondappComponent;
  let fixture: ComponentFixture<MysecondappComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MysecondappComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MysecondappComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
