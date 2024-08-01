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
  cardsExplain = [
    {
      title: 'PLANEJAMENTO PREVIDENCIÁRIO E CÁLCULOS PARA APOSENTADORIA',
      icon: 'calculo-aposentadoria.png',
      description:
        'Facilitamos o seu futuro. Com um planejamento estratégico para a previdência, sua aposentadoria será mais segura e tranquila.',
    },
    {
      title: 'APOSENTADORIA',
      icon: 'aposentadoria.png',
      description:
        'Trabalhou toda a vida; agora, merece descansar. Facilitamos o processo para que você curta plenamente esta nova etapa.',
    },
    {
      title: 'REVISÃO DE APOSENTADORIA',
      icon: 'revisao-aposentadoria.png',
      description:
        'Recebe menos do que deveria? Analisamos seu caso e defendemos seus direitos para garantir benefícios justos.',
    },
    {
      title: 'BCP/LOAS',
      icon: 'bcp-loas.png',
      description:
        'Dificuldades financeiras? Podemos ajudar você a acessar o BPC/LOAS, garantindo um salário mínimo.',
    },
    {
      title: 'APOSENTADORIA POR INVALIDEZ',
      icon: 'aposentadoria-por-invalidez.png',
      description:
        'Se acidentes interromperam sua carreira, nós auxiliamos a garantir seu sustento por meio da aposentadoria por invalidez.',
    },
    {
      title: 'AUXÍLIO DOENÇA',
      icon: 'auxilio-doenca.png',
      description:
        'Doenças são inesperadas, mas o apoio não. Asseguramos o auxílio-doença para amparar você em tempos difíceis.',
    },
    {
      title: 'AUXÍLIO ACIDENTE',
      icon: 'auxilio-acidente.png',
      description:
        'Se um acidente reduziu sua capacidade de trabalho, você pode ter direito ao Auxílio-Acidente. Estamos aqui para ajudar.',
    },
    {
      title: 'APOSENTADORIA ESPECIAL',
      icon: 'aposentadoria-especial.png',
      description:
        'Trabalhou em condições adversas? Lutamos pelo benefício que reconhece seus anos de dedicação em ambientes rigorosos.',
    },
  ];

  cards = [
    {
      title: 'ATUAÇÃO ADMINISTRATIVA JUNTO À PREVIDÊNCIA SOCIAL',
      contentList: [
        'Análise contributiva.',
        'Planejamento Previdenciário.',
        'Requerimento de benefícios previdenciários.',
        'Justificação administrativa para prova de tempo de serviço.',
        'Pedidos de Revisão de Benefícios.',
        'Requerimento de Certidão de Tempo de Serviço.',
        'Recursos administrativos.',
      ],
    },
    {
      title: 'ATUAÇÃO JUDICIAL CONTRA A PREVIDÊNCIA SOCIAL',
      contentList: [
        'Aposentadoria por tempo de serviço.',
        'Aposentadoria por idade.',
        'Aposentadoria por invalidez.',
        'Aposentadoria especial.',
        'Revisão de valor dos benefícios.',
        'Salário-maternidade.',
        'Auxílio-doença.',
        'Auxílio-acidente.',
        'Auxílio-reclusão.',
        'Justificação judicial.',
        'Indenização por acidente de trabalho.',
      ],
    },
    {
      title: 'ATUAÇÃO NA ÁREA DE PREVIDÊNCIA PRIVADA COMPLEMENTAR',
      contentList: [
        'Consultoria às entidades patrocinadoras e participantes de fundos de pensão.',
        'Elaboração de estudos e pareceres.',
        'Acompanhamento de ações judiciais.',
      ],
    },
  ];
}
