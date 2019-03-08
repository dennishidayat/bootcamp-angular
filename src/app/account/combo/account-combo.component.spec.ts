import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AccountComboComponent } from './account-combo.component';

describe('AccountComboComponent', () => {
  let component: AccountComboComponent;
  let fixture: ComponentFixture<AccountComboComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AccountComboComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AccountComboComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
