import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Newproduct2Component } from './newproduct2.component';

describe('Newproduct2Component', () => {
  let component: Newproduct2Component;
  let fixture: ComponentFixture<Newproduct2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Newproduct2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Newproduct2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
