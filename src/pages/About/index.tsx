import * as C from './styles'

import { useContext} from 'react';
import { Context } from '../../context/Context';

import { MotionLeft } from '../../components/MotionLeft';
import { MotionRight } from '../../components/MotionRight';
import { PhotoPerson } from '../../components/PhotoPerson';

import PhotoAbout from '../../img/About.png'

import { txtAbout } from '../../data/txt';


export const About = () => {

    const {state} = useContext(Context)

  return (
        < C.Container>
            <C.AreaContainer>
               <MotionLeft>
                        <PhotoPerson
                            UrlPhoto={PhotoAbout}
                            scaleX = '1'
                            heightBefore = '100'
                        />
               </MotionLeft>
                <MotionRight>
                    <C.AreaInfo>
                        <C.AreaTitle>
                            <C.TitleBig colorTextBelow = {state.theme.colorTextBelow}>Sobre</C.TitleBig>
                            <C.TitleSmall colorHighlight = {state.theme.colorHighlight} >Sobre mim</C.TitleSmall>
                        </C.AreaTitle>
                        <C.AreaDescription>
                            {txtAbout.map((t,k)=>(
                                <C.Description key={k}  colorTextSecondary = {state.theme.colorTextSecondary}>{t.p}</C.Description>
                            ))}
                        </C.AreaDescription>
                    </C.AreaInfo>
                </MotionRight>
            </C.AreaContainer>
        </C.Container>
    )
};

