import { CommonModule } from '@angular/common';
import {
  Component,
  EventEmitter,
  HostListener,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import { MatIconModule } from '@angular/material/icon';

import { CardExplainComponent } from '../card-explain/card-explain.component';
import { Cards } from '../models/Cards';
import { CarouselImage } from '../models/Carrousel';

@Component({
  selector: 'app-carrousel',
  standalone: true,
  imports: [CommonModule, MatIconModule, CardExplainComponent],
  templateUrl: './carrousel.component.html',
  styleUrl: './carrousel.component.scss',
})
export class CarrouselComponent implements OnInit {
  @Input() images: CarouselImage[] = [];
  @Input() cards: Cards[] = [];
  @Input() showIndicator = true;
  @Input() showNavigators = true;
  @Input() animationSpeed = 1000;
  @Input() autoPlay = false;
  @Input() autoPlayInterval = 3000;
  @Input() selectedIndex = 0;
  @Output() selectedIndexChange = new EventEmitter<number>();
  hidden = false;

  ngOnInit(): void {
    if (this.autoPlay) {
      setInterval(() => {
        this.next();
      }, this.autoPlayInterval);
    }
  }

  next() {
    const selectedIndex = (this.selectedIndex + 1) % this.cards.length;
    this.jumpToSlide(selectedIndex);
  }

  previous() {
    const selectedIndex =
      (this.selectedIndex - 1 + this.cards.length) % this.cards.length;
    this.jumpToSlide(selectedIndex);
  }

  jumpToSlide(index: number) {
    this.hidden = true;
    setTimeout(() => {
      this.selectedIndex = index;
      this.selectedIndexChange.emit(this.selectedIndex);
      this.hidden = false;
    }, this.animationSpeed);
  }

  @HostListener('document:keyup', ['$event'])
  onKeyUp(event: KeyboardEvent): void {
    if (event.key === 'ArrowRight') {
      this.next();
    }
  }

  @HostListener('document:keydown', ['$event'])
  onKeyDown(event: KeyboardEvent): void {
    if (event.key === 'ArrowLeft') {
      this.previous();
    }
  }
  handleKeyEnter(event: KeyboardEvent): void {
    if (event.key === 'Enter') {
      window.location.href = this.images[this.selectedIndex].href;
    }
  }
}
