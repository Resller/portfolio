import { useContext, useEffect, useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import * as C from './styles';
import { Context } from '../../context/Context';


export const ButtonTheme = () => {
    const {state,dispatch} = useContext(Context);
    const [darkMode, setDarkMode] = useState(true);
    
    useEffect(()=>{
        if(darkMode){
            dispatch({
                type:'CHANGE_DARK'
            })
        }else{
            dispatch({
                type:'CHANGE_LIGTH'
            })
        }
    
    },[darkMode])

  const handleClick = () => {
    setDarkMode(!darkMode);
  }

  return (
    <C.ContainerButton 
        onClick={ handleClick }
        colorTextPrimary = {state.theme.colorTextSecondary}
        colorShadowPrimary = {state.theme.colorShadowPrimary}
        colorShadowSecondary = {state.theme.colorShadowSecondary}
        bgGradientPrimary = {state.theme.bgGradientPrimary}
        bgGradientSecondary = {state.theme.bgGradientSecondary}
        bgGradientBeforePrimary = {state.theme.bgGradientBeforePrimary}
        bgGradientBeforeSecondary = {state.theme.bgGradientBeforeSecondary}
        darkMode = {state.theme.darkMode}
    >
        <FaMoon className='moon'/>
        <FaSun className='sun'/>
    </C.ContainerButton >
  )
}
