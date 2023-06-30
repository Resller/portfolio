import * as C from './styles'

import { useContext} from 'react';

import { Context } from '../../context/Context';

type props = {
    UrlPhoto:string,
    scaleX :string,
    heightBefore:string
    newWidth?:boolean
}

export const PhotoPerson = ({UrlPhoto, scaleX,  heightBefore, newWidth}:props)=>{ 
    const {state} = useContext(Context)
    
    return(
        <C.Container
            colorShadowPrimary = {state.theme.colorShadowPrimary}
            colorShadowSecondary = {state.theme.colorShadowSecondary}
            bgGradientPrimary = {state.theme.bgGradientPrimary}
            bgGradientSecondary = {state.theme.bgGradientSecondary}
            heightBefore = { heightBefore }
        >
            <C.AreaPhoto>
               <C.Photo src={UrlPhoto}  scaleX ={scaleX} newWidth = {newWidth}/>
            </C.AreaPhoto>   
        </C.Container>
    )
}