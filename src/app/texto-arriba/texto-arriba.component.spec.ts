import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TextoArribaComponent } from './texto-arriba.component';

describe('TextoArribaComponent', () => {
  let component: TextoArribaComponent;
  let fixture: ComponentFixture<TextoArribaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TextoArribaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TextoArribaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
