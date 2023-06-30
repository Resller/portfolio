import * as C from './styles'

import { useContext } from 'react';
import { Context } from '../../context/Context';

type props = {
    padding :string,
    hover : boolean
    mobile : boolean
    widthMobile? :string,
    widthMobileSmall?:string,
    sizeSvg ?:string, 
    color ?:string
    width?:string,
    scale?:string,
    iconUrl ?: string,
    iconSvg? :JSX.Element
}
export const Box = ({ padding, hover , mobile, sizeSvg, color,  width, widthMobile,widthMobileSmall, scale, iconUrl ,iconSvg}:props)=>{
    const {state} = useContext(Context)
    
    return(
        <C.Areabox
            colorTextPrimary = {state.theme.colorTextPrimary}
            colorShadowPrimary = {state.theme.colorShadowPrimary}
            colorShadowSecondary = {state.theme.colorShadowSecondary}
            bgGradientPrimary = {state.theme.bgGradientPrimary}
            bgGradientSecondary = {state.theme.bgGradientSecondary}
            bgGradientBeforePrimary = {state.theme.bgGradientBeforePrimary}
            bgGradientBeforeSecondary = {state.theme.bgGradientBeforeSecondary} 
            padding = { padding }
            hover = {hover}
            mobile = { mobile }
            sizeSvg = { sizeSvg }
            color={ color }
            
        >     
            {iconUrl && width && scale &&  
            <C.Icon 
                src={iconUrl}
                width={width}
                scale= {scale}
                widthMobile = {widthMobile}
                widthMobileSmall ={widthMobileSmall}
             /> 
            }    
            {iconSvg &&
                iconSvg
            }
           
        </C.Areabox>
    )
}
