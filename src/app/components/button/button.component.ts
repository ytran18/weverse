import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss'
})
export class ButtonComponent {
  @Input() title: string="";
  @Input() radius: number=0;
  @Input() paddingX: number=0;
  @Input() paddingY: number=0;
}
