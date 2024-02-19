import { Component } from '@angular/core';
import { SharedComponentsModule } from '../../components/shared-components/shared-components.module';
@Component({
  selector: 'app-login',
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [SharedComponentsModule],
})
export class LoginComponent {

}
