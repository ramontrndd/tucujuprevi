import { Component, HostListener } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardExplainComponent } from 'src/shared/card-explain/card-explain.component';
import { CardIconsComponent } from 'src/shared/card-icons/card-icons.component';
import { CardsComponent } from 'src/shared/cards/cards.component';
import { CarrouselComponent } from 'src/shared/carrousel/carrousel.component';

import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HeaderComponent } from './components/header/header.component';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CarrouselComponent,
    HeaderComponent,
    AboutComponent,
    CardsComponent,
    CardIconsComponent,
    CardExplainComponent,
    ContactComponent,
    MatIconModule,
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'tucujuprevi';
  isVisible = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;
    const windowHeight =
      window.innerHeight ||
      document.documentElement.clientHeight ||
      document.body.clientHeight ||
      0;
    const documentHeight =
      document.documentElement.scrollHeight || document.body.scrollHeight || 0;

    this.isVisible = scrollTop + windowHeight >= documentHeight;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
