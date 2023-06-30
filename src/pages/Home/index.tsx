import * as C from  './styles';

import { useContext, useState, useEffect } from 'react';
import { Context } from '../../context/Context';
import { Link } from 'react-router-dom';


import UrlPhoto from '../../img/imgMain.png'

import { Box } from '../../components/Box'; 

import {Typewriter,Cursor } from 'react-simple-typewriter'

import { PhotoPerson } from '../../components/PhotoPerson';
import { MotionLeft } from '../../components/MotionLeft';
import { MotionRight } from '../../components/MotionRight';

import { ListIconSkillsTypes } from '../../types/mainTypes';

import { listIconSkills, listIconSocial } from '../../data/icons';

export const Home = ()=>{
    const {state} = useContext(Context)
    const [ bestSkills,setBestSkills] = useState <ListIconSkillsTypes[]>(listIconSkills)

    const descriptionTxt = ' Bem-vindo(a) ao meu universo digital, onde a criatividade e a inovação se encontram para criar algo extraordinário! Sou um desenvolvedor front-end apaixonado por transformar ideias em realidade através de interfaces web impressionantes e funcionais.'

    useEffect(()=>{
       let newList = listIconSkills.filter((item,index)=> index < 3)
       setBestSkills(newList)
    },[])

    return(
        <C.Container>
            <C.AreaContainer>
                <MotionRight> 
                    <>
                        <C.AreaInfo>
                            <C.Title 
                            colorTextPrimary = {state.theme.colorTextPrimary}
                            colorHighlight = {state.theme.colorHighlight}
                            >
                                Olá, eu sou <span>Resller Dias</span><br/>  
                                <C.Typer 
                                    colorTextPrimary = {state.theme.colorTextPrimary}
                                >
                                    <Typewriter
                                        words={['Desenvolvedor Front-end']}
                                        loop={true}
                                        typeSpeed={120}
                                        deleteSpeed={60}
                                        delaySpeed = {1500}
                                    />
                                    <Cursor
                                        cursorColor = {state.theme.colorTextPrimary}
                                    />
                                </C.Typer>
                            </C.Title>
                            <C.Description
                                colorTextSecondary = {state.theme.colorTextSecondary} 
                            >
                               {descriptionTxt}
                            </C.Description>
                        </C.AreaInfo>
                        <C.AreaInfoContact>
                            <C.AreaSocial>
                                <C.TitleSocial
                                colorTextPrimary = {state.theme.colorTextPrimary}
                                >
                                    Conecte-se comigo
                                </C.TitleSocial>
                                <C.Social>
                                   {listIconSocial.length > 0 &&
                                        listIconSocial.map((i,k)=>(
                                            <Link to={i.link} key={k} target="_blank" >
                                                <Box
                                                    padding = '16'
                                                    mobile = {false}
                                                    hover = {true}
                                                    sizeSvg  = '34'
                                                    color= {state.theme.colorTextPrimary}
                                                    iconSvg={i.iconSvg}
                                                />
                                            </Link>
                                        ))
                                   }
                                </C.Social>
                            </C.AreaSocial>
                            <C.AreaSkills>
                                <C.TitleSocial
                                    colorTextPrimary = {state.theme.colorTextPrimary}
                                >
                                    Melhores habilidades
                                </C.TitleSocial>
                                <C.Skills>
                                    {bestSkills.length > 0 && bestSkills?.length <= 3  &&
                                        bestSkills.map((i,k)=>(
                                            <Box
                                                key={k}
                                                padding = '16'
                                                mobile = {false}
                                                hover = {false}
                                                width='34'
                                                widthMobile = '24' 
                                                scale= '1.2'
                                                iconUrl={i.url}
                                            />
                                        ))
                                    }
                                </C.Skills>
                            </C.AreaSkills>
                        </C.AreaInfoContact> 
                    </>
                </MotionRight>
                <MotionLeft>
                    <PhotoPerson UrlPhoto = {UrlPhoto}  scaleX = '-1'   heightBefore = '100'/>
                </MotionLeft> 
            </C.AreaContainer>
        </C.Container>
       
    )
}