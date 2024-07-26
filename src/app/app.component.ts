import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CarrouselComponent } from 'src/shared/carrousel/carrousel.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CarrouselComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'tucujuprevi';
}
