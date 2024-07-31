import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardExplainComponent } from 'src/shared/card-explain/card-explain.component';
import { CardIconsComponent } from 'src/shared/card-icons/card-icons.component';
import { CardsComponent } from 'src/shared/cards/cards.component';
import { CarrouselComponent } from 'src/shared/carrousel/carrousel.component';
import { HeaderComponent } from './components/header/header.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

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
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tucujuprevi';
}
