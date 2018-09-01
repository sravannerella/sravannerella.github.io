import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderWritingComponent } from './header-writing.component';

describe('HeaderWritingComponent', () => {
  let component: HeaderWritingComponent;
  let fixture: ComponentFixture<HeaderWritingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderWritingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderWritingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
