import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisponibiliteadminComponent } from './disponibiliteadmin.component';

describe('DisponibiliteadminComponent', () => {
  let component: DisponibiliteadminComponent;
  let fixture: ComponentFixture<DisponibiliteadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [DisponibiliteadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DisponibiliteadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
