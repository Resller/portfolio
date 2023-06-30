import * as C from  './styles';

import { useContext} from 'react';
import { Context } from '../../context/Context';

import { MotionLeft } from '../../components/MotionLeft';
import { MotionRight } from '../../components/MotionRight';

import { listIconSkills } from '../../data/icons';
import { Box } from '../../components/Box';

export const Skills = ()=>{

    const {state} = useContext(Context)
    return(
        <C.Container>
          <C.AreaContainer>
               <MotionLeft>
                    <C.AreaTitleSkills>
                        <C.TitleBig colorTextBelow = {state.theme.colorTextBelow}>Habilidades</C.TitleBig>
                        <C.TitleSmall colorHighlight = {state.theme.colorHighlight}>Minhas Habilidades</C.TitleSmall>
                    </C.AreaTitleSkills>
               </MotionLeft>
                <MotionRight>
                    <C.AreaSkills>
                            {listIconSkills.map((i,k)=>(
                                <Box
                                    key={k}
                                    padding = '30'
                                    mobile = {false}
                                    hover = {false}
                                    width='90'
                                    widthMobile='56'
                                    widthMobileSmall = '40'
                                    scale= '1.3'
                                    iconUrl={i.url}
                                />
                            ))}
                    </C.AreaSkills>
                </MotionRight>
            </C.AreaContainer>
        </C.Container>
    )
}