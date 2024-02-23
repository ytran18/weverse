import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [SharedComponentsModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
