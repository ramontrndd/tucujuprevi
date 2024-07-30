import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NewsItem } from 'src/shared/models/NewsItem';

@Component({
  selector: 'app-latest-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './latest-news.component.html',
  styleUrl: './latest-news.component.scss',
})
export class LatestNewsComponent {
  mainNews: NewsItem = {
    imageUrl: 'noticia-principal.png',
    altText: 'principal noticia',
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit. Id volutpat lacus laoreet non curabitur. Nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus vitae congue mauris rhoncus aenean. Ornare lectus sit amet est placerat. Tortor at risus viverra adipiscing at in tellus integer.',
  };
  sideNews: NewsItem[] = [
    {
      imageUrl: 'noticia-lateral.png',
      altText: 'noticia lateral',
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'noticia-lateral.png',
      altText: 'noticia lateral',
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
    {
      imageUrl: 'noticia-lateral.png',
      altText: 'noticia lateral',
      title: 'Lorem ipsum dolor sit amet',
      content:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    },
  ];
}
