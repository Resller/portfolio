import { Context } from '../../context/Context'
import { useContext } from 'react';


import * as C from './styles'
import { listProjectsTypes } from '../../types/mainTypes';
import { AiOutlineArrowUp } from "react-icons/ai";

type props = {
    data : listProjectsTypes
}

export const CardProject = ({data}:props)=>{
    const {state} = useContext(Context)
    return(

            <C.Container
                colorTextPrimary = {state.theme.colorTextPrimary}
                colorShadowPrimary = {state.theme.colorShadowPrimary}
                colorShadowSecondary = {state.theme.colorShadowSecondary}
                bgGradientPrimary = {state.theme.bgGradientPrimary}
                bgGradientSecondary = {state.theme.bgGradientSecondary}
                bgGradientBeforePrimary = {state.theme.bgGradientBeforePrimary}
                bgGradientBeforeSecondary = {state.theme.bgGradientBeforeSecondary} 
            >
            <C.AreaCardImg>
                <C.CardImg src={data.listPhotos[0]}/>
            </C.AreaCardImg>    
            </C.Container>
    )
}