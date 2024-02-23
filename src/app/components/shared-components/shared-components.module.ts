import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardBannerComponent } from '../dashboard-banner/dashboard-banner.component';
import { DashboardArtistsListComponent } from '../dashboard-artists-list/dashboard-artists-list.component';
import { ArtistCardComponent } from '../artist-card/artist-card.component';

@NgModule({
  declarations: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    DashboardBannerComponent,
    DashboardArtistsListComponent,
    ArtistCardComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    InputComponent,
    ButtonComponent,
    HeaderComponent,
    DashboardBannerComponent,
    DashboardArtistsListComponent,
    ArtistCardComponent
  ]
})
export class SharedComponentsModule { }
