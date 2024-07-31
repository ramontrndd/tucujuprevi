import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIcon } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { ScrollBehaviorService } from '@app/services/scroll-behavior.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [MatToolbarModule, MatIcon, MatButtonModule, MatCardModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private scrollService = inject(ScrollBehaviorService);

  scrollToSection() {
    this.scrollService.scrollToSection('dprev');
  }
}
