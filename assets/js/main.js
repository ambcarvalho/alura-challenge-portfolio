const user = {
   skills: [
      {
         nome: 'Html 5',
         linkImage: 'assets/img/icons/html.png',
         alt: 'html-icon',
      },
      {
         nome: 'CSS',
         linkImage: 'assets/img/icons/css.png',
         alt: 'css-icon',
      },
      {
         nome: 'Javascript',
         linkImage: 'assets/img/icons/javascript.png',
         alt: 'javascript-icon',
      },
   ],
   hobbies: [
      {
         nome: 'Ouvir música',
         linkImage: 'assets/img/icons/fone.png',
         alt: 'fone-icon',
      },
      {
         nome: 'Jogos',
         linkImage: 'assets/img/icons/controle.png',
         alt: 'controle-icon',
      },
      {
         nome: 'Assistir séries',
         linkImage: 'assets/img/icons/tela.png',
         alt: 'tv-icon',
      },
   ],
   formacao: [
      {
         nome: 'Administração',
         data: '2017 - 2020',
         linkImage: 'assets/img/logo-unifanor.png',
         alt: 'logo-unifanor',
      },
      {
         nome: 'Desenvolvedor Full Stack',
         data: '2022 - em andamento',
         linkImage: 'assets/img/logo-alura.png',
         alt: 'logo-alura',
      },
   ],
   experiencia: [
      {
         titulo: 'Codificador de texto',
         subtitulo: 'Challenge Alura - decodificador',
         repositorio:
            'https://github.com/ambcarvalho/alura-challenge-decodificador',
         demo: 'https://ambcarvalho.github.io/alura-challenge-decodificador/',
         image: 'assets/img/codificador.jpeg',
         alt: 'Codificador e decodificador',
      },
      {
         titulo: 'Jogo da forca',
         subtitulo: 'Challenge Alura - forca',
         repositorio: 'https://github.com/ambcarvalho/alura-challenge-forca',
         demo: 'https://ambcarvalho.github.io/alura-challenge-forca/',
         image: 'assets/img/forca.jpeg',
         alt: 'Jogo da forca',
      },
   ],
};

const { skills, hobbies, formacao, experiencia } = user;

// section habilidades
const containerCards = document.querySelectorAll('div.container-cards');
const card = document.querySelectorAll('div.card');
function addCards(obj, container, card) {
   obj.map((item) => {
      const cardClone = card.cloneNode(true);
      cardClone.querySelector('img').src = item.linkImage;
      cardClone.querySelector('img').alt = item.alt;
      cardClone.querySelector('span').innerHTML = item.nome;
      container.appendChild(cardClone);
   });
   card.remove();
}
addCards(skills, containerCards[0], card[0]);
addCards(hobbies, containerCards[1], card[1]);

//section formação
const containerFormacao = document.querySelector('.container-cards-formacao');
const cardFormacao = document.querySelector('.card-formacao');
formacao.map((item) => {
   const cardClone = cardFormacao.cloneNode(true);
   cardClone.querySelector('div.logo img').src = item.linkImage;
   cardClone.querySelector('div.logo img').alt = item.alt;
   cardClone.querySelector('h4').innerHTML = item.nome;
   cardClone.querySelector('span').innerHTML = item.data;
   containerFormacao.appendChild(cardClone);
});
cardFormacao.remove();

// section experience
const cardsExperiencia = document.querySelector(
   'div.container-cards-experiencia'
);
const cardExperiencia = document.querySelector('div.card-experiencia');
experiencia.map((item) => {
   const cardClone = cardExperiencia.cloneNode(true);
   cardClone.querySelector('img').src = item.image;
   cardClone.querySelector('img').alt = item.alt;
   cardClone.querySelector('h4').innerHTML = item.titulo;
   cardClone.querySelector('span').innerHTML = item.subtitulo;
   cardClone.querySelector('div.btns .repo').href = item.repositorio;
   cardClone.querySelector('div.btns .demo').href = item.demo;
   cardsExperiencia.appendChild(cardClone);
});
cardExperiencia.remove();

const form = document.querySelector('form');

form.addEventListener('submit', () => {
   setInterval(() => {
      form.reset();
   }, 0100);
});

// atualiza ano atual
const dataSpan = document.querySelector('.data');
function atualizaHora() {
   const data = new Date();
   return data.toLocaleDateString('pt-br', {
      year: 'numeric',
   });
}
dataSpan.innerHTML = atualizaHora();
