import { ListIconSkillsTypes, ListIconSocialTypes } from '../types/mainTypes'

import html5Css3Icon from '../img/html5-e-css3.jpg'
import javascriptIcon from '../img/javascript.jpg'
import typescriptIcon from '../img/typescript.jpg'
import gitIcon from '../img/git.jpg'
import reactjsIcon from '../img/reactjs.jpg'
import tailwindcssIcon from '../img/tailwindcss.jpg'

import { FaGithub, FaLinkedinIn, FaWhatsapp} from 'react-icons/fa'

export const listIconSkills:ListIconSkillsTypes[] = [
    {url:reactjsIcon},
    {url:javascriptIcon},
    {url:typescriptIcon},
    {url: html5Css3Icon},
    {url:tailwindcssIcon},
    {url:gitIcon},
]

export const listIconSocial:ListIconSocialTypes[] = [
    {link:'https://www.linkedin.com/in/resller/', iconSvg:<FaLinkedinIn/>},
    {link:'https://www.github.com/Resller', iconSvg:<FaGithub/>},
    {link:'https://api.whatsapp.com/send?phone=15997892091', iconSvg:<FaWhatsapp/>}   
]


