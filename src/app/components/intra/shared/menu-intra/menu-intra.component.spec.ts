import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuIntraComponent } from './menu-intra.component';

describe('MenuIntraComponent', () => {
  let component: MenuIntraComponent;
  let fixture: ComponentFixture<MenuIntraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuIntraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuIntraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
