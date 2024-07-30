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
    title:
      'Pente-fino do INSS: Atualize seus dados e evite o cancelamento do seu benefício; saiba como',
    content:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sit amet purus gravida quis blandit. Id volutpat lacus laoreet non curabitur. Nunc scelerisque viverra mauris in aliquam sem fringilla. Cursus vitae congue mauris rhoncus aenean. Ornare lectus sit amet est placerat. Tortor at risus viverra adipiscing at in tellus integer.',
    href: '/noticia/1',
  };
  sideNews: NewsItem[] = [
    {
      title: 'Juiz estadual nega vínculo de emprego entre motorista e a Uber',
      content:
        'A juíza Clarissa Rodrigues Alves, da 12ª Vara Cível de São Paulo, negou o pedido de vínculo empregatício de um motorista contra a Uber.',
      imageUrl: 'uber-vinculo.jpg',
      altText: 'noticia lateral',
      href: '',
    },
    {
      title:
        'Beneficiários do BPC serão recadastrados e regras se tornarão mais rígidas.',
      content:
        'O governo federal pretende recadastrar os beneficiários do BPC no mês de setembro e reavaliar as condições de quem o recebe.',
      imageUrl: 'previdencia.jpg',
      altText: 'noticia lateral',
      href: '',
    },
    {
      title:
        'Governo lança programa de passagens a R$ 200 para aposentados do INSS',
      content:
        'Com atraso, o governo federal lançou nesta quarta a primeira fase do Voa Brasil, programa de passagens a R$ 200 para aposentados do INSS.',
      imageUrl: 'avião.jpg',
      altText: 'noticia lateral',
      href: '',
    },
  ];
}
