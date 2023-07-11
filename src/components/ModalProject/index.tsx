import * as C from './styles'
import { useContext} from 'react';
import { Context } from '../../context/Context';
import { listProjectsTypes } from '../../types/mainTypes';
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

import { SlideModal } from '../SlideModal';




type props = {
    project:listProjectsTypes,
    setModal:(b:boolean)=>void,
    modal:boolean
}

export const ModalProject = ({project, setModal, modal}:props)=>{
    const {state} = useContext(Context);

    const buttons = [
        {link : project.repository, svg: <FaGithub/>, title:'Repositorio '},
        {link : project.link, svg:< FaExternalLinkAlt/>, title:'Ver projeto'},
    ]
    return(
       <C.Container 
            bg={state.theme.bg}
            modal= {modal}
        >   
            <C.AreaImg>
                <SlideModal 
                    data={project.listPhotos}
                    title={project.name}
                />
            </C.AreaImg>
            <C.AreaInfo>
               <C.Title
                    colorTextPrimary = {state.theme.colorTextPrimary}
               >{project.name}</C.Title>
               <C.Description
                    colorTextSecondary = {state.theme.colorTextSecondary}
               >{project.description}</C.Description>
               <C.AreaTechnology>
                    <C.TitleTechnology colorText= {state.theme.colorTextPrimary}>Tecnologias utilizadas:</C.TitleTechnology>
                    <C.AreaSvg>
                        {project.technology.map((i,k)=>(
                            <C.Svg  key={k} src={i.svg} alt={i.title}/>
                        ))}
                    </C.AreaSvg>
               </C.AreaTechnology>
               <C.Areabutton>
                    {
                        buttons.map((i,k)=>(
                        <C.Button
                            key={k}
                            colorTextPrimary = {state.theme.colorTextSecondary}
                            colorShadowPrimary = {state.theme.colorShadowPrimary}
                            colorShadowSecondary = {state.theme.colorShadowSecondary}
                            bgGradientPrimary = {state.theme.bgGradientPrimary}
                            bgGradientSecondary = {state.theme.bgGradientSecondary}
                            bgGradientBeforePrimary = {state.theme.bgGradientBeforePrimary}
                            bgGradientBeforeSecondary = {state.theme.bgGradientBeforeSecondary}
                            colorHover={state.theme.colorButtonHover}
                        >
                            <C.Link 
                                href={i.link} 
                                target="_blank"
                                colorTextPrimary = {state.theme.colorTextSecondary}
                              
                            >
                                {i.title} 
                                {i.svg}
                            </C.Link>
                        </C.Button >
                        ))
                    }
               </C.Areabutton>
            </C.AreaInfo>
            <C.ButtonClose
                            onClick={()=>setModal(false)}
                            bgGradientPrimary = {state.theme.bgGradientPrimary}
                            bgGradientSecondary = {state.theme.bgGradientSecondary}
                            colorShadowPrimary = {state.theme.colorShadowPrimary}
                            colorShadowSecondary = {state.theme.colorShadowSecondary}
                        >
                            x
            </C.ButtonClose>
       </C.Container>
    )
}