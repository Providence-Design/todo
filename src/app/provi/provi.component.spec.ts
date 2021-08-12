import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviComponent } from './provi.component';

describe('ProviComponent', () => {
  let component: ProviComponent;
  let fixture: ComponentFixture<ProviComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProviComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
