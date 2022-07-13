import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterVComponent } from './footer-v.component';

describe('FooterVComponent', () => {
  let component: FooterVComponent;
  let fixture: ComponentFixture<FooterVComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterVComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterVComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
