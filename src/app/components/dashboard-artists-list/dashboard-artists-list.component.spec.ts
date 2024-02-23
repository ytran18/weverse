import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardArtistsListComponent } from './dashboard-artists-list.component';

describe('DashboardArtistsListComponent', () => {
  let component: DashboardArtistsListComponent;
  let fixture: ComponentFixture<DashboardArtistsListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardArtistsListComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DashboardArtistsListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
