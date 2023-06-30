import * as C from  './styles';

import { useContext} from 'react';
import { Context } from '../../context/Context';

import { MotionLeft } from '../../components/MotionLeft';
import { MotionRight } from '../../components/MotionRight';

export const Projects = ()=>{
    const {state} = useContext(Context);
    return(
        < C.Container>
            <C.AreaContainer>
               <MotionLeft>
                      <div>...</div>
               </MotionLeft>
                <MotionRight>
                    <div>...</div>
                </MotionRight>
            </C.AreaContainer>
        </C.Container>
    )
}