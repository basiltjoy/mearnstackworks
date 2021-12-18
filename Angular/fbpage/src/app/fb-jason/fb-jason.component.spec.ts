import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FbJasonComponent } from './fb-jason.component';

describe('FbJasonComponent', () => {
  let component: FbJasonComponent;
  let fixture: ComponentFixture<FbJasonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FbJasonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FbJasonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
