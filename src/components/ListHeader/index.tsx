import * as C from './styles'
import { NavLink} from 'react-router-dom';
import { useContext } from 'react';
import { Context } from '../../context/Context';

type props = {
    direction:string,
    gap:string,
    align:string,
    justify:string,
    setChangeMobile?:(i:boolean)=>void
}

export const ListHeader = ({direction, gap, align, justify,setChangeMobile}:props)=>{
    const {state} = useContext(Context)

    const toCheck = ()=>{
        if(typeof setChangeMobile === 'function' && setChangeMobile !== undefined){
            setChangeMobile(false)
        }
    }

    return(
        <C.Ul 
            direction={direction}
            gap = {gap}
            align = {align}
            justify = { justify}
        >
            <C.Li 
                onClick={toCheck}
                colorTextSecondary = {state.theme.colorTextSecondary}
                colorTextHover = { state.theme.colorTextHover}
                bgBar = {state.theme.bgBar}
            >
                <NavLink to='/'>Home</NavLink>
            </C.Li>
            <C.Li 
                onClick={toCheck}
                colorTextSecondary = {state.theme.colorTextSecondary}
                colorTextHover = { state.theme.colorTextHover}
                bgBar = {state.theme.bgBar}
            >
                <NavLink to='/sobre'>Sobre</NavLink>
            </C.Li>
            <C.Li 
                onClick={toCheck}
                colorTextSecondary = {state.theme.colorTextSecondary}
                colorTextHover = { state.theme.colorTextHover}
                bgBar = {state.theme.bgBar}
            >
                <NavLink to='/projetos'>Projetos</NavLink>
            </C.Li>
            <C.Li 
                onClick={toCheck}
                colorTextSecondary = {state.theme.colorTextSecondary} 
                colorTextHover = { state.theme.colorTextHover}
                bgBar = {state.theme.bgBar}
            >
                <NavLink to='/habilidades'>Habilidades</NavLink>
            </C.Li>
            <C.Li 
                onClick={toCheck}
                colorTextSecondary = {state.theme.colorTextSecondary}
                colorTextHover = { state.theme.colorTextHover}
                bgBar = {state.theme.bgBar}
            >
                <NavLink to='/contato'>Contato</NavLink>
            </C.Li>
        </C.Ul>
    )
}