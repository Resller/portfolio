import * as C from  './styles';

import { useContext, useState} from 'react';
import { Context } from '../../context/Context';

import { MotionLeft } from '../../components/MotionLeft';
import { MotionRight } from '../../components/MotionRight';
import { Bar } from '../../components/Bar';
import { Slide } from '../../components/Slide';
import { listProjectsTypes } from '../../types/mainTypes';
import { ModalProject } from '../../components/ModalProject';
import { listProjectsReact } from '../../data/listProjectsReact';


export const Projects = ()=>{
    const {state} = useContext(Context);
    
    const [card,setCard] = useState <'React' | 'Javascript'>('React');
    const [modal,setModal] =useState<boolean>(false)
    const [projectModal, setProjectModal] = useState<listProjectsTypes>(listProjectsReact[0])
    

    return(
        < C.Container>
            <C.AreaContainer>
               <MotionLeft>
                    <C.AreaBar>
                        <Bar
                            card = {card}
                            setCard = {setCard}
                        />
                    </C.AreaBar>
               </MotionLeft>     
               <MotionRight>
                    <Slide
                        card = {card}
                        setCard = {setCard}
                        setModal={setModal}
                        setProjectModal={setProjectModal}
                    />
               </MotionRight>              
            </C.AreaContainer>
            {modal &&
                <C.AreaModal 
                modal={modal}>
                    <ModalProject
                        project = {projectModal}
                        setModal = {setModal}
                        modal= {modal}
                    />
                </C.AreaModal>
            }
        </C.Container>
    )
}

