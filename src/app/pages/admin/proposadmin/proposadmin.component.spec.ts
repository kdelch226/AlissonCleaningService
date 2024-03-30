import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProposadminComponent } from './proposadmin.component';

describe('ProposadminComponent', () => {
  let component: ProposadminComponent;
  let fixture: ComponentFixture<ProposadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ProposadminComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProposadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
