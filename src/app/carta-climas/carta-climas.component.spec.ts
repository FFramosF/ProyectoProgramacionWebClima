import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CartaClimasComponent } from './carta-climas.component';

describe('CartaClimasComponent', () => {
  let component: CartaClimasComponent;
  let fixture: ComponentFixture<CartaClimasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CartaClimasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CartaClimasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
