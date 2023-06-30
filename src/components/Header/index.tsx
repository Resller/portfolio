import * as C from  './styles';

import { useContext } from 'react';
import { Context } from '../../context/Context';

import { ButtonTheme } from '../ButtonTheme';

import {FaBars} from 'react-icons/fa'
import { ListHeader } from '../ListHeader';
import { Logo } from '../Logo';

type props = {
    setChangeMobile : (i:boolean)=>void
}

export const Header = ({ setChangeMobile}:props)=>{
    const {state} = useContext(Context)

    return(
        <C.Container>
            <C.Area>
                <Logo/>
                <C.Nav>
                    <ListHeader
                        direction = 'row'
                        gap='50'
                        align = 'center'
                        justify = 'end'
                    />
                </C.Nav>
                <ButtonTheme/>
            </C.Area>
            <C.AreaMobile>
                <C.ButtonMobile 
                        onClick={()=>setChangeMobile(true)}
                        colorPrimary={state.theme.bgBar}
                    >
                        <FaBars/>
                </C.ButtonMobile>
                <ButtonTheme/>
            </C.AreaMobile>
        </C.Container>
    )
}