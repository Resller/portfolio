import { listProjectsTypes } from "../types/mainTypes";

import devFood1 from '../img/listProjects/React/dev-food1.png';
import devFood2 from '../img/listProjects/React/dev-food2.png';
import devFood3 from '../img/listProjects/React/dev-food3.png';
import devFood4 from '../img/listProjects/React/dev-food4.png';

import portfolio1 from '../img/listProjects/React/portfolio1.png';
import portfolio2 from '../img/listProjects/React/portfolio2.png';
import portfolio3 from '../img/listProjects/React/portfolio3.png';
import portfolio4 from '../img/listProjects/React/portfolio4.png';

import memoria1 from '../img/listProjects/React/memoria1.png';
import memoria2 from '../img/listProjects/React/memoria2.png';
import memoria3 from '../img/listProjects/React/memoria3.png';

import sistemaFinanceiro1 from '../img/listProjects/React/sistema-financeiro.png';
import sistemaFinanceiro2 from '../img/listProjects/React/sistema-financeiro2.png';
import sistemaFinanceiro3 from '../img/listProjects/React/sistema-financeiro3.png';

import firegallery1 from '../img/listProjects/React/Galeria de Fotos firebase 1 .png';
import firegallery2 from '../img/listProjects/React/Galeria de Fotos firebase2 .png';
import firegallery3 from '../img/listProjects/React/Galeria de Fotos firebase3 .png';

import REACT from '../svg/skills/React.svg'
import TS from '../svg/skills/TypeScript.svg'
import RRD from '../svg/skills/React_Router.svg'
import FB from '../svg/skills/Firebase.svg'
import SC from '../svg/skills/styled--components.svg'


export const listProjectsReact :listProjectsTypes[] = [
    {
        name:'DevFood',
        description:'O projeto é um site de delivery de comida desenvolvido com React e TypeScript. Ele integra uma API para fornecer informações atualizadas sobre restaurantes e cardápios. Utiliza o React Router para navegação, ContextAPI e Reducer para gerenciamento eficiente de estado, e armazena informações do cliente localmente no localStorage. O objetivo é oferecer uma experiência de usuário personalizada e conveniente ao fazer pedidos de comida online.',
        technology : [
            {svg:REACT,title:'React'},
            {svg:TS,title:'TypeScript'},
            {svg:SC,title:'Styled Component'},
            {svg:RRD,title:'React Router Dom'}
        ],
        link:'https://dev-food.netlify.app/',
        repository: 'https://github.com/Resller/dev-food',
        mainPhoto:devFood1,
        listPhotos: [devFood1,devFood2,devFood3,devFood4]
    },
    {
        name:'Portfolio',
        description:'O projeto "Portfolio" é um site de portfólio desenvolvido com React, TypeScript, React Router e ContextAPI. Com design responsivo, modo claro/escuro e navegação suave, ele proporciona uma experiência de usuário personalizada e moderna. É a solução ideal para profissionais que desejam exibir seus trabalhos de forma elegante e profissional.',
        technology : [
            {svg:REACT,title:'React'},
            {svg:TS,title:'TypeScript'},
            {svg:SC,title:'Styled Component'},
            {svg:RRD,title:'React Router Dom'}
        ],
        link:'https://portfolioresller.netlify.app',
        repository: 'https://github.com/Resller/portfolio',
        mainPhoto:portfolio1,
        listPhotos: [portfolio1,portfolio2,portfolio3,portfolio4]
    },
    {
        name:'FireGallery',
        description:'O projeto "Galeria de Fotos" é uma aplicação em React com TypeScript que permite aos usuários enviar e armazenar suas fotos no Firebase. Com uma interface moderna e responsiva, os usuários podem criar suas galerias pessoais, compartilhar momentos especiais e preservar suas lembranças de forma segura. É uma solução completa e intuitiva para gerenciar e compartilhar fotos online.',
        technology : [
            {svg:REACT,title:'React'},
            {svg:TS,title:'TypeScript'},
            {svg:SC,title:'Styled Component'},
            {svg:FB,title:'Firebase'}
        ],
        link:'https://firegallery.netlify.app',
        repository: 'https://github.com/Resller/Galeria-Fotos-Firebase',
        mainPhoto:firegallery1,
        listPhotos: [firegallery1, firegallery2, firegallery3]
    },
    {
        name:'Memória',
        description:'O projeto "Jogo da Memória" é um jogo interativo desenvolvido com React e TypeScript. Ele desafia os jogadores a encontrarem pares de cartas idênticas em um tabuleiro virado para baixo. O jogo possui um contador de acertos e tempo, proporcionando uma experiência divertida e estimulante. ',
        technology : [
            {svg:REACT,title:'React'},
            {svg:TS,title:'TypeScript'},
            {svg:SC,title:'Styled Component'}
        ],
        link:'https://resller.github.io/jogo-da-memoria-react.ts/',
        repository: 'https://github.com/Resller/jogo-da-memoria-react.ts',
        mainPhoto:memoria1,
        listPhotos: [memoria1,memoria2,memoria3]
    },
    {
        name:'Financeiro',
        description:'O projeto "Sistema Financeiro" é uma aplicação em React com TypeScript para controle de despesas e rendas mensais. Com armazenamento no localStorage, os usuários têm uma forma prática e eficiente de gerenciar suas finanças. A aplicação possui uma interface intuitiva que permite o registro, categorização e visualização de despesas e rendas. É uma solução completa e conveniente para o controle financeiro pessoal.',
        technology : [
            {svg:REACT,title:'React'},
            {svg:TS,title:'TypeScript'},
            {svg:SC,title:'Styled Component'}
        ],
        link:'https://moneymanagerdias.netlify.app',
        repository: 'https://github.com/Resller/sistema-financeiro',
        mainPhoto:sistemaFinanceiro1,
        listPhotos: [sistemaFinanceiro1,sistemaFinanceiro2,sistemaFinanceiro3]
    },
  
]