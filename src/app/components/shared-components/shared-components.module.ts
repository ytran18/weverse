import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InputComponent } from '../input/input.component';
import { ButtonComponent } from '../button/button.component';
import { HeaderComponent } from '../header/header.component';
import { DashboardBannerComponent } from '../dashboard-banner/dashboard-banner.component';

@NgModule({
  declarations: [InputComponent, ButtonComponent, HeaderComponent, DashboardBannerComponent],
  imports: [
    CommonModule
  ],
  exports: [InputComponent, ButtonComponent, HeaderComponent, DashboardBannerComponent]
})
export class SharedComponentsModule { }
