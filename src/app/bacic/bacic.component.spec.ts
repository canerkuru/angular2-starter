import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BacicComponent } from './bacic.component';

describe('BacicComponent', () => {
  let component: BacicComponent;
  let fixture: ComponentFixture<BacicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BacicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BacicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
