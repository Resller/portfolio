import { listProjectsTypes } from "../types/mainTypes";

import medieval1 from '../img/listProjects/JS/medieval1.png';
import medieval2 from '../img/listProjects/JS/medieval2.png';
import medieval3 from '../img/listProjects/JS/medieval3.png';

import jokenPo1 from '../img/listProjects/JS/jokenpo1.png';
import jokenPo2 from '../img/listProjects/JS/jokenpo2.png';
import jokenPo3 from '../img/listProjects/JS/jokenpo3.png';
import jokenPo4 from '../img/listProjects/JS/jokenpo4.png';

import dragDrop1 from '../img/listProjects/JS/drag-and-drop.png';
import dragDrop2 from '../img/listProjects/JS/drag-and-drop2.png';
import dragDrop3 from '../img/listProjects/JS/drag-and-drop3.png';

import forca1 from '../img/listProjects/JS/forca1.png';
import forca2 from '../img/listProjects/JS/forca2.png';
import forca3 from '../img/listProjects/JS/forca3.png';
import forca4 from '../img/listProjects/JS/forca4.png';

import quiz1 from '../img/listProjects/JS/quiz1.png';
import quiz2 from '../img/listProjects/JS/quiz2.png';
import quiz3 from '../img/listProjects/JS/quiz3.png';

import  HTML5  from '../svg/skills/HTML5.svg';
import  CSS3 from '../svg/skills/CSS3.svg';
import  JavaScript  from '../svg/skills/JavaScript.svg';


export const listProjectsJs :listProjectsTypes[] = [
    {
        name:'Medieval',
        description:'O projeto "Batalha Medieval" é um jogo desenvolvido em JavaScript puro, utilizando programação orientada a objetos (OOP). O objetivo do jogo é permitir que os jogadores escolham um personagem entre as opções de mago, príncipe, arqueira e bárbaro, e lutem um contra o outro em uma batalha emocionante. Cada personagem possui habilidades únicas, adicionando diversidade e estratégia ao jogo.',
        technology : [ 
            {svg: HTML5,title:'HTML5'},
            {svg:CSS3,title:',CSS3'},
            {svg: JavaScript,title:'JavaScript'}
        ],
        link:'https://batalha-medieval.netlify.app',
        repository: 'https://github.com/Resller/Batalha-Medieval',
        mainPhoto : medieval1,
        listPhotos: [medieval1,medieval2,medieval3]
    },
    {
        name:'JokenPo',
        description:'O projeto JokenPo é um jogo em JavaScript que permite que dois jogadores joguem entre si em partidas de Pedra, Papel e Tesoura. Com uma interface intuitiva, os jogadores fazem suas escolhas e a lógica do jogo determina o vencedor. O projeto oferece animações, placar de pontuação e uma jogabilidade simples e divertida. É uma oportunidade de desfrutar de emocionantes disputas multiplayer localmente.',
        technology : [ 
            {svg: HTML5,title:'HTML5'},
            {svg:CSS3,title:',CSS3'},
            {svg: JavaScript,title:'JavaScript'}
        ],
        link:'https://resller.github.io/JO-KEN-PO/',
        repository: 'https://github.com/Resller/JO-KEN-PO',
        mainPhoto : jokenPo1,
        listPhotos: [jokenPo1,jokenPo2,jokenPo3,jokenPo4]
    },
    {
        name:'DragDrop',
        description:'O projeto possibilita a organização de despesas mensais utilizando a funcionalidade de arrastar e soltar. Com as categorias "Despesas", "Despesas Atrasadas" e "Despesas Pagas", os usuários podem gerenciar facilmente suas despesas de forma interativa. O projeto é desenvolvido em JavaScript e oferece uma experiência intuitiva para organizar e controlar as despesas mensais.',
        technology : [ 
            {svg: HTML5,title:'HTML5'},
            {svg:CSS3,title:',CSS3'},
            {svg: JavaScript,title:'JavaScript'}
        ],
        link:'https://resller.github.io/drag-and-drop/',
        repository: 'https://github.com/Resller/drag-and-drop',
        mainPhoto : dragDrop1,
        listPhotos: [dragDrop1,dragDrop2,dragDrop3]
    },
    {
        name:'Forca',
        description:'O projeto é um jogo da forca desenvolvido em JavaScript, permitindo aos jogadores adivinharem palavras ocultas. Além disso, oferece a funcionalidade de cadastrar novas palavras no jogo. Com uma interface interativa, o projeto proporciona diversão e desafio aos jogadores enquanto testam suas habilidades de adivinhação.',
        technology : [ 
            {svg: HTML5,title:'HTML5'},
            {svg:CSS3,title:',CSS3'},
            {svg: JavaScript,title:'JavaScript'}
        ],
        link:'https://resller.github.io/Jogo-da-Forca/',
        repository: 'https://github.com/Resller/Jogo-da-Forca',
        mainPhoto : forca1,
        listPhotos: [forca1,forca2,forca3,forca4]
    },
    {
        name:'Quiz',
        description:'O projeto é um Quiz desenvolvido em JavaScript puro. Os jogadores podem testar seus conhecimentos respondendo a perguntas sobre JavaScript. Cada pergunta é acompanhada por um contador de tempo que desafia os jogadores a responderem dentro de um limite de tempo. ',
        technology : [ 
            {svg: HTML5,title:'HTML5'},
            {svg:CSS3,title:',CSS3'},
            {svg: JavaScript,title:'JavaScript'}
        ],
        link:'https://resller.github.io/QUIZ-API/',
        repository: 'https://github.com/Resller/QUIZ-API',
        mainPhoto : quiz1,
        listPhotos: [quiz1,quiz2,quiz3]
    }
]