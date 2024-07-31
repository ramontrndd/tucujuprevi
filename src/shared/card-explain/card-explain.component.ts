import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-card-explain',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card-explain.component.html',
  styleUrl: './card-explain.component.scss',
})
export class CardExplainComponent {
  @Input() title: string = '';
  @Input() icon: string = '';
  @Input() description: string = '';
}
