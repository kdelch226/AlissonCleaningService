import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RendezVousclientComponent } from './rendez-vousclient.component';

describe('RendezVousclientComponent', () => {
  let component: RendezVousclientComponent;
  let fixture: ComponentFixture<RendezVousclientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RendezVousclientComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RendezVousclientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
