import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuModuleComponent } from './menu-module.component';

describe('MenuModuleComponent', () => {
  let component: MenuModuleComponent;
  let fixture: ComponentFixture<MenuModuleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuModuleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuModuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
