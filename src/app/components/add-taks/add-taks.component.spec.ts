import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTaksComponent } from './add-taks.component';

describe('AddTaksComponent', () => {
  let component: AddTaksComponent;
  let fixture: ComponentFixture<AddTaksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddTaksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddTaksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
