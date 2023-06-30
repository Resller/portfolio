import * as C from  './styles';

import { useContext} from 'react';
import { Context } from '../../context/Context';

import { MotionLeft } from '../../components/MotionLeft';
import { MotionRight } from '../../components/MotionRight';
import { MainAreabox } from '../../components/MainStyles/MainStyles';

import  photoContact  from '../../img/photo-contact.png';

import { listIconSocial } from '../../data/icons';
import { Box } from '../../components/Box';
import { Link } from 'react-router-dom';
import { PhotoPerson } from '../../components/PhotoPerson';
import { FormContact } from '../../components/FormContact';

export const Contact = ()=>{
    
    const {state} = useContext(Context);
    const desc ="Estou entusiasmado e disponível para abraçar novas oportunidades profissionais. Convido você a entrar em contato comigo por e-mail ou telefone, para explorarmos juntos as inúmeras possibilidades de colaboração e construção de projetos de sucesso."
    return(
        < C.Container>
            <C.AreaContainer>
                <MotionRight>
                    <C.AreaInfo>
                        <C.AreaPerson>
                            <C.AreaPhotoContact>
                                <PhotoPerson
                                    UrlPhoto={photoContact }
                                    scaleX = '1'
                                    heightBefore = '30'
                                    newWidth = {true}
                                />
                            </C.AreaPhotoContact>
                            <C.InfoPerson>
                                <C.Name colorTextPrimary = {state.theme.colorTextPrimary}>Resller Dias</C.Name>
                                <C.Profession colorTextSecondary={state.theme.colorTextSecondary}>Desenvolvedor Front-end</C.Profession>
                            </C.InfoPerson>
                        </C.AreaPerson>
                        <C.Description colorTextSecondary={state.theme.colorTextSecondary}>{desc}</C.Description>
                        <C.Email 
                            colorTextPrimary = {state.theme.colorTextPrimary} 
                            colorTextSecondary={state.theme.colorTextSecondary}
                        > 
                            <span>Email: </span>   
                            <Link to='mailto:resller.dev@gmail.com' target="_blank">
                                resller.dev@gmail.com
                            </Link>  
                        </C.Email>
                        <C.TitleIcons colorTextPrimary = {state.theme.colorTextPrimary} >Conecte-se comigo</C.TitleIcons>
                        <C.AreaIcons>
                            {listIconSocial.length > 0 &&
                                listIconSocial.map((i,k)=>(
                                    <Link to={i.link} key={k} target="_blank" >
                                        <Box
                                            padding = '16'
                                            mobile = {true}
                                            hover = {true}
                                            sizeSvg  = '28'
                                            color= {state.theme.colorTextPrimary}
                                            iconSvg={i.iconSvg}
                                        />
                                    </Link>
                                ))
                            }
                        </C.AreaIcons>
                    </C.AreaInfo>
                </MotionRight>
                <MotionLeft>
                    <>
                        <C.AreaTitle>
                            <C.TitleSmall colorHighlight = {state.theme.colorHighlight}>Contate-me</C.TitleSmall>
                        </C.AreaTitle>
                        <MainAreabox
                            colorShadowPrimary = {state.theme.colorShadowPrimary}
                            colorShadowSecondary = {state.theme.colorShadowSecondary}
                            bgGradientPrimary = {state.theme.bgGradientPrimary}
                            bgGradientSecondary = {state.theme.bgGradientSecondary}
                            bgGradientBeforePrimary = {state.theme.bgGradientBeforePrimary}
                            bgGradientBeforeSecondary = {state.theme.bgGradientBeforeSecondary} 
                            padding = '20'
                            hover = {false}
                        >
                            <FormContact/>
                        </MainAreabox> 
                    </>
                </MotionLeft>
            </C.AreaContainer>
        </C.Container>
    )
}