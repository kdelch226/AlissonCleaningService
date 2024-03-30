import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousadminComponent } from './rendez-vousadmin.component';

describe('RendezVousadminComponent', () => {
  let component: RendezVousadminComponent;
  let fixture: ComponentFixture<RendezVousadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendezVousadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendezVousadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
