import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestbagComponent } from './testbag.component';

describe('TestbagComponent', () => {
  let component: TestbagComponent;
  let fixture: ComponentFixture<TestbagComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestbagComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestbagComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
