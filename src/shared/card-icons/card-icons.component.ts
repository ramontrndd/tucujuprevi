import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card-icons',
  standalone: true,
  imports: [MatIconModule, CommonModule],
  templateUrl: './card-icons.component.html',
  styleUrl: './card-icons.component.scss',
})
export class CardIconsComponent {
  @Input() title: string = '';
  @Input() image: string = '';
}
